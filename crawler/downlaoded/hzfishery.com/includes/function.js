
//判断是否为空，是返回true，否返回false
function isEmpty(str) {
	if(str=="") return true;
	else return false;
}

//判读注册账号是否合法
function isusername(s){
	var regu = "^([a-zA-Z]+[_0-9a-zA-Z@.-]*)$"
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
    	return true;
    } else {
        window.alert ("请使用规范的账号！")
        return false;
    }
}

//判断是否为邮政编码，要求6位数字，是返回true，否返回false
function isZip(str) {
	var reg=/^\d{6}$/;
	return reg.test(str);
}


//判断是否为电子邮件，要求格式abc@163.com，是返回true,否返回false
function isEmail(str) {
	var reg=/^\S+@\S+\.\S+$/;
	return reg.test(str);
}

//判断是否为网址，要求格式http://www.163.com，是返回true,否返回false
function isWWW(str) {
	var reg=/^http:\/\/\S+\.\S+$/;
	return reg.test(str);
}

//判断是否为手机号码，要求11位数字，前二位为13，是返回true,否返回false
function isMovePhone(str) {
		var reg=/^13\d{9}|15\d{9}|18\d{9}|17\d{9}$/;
		return reg.test(str);
	}


//判断是否为电话号码，要求格式0571-88888888，是返回true,否返回false
function isPhone(str) {
	var reg=/^0\d{2,3}-\d{6,8}$/;
	return reg.test(str);
}

//判断是否为金额
function isMoney(str) {
	var reg=/^\-{0,1}\d+\.{0,1}\d{0,2}$/;
	return reg.test(str);
}

//判断是否为正的小数，要求格式最多1位小数，是返回true,否返回false
function isNumber(str) {
	var reg=/^\d+\.{0,1}\d{0,1}$/;
	return reg.test(str);
}

//判断是否为整数，是返回true,否返回false
function isZenshu(str) {
	var reg=/^\-{0,1}\d+$/;
	return reg.test(str);
}

//判断是否符合身份证号码位数15/18位
function isIdcard(str) {
    var reg=/^([0-9a-zA-Z]{15}|[0-9a-zA-Z]{18})$/;
	return reg.test(str);
}

//判断是否为日期，要求格式2000-1-1或2000-01-01，是返回true,否返回false
function isDate(str) {
	var flag;
	//用正则表达式判断
	var reg=/^\d{4}-\d{1,2}-\d{1,2}$/;
	flag=reg.test(str);
	if(flag==false) return flag;

	//判断日期是否正确
	var YMD;
	YMD=str.split("-");
	var year,month,date;	//年，月，日

	//将第一个0去掉，否则将视为8进制数处理
	if(YMD[1].substring(0,1)=="0") YMD[1]=YMD[1].substring(1,2);
	if(YMD[2].substring(0,1)=="0") YMD[2]=YMD[2].substring(1,2);

	year=parseInt(YMD[0]);
	month=parseInt(YMD[1]);
	date=parseInt(YMD[2]);
	if(month>12 || month<1) return false;
	if(date>31 || date<1) return false;
	var maxDate=new Array(12);		//每月的最大日期
	if(month==1) maxDate[0]=31;
	if(month==2) maxDate[1]=28;
	if(month==3) maxDate[2]=31;
	if(month==4) maxDate[3]=30;
	if(month==5) maxDate[4]=31;
	if(month==6) maxDate[5]=30;
	if(month==7) maxDate[6]=31;
	if(month==8) maxDate[7]=31;
	if(month==9) maxDate[8]=30;
	if(month==10) maxDate[9]=31;
	if(month==11) maxDate[10]=30;
	if(month==12) maxDate[11]=31;
	//闰月
	if((year%4==0 && year%100!=0) || (year%400==0)) maxDate[1]=29;
	if(maxDate[month-1]<date) return false;
	else return true;
}
//判断是否为日期，要求格式2000-1-1或2000-01-01，是返回true,否返回false
function isDate1(str) {
	var flag;
	//用正则表达式判断
	var reg=/^\d{4}-\d{1,2}-\d{1,2}$/;
	flag=reg.test(str);
	if(flag==false) return flag;

	//判断日期是否正确
	var YMD;
	YMD=str.split("-");
	var year,month,date;	//年，月，日

	//将第一个0去掉，否则将视为8进制数处理
	if(YMD[1].substring(0,1)=="0") YMD[1]=YMD[1].substring(1,2);
	if(YMD[2].substring(0,1)=="0") YMD[2]=YMD[2].substring(1,2);

	year=parseInt(YMD[0]);
	month=parseInt(YMD[1]);
	date=parseInt(YMD[2]);
	if(month>12 || month<1) return false;
	if(date>31 || date<1) return false;
	var maxDate=new Array(12);		//每月的最大日期
	if(month==1) maxDate[0]=31;
	if(month==2) maxDate[1]=28;
	if(month==3) maxDate[2]=31;
	if(month==4) maxDate[3]=30;
	if(month==5) maxDate[4]=31;
	if(month==6) maxDate[5]=30;
	if(month==7) maxDate[6]=31;
	if(month==8) maxDate[7]=31;
	if(month==9) maxDate[8]=30;
	if(month==10) maxDate[9]=31;
	if(month==11) maxDate[10]=30;
	if(month==12) maxDate[11]=31;
	//闰月
	if((year%4==0 && year%100!=0) || (year%400==0)) maxDate[1]=29;
	if(maxDate[month-1]<date) return false;
	else return true;
}

