

<!DOCTYPE html>
<html lang="en" xmlns:wb="http://open.weibo.com/wb">
<head>
	<meta charset=utf-8"utf-8">
	<meta name="google-site-verification" content="e8WA0xc4_f57hKZBCIhOBrVMQhWVTgCLDry1AY_Ga-w" />
	<meta name="keywords" content="学堂在线, MOOC, 慕课, XuetangX, 清华大学, 北京大学, 在线教育, 大规模开放式在线课程, 在线学习," />
	<meta name="description" content="学堂在线是免费公开的MOOC（大规模开放在线课程）平台，是国家教育部MOOC研究中心官方合作平台，致力于通过来自国内外一流名校开设的免费网络学习课程，为公众提供系统的高等教育，让每一个中国人都有机会享受优质教育资源。通过和清华大学在线教育研究中心、以及国内外知名大学的紧密合作，学堂在线将不断增加课程的种类和丰富程度。" />
	<meta name="renderer" content="webkit"/>
    <meta property="qc:admins" content="27433770036055416706375" />
    <meta name="apple-itunes-app" content="app-id=911639256, app-argument=https://itunes.apple.com/cn/app/xue-tang-zai-xian-guan-fang/id911639256?mt=8">
    <meta http-equiv="X-UA-Compatible" content="edge" />
		<meta name="viewport" content="width=1104" />
	<title>学堂在线-最大的中文慕课(MOOC)平台</title>

	<link href="{{ URL::asset('js/html5shiv.0ce8f355891c.js') }}" rel="stylesheet" type="text/js"/>
	<link href="{{ URL::asset('css/reset.a5f0fbe62f3b.css') }}" rel="stylesheet" type="text/css"/>
	<link href="{{ URL::asset('css/index.aadc42de2b12.css') }}" rel="stylesheet" type="text/css"/>

	<link rel="stylesheet" type="text/css" href="{{ asset('template/ue-content/templates/images/ue_grid.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('template/ue-content/templates/images/style.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('template/ue-content/templates/css/style.css') }}" />
	<script src="http://libs.baidu.com/jquery/1.7.2/jquery.min.js"></script>
	<script language="javascript" src="{{ asset('script/jquery.easing.min.js') }}"></script>
	<script language="javascript" src="{{ asset('script/custom.js') }}"></script>
<style>

*{ padding:0; margin:0; list-style:none; border:0;}

