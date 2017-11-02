'''
Created on 2017年3月27日

@author: Administrator

if __name__ == '__main__':
    download(url)
'''
#coding:utf-8
import urllib.request
from bs4 import BeautifulSoup
import re
import time
import os

def schedule(a, b, c):
    '''''
  a:已经下载的数据块
  b:数据块的大小
  c:远程文件的大小
   '''
    per = 100.0 * a * b / c
    if per > 100 :
        per = 100
    print (('%.2f%%') % per)
    
url= 'http://www.hzfishery.com'
x = 0
def downloadImg(url):
    html = urllib.request.urlopen(url)
    bs = BeautifulSoup(html,'html.parser')
    imgList = bs.find_all('img', class_="BDE_Image")
    
    # 定义文件夹的名字
    t = time.localtime(time.time())
    foldername = str(t.__getattribute__("tm_year")) + "-" + str(t.__getattribute__("tm_mon")) + "-" + str(t.__getattribute__("tm_mday"))
    picpath = 'D:\\ImageDownload\\%s' % (foldername)  # 下载到的本地目录
  
    if not os.path.exists(picpath):  # 路径不存在时创建一个
        os.makedirs(picpath)   
        
    global x 
    print ("****** start ****")
    for i in imgList:
        target = picpath + '\\%s.jpg' % x
        print (('Downloading image to location: ') + str(target) + ('\n url=') + str(i))
        imgurl = i.get('src')
        image = urllib.request.urlretrieve(imgurl, target ,schedule )
        x += 1
    

downloadImg(url)
print('download has finish !')
