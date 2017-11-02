

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>无标题文档</title>
<link href="/css/index.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body{background:none; font-size:12px; line-height:19px;}
</style>
</head>





<body>
 <div id="mq" style="width:242px;height:70px;overflow:hidden;">
 
</div>
<script type="text/javascript">
var speed=1//速度数值越大速度越慢
var oMarquee = document.getElementById("mq"),pause=true,iLineHeight = 19;
oMarquee.innerHTML += oMarquee.innerHTML;
oMarquee.onmouseover=function(){pause=false;}
oMarquee.onmouseout=function(){pause=true;}
function run() {
var ostop=oMarquee.scrollTop%iLineHeight==0&&!pause;
if (!ostop)oMarquee.scrollTop==parseInt(oMarquee.scrollHeight/2)?oMarquee.scrollTop=0:oMarquee.scrollTop++;
window.setTimeout(arguments.callee,oMarquee.scrollTop%iLineHeight==0?2000:10 );
}
window.setTimeout("run()", 2000 );
</script>
</body>
</html>
