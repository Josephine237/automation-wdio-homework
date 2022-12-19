class OrderPage {

    constructor() {
        this.url = '/objednavka/pridat';
    }

    get icoField() { return $('#ico'); }
    get substituteNameField() { return $('#substitute') }
    get contactNameField() { return $('#contact_name') }
    get contactTelField() { return $('#contact_tel') }
    get contactMailField() { return $('#contact_mail') }
    get startDateField() { return $('#start_date_1') }
    get endDateField() {return $('#end_date_1')}


    open() {
        browser.reloadSession();
        browser.url(this.url);
    }

    fillTheContactPart(substituteName, contactName, contactPhone, contactEmail, startDate, endDate) {
        this.substituteNameField.setValue(substituteName)
        this.contactNameField.setValue(contactName)
        this.contactTelField.setValue(contactPhone)
        this.contactMailField.setValue(contactEmail)
        this.startDateField.setValue(startDate)
        this.endDateField.setValue(endDate)
    }
}

module.exports = new OrderPage();