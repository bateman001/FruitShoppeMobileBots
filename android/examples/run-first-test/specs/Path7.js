const Page = require("../../pageobjects/page");

describe("Path7: Add Product", () => {
    it("can add Grapes to cart", async () => {
        await Page.scrollDownUntilTextFound("Green Beans");
        await Page.tapSelectorByText("ADD TO CART");
    });
});
