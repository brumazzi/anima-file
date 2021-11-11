// configure filter button

window.addEventListener("load", function () {
    addAfterRenderAction(function (container) {
        var buttons = container.querySelectorAll('.findButton');
        for (var i = 0; i < buttons.length; i += 1) {
            buttons[i].addEventListener('click', function (evt) {
                var input = elementFindParent(evt.target, '.findBox').querySelector('input');
                requestPage('get', CURRENT_PAGE()+'?search=true&'+input.getAttribute("name")+'='+input.value, {});
            });
            elementFindParent(buttons[i], '.findBox').querySelector('input').addEventListener('keydown', function(evt){
                if (evt.key == "Enter"){
                    elementFindParent(evt.target, '.findBox').querySelector('button').click();
                }
            });
        }
    });

    addAfterRenderAction(function (container){
        var anchors = container.querySelectorAll('a')
        for (var i = 0; i < anchors.length; i += 1) {
            anchors[i].addEventListener('click', function (evt){
                var allArchors = document.querySelectorAll('a');
                for(var j=0; j<allArchors.length; j+=1){
                    allArchors[j].classList.remove('active');
                }
                this.classList.add('active');
                var target = this.getFocusElement();
                if(target){
                    var showElements = elementFindParent(this, this.getAttribute('roof')).querySelectorAll('.show');
                    for(var j=0; j<showElements.length; j+=1){
                        showElements[j].classList.remove('show');
                        showElements[j].classList.remove('active');
                    }
                    target.classList.add('show');
                    target.classList.add('active');
                }
            });
        }
    });
});

