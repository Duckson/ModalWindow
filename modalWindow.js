$(document).ready(function () {
    var btnClose = $('#spanCloseModal'),
        btnOpen = $('#btnOpenModal'),
        modalBG = $('#divBGModal');

    btnOpen.click(function () {
        modalBG.css('display', 'block')
    });

    btnClose.click(function () {
        modalBG.css('display', 'none')
    });
    
    $(window).click(function (event) {
        if(event.target == modalBG[0]){
            modalBG.css('display', 'none')
        }
    })
});
