const { ICO, wrongICO } = require("../specs/fixtures");

class OrderPage {

    constructor() {
        this.url = '/objednavka/pridat';
    }
    // společné selektory
    get icoField() { return $('#ico'); }
    get aresData() { return $('.toast-message') }
    get substituteNameField() { return $('#substitute') }
    get contactNameField() { return $('#contact_name') }
    get contactTelField() { return $('#contact_tel') }
    get contactMailField() { return $('#contact_mail') }
    get startDateField() { return $('#start_date_1') }
    get endDateField() {return $('#end_date_1')}

    // táborové selektory
    get serviceOrderedButton() { return $('#nav-home-tab') }
    get campDatePartField() { return $('#camp-date_part') }
    get campStudents() { return $('#camp-students') }
    get campAge() { return $('#camp-age') }
    get campAdults() { return $('#camp-adults') }
    get saveOrderButton() { return $('[name="camp"]') }
    get successOrder() {return $('.cart-body') } 
    get successMessage() { return $('.card-body') }
    get errorMessage() { return $('.toast-title') }
    get fieldError() { return $('.invalid-feedback'); }

    // selektory pro školu v přírodě
    get forTeachers() { return $('#navbarSupportedContent > div:nth-child(1) > div:nth-child(3) > a') }
    get orderMS() { return $('#navbarSupportedContent > div:nth-child(1) > div.nav-item.dropdown.show > div > a:nth-child(2)') }
    get serviceOrderedSchoolButton() { return $('#nav-profile-tab') }
    get schoolStudents() { return $('#nature-students') }
    get schoolAge() { return $('#nature-age') }
    get schoolAdults() { return $('#nature-adults') }
    get schoolStardDate() { return $('#nature-start_time') }
    get schoolFoodStart() { return $('#nature-start_food')}
    get schoolEndDate() { return $('#nature-end_time')}
    get schoolFoodEnd() { return $('#nature-end_food')}
    // našla bych i takto #nature-end_food [value="lunch"]
    get saveSchoolOrderButton() { return $('[name="school_nature"]') }

    open() {
        browser.reloadSession();
        browser.url(this.url);
    }

    ico() {
        this.icoField.setValue(ICO)
        browser.keys('Enter')
    }

    wrongIco() {
        this.icoField.setValue(wrongICO)
        browser.keys('Enter')
    }

    getAresData() {
        return this.aresData.getText()
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
        this.campDatePartField.selectByIndex(1)
        this.campStudents.setValue(3)
        this.campAge.setValue(13)
        this.campAdults.setValue(1)
    }

    saveOrder() {
        this.saveOrderButton.click()
    }

    getSuccessMessage() {
        return this.successMessage.getText()
    }

    getErrorMessage() {
        return this.errorMessage.getText()
    }

    getFieldError() {
        return this.fieldError.getText();
    }

    // druhý describe block
    clickOnForTeachers() {
        this.forTeachers.click()
    }

    selectOrderMS() {
        this.orderMS.click()
    }

    clickOnSchoolOrderPart() {
        this.serviceOrderedSchoolButton.click()
    }

    clickfillSchoolOrderPart() {
        this.schoolStudents.setValue(9)
        this.schoolAge.setValue(13)
        this.schoolAdults.setValue(2)
        this.schoolStardDate.setValue("12:00")
        this.schoolFoodStart.selectByIndex(2)
        this.schoolEndDate.setValue("12:00")
        this.schoolFoodEnd.selectByIndex(1)
    }

   saveSchoolCampOrder() {
    this.saveSchoolOrderButton.click()
   }
}

module.exports = new OrderPage();