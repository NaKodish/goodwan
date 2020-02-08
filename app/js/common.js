$(function() {
    document.ondragstart = test;
    //запрет на перетаскивание 
    document.onselectstart = test;
    //запрет на выделение элементов страницы
    document.oncontextmenu = test;
    //запрет на выведение контекстного меню
    function test() {
        return false
    }
    document.onkeydown = function(e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }
    $('#main-nav').hcOffcanvasNav({
        maxWidth: 5000,
        insertClose: true,
        labelClose: '<img src="img/exit.png" alt=""> Выход',
        insertBack: false,
        pushContent: true,
        side: 'left',
        levelOpen: 'expand',
        levelSpacing: 25,
        disableBody: false,
        pushContent: '#main'
    });
    $('a[href="#openModalExecutor"]').click(function(e) {
        e.preventDefault();
        $($(this).attr('href')).addClass('show');
    });
    $('#openModalExecutor').on('click', '.close', function(e) {
        e.preventDefault();
        $(e.delegateTarget).removeClass('show');
    });
});