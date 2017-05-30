var title = ['Ch', 'r', 'i', 's', ' ', 'Ra', 'c', 'h', 'li', 'n', 'ski'];
var showCursor = false;

function flashCursor()		//Function to flash any cursors on the screen
{
	$(".cursor").toggleClass("hide");
}
function createTitle(j)
{
    $("#name").append(title[j]);
    if(showCursor)
        $("#cursor").toggleClass("hide");
    showCursor = !showCursor;
}