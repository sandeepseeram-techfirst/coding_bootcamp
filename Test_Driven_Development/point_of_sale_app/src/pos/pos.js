import sinon from 'sinon';
import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'

import PointOfSale from "./PointOfSale";
import MockDisplay from '../display/MockDisplay';
import MockPricingService from '../pricingservice/MockPricingService';
import InventoryItem from '../pricingservice/InventoryItem';

chai.use(sinonChai);

describe('PointOfSale', () => {
    afterEach(function () {
        sinon.restore();
    });

    it('displays the price of a scanned item to the shopper', () => {
        //Arrange
        const testItemId = "abc-123";
        const expectedPrice = 38.99;
        let actualPrice = null;
        const expectedItem = new InventoryItem(testItemId, "Test Item", expectedPrice);
        const mockDisplay = new MockDisplay();
        const mockPricingService = new MockPricingService();
        mockPricingService.setItem(expectedItem);

        const testPointOfSale = new PointOfSale(mockDisplay, mockPricingService);

        //Act
        testPointOfSale.scanItem(testItemId);

        //Assert
        actualPrice = mockDisplay.displayedPrice;
        expect(actualPrice).to.equal(expectedPrice);
    });
});
