from random import choice
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import style
from numpy import arange

style.use('fivethirtyeight')

fig = plt.figure()
ax = fig.subplots()

x = []
y = []


k=range(int(input("Enter a max value : ")))

a=1
c=1

def animate(i):
    global a,c
    x.append(i)
    if a==0 or a==1:
        a=choice(k)
        print(f'\n########## itration {c} ############\n')
        c+=1
    if a%2==1:
        a=(a*3)+1
    else:
        a=a/2
    y.append(a)
    print(a)
    ax.clear()
    ax.plot(x,y)

ani = animation.FuncAnimation(fig, animate, frames=range(10**7),interval=1)
plt.show()
