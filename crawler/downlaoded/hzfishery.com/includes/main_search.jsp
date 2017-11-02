



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html xmlns="”http://www.w3.org/1999/xhtml”"><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title></title>
<link href="/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="/includes/function.js"></script>
</head>
 
<body>
<div class="shousuo">
<form name="sForm" method="post" onSubmit="return ssCheck();" action="/search.jsp?sessrwb=257F14C804BDA4A595482D1B268BE2FC" target="_blank">
<table cellpadding="0" cellspacing="0" width="100%">
             <tr>
                <td height="38" width="465"></td>
                <td width="77" class="wenb_c">本站搜索：</td>
                <td width="45">关键字</td>
                <td width="164"><input name="query" type="text" class="shou_sr" /></td>
                <td width="164"><select name="lmbh" class="shou_sr">
                           <option value="">==全站检索==</option>
                           
              <option value="10002">-通知公告</option>
 
              <option value="10003">-信息快递</option>
 
              <option value="1000310001">--本地快讯</option>
 
              <option value="1000310002">--综合信息</option>
 
              <option value="10005">-站务信息</option>
 
              <option value="1000510001">--站务平台</option>
 
              <option value="10006">-推广体系</option>
 
              <option value="10007">-供求信息</option>
 
              <option value="10008">-科技推广</option>
 
              <option value="10009">-病防质检</option>
 
              <option value="10010">-渔乐天堂</option>
 
              <option value="10011">-休闲渔业</option>
 
              <option value="10012">-有问有答</option>
   
                        </select></td>
                <td><input type="image" src="/images/shuost.jpg" /></td>
             </tr>
          </table>
       </form>
	   </div>

<script language="javascript">


function ssCheck()
{
	sForm.query.value=Trim(sForm.query.value);
	if(sForm.query.value=="" || Trim(sForm.query.value)=="")
	{
		alert('请输入搜索内容！');
		sForm.query.focus();
		return false;
	}
	
var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\￥)(\#)(\$)(%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/); 
	
	if(containSpecial.test(sForm.query.value) == true) {
	    alert("请不要输入特殊字符！");
		sForm.query.focus();
		return false;
	}
	
		return true; 
		
	
}

</script>
</body>
</html>
