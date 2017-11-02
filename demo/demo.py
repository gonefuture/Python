from collections import defaultdict

def groupBy(fn):
  def foo(lst):
    m = defaultdict(list)
    for v in lst:
      m[fn(v)].append(v)
    return dict(m)
  return foo

grpby = groupBy(lambda x: x%2 is 1)

print ("--------------------")
