var options = [
	 {
	 	selector: '#scrolltest', offset: 50, callback: function (el) {
	 		Materialize.toast("test", 5000);
	 	}
	 },
];


$(document).ready(function () {
	//window.setInterval(flashCursor, 600);
	Materialize.scrollFire(options);
    var i = 0;
    window.setInterval(function(){createTitle(i); i++;}, 200);
});
