






<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html xmlns="”http://www.w3.org/1999/xhtml”"><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title></title>
<link href="/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="/includes/function.js"></script>
<script language="javascript">
var http_request = false;
	function send_request(url) {//初始化、指定处理函数、发送请求的函数
		http_request = false;
		//开始初始化XMLHttpRequest对象
		if(window.XMLHttpRequest) { //Mozilla 浏览器
			http_request = new XMLHttpRequest();
			if (http_request.overrideMimeType) {//设置MiME类别
				http_request.overrideMimeType('text/xml');
			}
		}
		else if (window.ActiveXObject) { // IE浏览器
			try {
				http_request = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					http_request = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {}
			}
		}
		if (!http_request) { // 异常，创建对象实例失败
			window.alert("不能创建XMLHttpRequest对象实例.");
			return false;
		}
		http_request.onreadystatechange = processRequest;
		// 确定发送请求的方式和URL以及是否同步执行下段代码
		http_request.open("GET", url, true);
		http_request.send(null);
	}
	// 处理返回信息的函数
    function processRequest() {
        if (http_request.readyState == 4) { // 判断对象状态
            if (http_request.status == 200) { // 信息已经成功返回，开始处理信息
                //alert(http_request.responseText);
            } else { //页面不正常
                //alert("您所请求的页面有异常。");
            }
        }
    }
    send_request("/includes/fwl.jsp");

</script>
</head>
 
<body>
<div class="top">
          <div class="top_nwen">
             <div class="dinquan">
                 <span class="shijian fl"><script language="javascript">
				var curDate = new Date();
		
		var xinqi = "";
		if(6 == 0) xinqi = "天";
		else if(6 == 1) xinqi = "一";
		else if(6 == 2) xinqi = "二";
		else if(6 == 3) xinqi = "三";
		else if(6 == 4) xinqi = "四";
		else if(6 == 5) xinqi = "五";
		else if(6 == 6) xinqi = "六";
		else xinqi = "";
		document.write(""+2017 + "年" + 06 + "月" + 03 + "日 星期" + xinqi);
		</script></span>
                 <span class="shouc fr">
                     <a href="/sitemap/sitemap.html" target="_blank">网站地图</a> |
                     <a href="javascript:;" onClick="javascript:addfavor('http://www.hzfishery.com','杭州渔技网');">收藏本站</a> |
                     <a href="javascript:void(0)" onClick="javascript:SetHome(this,'http://www.hzfishery.com');">设为首页</a>
                 </span>
             </div>
             <div class="logo">
               <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="1000" height="218">
                   <param name="movie" value="/images/tbflash.swf">
                   <param name="quality" value="high">
                   <embed src="/images/tbflash.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="1000" height="218"></embed>
               </object>
            </div>
             <div class="daohang">
                <table cellpadding="0" cellspacing="0" width="100%" background="/images/daoz.jpg">
                   <tr>
                     <td width="20"><img src="/images/daol.jpg" /></td>
                      <td align="center"><a href="/html/main/gb2312/" target="_top">网站首页</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/hzyy/" target="_top">杭州渔业</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="http://www.hz-agri.gov.cn:8180/programs/xxgk/" target="_blank">政务公开</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/bdkx/" target="_top">信息快递</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/tzgg/" target="_top">通知公告</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/programs/main/jghq/" target="_top">水产行情</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/zwpt/" target="_top">站务信息</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/gqxx/" target="_top">供求信息</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/kjtg/" target="_top">科技推广</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/bfzj/" target="_top">病防质检</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/yltt/" target="_top">渔乐天堂</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/xxyy/" target="_top">休闲渔业</a></td>
                      <td width="20"><img src="/images/daor.jpg" /></td>
                   </tr>
                </table>
            </div>
          </div>
      </div>

<script language="javascript">

function addfavor(url,title) {
    if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            external.AddToFavoritesBar(url,title,'杭州渔技网');//IE8
        }else{
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(title, url, "");//firefox
                } catch(e) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
    }
    return false;
}
function SetHome(obj,url){

    try{

        obj.style.behavior='url(#default#homepage)';

       obj.setHomePage(url);

   }catch(e){

       if(window.netscape){

          try{

              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

         }catch(e){

              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");

          }

       }else{

        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");

       }

  }

}


</script>
</body>
</html>
