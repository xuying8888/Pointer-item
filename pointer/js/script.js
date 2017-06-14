;$(document).ready(function(){
//首页
	//点击差的时候 白框删除
	$(".login_close").on("click",function(){
		$(".user-login").hide(600);
	})
	//图片轮播
	var i=0,timer=null;
	var len=$("#slider>ul>li").length;
	timer=setInterval(function(){
		i++;
		if(i>len-1)
		{
			i=0;
		}
		$("#slider>ul>li").eq(i).fadeIn(800).siblings().fadeOut(800);
	},1000)
	//点击圆点的时候
	$("#btn").on("click",function(){
		if($(this).attr("class")=="jiantou")
		{
			$(this).removeClass().addClass("jiantou-two").stop().animate({"left":166},1000);
			$("#product-page").stop().animate({"opacity":1},1000);
			$("#content").stop().animate({"opacity":0,"width":0},1000);		
		}else{
			$(this).removeClass().addClass("jiantou").stop().animate({"left":966},1000);
			$("#product-page").stop().animate({"opacity":0},1000);
			$("#content").stop().animate({"opacity":1,"width":1000},1000);	
		}
		
	})
	//点击上下两个小方块的时候
	$("#pageNo").on("click","span",function(){
		//如果条件成立 就说明当前显示的是这张图
		if($(this).attr("class")=="curp")
		{
			return false;
		}else{
			$(this).addClass("curp").siblings().removeClass();
			var ind=$(this).index();//显示点击第几个按钮
			if(ind==1)
			{
				$("#propage1").stop().animate({"margin-top":-600},600);
			}else{
				$("#propage1").stop().animate({"margin-top":0},600);
			}
			
		}
		
	})
	//当鼠标滑过的时候
	$(".product-pic>div").hover(function(){
		var wid=$(this).width();
		var hid=$(this).height();
		$("<div class='mask'><p><a>登录</a><a>申请使用</a></p></div>").css({"width":wid,"height":hid}).appendTo($(this))
		
	},function(){
		$(".mask").remove();
	})
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//关于我们
   //点击上下按钮时会出现的效果
   var hei=$("#icon-scroll").children("a").height();
   var dahei=$("#icon-scroll").height();
   //点击向上的按钮 使图片向上滚 每次滚一个图片的高度
   $(".topbtn").on("click",function(){
   	if($("#icon-scroll").is(":animated"))return false;
   	var Top=$("#icon-scroll").position().top;
   	 if(Top==$(".icon-group").height()-dahei)
   	 {
   	  	$(this).prop("disabled",true);
   	 }else{
   	    $("#icon-scroll").stop().animate({"top":Top-hei},800);
   	 	
   	 }
   })
   //点击向下的按钮 使图片向下滚 每次滚一个图片的高度
   $(".downbtn").on("click",function(){
   	 if($("#icon-scroll").is(":animated"))return false;
   	 var Top=$("#icon-scroll").position().top;
   	 if(Top==0){
   	 	$(this).prop("disabled",true);
   	 }else{
   	 	$("#icon-scroll").stop().animate({"top":Top+hei},800)
   	 }
   })
   //点击管理层时
   $("#team>a").hover(function(){
   	  $(this).children("div").css("display","block");
   	  $(this).children("p").css("display","block");
   },function(){
   	  $(this).children("div").css("display","none");
   	  $(this).children("p").css("display","none");
   })
   //滑过出现遮罩层
   $(".hzright>#hzicon>a").hover(function(){
   	var ind=$(this).index();
   	console.log(ind);
   	 $(".amark").eq(ind).css("display","block");
   	 $(".amark").eq(ind).next().css("display","block");
   },function(){
   	 $(".amark").css("display","none");
   	 $(".amark").next().css("display","none");
   })
   
   
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//我的产品
   $("#my-pro-list>li").each(function(i){
   	var ind=i%6,str="";
  	  switch(ind){
	  	  case 0:
	  	  case 5:str="gray"
	  	  break;
	  	  
	  	  case 2:
	  	  case 3:str="red"
	  	  break;
	  	  
	  	  case 1:str="orange"
	  	  break;
	  	  
	  	  case 4:str="gray-2"
	  	  break;
	  }
  	  $("#my-pro-list>li").eq(i).addClass(str);
   })
   var zh=$("#myprobox").height();//中间显示的高
   var gh=$("#my-pro-list").height();//总共的高
   var oimgh=$("#my-pro-list>li").outerHeight();
   //点击上边的按钮
   $("#up").on("click",function(){
   	  var Top=$("#my-pro-list").position().top;
   	  if($("#my-pro-list").is(":animated"))return false;
   	  if(Top==zh-gh)
      {
      	$(this).disabled==true;
      }else{
      	$("#my-pro-list").stop().animate({"top":Top-oimgh},800);
      }  
   })
   $("#down").on("click",function(){
   	 var Top=$("#my-pro-list").position().top;
   	 if($("#my-pro-list").is(":animated"))return false;
   	 if(Top==0)
   	 {
   	 	$(this).disabled==true;
   	 }else{
   	 	$("#my-pro-list").stop().animate({"top":Top+oimgh},800);
   	 }
   })
   //点击到期后
   $(".tip").on("click",function(){
   	 $("#pro-mask").fadeIn(800);
   	 $("<div class='markbg'></div>").css("height",$("body").height()).appendTo("body");
   })
   //点击小差的时候
   $("#close-mask").on("click",function(){
   	 $("#pro-mask").fadeOut(800);
   	 $(".markbg").remove();
   })
   $("#select").on("click","li",function(){
	   	if($(this).index()==1)
	   	{
	   		$(this).addClass("checked").siblings().removeClass("checked");
	   	    $("#confirm").fadeIn(800);
	   	}else{
	   		$(this).addClass("checked").siblings().removeClass("checked");
	   	    $("#confirm").fadeOut(800);
	   	}
   	 
   })
   //当选择原因的时候
   $("#nobuy").on("click","li",function(){
   	   $(this).addClass("checked").siblings().removeClass("checked");
   	   $("#select>li").removeClass("checked");
   })
   //下面的点击轮播
   var w=$("#fat-list>ul").width();//每个ul的宽度
   var len2=$("#fat-list>ul").length;
   $("#fat-list").width(w*len2);//设置整个的宽度
   //点击右边 向左走
   var zwid=$("#fat-list").width();//总宽度
   var xwid=$("#fat-scroll").width();//显示的宽度
   var w1=$("#fat-list>ul").width();
   var i=2,arr=[],str="";
   $("#next_btn").on("click",function(){
   	  var Left=$("#fat-list").position().left;
   	  if($("#fat-list").is(":animated"))return false;
   	  if(Left==xwid-zwid){
   	  	$("#next_btn").removeClass("next_btn").addClass("next_disabled");
   	  	$("#prev_btn").removeClass("prev_disabled").addClass("prev_btn");
   	  }else{
   	  	$("#fat-list").stop().animate({"left":Left-w1});
   	  }
   	  i++;
   	  arr.push(i)
   	  if(arr.length>=2)
   	  {
   	  	arr.length=2;
   	  }
   	  str="0"+(arr.length+1);
   	  $(".cur-grounp").html(str);
   })
    //点击左边 向右走  
    /* var j=2,arr2=[],str2="";*/
   $("#prev_btn").on("click",function(){
   	  var Left=$("#fat-list").position().left;
   	  if($("#fat-list").is(":animated"))return false;
   	  if(Left==0){
   	  	$("#prev_btn").removeClass("prev_btn").addClass("prev_disabled");
   	  	$("#next_btn").removeClass("next_disabled").addClass("next_btn");
   	  }else{
   	  	$("#fat-list").stop().animate({"left":Left+w1});
   	  	/*j--;
   	  	arr2.push(j)
   	  	if(arr2.length<=0)
   	    {
   	  	  arr.length=0;
   	    }
   	  	var str2="0"+(arr2.length-1);
   	  	$(".cur-grounp").html(str2);*/
   	  	
   	  }
   	  
   })

//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
//新闻资讯
   //图片轮播
   var widt=$("#img-list>li").width();
   var leng=$("#img-list>li").length;
   var m=0,timer=null;
   var str2="0"+leng;
   $("#num-info>span").eq(0).text("01/");
   $("#num-info>span").eq(1).text(str2);
   $("#img-list").width(widt*(leng+1));//设置UL的宽度 使图片左浮
   $("#page-slider").hover(function(){
   	   clearInterval(timer);
   },function(){
   	  timer=setInterval(auto,1000);
   }).trigger("mouseleave");
   //点击向左走
   $("#prev").on("click",function(){
   	 auto();
   })
   //点击向右走
   $("#next").on("click",function(){
   	 m--;
   	 if(m<0){
   	 	m=leng-1;
   	 }
   	 $("#img-list").stop().animate({"left":-widt*m},600);
   	 var str1="0"+(m+1)+"/";
	 $("#num-info>span").eq(0).text(str1);
   	 
   })
   
   
   function auto(){
   	 m++;
   	 if(m>leng-1)
   	 {
   	 	$("#img-list>li").first().clone().appendTo("#img-list");
   	 	$("#img-list").stop().animate({"left":-widt*m},600,function(){
   	 		$("#img-list>li").last().remove();
   	 		$("#img-list").css("left",0);
   	 	});
   	 	m=0;
   	 }else{
   	 	$("#img-list").stop().animate({"left":-widt*m},600);
   	 }
   	 var str1="0"+(m+1)+"/";
	 $("#num-info>span").eq(0).text(str1);
   }

})
