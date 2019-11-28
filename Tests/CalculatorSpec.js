let homepage = require('../Pages/HomePage')

describe("Calculator HomePage Functionality",function(){

    it("Verify Addition",function(){

        homepage.enterURL("https://juliemr.github.io/protractor-demo/");
        homepage.enterFirstNumber(1);
        homepage.enterSecondNumber(3);
        homepage.clickGoButton();
        homepage.verifyAddition("4");


    })
})