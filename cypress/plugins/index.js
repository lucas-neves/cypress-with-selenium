/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
/* eslint-disable @typescript-eslint/no-var-requires */


module.exports = (on, config) => {
	on("before:browser:launch", (browser = {}, launchOptions) => {
        launchOptions.args = launchOptions.args.map((arg) => {
          if (arg.startsWith("--proxy-bypass-list")) {
            return "--proxy-bypass-list=<-loopback>,wss://*socket.chatbot.com*"
          }
          return arg
        })
        return launchOptions
	})
  let botPage

  on('task', {
    seleniumInitBot: async(name) => {
      botPage = require('../support/selenium/page/bot.page')
      await botPage.acessarBot('https://chatbot.com/chats/company/id/index.html')
      await botPage.preencherNome(name)
      await botPage.selecionarCanal()
      await botPage.validarMensagemAutomatica('Um atendente (Testes Automatizados Agente) está disponível e você será atendido logo em seguida.')
      return null
    },
    seleniumCloseBot: async() => {
      await botPage.validarMensagemAutomatica('Você foi transferido para fila de antedimento de outra habilidade. Por favor, aguarde até que um de nossos colaboradores responda.')
      await botPage.botFecharConversa()
      await botPage.validarMensagemAutomatica('Olá, qual seu nome completo para iniciarmos o atendimento?')

    }
  })
}
