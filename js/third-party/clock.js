function getRTime() {
	var EndTime = new Date('2020/01/25 00:00:00');
	var NowTime = new Date();
	var t = EndTime.getTime() - NowTime.getTime();
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	var m = Math.floor(t / 1000 / 60 % 60);
	var s = Math.floor(t / 1000 % 60);
	document.getElementById("t_d").innerHTML = d + " 天";
	document.getElementById("t_h").innerHTML = h + " 时";
	document.getElementById("t_m").innerHTML = m + " 分";
	document.getElementById("t_s").innerHTML = s + " 秒";
	if (d < -1) {
		for (var i = 0; i < document.getElementsByClassName("card_clock").length; i++) {
			document.getElementsByClassName("card_clock")[i].style.display = "none";
		}
		clearInterval(getRTime)
	}	
}
setInterval(getRTime, 1000);
