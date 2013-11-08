var myApp = {
    init: function () {
        $('ul li a').click(function () {
            $(this).toggleClass('active');
        });
    }
};
$(document).ready(function () {
    myApp.init();
});