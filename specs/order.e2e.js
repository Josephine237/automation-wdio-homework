import { getFieldValueById } from "../pages/functions.js"
import orderPage from "../pages/order.page.js";
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

        $('#nav-home-tab').click()
        $('#camp-date_part').selectByIndex(1)
        $('#camp-students').setValue(1)
        $('#camp-age').setValue(13)
        $('#camp-adults').setValue(1)

        $('[name="camp"]').click()
        browser.pause(5000)
        const successOrder = $('.card-body').getText()
        expect(successOrder).toContain('Objednávka byla úspěšně uložena')

    })

    it('fill invalid credentials', () => {
   
        $('#ico').setValue(wrongICO)
        browser.keys('Enter')

        const errorMessage = $('.toast-message').getText()
        expect(errorMessage).toContain('IČO nenalezeno')
       
    })

});
