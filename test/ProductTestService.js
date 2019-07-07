const assert = require('chai').assert;

const ProductService = require('../Service/ProductService')


describe('Product model', () => {

    it('should add the test data with the Products Service to the Product table', async () => {
        let dataArr = "product data"
        let productServ = new ProductService()

        const res = await productServ.createOrUpdateProduct(dataArr)
        assert.isOk(res.length, dataArr.length);
    });

});
