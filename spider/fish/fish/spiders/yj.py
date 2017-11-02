# -*- coding: utf-8 -*-
import scrapy
from fish.items import YjItem

class YjSpider(scrapy.Spider):
    name = "yj"
    allowed_domains = ["http://www.hzfishery.com"]
    start_urls = ["http://www.hzfishery.com"]

    def parse(self, response):
        items = []
        downloadList = response.findAll(src=True)
        print (downloadList)

        #file_name = "project.html"
        #open(file_name,"w").write(response.body.decode('GBK'))
        #for site in response.xpath('//ul[@class="jiyilit bfzjlist dsb"]'):      
           #一个老师的数据
        #item = YjItem()
          
            #teacher_name = site.xpath('li/a/text()').extract()
            #teacher_level = site.xpath('div/a/text()').extract()
        #teacher_info = site.xpath('p/text()').extract()


        #return items'''
 