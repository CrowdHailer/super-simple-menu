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
					recordString = "End of the line";
					break;
			}
			myApp.output.innerHTML += recordString + "<br>";
        });
		this.output = document.getElementById("output");
    }
	
};
$(document).ready(function () {
    myApp.init();
});