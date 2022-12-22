var BasePage = require('./basePage')

const elements = {
    inputChat: 'input[type="text"]',
    btnSend: 'button[type="submit"]',
    btnCloseConversation: '#close-livechat',
}

class BotPage extends BasePage {

    async acessarBot(url) {
        await this.goToUrl(url)
    }
    async validarMensagemAutomatica(msg) {
        await this.validateMessage(msg)
    }
    async preencherNome(name) {
        await this.enterTextByCss(elements.inputChat, name)
        await this.clickByCss(elements.btnSend)
    }
    async selecionarCanal() {
        await this.clickByText('Testes Automatizados')
    }
    async botFecharConversa() {
        await this.clickByCss(elements.btnCloseConversation)
    }
    async botFecharNavegador() {
        await this.closeBrowser()
    }
}

module.exports = new BotPage()
