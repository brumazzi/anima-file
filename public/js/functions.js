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
});