import { getFieldValueById } from "../pages/functions.js"
import orderPage, { datePart, ico, serviceOrdered } from "../pages/order.page.js";
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
    wrongPhone
} from './fixtures.js'

describe('Objednávka pro MŠ/ZŠ', () => {
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

    it.only('fill invalid credential', () => {
   
        OrderPage.ico(ICO)
        expect(OrderPage.getAresData()).toContain('Data z ARESu úspěšně načtena')

        OrderPage.fillTheContactPart(substituteName, contactName, wrongPhone, contactEmail, startDate, endDate)
        browser.pause(5000)

        OrderPage.clickOnCampOrderPart()
        OrderPage.fillCampOrderPart()
        OrderPage.saveOrder()
        browser.pause(5000)

        expect(OrderPage.getErrorMessage()).toContain('Špatně zadané pole')
    })

});
