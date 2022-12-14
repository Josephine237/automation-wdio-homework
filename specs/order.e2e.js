import { getFieldValueById } from "../pages/functions.js"
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

    it.only('fill valid credentials', () => {
        browser.reloadSession();
        browser.url('/objednavka/pridat');
   
        $('#ico').setValue(ICO)
        browser.keys('Enter')
        const aresData = $('.toast-message').getText()
        expect(aresData).toContain('Data z ARESu úspěšně načtena')

        $('#substitute').setValue(substituteName)
        $('#contact_name').setValue(contactName)
        $('#contact_tel').setValue(contactPhone)
        $('#contact_mail').setValue(contactEmail)
        $('#start_date_1').setValue(startDate)
        $('#end_date_1').setValue(endDate)

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
        browser.reloadSession();
        browser.url('/objednavka/pridat');
   
        $('#ico').setValue(wrongICO)
        browser.keys('Enter')
       
    })

});
