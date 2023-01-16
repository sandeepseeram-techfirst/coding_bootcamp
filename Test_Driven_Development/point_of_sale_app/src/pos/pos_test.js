import sinon from 'sinon';
import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'

import PointOfSale from "./PointOfSale";
import MockDisplay from '../display/MockDisplay';
import Display from '../display/Display';
import MockPricingService from '../pricingservice/MockPricingService';
import PricingService from '../pricingservice/PricingService';
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

    it('displays the price of a different scanned item to the shopper', () => {
        //Arrange
        const testItemId = "def-456";
        const expectedPrice = 123.45;
        let actualPrice = null;
        const expectedItem = new InventoryItem(testItemId, "A Different Test Item", expectedPrice);
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

    it('displays the price of a scanned item to the shopper using Sinon mocks', () => {
        //Arrange
        const testItemId = "sinon-789";
        const expectedPrice = 78.90;
        const expectedItem = new InventoryItem(testItemId, "A Sinon Test Item", expectedPrice);
        const mockDisplay = sinon.createStubInstance(Display);
        const mockPricingService = sinon.createStubInstance(PricingService);
        mockPricingService.getItem.withArgs(testItemId).returns(expectedItem);

        const testPointOfSale = new PointOfSale(mockDisplay, mockPricingService);

        //Act
        testPointOfSale.scanItem(testItemId);

        //Assert
        expect(mockDisplay.displaySale).to.have.been.calledWith(expectedPrice);
    });
});
