from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

#inicaindo el navegador
driver = webdriver.Chrome()

#ingresando a la web
driver.get("https://www.google.com.ar/index.html")

#encontrar la caja de busqueda por el nombre
search_box = driver.find_element(By.NAME, "q")

#escribir python y presionamos enter
search_box.send_keys("Python")
search_box.send_keys(Keys.RETURN)
  
#esperamos para ver los resultados
import time
time.sleep(5)

#cerramos el navegador

driver.quit()