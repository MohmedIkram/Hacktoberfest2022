import pyautogui, time
time.sleep(5)                      #time you have to move your cursor to the place you want to spam
file = open('messages.txt','r')
for word in file:
    pyautogui.typewrite(word)
    pyautogui.press('enter')


#(for giveaways if you want to spam you name infinite times)
#code below(line 11 - line 16)
#import pyautogui, time
#time.sleep(5)                      
#while(True):
#    pyautogui.typewrite('name')
#    time.sleep(2)                         #(time-gap in seconds between 2 spams)
#    pyautogui.press('enter')



#if you want to spam finite no.of times
#below code will spam the word 'name' 10 times(line 22- line 26)
#import pyautogui, time
#time.sleep(5)                     
#for i in range(0,10):                #change 10 to no.of times you want to spam
#    pyautogui.typewrite('name')
#    pyautogui.press('enter')


#INSTRUCTIONS TO RUN THE CODE
#open terminal first
#run this 6 line script by typing py spammer.py and press enter
#you will have 5 secs to place your cursor to a place you want to spam like watsapp web,insta etc
#boom enjoy 
#messages.txt contains the message you want to spam you can paste anything into it 
