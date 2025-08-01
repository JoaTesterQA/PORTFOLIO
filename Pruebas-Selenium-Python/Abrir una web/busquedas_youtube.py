from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

#abrimos el navegador
driver = webdriver.Chrome()

#abrimos la web
driver.get("https://www.youtube.com/")

#aceptar cookies si aparecen
try:
    wait = WebDriverWait(driver, 5)
    accept_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(., 'Acepto')]")))
    accept_btn.click()
except: 
    pass

#esperar y encontrar en el dom
search_box = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.NAME, "search_query"))
)

#buscar curso de python
search_box.send_keys("curso de python")
search_box.send_keys(Keys.RETURN)

#esperar resultados
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "video-title"))
)

time.sleep(5)
driver.save_screenshot("busqueda en youtube")
print("captura realizada")

driver.quit()