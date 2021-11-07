import Home from '../Pages/Home' 

Given(/^que acesso a pagina principal$/, () => {
	Home.visita_pagina();   
    
});

When(/^navego para secao Para voce$/, () => {
	cy.get('ul li[class="lum-first"]',{timeout:10000}).should('be.visible');
    Home.clica_cookies();
    cy.wait(1000)
    cy.get('ul[class=vr-quick-navigation__menu]',{timeout:10000}).should('be.visible');
    Home.clica_pravoce();
});

When(/^aperto o botao onde usar o meu VR$/, () => {	
    cy.get('div a[class="vr-button vr-button--negative "]',{timeout:10000}).should('be.visible');
    Home.clica_ondeaceita();
});

Then(/^valido se o mapa do google abriu$/, () => {
	cy.get('div[id="map"]',{timeout:150000}).should('be.visible') 
    cy.get('button#buscarResultados').should(($div) => {
        const text = $div.text()
        expect (text).to.include('Buscar')
    });
    
});

