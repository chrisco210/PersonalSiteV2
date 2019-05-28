var options = [
	 {
	 	selector: '#scrolltest', offset: 50, callback: function (el) {
	 		Materialize.toast("test", 5000);
	 	}
	 },
];

var text = 'Chris Rachlinski';
var writeTimeout = 150;
var writer;

var inputElement;

$(document).ready(function () {
	Materialize.scrollFire(options);
    $('.parallax').parallax();
    $('.slider').slider();
    inputElement = $('#titleTextInput')[0];

	writer = new TitleWriter(text);

	var intervalId;

	intervalId = window.setInterval(function() {
		inputElement.value += writer.getNextSegment();
		if(writer.done) {
			clearInterval(intervalId);
		}
	}, writeTimeout);
});
