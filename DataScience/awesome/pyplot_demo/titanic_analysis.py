# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/11/1 15:21
from __future__ import print_function
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.style
import pandas as pd

pd.set_option('display.max_columns', None)
pd.set_option('display.width', 180)
pd.set_option('max_colwidth', 110)

data = pd.read_csv('D:/GitHub/Python/DataScience/titanic_train.csv')
print(data)
# print(data.xs(0)) # 横断面显示

#   分别显示男女的存活率
print(data.groupby('Sex').Survived.mean())



matplotlib.style.use('ggplot')

#   分析儿童的生存率
need_data = data.loc[:, ['Age', 'Survived']].dropna(how='any')
#   将年龄变成整型
need_data['Age'] = need_data['Age'].apply(round).astype('int16')
#   按年龄分组
grouped = need_data.groupby('Age').Survived
#   将各个分组的人数分别求和
survived = grouped.sum()
#   各个分组的人数减去各个分组的存活数， 得出各个分组的死亡人数
died = grouped.size() - survived
df = pd.DataFrame(dict(died=died, survived=survived))
df.plot.bar(figsize=(20,10))

plt.show()
