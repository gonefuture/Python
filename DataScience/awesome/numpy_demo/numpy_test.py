# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/10/14 16:48
import numpy as np

# 快速创建一些特定的数组
a = np.zeros((2, 4))
b = np.ones((2, 3, 4), dtype=np.int64)
c = np.empty((4, 5))
#print('zeros:\n', a)
#print('ones: \n', b)
#print('empty:\n', c)


x = np.array([1, 2, 2.5])
x.astype(int)

y = np.array([3, 6, 2], dtype='S32')
y = y.astype('float64')

print(x - y)


