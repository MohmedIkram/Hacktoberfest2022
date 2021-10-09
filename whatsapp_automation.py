import time
import re
import os.path
from selenium.webdriver.common.by import By
from selenium import webdriver

driver = webdriver.Chrome(service_log_path='NUL')
#driver = None
URL = "https://web.whatsapp.com/"
driver.get(URL)
time.sleep(10)


vinu=driver.find_elements_by_xpath("//*[@id='pane-side']/div[1]/div/div/div[14]/div/div").click()
time.sleep(3)




# simple web whatsapp videocall automation
