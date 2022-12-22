const elements = {
    menuAreaAgente: '[class="bx bx-chat"]',
}

export const menuPage = {

    clicarMenuAreaAgente: () => {
        cy.log('clicar no menu area agente')
        cy.get(elements.menuAreaAgente).click()
    },
}
