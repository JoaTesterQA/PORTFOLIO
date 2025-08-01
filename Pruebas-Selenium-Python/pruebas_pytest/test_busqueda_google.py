from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

def test_busqueda_google():
    driver = webdriver.Chrome()
    driver.get("https://www.google.com.ar/")

    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("Python")
    search_box.send_keys(Keys.RETURN)

    time.sleep(5)
    assert "Python" in driver.title  # Asegura que el título de la página tenga "Python"
    driver.quit()
