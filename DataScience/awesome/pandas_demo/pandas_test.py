# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/10/31 16:30

import pandas as pd
import numpy as np

a = pd.Series([1, 0.3, np.nan])
b = pd.Series(np.array([1, 2, 3]))
print('a\n', a)
print('b\n',b)
print("====================================\n")

#   Series
c = pd.Series([1, 2, 3], index=["a", "b", "c"])
print('c\n', c)
print('c[\'b\']\n', c['b'])
print(c.get('d'),np.nan)

d = pd.Series({'c': 0, 'd': 1, 'e': 2})
print('d\n', d)
print("====================================\n")

#   使用numpy对象创建DataFrame
date = pd.date_range('20160101', periods=5)
df = pd.DataFrame(np.random.randn(5,4),index=date, columns=list("ABCD"))
print(df)
print("====================================\n")

df2 = pd.DataFrame({'A': 2.,
                    'B': pd.Timestamp('20160101'),
                    'C': pd.Series(3, index=list(range(4)), dtype='float64'),
                    'D': np.array([3]*4, dtype='int64'),
                    'E': pd.Categorical(["t1", "t2", "t3", "t4"]),
                    'F': 'abc'})
print(df2)
print(df.dtypes)
print(df2.C)
print("====================================\n")

#   选择
print(df['A'])  # 获取某一栏是全部数据
print(df[1:3])  # 获取索引为1:3的行数据
#print(df['20160102', :'20160103'])  # 获取索引值为'20160101':'20160102'的行数据

#   loc是定位元素的方法
print(df.loc(date[0]))  # 获取date第一个索引的数据
print(df.loc[:,['A', 'B']]) # 获取栏名为AB的全部行数据
print(df.loc['20160102':'20160104',['A', 'B']]) # 获取索引在'20160102':'20160104'范围的AB栏的数据
print(df.loc['20160102', ['A', 'B']])   # 获取索引为‘20160102’的AB栏的数据


