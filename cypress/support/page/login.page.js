const elements = {
    inputDominioEmpresa: '#slug',
    inputEmail: '#email',
    inputSenha: '#password',
    // buttons
    btnEntrar: 'button[type="submit"]',
    textEsqueciMinhaSenha: 'a[class="text-muted"]',
}

export const loginPage = {

    logarUsuarioAleatorio: (cpf) => {
        cy.log(`Logar com o usuário ${cpf}`)
        cy.get(elements.inputEmail).type(cpf)
        cy.get(elements.senha).type('sem senha')
        cy.get(elements.btnEntrar).click()
    },
    logarUsuarioAdmin: () => {
        cy.log('Logar com o usuário admin')
        cy.get(elements.inputDominioEmpresa).type('porto')
        // sleep(1)
        cy.get(elements.inputEmail).type('admin@company.com.br')
        // sleep(1)
        cy.get(elements.inputSenha).type('company123*')
        cy.get(elements.btnEntrar).click()
        // sleep(3)
    },
    logarUsuarioAgente: () => {
        cy.log('Logar com o usuário agente')
        cy.get(elements.inputDominioEmpresa).type('porto')
        // sleep(1)
        cy.get(elements.inputEmail).type('agente@company.com.br')
        // sleep(1)
        cy.get(elements.inputSenha).type('company123*')
        cy.get(elements.btnEntrar).click()
        // sleep(3)
    },
    preencherDominio: (dominio) => {
        cy.log(`Preenhcer domínio com ${dominio}`)
        cy.get(elements.inputDominioEmpresa).type(dominio)
    },
    preencherEmail: (email) => {
        cy.log(`Prencher email com: ${email}`)
        cy.get(elements.inputEmail).type(email)
    },
    preencherSenha: (senha) => {
        cy.log(`Preencher senha com: ${senha}`)
        cy.get(elements.inputSenha).type(senha)
    },
    clicarBotaoEntrar: () => {
        cy.log(`Clicar no botão entrar`)
        cy.contains('Entrar').click()
    },
    clicarBotaoRecuperar: () => {
        cy.log('Clicar no botão Recuperar')
        cy.contains('Recuperar').click()
    },
    clicarEsqueciMinhaSenha: () => {
        cy.log('Clicar em esqueci minha senha')
        cy.get(elements.textEsqueciMinhaSenha).click
    },
    validarMsgCamposObrigatorios: (qtd) => {
        cy.log('Validar mensagens de campos obrigatórios e Preencha pelo menos um campo')
        cy.get('//*[contains(text(), "Campo obrigatório")]').should('eq', qtd)
    }
}
