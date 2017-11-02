# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/10/21 21:24

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from . import robot

file = "D:/GitHub/Python/DataScience/iris.data.csv"
df = pd.read_csv(file, header=None)
df.head(10)
y = df.loc[0:100, 4].values
y = np.where(y == 'Iris-setosa', -1, 1)

X = df.iloc[0:100, [0,2]].values

plt.scatter(X[:50, 0], X[:50, 1], color='red', marker='o', label='setosa')
plt.scatter(X[50:100, 0], X[50:100, 1], color='blue', marker='x', label='versicolor')
plt.xlabel(u'花瓣长度')
plt.ylabel(u'花径长度')
plt.legend(loc='upper left')
plt.show()

ppn = robot.Perceptron(eta=0.1, n_iter=10)
ppn.fit(X, y)
plt.plot(range(1, len(ppn.errors_) + 1), ppn.errors_, marker='o')
plt.xlabel('Epochs')
plt.ylabel('错误分类次数')
plt.show()
