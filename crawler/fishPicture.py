#coding=utf-8

import os
import re
from urllib.request import urlopen, urlretrieve

from bs4 import BeautifulSoup

downloadDirectory = "downlaoded"
baseUrl = "http://www.hzfishery.com" 


def getAbsoluteURL(baseUrl,source):
    if source.startswith("http://www."):                                         
        url = "http://"+source[11:]
    elif source.startswith("http://"):
        url = source
    elif source.startswith("www."):
        url = "http://"+source[4:]
    else:
        url = baseUrl+"/"+source
    if baseUrl not in url:
        return None
    return url


def getDownloadPath(baseUrl, absoluteUrl, downloadDirectory):
    path = absoluteUrl.replace("www.", "")
    path = path.replace(baseUrl, "")
    path = re.sub("\?.*","",path) #把问号开头的字符串都替换为空
    path = re.sub("http:","",path) #把问号开头的字符串都替换为空
    path = downloadDirectory+path #'\\%s.jpg' % x
    directory = os.path.dirname(path)

    if not os.path.exists(directory):
        os.makedirs(directory)
    return path


    if not os.path.exists(directory):
        os.makedirs(directory)

    return path

html = urlopen("http://www.hzfishery.com")
bsObj = BeautifulSoup(html)
downloadList = bsObj.findAll(src=True) 

global x 
x=0
for download in downloadList:
    fileUrl = getAbsoluteURL(baseUrl,download["src"])
    if fileUrl is not None:
        print(fileUrl)
        urlretrieve(fileUrl,getDownloadPath(baseUrl,fileUrl,downloadDirectory))
        x=x+1
