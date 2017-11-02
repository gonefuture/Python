# -*- coding: utf-8 -*-
import scrapy


class FishSpider(scrapy.Spider):
    name = "fish"
    allowed_domains = ["hzfishery.com"]
    start_urls = ['http://hzfishery.com/']

    def parse(self, response):
        file_name = "teacher.html"
        open(file_name,"w").write(response.body)
