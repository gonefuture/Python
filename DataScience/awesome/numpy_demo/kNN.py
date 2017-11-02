# -*- coding: utf-8 -*-
# @Author  : 钱伟健 gonefuture@qq.com 
# @Time    : 2017/10/29 23:19


from __future__ import print_function
from collections import Counter, defaultdict
import random
import csv
import numpy as np
import matplotlib.pyplot as plt


#   用来正常显示中文标签
plt.rcParams['font.sans-serif'] = ['SimHei']
#   用来正常显示负号
plt.rcParams['axes.unicode_minus'] = False

"""
    kNN算法（k-临近算法） 简单机器学习分类算法
        下面使用经典的鸢尾花的数据集，分析萼片的长宽和花瓣的长度与品种的关系  
"""

"""
    读取鸢尾花的数据
"""


def get_data(loc='D:/GitHub/Python/DataScience/iris.data.csv'):
    with open(loc, 'r') as fr :
        lines = csv.reader(fr)
        data_file = np.array(list(lines))

    #   数值部分
    data = data_file[0:, 0:-1].astype(float)

    #   花的品种
    labels = data_file[0:, -1]
    return data, labels


"""
    通过数据可视化的方式来验证数据集之间的关系
"""


def draw():
    style_list = ['ro', 'go', 'bo']
    data, labels = get_data()
    print(data)
    print(labels)
    cc = defaultdict(list)
    for i, d in enumerate(data):
        #   将三个类别的数据集分别放到三个种类里， defaultdict是会将重复的键合并
        #   ccdefaultdict(<class 'list'>, {'Iris-setosa': [array([ 5.1,  3.5,  1.4,  0.2]), array([ 4.9,..
        cc[labels[i]].append(d)
    p_list = []
    c_list = []
    plt.figure(1)
    for i, (c, ds) in enumerate(cc.items()):
        #   将数据集转化为numpy数组
        draw_data = np.array(ds)
        p = plt.plot(draw_data[:, 0], draw_data[:, 1], style_list[i])
        #   所有花萼的长、宽
        p_list.append(p)
        #   list [cIris-setosa, cIris-versicolor, cIris-virginica]
        c_list.append(c)
    #   设置图例
    plt.legend(map(lambda x: x[0], p_list), c_list)
    plt.title('鸢尾花萼片的长度和宽度')
    plt.xlabel('萼片的长度(cm)')
    plt.ylabel('萼片的宽度(cm)')

    plt.figure(2)
    for i, (c, ds) in enumerate(cc.items()):
        #   将数据集转化为numpy数组
        draw_data = np.array(ds)
        p = plt.plot(draw_data[:, 2], draw_data[:, 3], style_list[i])
        #   所有花瓣的长、宽
        p_list.append(p)
        #   list [cIris-setosa, cIris-versicolor, cIris-virginica]
        c_list.append(c)
    #   设置图例
    plt.legend(map(lambda x: x[0], p_list), c_list)
    plt.title('鸢尾花花瓣的长度和宽度')
    plt.xlabel('花瓣的长度(cm)')
    plt.ylabel('花瓣的宽度(cm)')

    plt.show()


"""
    kNN算法
    1)计算当前要分类的点与每一个已知分类点的距离
    2)对结果进行paixu
    3)选取距离最近的k个点
    4)统计这k个点不同分类出现的频次
    5)选取频次最高的分类作为当前要分类的点的分类
"""


def classify(input_data, train_data, labels, k):
    #   shape[0] 矩阵的维数  numpy数组的shape会返回一个元组,如(2,3)表示维数，行元素数
    data_size = train_data.shape[0]
    #   tile(A,reps) 把A数组沿各个方向复制 ,reps包含x和y
    diff = np.tile(input_data, (data_size, 1)) - train_data  # 矩阵相减
    sqrt_diff = diff ** 2   # 矩阵平方
    sqrt_distance = sqrt_diff.sum(axis=1)   # 沿x轴方向矩阵求和
    distance = np.sqrt(sqrt_distance)   # 开方
    sorted_index = distance.argsort()   # 参数排序，argsort函数返回的是数组值从小到大的索引值
    #   统计各个品种出现的频数
    class_count = Counter(labels[sorted_index[:k]])
    #   返回一个TopN列表。如果n没有被指定，则返回所有元素。当多个元素计数值相同时，排列是无确定顺序的。
    return class_count.most_common()[0][0]


print('=========================kNN算法开始=============')


"""
    编写测试
"""


def try_once():
    data, labels = get_data()
    index = list(range(len(data)))
    data = data[index]
    labels = labels[index]
    #   打乱索引，使得两个数据集乱序
    random.shuffle(index)
    labels = labels[index]
    data = data[index]
    #   取最后的一组数据
    input_data = data[-1]
    data = data[:-1]
    input_label = labels[-1]
    labels = labels[:-1]
    print('input_index:', index[-1])
    print('input_data:', input_data)
    print('true class:', input_label)
    print(classify(input_data,data, labels,5))


try_once()
draw()











