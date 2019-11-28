let homepage = function(){

    let firstNumber = element(by.model("first"));
    let secondNumber = element(by.model("second"));
    let goButton = element(by.buttonText("Go!"));

    let result = element(by.xpath("//h2[@class='ng-binding']"));

    this.enterURL = function(url)
    {
        browser.get(url);
    }

    this.enterFirstNumber = function(number)
    {
        firstNumber.sendKeys(number);
    }

    this.enterSecondNumber = function(number)
    {
        secondNumber.sendKeys(number)
    }

    this.clickGoButton = function()
    {
        goButton.click();
    }

    this.verifyAddition = function(output)
    {
        let res = result.getText();
        expect(res).toEqual(output);
        

    }

}

module.exports = new homepage();