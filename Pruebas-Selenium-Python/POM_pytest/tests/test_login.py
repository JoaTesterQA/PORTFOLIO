# tests/test_login.py
from pages.login_page import LoginPage

def test_login_exitoso(driver):
    login_page = LoginPage(driver)
    login_page.login("standard_user", "secret_sauce")

    # Verificamos que el login fue exitoso
    assert "inventory" in driver.current_url


