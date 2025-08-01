from selenium import webdriver

#iniciando el driver con chrome
driver = webdriver.Chrome()

#abriendo la web
driver.get("https://www.google.com.ar/index.html")

#cierre el navegador
driver.quit()