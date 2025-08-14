
# PORTFOLIO · QA / Automation — Joaquín Moreira (JoaTesterQA)

> Repositorio de proyectos de **Testing Manual y Automatizado**: Cypress (UI), Postman/Newman (APIs), Selenium con Python y más. Pensado como **portfolio profesional** para mostrar habilidades, buenas prácticas y resultados reproducibles.

---

## 📝 Resumen
Este repositorio reúne **ejemplos reales** de pruebas:
- **UI**: flujos críticos automatizados con **Cypress** y **Selenium**.
- **APIs**: colecciones de **Postman** ejecutables con **Newman**.
- **Manual**: casos, checklists y evidencias de pruebas manuales.

> **Objetivo:** demostrar pensamiento de prueba, cobertura de escenarios, diseño mantenible (POM/fixtures) y evidencias claras de resultados.

---

 🧰 Stack y herramientas

**Automatización UI**
- Cypress (JavaScript)
- Selenium + Python (pytest, webdriver-manager)

**APIs**
- Postman (colecciones + entornos)
- Newman (CLI) con reportes HTML

**Utilidades**
- Node.js + npm
- Python 3.10+
- GitHub Actions (CI)
- Reportes: mochawesome / pytest-html / newman-reporter-htmlextra

---

## 🗂️ Estructura del repo

```
PORTFOLIO/
├─ cypress/                     # Pruebas E2E con Cypress
│  ├─ e2e/                      # Especificaciones (spec files)
│  ├─ fixtures/                 # Datos de prueba
│  ├─ support/                  # Comandos, POM, hooks
│  └─ reports/                  # Reportes HTML/JUnit (generados)
├─ pruebas-selenium-python/     # Selenium + pytest
│  ├─ pages/                    # Page Objects
│  ├─ tests/                    # Scripts de pruebas
│  ├─ resources/                # Selectores, data, utils
│  └─ reports/                  # Reportes HTML
├─ pruebas-api-postman/         # Colecciones y entornos de Postman
│  ├─ collections/              # *.postman_collection.json
│  ├─ environments/             # *.postman_environment.json
│  └─ reports/                  # Reportes Newman
└─ manual-pruebas/              # Casos, checklists, evidencias manuales
```

---

## ▶️ Cómo ejecutar

### Cypress (UI E2E)

**Requisitos**: Node.js 18+, npm

```bash
npm ci
npx cypress open   # Modo interactivo
npx cypress run    # Modo headless
```

Con reporter HTML (mochawesome):
```bash
npm i -D cypress-mochawesome-reporter mochawesome
npx cypress run --reporter mochawesome
```

---

### Selenium + Python

**Requisitos**: Python 3.10+, pip

```bash
python -m venv .venv
source .venv/bin/activate   # Linux/Mac
.venv\Scripts\activate    # Windows

pip install -r pruebas-selenium-python/requirements.txt
pytest pruebas-selenium-python/tests -q --html=pruebas-selenium-python/reports/pytest-report.html --self-contained-html
```

---

### APIs con Postman + Newman

**Requisitos**: Node.js 18+, npm

```bash
npm i -g newman newman-reporter-htmlextra

newman run pruebas-api-postman/collections/<coleccion>.postman_collection.json   -e pruebas-api-postman/environments/<entorno>.postman_environment.json   -r htmlextra   --reporter-htmlextra-export pruebas-api-postman/reports/newman-report.html
```

---

## 🧪 Reportes y evidencias
- **UI**: screenshots y videos para casos fallidos y críticos.
- **APIs**: HTML detallado con request/response, variables y assertions.

