# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/11/2 21:13

import urllib
import urllib2
import requests
from poster.encode import multipart_encode
from urllib2 import Request, urlopen, URLError, HTTPError
from poster.encode import multipart_encode
from poster.streaminghttp import register_openers

def uploadFile(filePath, url):
    register_openers()
    datagen, headers = multipart_encode({"files": open(filePath, "rb")})
    request = urllib2.Request(url, datagen, headers)
    response = urllib2.urlopen(request)
    print response.read()

if __name__ == "__main__":
    uploadFile("/home/testResult", "http://192.168.7.144:8888/starott_cloud_client/remotescripttest/uploadScriptResult");