//判断用户按键是否为数字
function isNumPress() {	
	if(window.event.keyCode>=48&&window.event.keyCode<=57) return true;
	else return false;
}

//判断用户按键是否为数字或回车
function isNumOrEnterPress() {	
	if((window.event.keyCode>=48 && window.event.keyCode<=57) || window.event.keyCode==13) return true;
	else return false;
}

//字符串替换函数，s1：需要处理的字符串，s2：需要查找的字符串，s3：需要替换成的字符串
function Replace(s1,s2,s3) {
	var str1,str2;
	var i=0;
	while(s1.indexOf(s2,i)>-1) {
		str1=s1.substring(0,s1.indexOf(s2));
		str2=s1.substring(s1.indexOf(s2) + s2.length,s1.length);
		s1=str1 + s3 + str2;
		i=str1.length + s3.length;
	}
	return s1;
}

//去处字符串左右的空格
function RTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {
            i--;
        }
        s = s.substring(0, i+1);
    }
    return s;
}
function LTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(0)) != -1) {
        var j=0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}
function Trim(str) {
    return RTrim(LTrim(str));
}
//文件上传窗口
function upload(url) {
	left1 = (screen.width-300)/2;
	top1 = (screen.height-160)/2;
	
	window.open(url, "", "width=300,height=160,left=" + left1.toString() + ",top=" + top1.toString());
}

//多级类别选择
function lbChange(bdymc, i, js, obj, allOrSelect) {
	for(k = i + 1; k <= js; k++) {
		var lbOption = document.all(bdymc + k);
		lbOption.options.length = 0;
		lbOption.options[0] = new Option(allOrSelect, '');
	}	
	
	objValue = obj.value;
	if(objValue != "") {
		xml = new ActiveXObject("Microsoft.XMLHTTP");  
		xml.open("get", "/includes/lbChange.jsp?bh=" + objValue, false);
		xml.send("");
		var res = Trim(xml.responseText);
		
		if(res != "") {
			var arrayOption = res.split(",");
			k = i + 1;
			var lbOption = document.all(bdymc + k);
			for(i = 0; i < arrayOption.length / 2; i++) {
				lbOption.options[lbOption.options.length] = new Option(arrayOption[2 * i + 1], arrayOption[2 * i]);
			}
		}
	}
}

//信息编辑控制
function xxEdit(id) {	
	idValue = id.value;
	if(idValue != "") {
		xml = new ActiveXObject("Microsoft.XMLHTTP");  
		xml.open("get", "/includes/xxEdit.jsp?id=" + idValue, false);
		xml.send("");		
	}
}

