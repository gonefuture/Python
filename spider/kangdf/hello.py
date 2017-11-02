def x():pass
x.name = 1


class f:
   def __call__(self): return 10
   def __add__(self, v): return v*2
func = f()
#x : int = func()        
assert func+2 == 4  
print (func+2 == 4)
print (x.name)