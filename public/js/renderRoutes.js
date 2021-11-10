var REQUEST_COUNT = 0;
var CURRENT_PAGE = function(){return localStorage.getItem("currentPage");}
var afterRenderActions = new Array();

function requestShowSpinner() {
    if (REQUEST_COUNT != 0) document.body.setAttribute('data-spinner', 'true');
    else document.body.setAttribute('data-spinner', 'false');
}

function elementFindParent(container, parentClass){
    do{
        container = container.parentNode
        if(container.getAttribute('class').match(parentClass.replace('.',''))) return container;
    }while(container);
    return null;
}

function requestRender(requestData) {
    var render = new DOMParser();
    var scriptList = new Array();
    try {
        render = render.parseFromString(requestData, 'text/html').body.children[0];
        if (render.nodeName.toUpperCase() == "RENDER") {
            var contents = render.getElementsByTagName('content');
            for (var x = 0; x < contents.length; x += 1) {
                var dest = contents[x].getAttribute('dest');
                if (dest.length > 0) {
                    var domDestinies = document.querySelectorAll(dest);
                    for (var i = 0; i < domDestinies.length; i += 1) {
                        domDestinies[i].innerHTML = contents[x].innerHTML;
                        var anchors = domDestinies[i].getElementsByTagName('a');
                        var forms = domDestinies[i].getElementsByTagName('form');
                        var listeners = render.getElementsByTagName('listener');
                        for (var j = 0; j < anchors.length; j += 1) anchorAddRedirectEvent(anchors[j]);
                        for (var j = 0; j < forms.length; j += 1) formAddSubmitEvent(forms[j]);
                        for (var j = 0; j < listeners.length; j += 1) elementAddEventListener(listeners[j], domDestinies[i]);
                        applyJSFunction(domDestinies[i]);
                    }
                } else {
                    throw ("Render destiny not found");
                }
            }

            var scripts = render.getElementsByTagName('script');
            for (var i = 0; i < scripts.length; i += 1) scriptList.push(scripts[i]);
        } else {
            throw ("Invalid request");
        }
    } catch (error) {
        console.log(error);
        return false;
    }
    for (var i = 0; i < scriptList.length; i += 1) scriptCall(scriptList[i]);
    return true;
}

function requestPage(method, url, data = {}) {
    var httpRequest;
    method = method.toUpperCase();
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpRequest = new ActiveXObject();
    }
    httpRequest.addEventListener("load", function (evt) {
        REQUEST_COUNT -= 1; requestShowSpinner();
    }, false);
    httpRequest.addEventListener("abort", function (evt) {
        REQUEST_COUNT -= 1; requestShowSpinner(); alert("Aborted!");
    }, false);

    httpRequest.onreadystatechange = function (request) {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200 && requestRender(httpRequest.responseText)){
                if (method == "GET") localStorage.setItem("currentPage", url.replace(/\?.+/,''));
            }
        }
    }

    REQUEST_COUNT += 1;
    requestShowSpinner();

    httpRequest.open(method, url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(data));

    // if (method == "GET") {
    //     localStorage.setItem('lastURL', JSON.stringify({
    //         method: method,
    //         url: url
    //     }));
    // }

    var interval = setInterval(function () {
        httpRequest.abort();
        clearInterval(interval);
    }, 20000);
}

function anchorFindUp(element) {
    if (element.nodeName.toUpperCase() != 'A') {
        return anchorFindUp(element.parentElement);
    }
    return element;
}

function anchorAddRedirectEvent(element) {
    element.addEventListener("click", function (evt) {
        evt.preventDefault();
        var element = anchorFindUp(evt.target);
        var method = element.getAttribute("method") || "GET";
        requestPage(method, element.getAttribute('href'));
    });
}

function formAddSubmitEvent(element) {
    element.addEventListener("submit", function (evt) {
        evt.preventDefault();
        var form = evt.target;

        if (!form.checkValidity()) return false;

        var formData = new FormData(form);
        var formDataJson = {};

        formData.forEach(function (value, key) {
            if (key.match(/\./)) {
                keyPart = key.split('.');
                formDataJsonString = "formDataJson";
                for (var i = 0; i < keyPart.length; i += 1) {
                    formDataJsonString += '.' + keyPart[i];
                    eval(formDataJsonString + ' ||= {}');
                }
                if (value.slice(0, 1) === '[' && value.slice(-1) === ']') {
                    eval('if(!Array.isArray(' + formDataJsonString + ')) ' + formDataJsonString + ' = []');
                    eval(formDataJsonString + '.push("' + value.slice(1, -1) + '")');
                } else
                    eval(formDataJsonString + ' = "' + value + '"');
            } else {
                if (value.slice(0, 1) === '[' && value.slice(-1) === ']') {
                    if (!Array.isArray(formDataJson[key])) formDataJson[key] = [];
                    formDataJson[key].push(value.slice(1, -1));
                } else
                    formDataJson[key] = value;
            }
        });

        requestPage(form.getAttribute('method'), form.getAttribute('action'), formDataJson);
    });
}

function scriptCall(scriptTag) {
    var inlineCommand = scriptTag.getAttribute('command');
    eval(inlineCommand);
}

function elementAddEventListener(eventTag, targetContent) {
    var elements = targetContent.querySelectorAll(eventTag.getAttribute('target'));
    for (var i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener(eventTag.getAttribute('action'), eval(eventTag.getAttribute('callback')));
    }
}

alert = function (args) { swal.fire(args); }
function toast(args) {
    var mixin = swal.mixin({
        toast: true,
        position: 'true',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
        }
    });
    mixin.fire(args);
}

function addAfterRenderAction(callback){
    afterRenderActions.push(callback);
}

function applyJSFunction(content){
    uploadFileInit(content);
    for(var i=0; i< afterRenderActions.length; i+=1){
        afterRenderActions[i](content);
    }
    // var tables = content.querySelectorAll('table');
    // for(var i=0; i<tables.length; i+=1){
    //     new JSTable(tables[i]);
    // }
    // var anchors = content.getElementsByTagName('a');
    // for (var j = 0; j < anchors.length; j += 1) anchorAddRedirectEvent(anchors[j]);
}

window.addEventListener("load", function () {
    var anchors = document.getElementsByTagName('a');
    var forms = document.getElementsByTagName('form');
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < anchors.length; i += 1) anchorAddRedirectEvent(anchors[i]);
    for (var i = 0; i < forms.length; i += 1) formAddSubmitEvent(forms[i]);
    for (var i = 0; i < scripts.length; i += 1) scriptCall(scripts[i]);

    // var lastURL = JSON.parse(localStorage.getItem('lastURL'));
    // if(lastURL)
    //     requestPage(lastURL.method, lastURL.url);
    // else{
    var render = document.getElementsByName("render")[0];
    requestPage(render.getAttribute('method'), render.getAttribute('url'));
    // }

});