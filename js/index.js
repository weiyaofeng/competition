/*登录显示*/
$("#login").click(function(){
	$("#shade").css("display","block");
});
/*拖拽*/
$("#login_in").mousedown(function(e){
	//console.log($(document))
	var e = e || window.event;
	var _this = this;
	var ml = parseInt($(this).css("marginLeft"));//获取它的marginLeft
	var mt = parseInt($(this).css("marginTop"));//获取它的marginTop
	var diffX = e.clientX - this.offsetLeft + ml;//获取鼠标到登陆框左边的距离(由于在css中给登录框设置了marginleft,这里会出现小小的bug)
	var diffY = e.clientY - this.offsetTop + mt;
	$(document).mousemove(function(e){
		var e = e || window.event;
		var left = e.clientX - diffX;
		var top = e.clientY - diffY;
		var width = document.documentElement.clientWidth || document.body.clientWidth;
		var height = document.documentElement.clientHeight || document.body.clientHeight;
		/*不让登录框出body界面*/
		if(left <= 0 - ml){
			left = 0 - ml;
		}else if(left >= width - _this.offsetWidth - ml){
			left = width - _this.offsetWidth - ml;
		};
		if(top <= 0 - mt){
			top = 0 - mt;
		}else if(top >= height - _this.offsetHeight - mt){
			top = height - _this.offsetHeight - mt;		
		};
		if(_this.style.left != 485){
			_this.style.left = left + "px";
		}
		if(_this.style.top != 90){
			_this.style.top = top + "px";
		}
	});
	$(document).mouseup(function(){
		/*解绑事件*/
		$(this).unbind("mousemove");
		$(this).unbind("mouseup");
	});
});

/*切换*/
$("#login_in>ul>li").click(function(){
	$(this).addClass("active").siblings(".active").removeClass("active");
	var _this = $($(this).parent().siblings(".active"));
	_this.removeClass("active");
	_this.siblings().addClass("active");
});



/*share*/
$("#share .share_footer span").mouseover(function(){
	$("#share").stop().animate({left:30 + "px"});
});
$("#share").mouseover(function(){
	$("#share").stop().animate({left:0});
});
$("#share").mouseout(function(){
	$(this).stop().animate({left:-211 + "px"});
});


window.onscroll = function(){
	var oshare = document.getElementById("share");
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var height = document.documentElement.clientHeight || document.body.clentHeight;
	var top = parseInt(scrollTop + (height - oshare.offsetHeight) / 2);
	showMove("share",top);


};
var timer = null;
function showMove(id,target){
	var oid = document.getElementById(id);
	clearInterval(timer);
	timer = setInterval(function(){
		var speed = (target - oid.offsetTop) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(target == oid.offsetTop){
			clearInterval(timer);
		}else{
			oid.style.top = oid.offsetTop + speed + "px";
		}
	},30);
};

function floor(id,target){
	var ali = document.querySelectAll("#top_box>ul>li");
	var frag = document.createDocumentFragment();
	var oul = document.createElement("ul");
	frag.appendChild(oul);
	for(var i = 0; i < ali.length; i++){
		var oli = document.createElement("li");
		oul.appendChild(oli);
	};

};
/*切换*/
$("#interview_topic>nav>ul>li>a").click(function(e){
	e.preventDefault();
	var cls = $(this).attr("href");
	$(this).parent().addClass("actives").siblings(".actives").removeClass("actives");
	$(this).parent().parent().parent().siblings(cls).css("display","block").siblings("div").css("display","none");
});
$("#experience>nav>ul>li>a").click(function(e){
	e.preventDefault();
	var cls = $(this).attr("href");
	$(this).parent().addClass("actives").siblings(".actives").removeClass("actives");
	$(this).parent().parent().parent().siblings(cls).css("display","block").siblings("div").css("display","none");
});
$("#personal_works>nav>ul>li>a").click(function(e){
	e.preventDefault();
	var cls = $(this).attr("href");
	$(this).parent().addClass("actives").siblings(".actives").removeClass("actives");
	$(this).parent().parent().parent().siblings(cls).css("display","block").siblings("div").css("display","none");
});
$("#Resume>nav>ul>li>a").click(function(e){
	e.preventDefault();
	var cls = $(this).attr("href");
	$(this).parent().addClass("actives").siblings(".actives").removeClass("actives");
	$(this).parent().parent().parent().siblings(cls).css("display","block").siblings("div").css("display","none");
});
$("#resume_type>nav>ul>li>a").click(function(e){
	e.preventDefault();
	var cls = $(this).attr("href");
	$(this).parent().addClass("actives").siblings(".actives").removeClass("actives");
	$(this).parent().parent().parent().siblings(cls).css("display","block").siblings("div").css("display","none");
});
/*login ajax*/
/*var osubmit = document.getElementById("submit");
var ouname = document.getElementById("uname1");
var opwd = document.getElementById("upwd1");
osubmit.onclick = function(){
	var uname = ouname.value;
	var upwd = oupwd.value
	if(!uname || !upwd){
		return;
	};
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	};
	xhr.onsreadytatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				doResponse(xhr.responseText);
			}
		}
	};
	xhr.open("post","../login.php",true);
	xhr.send(null);
}
function doResponse(txt){
	var ospan = document.getElementById("user_name");
	var oshade = document.getElementById("shade");
	if(){
		oshade.style.display = "none";
		ospan.innerHTML = uname + "欢迎您回来";
	}else{
		console.log("用户或密码错误");
	}
}*/

/*login jQuery ajax*/
$("#submit1").click(function(){
	var result = $("#login_form1").serialize();
	console.log(result);
	$.post("data/login.php",result,function(data){
		console.log(data);
		if(data.status < 0){
			$("#user_msg").html(data.msg);
			$("[name = 'uname1']").val("");
			$("[name = 'upwd1']").val("");
		}else{
			$("#user_msg").html(data.msg + ",欢迎您回来");
			$("#shade").fadeOut();
			$("#login").html("注销");
			$("#user_msg").attr("title",data.msg + ",欢迎您回来").css("cursor","pointer");
		};
	});
});

// 楼层
var oNav = $('#LoutiNav');//导航壳
		   var aNav = oNav.find('li');//导航
		   var aDiv = $('#Floor .louceng');//楼层
		   var oTop = $('#goTop');
			//回到顶部
			$(window).scroll(function(){
				 var winH = $(window).height();//可视窗口高度
				 var iTop = $(window).scrollTop();//鼠标滚动的距离
				 
				 if(iTop>=$('#header').height()){
				 	oNav.fadeIn();
				 	oTop.fadeIn();
				 //鼠标滑动式改变	
				 aDiv.each(function(){
				 	if(winH+iTop - $(this).offset().top>winH/2){
				 		aNav.removeClass('active');
				 		aNav.eq($(this).index()).addClass('active');
				 	}
				 })
				 }else{
				 	oNav.fadeOut();
				 	oTop.fadeOut();
				 }
			})
			//点击top回到顶部
			oTop.click(function(){
				$('body,html').animate({"scrollTop":0},500)
			})
			//点击回到当前楼层
			aNav.click(function(){
				var t = aDiv.eq($(this).index()).offset().top;
				$('body,html').animate({"scrollTop":t},500);
				$(this).addClass('active').siblings().removeClass('active');
			});
$(window).blur(function(){
	document.title = "憋走啊,快回来,喵星人,需要你的支持";
})
$(window).focus(function(){
	document.title = "WEB1602A";
});