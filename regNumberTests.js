describe('The registration numbers factory function', function () {
    it("should return true for registration numbers starting with CA or from Cape Town", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg('CA 123 456'), true);
    });

    it("should return true for registration numbers starting with CY or from Belville", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg("CY 123456"), true);
    });

    it("should return true for registration numbers starting with CK or from Malmesbury", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg("CK 123456"), true);
    });

    it("should return true for registration numbers starting with CL or from Stellenbosch", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg("CL 123456"), true);
    });

    it("should return false for registration numbers not starting with CA, CJ, CL or CY", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg("GP 123456"), false);
    });

    it('should return true for registration numbers  with character "-", no character and space, and false for registration number with different characters', function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg('CA 123-456'), true);
        assert.deepEqual(regNumbers.storedReg('CA 123 456'), true);
        assert.deepEqual(regNumbers.storedReg('CA 123$456'), false);
        assert.deepEqual(regNumbers.storedReg('CA 123456'), true);
    });



    it("should return true for registration numbers with a maximum of 10 characters and false for more", function () {
        let regNumbers = regNumbersFactory();
        assert.deepEqual(regNumbers.storedReg('CA 123-456'), true);
        assert.deepEqual(regNumbers.storedReg('CA 123 456 789'), false);
    });

    it("should increment registration numbers when new reg number is entered", function () {
        let regNumbers = regNumbersFactory();
        regNumbers.storedReg("CA 123-456");
        regNumbers.storedReg("CY 123-789");
        regNumbers.storedReg("CL 345-678");
        assert.deepEqual(3, regNumbers.numOfReg());
    });

    it("should check whether the name is already in the local storage and stop incrementing the counter if it is there", function () {
        let regNumbers = regNumbersFactory();
        regNumbers.storedReg("CA 123-456");
        regNumbers.storedReg("CA 123-456");
        regNumbers.storedReg("CL 345-678");
        assert.deepEqual(2, regNumbers.numOfReg());
    });
});