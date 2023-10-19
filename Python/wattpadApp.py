import tkinter as tk
import tkinter.font as tkFont
# from turtle import right
from wattpad_scraper import Wattpad

root = tk.Tk()


#setting title
root.title("Wattpad downloader")
#setting window size
width=600
height=120
screenwidth = root.winfo_screenwidth()
screenheight = root.winfo_screenheight()
alignstr = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
root.geometry(alignstr)
root.resizable(width=False, height=False)
#variable
isMature=False
isCompleted=False
bookLimit=0

def Download_button_command(url):
    w=Wattpad()
    book=w.get_book_by_url(url.get())
    book.convert_to_epub(loc='C:/Users/HP/Downloads')


def SearchButton_command(title,limit,mature,Completed):
    w=Wattpad()
    if bookLimit.isdigit():
        lit_box.insert("error only input integer")
    books=w.search_books(title,limit,mature,Completed)


def completedCheckBox_command(self):
    if(isCompleted==True):
        isCompleted=False
    else:
        isCompleted=True

def matureCheckBox_command(self):
    if(isMature==True):
        isMature=False
    else:
        isMature=True



url_label=tk.Label(root)
ft = tkFont.Font(family='Times',size=10)
url_label["font"] = ft
url_label["fg"] = "#333333"
url_label["justify"] = "center"
url_label["text"] = "URL:"
url_label.place(x=0,y=40,width=70,height=25)

url_entry=tk.Entry(root)
url_entry["borderwidth"] = "1px"
ft = tkFont.Font(family='Times',size=10)
url_entry["font"] = ft
url_entry["fg"] = "#333333"
url_entry["justify"] = "center"
url_entry["text"] = "Entry"
url_entry.place(x=70,y=40,width=529,height=30)

# Search_label=tk.Label(root)
# ft = tkFont.Font(family='Times',size=10)
# Search_label["font"] = ft
# Search_label["fg"] = "#333333"
# Search_label["justify"] = "center"
# Search_label["text"] = "SEARCH:"
# Search_label.place(x=0,y=120,width=70,height=25)


# Search_entry=tk.Entry(root)
# Search_entry["borderwidth"] = "1px"
# ft = tkFont.Font(family='Times',size=10)
# Search_entry["font"] = ft
# Search_entry["fg"] = "#333333"
# Search_entry["justify"] = "center"
# # Search_entry["text"] = "Entry"
# Search_entry.place(x=70,y=120,width=528,height=31)

Download_button=tk.Button(root)
Download_button["bg"] = "#f0f0f0"
ft = tkFont.Font(family='Times',size=10)
Download_button["font"] = ft
Download_button["fg"] = "#000000"
Download_button["justify"] = "center"
Download_button["text"] = "Download"
Download_button.place(x=250,y=80,width=70,height=25)
Download_button["command"] = lambda:Download_button_command(url_entry)

# SearchButton=tk.Button(root)
# SearchButton["bg"] = "#f0f0f0"
# ft = tkFont.Font(family='Times',size=10)
# SearchButton["font"] = ft
# SearchButton["fg"] = "#000000"
# SearchButton["justify"] = "center"
# SearchButton["text"] = "search"
# SearchButton.place(x=250,y=260,width=70,height=25)
# SearchButton["command"] = lambda:SearchButton_command(title= Search_entry.get(),limit=limitCount,mature=isMature,Completed=isCompleted)

# completedCheckBox=tk.Checkbutton(root)
# ft = tkFont.Font(family='Times',size=10)
# completedCheckBox["font"] = ft
# completedCheckBox["fg"] = "#333333"
# completedCheckBox["justify"] = "center"
# completedCheckBox["text"] = "completed"
# completedCheckBox.place(x=70,y=170,width=70,height=25)
# completedCheckBox["offvalue"] = "0"
# completedCheckBox["onvalue"] = "1"
# completedCheckBox["command"] = completedCheckBox_command

# matureCheckBox=tk.Checkbutton(root)
# ft = tkFont.Font(family='Times',size=10)
# matureCheckBox["font"] = ft
# matureCheckBox["fg"] = "#333333"
# matureCheckBox["justify"] = "center"
# matureCheckBox["text"] = "mature"
# matureCheckBox.place(x=60,y=200,width=70,height=25)
# matureCheckBox["offvalue"] = "0"
# matureCheckBox["onvalue"] = "1"
# matureCheckBox["command"] = matureCheckBox_command

# limitCount=tk.Label(root)
# ft = tkFont.Font(family='Times',size=10)
# limitCount["font"] = ft
# limitCount["fg"] = "#333333"
# limitCount["justify"] = "center"
# limitCount["text"] = "Limit"
# limitCount.place(x=50,y=230,width=70,height=25)


# limitEntry=tk.Entry(root)
# limitEntry["borderwidth"] = "1px"
# ft = tkFont.Font(family='Times',size=10)
# limitEntry["font"] = ft
# limitEntry["fg"] = "#333333"
# limitEntry["justify"] = "center"
# # limitEntry["text"] = "Entry"
# limitEntry.place(x=130,y=230,width=100,height=31)


# lit_box=tk.Listbox(root)
# lit_box["borderwidth"] = "1px"
# ft = tkFont.Font(family='Times',size=10)
# lit_box["font"] = ft
# lit_box["fg"] = "#333333"
# lit_box["justify"] = "center"
# lit_box.place(x=20,y=300,width=565,height=183)

# #croll bar
# scrollbar = tk.Scrollbar(root)
  
# # Adding Scrollbar to the right
# # side of root window


# lit_box.config(yscrollcommand= scrollbar.set)
# scrollbar.place(x=585,y=300,height=183)


# # scrollbar.pack(side = "right", fill = "both")
# scrollbar.config(command = lit_box.yview)
  
root.mainloop()
