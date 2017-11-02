#coding=utf-8
import urllib
import re


def getHtml(url):
    page = urllib.urlopen(url)
    html = page.read()
    return html

def getImg(html):
    reg = r'src="(.+?\.jpg)" pic_ext'
    imgre = re.compile(reg)
    imglist = re.findall(imgre,html)
    x = 0
    for imgurl in imglist:
        image = urllib.urlretrieve(imgurl,'%s.jpg' % x)9
        x+=1
    return imglist 
 
html = getHtml("https://www.baidu.com/home/news/data/newspage?nid=3770485437268548857&n_type=0&p_from=1&dtype=-1")

print (getImg(html))
