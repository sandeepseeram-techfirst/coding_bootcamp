import sinon from 'sinon';
import chai, { expect, assert } from 'chai'
import sinonChai from 'sinon-chai'

import PointOfSale from "./PointOfSale";

chai.use(sinonChai);

describe('PointOfSale', () => {
    afterEach(function () {
        sinon.restore();
    });

    it('displays the price of a scanned item to the shopper', () => {
        //Arrange

        //Act

        //Assert
        //You will start your test implementation here, for now fail as not implemented.
        assert.fail("Test not implemented!");
    });
});
