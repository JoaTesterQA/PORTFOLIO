from selenium import webdriver
from selenium.webdriver.common.by import By
import pytest
import time

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()
    time.sleep(2)
 
def test_visit_udemy(driver):
    driver.get("https://www.udemy.com/")
    assert "Udemy" in driver.title
    
def test_visit_google(driver):
    driver.get("https://www.google.com.ar/")
    assert "Google" in driver.title
    
def test_saucedemo_encontrar_elementos(driver):
    driver.get("https://www.saucedemo.com/")
    driver.find_element(By.XPATH, '//input[@data-test="username"]')
    driver.find_element(By.CSS_SELECTOR, '#user-name')
    driver.find_element(By.ID, "password")
    driver.find_element(By.CLASS_NAME, "password")
    assert "Laboratorios Swag" in driver.title
    