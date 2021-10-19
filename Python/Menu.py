import tkinter as tk
from tkinter import font
from tkinter import messagebox
win = tk.Tk()
# win.configure(background="cyan")
win.title("Menu")
f=tk.Frame(win,bg='black',bd='4',cursor="dot")
fr2=tk.Frame(win,bg='black',bd='3',cursor="arrow")
f.pack(expand="True",fill="both",side="left")
fr2.pack(expand="True",fill="both",side="right")

price = {1: 3.50,
         2: 2.50,
         3: 4.00,
         4: 3.50,
         5: 1.75,
         6: 1.50,
         7: 2.25,
         8: 3.75,
         9: 1.25}

dishes = {1: 'Chicken Strips',
          2: 'French Fries',
          3: 'Hamburger',
          4: 'Hotdog',
          5: 'Large Drink',
          6: 'Medium Drink',
          7: 'Milk Shake',
          8: 'Salad',
          9: 'Small Drink'}

message = '''\n<<----MENU----->>\n
1. Chicken Strips - $3.50        
2. French Fries - $2.50          
3. Hamburger - $4.00             
4. Hotdog - $3.50                
5. Large Drink - $1.75           
6. Medium Drink - $1.50          
7. Milk Shake - $2.25            
8. Salad - $3.75                 
9. Small Drink - $1.25           \n'''

def f1():
    orders = entry.get()
    try:
        int(orders)
    except ValueError:
        label2.config(text="Invalid text")
    global price, dishes
    cost = 0
    items = {}
    for i in orders:
        if i in items.keys():
            items[i] += 1
        else:
            items[i] = 1
    string_print = ""
    for i in items:
        string_print += f" {items[i]}--{dishes[int(i)]} = ${items[i] * price[int(i)]:.2f}\n"
        cost += items[i] * price[int(i)]
    string_print += f">>Total Cost = ${cost:.2f}\n"
    label2.config(text=f'Orders:\n{string_print}',fg='#11FF83',font=("Montserrat Medium",10,"bold"),justify="left")

def f2():
    entry.delete(0,'end')
    label2.config(text="")

def ex():
    messagebox.showinfo( "Byee!!", "Thank You For The Visit")
    exit()

menu = tk.Label(f,text=message, font=('Consolas Bold',13),bg='#122738',fg='#FFC300')


label1 = tk.Label(fr2,text=" \nEnter your order numbers:   \n",font=('Arial Rounded MT Bold',11) ,bg='#122738',fg='#ff0088')


entry = tk.Entry(fr2,bd=4)
entry.insert(0,"Type Your Order Here")

button1 = tk.Button(fr2, text="Clear/New Order", font=("Bold",10,'bold'),command=f2, bg = 'black', fg = 'white')

button2 = tk.Button(fr2, text="Order", command=f1, bg = 'black', fg = 'white',font=("Arial",'10','bold'))

button3 = tk.Button(fr2, text="Exit", command=ex, bg = 'black', fg = 'white',font=("Arial",'10','bold'))

label2 = tk.Label(fr2,text="", bg='#122738')

menu.pack(expand = True, fill='both')
label1.pack(  fill='both')
entry.pack(  fill='both')
button2.pack( fill='both')
button1.pack( fill='both')
button3.pack( fill='both')
label2.pack(expand = True, fill='both')

win.mainloop()
