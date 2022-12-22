/// <reference types="cypress" />

import { loginPage } from '../support/page/login.page'
import { menuPage } from '../support/page/menu.page'
import { areaAgentePage } from '../support/page/agentArea.page'

describe('verificacao_mensagens_automaticas', () => {
  it('Cypress usando trocas de aba com tasks de Selenium', () => {
    
    // Dado que o agente esteja online no site
    cy.visit('https://company.com.br/login')
    loginPage.logarUsuarioAgente()

    menuPage.clicarMenuAreaAgente()
    areaAgentePage.colocarStatusOnline()
    
    cy.intercept('GET', '**/conversation?').as('conversation')
    cy.intercept('POST', '**/conversations-check').as('conversations')
    cy.wait('@conversation')
    cy.wait('@conversations')

    // Quando inicio um novo atendimento no bot
    const name = cy.faker.name.findName()
    cy.intercept('GET', '**/csat/user').as('csat')
    cy.task('seleniumInitBot', name)

    // E retorno para a janela de chats com a conversa do cliente
    cy.wait('@csat')
    areaAgentePage.verOpcoesConversaCliente(name)

    // Então faço a transferência do atendimento para a skill destino "Automated Tests"
    areaAgentePage.transferirConversaParaSkill('Automated Tests')

    // E valido que o atendimento foi transferido com sucesso
    cy.validateToastMessage('Conversa transferida com sucesso')
    cy.task('seleniumCloseBot')
  })
})