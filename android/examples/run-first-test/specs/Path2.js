const Page = require("../../pageobjects/page");

describe("Path2: Add Product -> Cart (Staging)", () => {
  it("can add Grapes to cart", async () => {
    await Page.scrollDownUntilTextFound("Green Beans");
    await Page.tapSelectorByText("ADD TO CART");
  });

  it("can navigate to cart", async () => {
    await Page.clickSelectorByResourceId(
      "com.fullstorydev.shoppedemo:id/navigation_cart"
    );
    await browser.pause(2000);
  });
});
