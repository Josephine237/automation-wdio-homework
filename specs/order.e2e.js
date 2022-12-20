import { getFieldValueById } from "../pages/functions.js"
import OrderPage from '../pages/order.page.js'
import {
    ICO,
    clientName,
    address,
    substituteName,
    contactName,
    contactPhone,
    contactEmail,
    startDate,
    endDate,
    wrongICO,
    wrongPhone,
} from './fixtures.js'

describe('Objednávka pro tábor MŠ/ZŠ', () => {
    beforeEach(() => {
        OrderPage.open()
    })

    it('fill valid credentials', () => {
   
        OrderPage.ico(ICO)
        expect(OrderPage.getAresData()).toContain('Data z ARESu úspěšně načtena')

        OrderPage.fillTheContactPart(substituteName, contactName, contactPhone, contactEmail, startDate, endDate)

        OrderPage.clickOnCampOrderPart()
        OrderPage.fillCampOrderPart()
        OrderPage.saveOrder()

        browser.pause(5000)
        expect(OrderPage.getSuccessMessage()).toContain('Objednávka byla úspěšně uložena')

    })

    it('fill invalid ico', () => {
   
        OrderPage.wrongIco(wrongICO)
        browser.pause(5000)
        expect(OrderPage.getAresData()).toContain('IČO nenalezeno')
    })

    it('fill invalid credential', () => {
   
        OrderPage.ico(ICO)
        expect(OrderPage.getAresData()).toContain('Data z ARESu úspěšně načtena')

        OrderPage.fillTheContactPart(substituteName, contactName, wrongPhone, contactEmail, startDate, endDate)

        OrderPage.clickOnCampOrderPart()
        OrderPage.fillCampOrderPart()
        OrderPage.saveOrder()

        // zde fungují obě assertace
        expect(OrderPage.getErrorMessage()).toContain('Špatně zadané pole')
        expect(OrderPage.getFieldError()).toEqual('Telefon není ve správném formátu')
    })

});

describe('Objednávka pro školu v přírodě MŠ/ZŠ', () => {
    beforeEach(() => {
        browser.reloadSession();
        browser.url('/');
    })

    it('fill valid credentials', () => {

        OrderPage.clickOnForTeachers()
        OrderPage.selectOrderMS()

        OrderPage.ico(ICO)
        expect(OrderPage.getAresData()).toContain('Data z ARESu úspěšně načtena')

        OrderPage.fillTheContactPart(substituteName, contactName, contactPhone, contactEmail, startDate, endDate)

        OrderPage.clickOnSchoolOrderPart()
        OrderPage.clickfillSchoolOrderPart()

        OrderPage.saveSchoolCampOrder()
        expect(OrderPage.getSuccessMessage()).toContain('Objednávka byla úspěšně uložena')

    })



});
