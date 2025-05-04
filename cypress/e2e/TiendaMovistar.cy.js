import MovistarPage from "../support/PageObjects/MovistarPage";

const movistarPage = new MovistarPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ('TIENDA MOVISTAR', function (){
    beforeEach(() => {
        cy.visit("https://tiendaonline.movistar.com.ar/")
    })

    it ('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A15',function(){
        //Buscamos y clickeamos en el equipo A15
        cy.get('ol > [data-id="18583"] > a > .product-image-container > .cp-data-container > .product-item-name > .name').click()
        //Validamos que haya 12 cuotas sin interes
        cy.get('#tab_card > .price_information > .price-content').invoke('text').should('include', 'Hasta 12 cuotas sin interés')
    })

    it ('CP002 - Aplicar filtro de equipos - Memoria Interna: 128GB - Precio Entre $300K y $600K', function () {
            // Aplicar filtro de precio
            movistarPage.FiltroPrecio()
            movistarPage.Precio()
            movistarPage.ValorPrecio()
          
            // Aplicar filtro de memoria interna
            movistarPage.FiltroAlmacenamiento()
            movistarPage.Almacenamiento()
            movistarPage.Memoria128()

            //Validamos el resultado del filtro
            movistarPage.ResultadoFiltro()  

            //Capturamos la pantalla completa
            movistarPage.ScreenshotFiltro()      
          })

    it ('CP003- Validar cuotas en compra de equipo- cuotas.60.equipo tercero de la lista-banco.credicoop-tarjeta.visa', function (){
            //Elegimos el tercer equipo
            movistarPage.TercerEquipo()

            //Clickeamos los medios de pago y seleccionamos el banco
            movistarPage.MediosDePago()
            movistarPage.SelectorBanco()
            movistarPage.BancoCredicoop()

            //Seleccionamos la tarjeta
            movistarPage.SelectorTarjeta()
            movistarPage.TarjetaVisa()

            //Validamos que no exista cuotas 60
            movistarPage.Cuota()

            //Capturamos la pantalla completa
            movistarPage.Screenshot()
          })
          
})