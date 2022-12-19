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

    get serviceOrderedButton() { return $('#nav-home-tab') }
    get datePartField() { return $('#camp-date_part') }
    get students() { return $('#camp-students') }
    get age() { return $('#camp-age') }
    get adults() { return $('#camp-adults') }
    get saveOrderButton() { return $('[name="camp"]') }
    get successOrder() {return $('.cart-body') } 
    get successMessage() { return $('.card-body')}


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

    clickOnCampOrderPart() {
        this.serviceOrderedButton.click()
    }

    fillCampOrderPart() {
        this.datePartField.selectByIndex(1)
        this.students.setValue(3)
        this.age.setValue(13)
        this.adults.setValue(1)
    }

    saveOrder() {
        this.saveOrderButton.click()
    }

    getSuccessMessage() {
        return this.successMessage.getText()
    }
}

module.exports = new OrderPage();