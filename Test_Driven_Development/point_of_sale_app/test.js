import sinon from 'sinon';
import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'

import PointOfSale from "./point_of_sale_app";
import MockDisplay from "../display/MockDisplay";

chai.use(sinonChai);

describe('PointOfSale', () => {
    afterEach(function () {
        sinon.restore();
    });

    it('displays the price of a scanned item to the shopper', () => {
        //Arrange
        const expectedPrice = 38.99;
        let actualPrice = null;
        const mockDisplay = new MockDisplay();

        //Act

        //Assert
        actualPrice = mockDisplay.displayedPrice;
        expect(actualPrice).to.equal(expectedPrice);
    });
});