//获取点击数
var request_djs;
function createrequest_djs() {//初始化、指定处理函数、发送请求的函数
	request_djs = false;
	//开始初始化XMLHttpRequest对象
	if(window.XMLHttpRequest) { //Mozilla 浏览器
		request_djs = new XMLHttpRequest();
		if (request_djs.overrideMimeType) {//设置MiME类别
			request_djs.overrideMimeType('text/html');
		}
	}
	else if (window.ActiveXObject) { // IE浏览器
		try {
			request_djs = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) {
			try {
				request_djs = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (e) {}
		}
	}
	if (!request_djs) { // 异常，创建对象实例失败
		window.alert("不能创建XMLHttpRequest对象实例.");
		return false;
	}
}
function getDjs(val){
	createrequest_djs();

	var url = "/includes/getDjs.jsp?bh="+escape(val)+"&aa="+Math.random();
	// 确定发送请求的方式和URL以及是否同步执行下段代码	
	request_djs.open("GET", url, true);
	request_djs.setRequestHeader("Content-Type","text/html")
	request_djs.setRequestHeader("Content-Type", "GBK");
	
	request_djs.onreadystatechange = processrequest_djs;
	request_djs.send(null);
}
// 处理返回信息的函数
function processrequest_djs() {
	if (request_djs.readyState == 2) {//请求已经发出正在处理之中
		document.getElementById("djs").innerHTML="<img src='/includes/animated_loading.gif' width='16' height='16'  align='absmiddle'/>";
	}
	if (request_djs.readyState == 3) {//请求等待
		document.getElementById("djs").innerHTML="<img src='/includes/animated_loading.gif' width='16' height='16'  align='absmiddle'/>";
	}
	if (request_djs.readyState == 4) { // 判断对象状态
		if (request_djs.status == 200) { // 信息已经成功返回，开始处理信息
			var msg = request_djs.responseText;
			//取出信息类别,
			document.getElementById("djs").innerText=Trim(msg);			
		}
		else { //页面不正常
            //alert("您所请求的页面有异常。");
        }
	}
}
function getQueryStringRegExp(name) {
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)) 
	return unescape(RegExp.$2.replace(/\+/g, " ")); return ""; 
}
function zd(obj_id,xxid,zdbj){
	if(zdbj=="0"){
		doXXZD(obj_id,"",xxid,zdbj);
		//window.location.reload();
	}
	else if(zdbj=="1"){
		doXXZD(obj_id,"",xxid,zdbj);
		//window.location.reload();
	}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


// 说明：Javascript 获取链接(url)参数的方法
function getQueryString(loc,name) {
	
	if(loc==""){
		loc=location.href;
	}
	
	// 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空     
	if(loc.indexOf("?")==-1 || loc.indexOf(name+'=')==-1) {
		return '';
	}
	// 获取链接中参数部分
	var queryString = loc.substring(loc.indexOf("?")+1);
	
	// 分离参数对 ?key=value&key2=value2     
	var parameters = queryString.split("&");      
	var pos, paraName, paraValue;     
	for(var i=0; i<parameters.length; i++) {
		// 获取等号位置         
		pos = parameters[i].indexOf('=');
		if(pos == -1) { continue; }
		// 获取name 和 value         
		paraName = parameters[i].substring(0, pos);
		paraValue = parameters[i].substring(pos + 1);
		// 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
		if(paraName == name) {
			return unescape(paraValue.replace(/\+/g, " "));
		}
	}
	return '';
} 

//用正则匹配的方式获取链接(url)参数的方法
function getQueryStringRegExp(name) {
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); 
	return ""; 
}
//导航条部分
<!--
function MM_findObj(n, d) { //v4.01
var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
var i,p,v,obj,args=MM_showHideLayers.arguments;
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
var isshow;if(v=="visible") {isshow="y";}
if(isshow=="y") {document.getElementById("backlay").style.display="";}else{document.getElementById("backlay").style.display="none";}
obj.visibility=v; }
}
//-->
//div绝对定位的居中定位：屏幕分辨率宽度-div宽度-ie滚动条宽度
//if(window.screen.width>1002){
//	document.write("<style type=\"text/css\">");
//	document.write("#Layer1,#Layer2,#Layer3,#Layer4,#Layer5,#Layer6,#Layer7 {");
//	document.write("margin-left:"+((window.screen.width-1002-22)/2)+"px}");
//	document.write("</style>");
//}	


