// JavaScript Document
function setStyle(obj,attr){
       if(obj.currentStyle){
	         return obj.currentStyle[attr];
	   }else{
	         return getComputedStyle(obj,false)[attr];  
	   }
}
var timer=null;
function showmove(obj,json,fn){
     clearInterval(obj.timer);
	  //开启定时器动画
	 obj.timer=setInterval(function(){
		var bstop=true;
        for(var attr in json){
	        //取透明度值
			var Cur=0;
			if(attr=='opacity'){
		       Cur=parseInt(parseFloat(setStyle(obj,attr))*100);
			}else{
			   Cur=parseInt(setStyle(obj,attr))
			}
			var speed=(json[attr]-Cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//停止动画
			if(Cur != json[attr]){
		        bstop=false;
			}
			if(attr=="opacity"){
			     obj.style.filter="alpha(opacity:"+(Cur+speed)+")";
				 obj.style.opacity=(Cur+speed)/100;
			}else{
			     obj.style[attr]=Cur+speed+"px";
			}
			if(bstop){
			    clearInterval(obj.timer);
			    if(fn){
				   fn();
				}
			}
			
	   }
	 },30)

}
