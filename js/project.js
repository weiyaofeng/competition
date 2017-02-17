var ologin = document.getElementById("login");
var ologin_in = document.getElementById("login_in");
var oshade = document.getElementById("shade");
var aul = ologin_in.getElementsByTagName("ul")[0];
var ali = aul.getElementsByTagName("li");
var adiv = document.querySelectorAll("#login_in>div");
ologin.onclick = function(){
	oshade.style.display = "block";
	oshade.style.width = getInner().width + "px";
	oshade.style.height = getInner().height + "px";
	ologin_in.style.display = "block";
	ologin_in.style.top = center(ologin_in,"height").top + "px";
	ologin_in.style.left = center(ologin_in,"width").left + "px";
}
function getInner(){
	if(window.innerWidth){
		return {
			width : window.innerWidth,
			height : window.innerHeight
		};
	}else{
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		};
	};
};
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	};	
};
function center(obj,attr){
	return {
		left : (getInner().width - parseInt(getStyle(obj,attr))) / 2,
		top : (getInner().height - parseInt(getStyle(obj,attr))) / 2
	};
};
ologin_in.onmousedown = function(e){
	var e = event || window.event;
	var _this = this;
	var diffX = e.clientX - this.offsetLeft;
	var diffY = e.clientY - this.offsetTop;
	document.onmousemove = function(e){
		var e = event || window.event;
		var left = e.clientX - diffX;
		var top = e.clientY - diffY;
		var Left = getInner().width - _this.offsetWidth;
		var Top = getInner().height - _this.offsetHeight;
		if(left <= 0){
			left = 0;
		}else if(left >= Left){
			left = Left;
		};
		if(top <= 0){
			top = 0;
		}else if(top >= Top){
			top = Top;
		}
		_this.style.left = left + "px";
		_this.style.top = top + "px";
	};
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}
for(var i = 0; i < ali.length; i++){
	ali[i].index = i;
	ali[i].onclick = function(){
		for(var i = 0; i < ali.length; i++){
			ali[i].className = "";
			adiv[i].style.display = "none";
		};
		this.className = "active";
		adiv[this.index].style.display = "block";
	}
}