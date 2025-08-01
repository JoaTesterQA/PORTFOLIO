from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pytest
import time

@pytest.fixture
def driver():
    options = Options()
    options.add_experimental_option("prefs", {
        "credentials_enable_service": False,
        "profile.password_manager_enabled": False
    })
    driver = webdriver.Chrome(options=options)
    driver.get("https://www.saucedemo.com/")
    yield driver
    time.sleep(10)
    driver.quit()
    
    
def test_login(driver):
    username = driver.find_element(By.XPATH, '//input[@data-test="username"]')
    username.send_keys("standard_user")
    password = driver.find_element(By.ID, "password")
    password.send_keys("secret_sauce")
    button = driver.find_element(By.XPATH, '//input[@type="submit"]')
    button.click()
      # Validamos que el login funcionó
    assert "inventory" in driver.current_url

def test_cart(driver):
    test_login(driver)
    
    #agregar al carrito
    product = driver.find_element(By.ID, "add-to-cart-sauce-labs-backpack")
    product.click() 
    cart = driver.find_element(By.ID, "shopping_cart_container")
    cart.click()
    WebDriverWait(driver, 10).until(EC.url_contains("cart"))
    assert "cart" in driver.current_url
    
    #llenamos los datos
    checkout = driver.find_element(By.ID, "checkout")
    checkout.click()
    first_name = driver.find_element(By.XPATH, '//input[@data-test="firstName"]')
    first_name.send_keys("Joaquin")
    last_name = driver.find_element(By.XPATH, '//input[@data-test="lastName"]')
    last_name.send_keys("Moreira")
    postal_code = driver.find_element(By.XPATH, '//input[@data-test="postalCode"]')
    postal_code.send_keys("1763")
    button = driver.find_element(By.XPATH, '//input[@data-test="continue"]')
    button.click()
    
    #Finalizamos compra
    finish = driver.find_element(By.XPATH, '//button[@data-test="finish"]')
    finish.click()
    WebDriverWait(driver, 10).until(EC.url_contains("checkout-complete"))
    assert "checkout-complete" in driver.current_url 
  
  