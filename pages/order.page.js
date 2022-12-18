class OrderPage {

    constructor() {
        this.url = '/objednavka/pridat';
    }

    get icoField() { return $('#ico'); }

    open() {
        browser.reloadSession();
        browser.url(this.url);
    }

}

module.exports = new OrderPage();