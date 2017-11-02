# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from lagou.items import LagouItem

class ZhaopinjavaSpider(CrawlSpider):
    name = 'zhaopinJava'
    allowed_domains = ['lagou.com']
    start_urls = ['https://www.lagou.com/zhaopin/Java/?labelWords=label?labelWords=hot']

    rules = (
        Rule(LinkExtractor(allow=r'^https://www.lagou.com/jobs/\d+'), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        i = LagouItem()
        #i['domain_id'] = response.xpath('//input[@id="sid"]/@value').extract()
        i['name'] = response.xpath('/html/body/div[2]/div/div[1]/div/span').extract()
        desc = response.selector.xpath('//*[@id="job_detail"]/dd[2]/h3').extract()
        i['description']  = desc.xpath('string(.)').extract()[0]
        return i
