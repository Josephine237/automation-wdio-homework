import { getFieldValueById } from "../pages/functions.js"
import orderPage, { datePart, serviceOrdered } from "../pages/order.page.js";
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
    wrongICO
} from './fixtures.js'

describe('Objednávka pro MŠ/ZŠ', () => {
    beforeEach(() => {
        OrderPage.open()
    })

    it('fill valid credentials', () => {
   
        $('#ico').setValue(ICO)
        browser.keys('Enter')
        const aresData = $('.toast-message').getText()
        expect(aresData).toContain('Data z ARESu úspěšně načtena')

        OrderPage.fillTheContactPart(substituteName, contactName, contactPhone, contactEmail, startDate, endDate)

        OrderPage.clickOnCampOrderPart()
        OrderPage.fillCampOrderPart()
        OrderPage.saveOrder()

 
        browser.pause(5000)
        expect(OrderPage.getSuccessMessage()).toContain('Objednávka byla úspěšně uložena')

    })

    it('fill invalid credentials', () => {
   
        $('#ico').setValue(wrongICO)
        browser.keys('Enter')

        const errorMessage = $('.toast-message').getText()
        expect(errorMessage).toContain('IČO nenalezeno')
       
    })

});
