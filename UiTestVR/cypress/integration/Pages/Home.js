const elements = {

    btn_cookies: 'ul li[class="lum-first"]',
    list_paravoce: 'ul li[class*=vr-quick-navigation__item]',
    btn_ondeaceita: 'div a[class="vr-button vr-button--negative "]'
}

class Home{

          visita_pagina(){
              cy.visit('https://www.vr.com.br/')
          }
          clica_cookies(){
              cy.get(elements.btn_cookies).click()
          }            
          clica_pravoce(){              
            cy.get(elements.list_paravoce).eq(2).click()                            
        
          }
          clica_ondeaceita(){
            cy.get(elements.btn_ondeaceita).click()
          }

}

export default new Home();
