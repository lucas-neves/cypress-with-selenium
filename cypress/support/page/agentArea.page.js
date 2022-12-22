const elements = {
    menuProfile: '.away-timer',
    dropDownStatus: '#toggler',
    chatList: 'li h5',
    chatMensagens: '[class*="smoothScroll"]',
    btnOpcoesConversa: '#moreOptionsButton',
    inputTransferSkill: '#react-select-2-input',
    optTransferSkill: '[id*=option]',
}

export const areaAgentePage = {

    colocarStatusOnline: () => {
        cy.log('Alterando o status do usuário para online')
        cy.get(elements.menuProfile).click()
        cy.get(elements.dropDownStatus).click()
        cy.contains('Online').click()
    },
    verOpcoesConversaCliente: (cliente) => {
        cy.log('Abrir lista de opções na conversa do cliente')
        cy.contains(elements.chatList, cliente).click({ force: true })
        cy.get(elements.chatMensagens).click()
        cy.get(elements.btnOpcoesConversa).click()
    },
    transferirConversaParaSkill: (skill) => {
        cy.log('Clicar sobre o botão para transferir conversa')
        cy.contains('ALT + T').click()
        cy.get(elements.inputTransferSkill).click({ force: true })
        cy.get(elements.inputTransferSkill).type(skill, { force: true })
        cy.contains(elements.optTransferSkill, skill).click()
        cy.contains('button:visible', 'Transferir').click()
    },
}
