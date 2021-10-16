from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

USERNAME = "ITS_ME_DIO"
PASSWORD = "01817711262"

# path = "/home/ahnaf/PycharmProjects/pythonProject/chromedriver"
path = 'Your CHROMEDRIVER path'

driver = webdriver.Chrome(executable_path=path)

driver.get("https://www.codeforces.com")

enter_button = driver.find_element(By.LINK_TEXT, 'Enter')
enter_button.click()

time.sleep(3)

handle = driver.find_element(By.ID, "handleOrEmail")
handle.send_keys(USERNAME)
password = driver.find_element(By.ID, "password")
password.send_keys(PASSWORD)
login_button = driver.find_element(By.CLASS_NAME, 'submit')
login_button.click()

time.sleep(5)
contest_menu = driver.find_element(By.LINK_TEXT, 'CONTESTS')
contest_menu.click()

contest_link = driver.find_elements(By.LINK_TEXT, 'Register »')
# print(contest_link)
for contest in contest_link:
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, 'Register »')))

    element.click()
    time.sleep(2)
    submit = driver.find_element(By.CSS_SELECTOR, 'input.submit')
    CurrentUrl = driver.current_url
    submit.click()
    time.sleep(2)

    if CurrentUrl == driver.current_url:
        driver.back()
        continue
    else:
        continue

driver.quit()
