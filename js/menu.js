var myApp = {
    init: function () {
        $('ul li a').click(function () {
            $(this).toggleClass('active');
			var recordString = "";
			switch(this.id) {
				case "suburban-toggle":
					recordString = "Just Suburbaned it up";
					break;
				case "zones-toggle":
					recordString = "this is the second button";
					break;
				case "wheelchair-toggle":
					recordString = "All about the wheelchairs";
					break;
				case "cycle-toggle":
					recordString = "";
					myApp.output.innerHTML = "";
					alert("Cleared click record");
					break;
			}
			myApp.output.innerHTML += recordString + "<br>";
        });
		this.output = document.getElementById("output");
		this.setToPageHeight(this.output);
    },
	setToPageHeight: function (jqItem) {
		var pageHeight = $(window).height();
		var topOffset = $(jqItem).offset().top;
		var itemHeight = pageHeight - topOffset;
		$(jqItem).css({"max-height": itemHeight + 'px' });
	}
	
};
$(document).ready(function () {
    myApp.init();
});