/*
document.write("<style type=\"text/css\">\n");
document.write("body {\n");
document.write("	filter:Gray;\n");
document.write("	font-size: 12px;\n");
document.write("	color: #000000;\n");
document.write("	text-decoration: none;\n");
document.write("	margin: 0px;\n");
document.write("	line-height: 18px;\n");
document.write("}\n");
document.write("</style>\n");
*/
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//头部页面
function chance(obj,id){
	var p = obj.parentNode.getElementsByTagName("span");
	var p1 = document.getElementById(id).getElementsByTagName("div");
	
	for(i=0;i<p.length;i++){
		//alert(i);
		if(obj==p[i]){			
			if(i==0) {//控制“首页”这个样式，字数比其他的字数少
				p[i].className = "oo_on_sy";				
			}
			else{
				p[i].className = "oo_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "oo_sy";				
			}
			else{
				p[i].className = "oo";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}
	//var selected_text=obj.innerText;
	//if(selected_text=="政务公开" || selected_text=="信息中心" || selected_text=="政策法规" || selected_text=="科教管理" || selected_text=="产业发展" || selected_text=="安全监理" || selected_text=="质量鉴定") 
	//	document.getElementById("div_lm").style.display="";
	//else
	//	document.getElementById("div_lm").style.display="none";
}
function freefocus(obj){
	var p = obj.parentNode.getElementsByTagName("span");
	
	for(i=0;i<p.length;i++){		
		if(obj==p[i]){			
			if(i==0) {//控制“首页”这个样式，字数比其他的字数少
				p[i].className = "oo_on_sy";				
			}
			else{
				p[i].className = "oo_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "oo_sy";				
			}
			else{
				p[i].className = "oo";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}		
}

function chance1(obj,id){
	var p = obj.parentNode.getElementsByTagName("span");
	var p1 = document.getElementById(id).getElementsByTagName("div");
	
	for(i=0;i<p.length;i++){
		//alert(i);
		if(obj==p[i]){			
			if(i==0) {//控制“首页”这个样式，字数比其他的字数少
				p[i].className = "tt_on_sy";				
			}
			else{
				p[i].className = "tt_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "tt_sy";				
			}
			else{
				p[i].className = "tt";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}
	//var selected_text=obj.innerText;
	//if(selected_text=="政务公开" || selected_text=="信息中心" || selected_text=="政策法规" || selected_text=="科教管理" || selected_text=="产业发展" || selected_text=="安全监理" || selected_text=="质量鉴定") 
	//	document.getElementById("div_lm").style.display="";
	//else
	//	document.getElementById("div_lm").style.display="none";
}
function freefocus1(obj){
	var p = obj.parentNode.getElementsByTagName("span");
	
	for(i=0;i<p.length;i++){		
		if(obj==p[i]){			
			if(i==0) {//控制“首页”这个样式，字数比其他的字数少
				p[i].className = "tt_on_sy";				
			}
			else{
				p[i].className = "tt_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "tt_sy";				
			}
			else{
				p[i].className = "tt";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}		
}
function FontSize(size){
	tb1.style.fontSize = size;
}
function getCookie(nm){
	var m=null;
	if(window.RegExp){
		var re=new RegExp(";\\s*"+nm+"=([^;]*)","i");
		m=re.exec(';'+document.cookie);
		}
	return (m?unescape(m[1]):null);
}
function setCookie(name,value,days){
	var expires;
	if(days){
		var date=new Date();
		date.setTime(date.getTime()+(days*86400000));
		expires="; expires="+date.toGMTString();
	}
	document.cookie=name+"="+escape(value)+expires+";path=/";
}