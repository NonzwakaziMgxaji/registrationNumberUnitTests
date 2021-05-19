function regNumbersFactory(){

    var regNumbersEntered = {};
    var countRegNumbers = 0;

    // function selectedRadioBtn(townSelected) {
    //     if (townSelected === "malmesbury") {
    //         return regNumbersEntered.startsWith("CK");
    //     } 
    //     else if (townSelected === "bellville") {
    //         return regNumbersEntered.startsWith("CY");
    //     }
    //     else if (townSelected === "capetown") {
    //         return regNumbersEntered.startsWith("CA");
    //     }
    // }

    function storedReg(regPlate) {
        
        regPlate = regPlate.toUpperCase();
        var regex = /^((CA|CY|CK|CL)\s\d{3}\-\d{3})$|^((CA|CY|CK|CL)\s\d{3}\d{3})$|^((CA|CY|CK|CL)\s\d{3}\s\d{3})$/;
        var testRegularExp = regex.test(regPlate)

        if (regNumbersEntered[regPlate] === undefined) {
            regNumbersEntered[regPlate] = 0;
            countRegNumbers++;
        } else {
            regNumbersEntered[regPlate]++;
        }

        return testRegularExp;
    }


    function inputReg(regNum) {
        regNumbersEntered = regNum;
    }

    function showStoredReg() {
        return regNumbersEntered;
    }

    function numOfReg() {
        return countRegNumbers
    }

    return{
        storedReg,
        inputReg,
        showStoredReg,
        // selectedRadioBtn,
        numOfReg,
    }
}