.all{ width: 1000px; height: 500px; padding: 7px;  margin: 0 auto; position: relative; }
.screen{
	width:1500px;
	height:500px;
	 overflow:hidden;
	position:relative;
}
.screen li{ width:1000px; height:500px; overflow:hidden; float:left;}
.screen ul{ position:absolute; left:0; top:0px; }
.all ol{ position:absolute; right:10px; bottom:10px; line-height:20px; text-align:center;}
.all ol li{ float: left; width: 15px; height: 15px; background: #fff;  margin-left: 5px; cursor: pointer; font-size: 10px; font-family: Verdana; line-height: 15px; border-radius: 15px; }
.all ol li.current{ background:yellow;}


		body{
			font:14px/28px "微软雅黑";
		}
		.contact *:focus{outline :none;}
		.contact{
			width:600px;
			height: auto;
			background: #f6f6f6;
			margin: 0 auto;


		}
		.contact ul {
			width: 650px;
			margin: 0 auto;
		}
		.contact ul li{
			border-bottom: 1px solid #dfdfdf;
			list-style: none;
			padding: 12px;
		}
		.contact ul li label {
			width: 120px;
			display: inline-block;
			float: left;
		}
		.contact ul li input[type=text],.contact ul li input[type=password]{
			width: 220px;
			height: 25px;
			border :1px solid #aaa;
			padding: 3px 8px;
			border-radius: 5px;
		}
		.contact ul li input:focus{
			border-color: #c00;

		}
		.contact ul li input[type=text]{
			transition: padding .25s;
			-o-transition: padding  .25s;
			-moz-transition: padding  .25s;
			-webkit-transition: padding  .25s;
		}
		.contact ul li input[type=password]{
			transition: padding  .25s;
			-o-transition: padding  .25s;
			-moz-transition: padding  .25s;
			-webkit-transition: padding  .25s;
		}
		.contact ul li input:focus{
			padding-right: 70px;
		}
		.btn{
			position: relative;
			left: 300px;
		}
		.tips{
			color: rgba(0, 0, 0, 0.5);
			padding-left: 10px;
		}
		.tips_true,.tips_false{
			padding-left: 10px;
		}
		.tips_true{
			color: green;
		}
		.tips_false{
			color: red;
		}
</style>
<script type="text/javascript">
    window.onload= function() {
        var box  = document.getElementById("all");  //   获得大盒子
        var ul = box.children[0].children[0];  // 获取ul
        var ulLis = ul.children;  //  ul 里面的所有  li
        // 复习：  cloneNode()     克隆节点       追加a.appendChild(b)  把b 放到a 的最后面
        //1.  ulLis[0].cloneNode(true)  克隆  节点
        ul.appendChild(ulLis[0].cloneNode(true));   // ul 是 a   ulLis[0].cloneNode(true) 是b

        //2. 插入 ol 里面的li
        var ol = box.children[1];  // 获得ol
        // 因为 我们要创建很多个 ol 里面的li 所以需要用到for 循环哦
        for(var i=0;i<ulLis.length-1;i++) {   // ul 里面的li  长度 要减去 1  因为我们克隆一个
            // 创建节点 li
            var li = document.createElement("li");
            li.innerHTML = i + 1;   //  存在加1 的关系
            // a.appendChild(b);
            ol.appendChild(li);
        }
        var olLis = ol.children;  // 找到 ol 里面的li
        olLis[0].className = 'current';
        // 3. 动画部分  遍历小li ol
        for(var i=0;i<olLis.length;i++) {
            olLis[i].index = i;  // 赋予索引号
            olLis[i].onmouseover = function() {
                // 清除所有人
                for(var j=0;j<olLis.length;j++) {
                    olLis[j].className = "";
                }
                this.className = 'current';
                animate(ul,-this.index*ulLis[0].offsetWidth);
                key = square = this.index; // 鼠标经过 key square 要等于 当前的索引号
            }
        }
       // 4. 定时器部分  难点
        var timer = null;  // 定时器
        var key = 0; // 用来控制图片的播放的
        var square = 0;  // 用来控制小方块的
        timer = setInterval(autoplay,3000);   // 每隔3s 调用一次 autoplay
        function autoplay() {
            key++;   // key == 1  先 ++
            console.log(key); //  不能超过5
            if(key > ulLis.length - 1)
            {
               // alert('停下');
                ul.style.left = 0;
                key = 1;  // 因为第6张就是第一张，我们已经播放完毕了， 下一次播放第2张
                // 第2张的索引号是1
            }
            animate(ul,-key*ulLis[0].offsetWidth);
            // 小方块的做法
            square++;  // 小方块自加1
            square = square>olLis.length-1 ? 0 : square;
            /// 清除所有人
            for(var i=0;i<olLis.length;i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";   // 留下当前自己的

        }


        // 鼠标经过和停止定时器
        box.onmouseover = function() {
            clearInterval(timer);
        }

        box.onmouseout = function() {
            timer = setInterval(autoplay,3000);  // 一定这么开
        }



        //  基本封装
        function animate(obj,target) {
            clearInterval(obj.timer);  // 要开启定时器，先清除以前定时器
            // 有2个参数 第一个 对象谁做动画  第二 距离 到哪里
            // 如果 offsetLeft 大于了  target 目标位置就应该反方向
            var speed = obj.offsetLeft < target ? 15 : -15;
            obj.timer = setInterval(function() {
                var result = target - obj.offsetLeft;  //  他们的值 等于 0 说明完全相等
                // 动画的原理
                obj.style.left = obj.offsetLeft + speed  + "px";
                if(Math.abs(result) <= 15) {
                    obj.style.left = target + "px";   //抖动问题
                    clearInterval(obj.timer);
                }
            },10);
        }

    }
</script>

</head>
<script>
	function checkna(){
			na=form1.nickName.value;
		  	if( na.length <1 || na.length >12)
	  		{
	  			divname.innerHTML='<font class="tips_false">长度是1~12个字符</font>';

	  		}else{
	  		    divname.innerHTML='<font class="tips_true">输入正确</font>';

	  		}

	  }
	  //验证密码 
		function checkpsd1(){    
			psd1=form1.password.value;  
			var flagZM=false ;
			var flagSZ=false ; 
			var flagQT=false ;
			if(psd1.length<6 || psd1.length>12){   
				divpassword1.innerHTML='<font class="tips_false">长度错误</font>';
			}else
				{   
				  for(i=0;i < psd1.length;i++)   
					{    
						if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z')) 
						{   
							flagZM=true;
						}
						else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')    
						{ 
							flagSZ=true;
						}else    
						{ 
							flagQT=true;
						}   
					}   
					if(!flagZM||!flagSZ||flagQT){
					divpassword1.innerHTML='<font class="tips_false">密码必须是字母数字的组合</font>'; 
					 
					}else{

					divpassword1.innerHTML='<font class="tips_true">输入正确</font>';
					 
					}  
				 
				}
		}
		function checkmail(){
					apos=form1.email.value.indexOf("@");
					dotpos=form1.email.value.lastIndexOf(".");
					if (apos<1||dotpos-apos<2)
					  {
					  	divmail.innerHTML='<font class="tips_false">输入错误</font>' ;
					  }
					else {
						divmail.innerHTML='<font class="tips_true">输入正确</font>' ;
					}
		}
</script>

<body class=" lang_en">
<header
		class="header_index"
	id="header_bootstrap">

	<div id="py_header_data" class="hide"
	data-ajax="/header_ajax"
	data-blurajax="/check_register_params_v2"
	data-loginsubmit="/v2/login_ajax"
	data-registersubmit="/unify_create_account"
    data-phonecode="/phone/validate"
    data-server-time="2016-09-28 03:27:37Z"
	data-code=""
	></div>

	<div class="header_top_bar cf wrap">
		<div class="header_top_bar_pull_left fl cf">
			<div class="header_top_bar_text fl">
				<a  "  " target="_blank" data-click="onClick" data-block="TOPLINK" data-element="1">edX</a>
			</div>
			<div class="header_top_bar_text fl">
				<a data-click="onClick" data-block="TOPLINK" data-element="4" target="_blank"  "  ">中国创业学院</a>
			</div>
			<div class="header_top_bar_text fl">
				<a  "  " target="_blank" data-click="onClick" data-block="TOPLINK" data-element="3">爱学堂网</a>
			</div>
			<div class="header_top_bar_text fl">
        <a  "  " target="_blank" data-click="onClick" data-block="TOPLINK" data-element="6">MOOCAP</a>
			</div>
			<div class="header_top_bar_text fl">
        <a href="degreecourse/engineermaster.htm"  " target="_blank" data-click="onClick" data-block="TOPLINK" data-element="7">工程硕士</a>
			</div>
            <div class="header_top_bar_text fl">
        <a href="event/Electivecourse-1.htm"  " target="_blank" data-click="onClick" data-block="TOPLINK" data-element="8">选修课</a>
            </div>
		</div>
		<div class="header_top_bar_pull_right fr">
			<div class="header_top_bar_text fl">
				<a href="event/zhaomuapply-1.htm"  " data-click="onClick" data-block="TOPNAV" data-element="1">招募老师</a>
			</div>
			<div class="header_top_bar_text fl">
				<a href="about.htm#about_us"  " data-click="onClick" data-block="TOPNAV" data-element="2">关于我们</a>
			</div>
			<div class="header_top_bar_text fl">
				<a href="sitemap.htm"   data-click="onClick" data-block="TOPNAV" data-element="4">网站地图</a>
			</div>
			<div class="header_top_bar_text fl">
				<a id="header_top_bar_feedback"  data-click="onClick" data-block="TOPNAV" data-element="3">意见反馈</a>
			</div>
		</div>
	</div>
	<div class="header_container" id="header_container">
		<div class="wrap cf">
			<div class="fl">
				<h1 class="fl">
					<a href="{{ URL('/') }}"  data-click="onClick" data-block="GLOBLNAV" data-element="1">
					<img src="xuetang.png" title="学堂在线" />
					</a>
				</h1>
				<ul class="cf fl header_container_nav">
					<li><a href="{{ URL('/courses') }}"  title="课程" data-click="onClick" data-block="GLOBLNAV" data-element="3">课程</a></li>
					<li><a href="{{ URL('/partners') }}"  title="院校" data-click="onClick" data-block="GLOBLNAV" data-element="3">院校</a></li>
					<li><a href="{{ URL('/community') }}"  title="院校" data-click="onClick" data-block="GLOBLNAV" data-element="3">广场</a></li>
					<li><a href="{{ URL('/cloud') }}"  title="院校" data-click="onClick" data-block="GLOBLNAV" data-element="3">学堂云</a></li>
					<li><a href="http://ykt.io/"  title="院校" data-click="onClick" data-block="GLOBLNAV" data-element="3">雨课堂</a></li>
					<li><a href="{{ URL('/mobile') }}"  title="院校" data-click="onClick" data-block="GLOBLNAV" data-element="3">APP下载</a></li>

					</ul>
            </div>
			<div class="fr header_container cf">
				<form class="header_container_search fl cf" id="header_search" method="get"  data-block="GLOBLNAV" data-description="TOSEARCH">
					<input class="fl" type="search" name="query" placeholder="课程、老师、学校" autocomplete="off">
                    <button class="header_container_submit fl"></button>
                    <div class="search_header_suggestion" style="display: none;"></div>
				</form>
				<div id="header_login_register" class="fl cf">
					<div class=" common" style="position:absolute; left:100px">
					    <div class="login fr">
					      <div class="loginmenu"><a title="登录或注册"></a></div>
					      <ul>
									<div>
									</div>
							@if(session('user'))
							<a href="{{ URL('/geren/') }}">{{ session('user')->nickName }}</a>
							<a href="{{ URL('/demo12') }}"><button style="background-color:blue">退出</a></button>
							@else
					        <li class="openlogin"><a href="http://www.jq22.com/" onclick="return false;">登录</a></li>

					        <li class="reg"><a href="" onclick="return false;">注册</a></li>

							@endif
					      </ul>
					    </div>
					    <div class="clear"></div>
					  </div>
				</div>
            </div>


			</div>
			<div class="clear"></div>
			<div class="loginmask"></div>
			<div id="loginalert">
			  <div class="pd20 loginpd">
			    <h3><i class="closealert fr"></i>
			      <div class="clear"></div>
			    </h3>
			    <div class="loginwrap">
			      <div class="loginh">
			        <div class="fl">会员登录</div>
			        <div class="fr">还没有账号<a id="sigup_now" href="http://www.jq22.com/" onclick="return false;">立即注册</a></div>
			        <div class="clear"></div>
			      </div>
			      <h3><span>邮箱登录</span><span class="login_warning">用户名或密码错误</span>
			        <div class="clear"></div>
			      </h3>

			      <form action="{{ URL('/demo11') }}" method="post" id="login_form">
			      	<input type="hidden" name="_token" value="{{ csrf_token() }}">
			        <div class="logininput">
			          <input type="text" name="email" class="loginusername" value="邮箱/用户名" />
			          <input type="password" class="loginuserpasswordt" value="密码"  name='password' />
			          <input type="password" name="password" class="loginuserpasswordp" style="display:none" />
			        </div>
					 @if(session('msg'))
					<p style="color:red">{{ session('msg') }}</p>

					 @endif
			        <div class="loginbtn">
			          <div class="loginsubmit fl">
			            <input type="submit" value="登录" />
			            <div class="loginsubmiting">
			              <div class="loginsubmiting_inner"></div>
			            </div>
			          </div>
			          <div class="logcheckbox fl">
			            <input id="bcdl" type="checkbox" checked="true" />
			            保持登录</div>
			          <div class="fr"><a href="http://www.jq22.com/">忘记密码?</a></div>
			          <div class="clear"></div>
			        </div>
			      </form>

			    </div>
			  </div>

			</div>
			<div id="reg_setp" style="background-color:#EBCFBE">
			  <div class="back_setp">返回</div>
			  <div class="blogo"></div>
			  <div id="setp_quicklogin">
			    <div id="cd-signup"> <!-- 注册表单 -->

				<form name='form1' action="{{ URL('/4') }}" method='post' >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<div align="center">
										<div class="contact" >
					<ul>
						<li>
							<label>姓名：</label>
							<input type="text" name="nickName" placeholder="长度1~12个字符"  onblur="checkna()" required/><span class="tips" id="divname"></span>
						</li>
						<li>
							<label>密码：</label>
							<input type="password" name="password" placeholder="请输入你的密码" onblur="checkpsd1()" required/><span class="tips" id="divpassword1"></span>
						</li>

						<li>
							<label>电子邮箱：</label>
							<input type="text" name="email" placeholder="请输入你的邮箱" onblur="checkmail()" required/><span class="tips" id="divmail"></span>
						</li>
						<li>

			<input type="submit" value="提交"/>
			<input type="reset" value="取消"/>
						</li>
						</ul>

					<p class="fieldset">
						<input type="checkbox" id="accept-terms">
						<label for="accept-terms">我已阅读并同意 <a href="#0">用户协议</a></label>
					</p>


				</form>
			</div>
					</div>

			  </div>
			</div>


	<script type="text/javascript">
		$(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
	</script>



		</div>
	</div>
		</div>
	</div>
</header>


@yield("content")
<footer id="footer_bootstrap">
    <div class="copyright wrap">
        <div class="cf">
            <div class="text fl">
                <p>Copyright  2013-2016 北京慕华信息科技有限公司</p>
                <p><a title="京ICP证140571号" target="_blank">京ICP证140571号</a> | 京公网安备 11010802017721</p>
            </div>
            <div class="edx_logo cf fr">
                <a   target="_blank"><img src="static/images/edx_logo.262fca70a49b.png"  /></a>
            </div>
        </div>
    </div>
</footer>
		 <link href="{{ URL::asset('js/require.2d213b58c463.js') }}" rel="stylesheet" type="text/js"/>
		 <link href="{{ URL::asset('js/appCommon.2ee048cac1c3.js') }}" rel="stylesheet" type="text/js"/>
		 <link href="{{ URL::asset('js/homepage.ea28864f00b2.js') }}" rel="stylesheet" type="text/js"/>
		 <link href="{{ URL::asset('js/analyticshost.20a224755bf9.js') }}" rel="stylesheet" type="text/js"/>
</body>
</html>
