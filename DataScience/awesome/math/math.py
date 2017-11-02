# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/10/12 20:55

import math
import random

# 指数和对数
x = 2
y = 3
print(x, y, math.pow(x, y))
print(math.log(8, 2))
print('----------------------------')

# 随机数生成器,生成5个步长为100的0 - 1000内的随机数
for i in range(5):
    print(random.randrange(0, 1000, 100))
print('----------------------------')

# 取样 洗牌
a = []
for i in range(10):
    a.append(i)
print(a)
for x in range(5):
    random.shuffle(a)
    print(a)
for x in range(3):
    print(random.sample(a, 3))
print('----------------------------')



