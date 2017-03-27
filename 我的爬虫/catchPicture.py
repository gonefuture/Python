import re
import urllib.request

def getHtml(url):
    page = urllib.request.urlopen(url)
    html = page.read()
    return html

def getImg(html):
    html = html.decode('UTF-8')
    reg = r'src="(.*?\.jpg)" width'
    imgre = re.compile(reg)
    imglist = imgre.findall(html)
    x = 0
    for imgurl in imglist:
      image = urllib.request.urlretrieve(imgurl,'%s.jpg' % x)#是不4是Python3.X中把这个也改变了？
      x += 1
    return image;#urllib.urlretrieve(imgurl,'%s.jpg' % x)

    html = getHtml('http://image.baidu.com/')
    print(getImg(html))


