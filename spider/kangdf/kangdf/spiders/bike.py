# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from kangdf.items import KangdfItem

class BikeSpider(CrawlSpider):
    name = 'bike'
    allowed_domains = ['kangdf.cn']
    start_urls = ['http://www.kangdf.cn/?/baike/index/channel-6']

    rules = (
        Rule(LinkExtractor(allow=r'^http://www.kangdf.cn/baike/y\w+')  ,callback='parse_item', follow=True ),
    )

    def parse_item(self, response):
        i = KangdfItem()

        title = response.xpath('//*[@id="default_bd"]/div[3]/div[2]/a/text()').extract()
        article_content = response.selector.xpath('//div[@class="article_content"]')
        if article_content 
            content =article_content.xpath('string(.)').extract()[0]
        if title and article_content:
            i['title'] = title
            i['content'] = content

        yield i
