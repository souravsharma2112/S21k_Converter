console.log("Welcome to S21k Converter");


//  Formula Section Temperature

function CtoF(number) {
    let result = eval((number * 9 / 5) + 32);
    return result;
}
function CtoK(number) {
    let result = eval(Number(number) + 273.15);
    return result;
}
function FtoC(number) {
    let result = eval((number - 32) * 5 / 9);
    return result;
}
function FtoK(number) {
    let result = eval((number - 32) * 5 / 9 + 273.15);
    return result;
}
function KtoC(number) {
    let result = eval(number - 273.15);
    return result;
}
function KtoF(number) {
    let result = eval((number - 273.15) * 9 / 5 + 32);
    return result;
}



function populate(s1, s2, s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    let SelectLeftDefault = document.getElementById("SelectLeftDefault");
    let SelectRightDefault = document.getElementById("SelectRightDefault");
    let inputLeftDefault = document.getElementById("inputLeftDefault");
    let inputRightDefault = document.getElementById("inputRightDefault");
    let inputLeft = document.getElementById("inputLeft");
    let inputRight = document.getElementById("inputRight");
    s2.innerHTML = "";
    s3.innerHTML = "";
    SelectLeftDefault.classList.add("hidden");
    SelectRightDefault.classList.add("hidden");
    inputLeftDefault.classList.add("hidden");
    inputRightDefault.classList.add("hidden");
    inputLeft.classList.remove("hidden");
    inputRight.classList.remove("hidden");

    s2.classList.remove("hidden");
    s3.classList.remove("hidden");

    if (s1.value == "Temperature") {
        var optionArrayLeft = ['celsius|Celsius', 'fahrenheit|Fahrenheit', 'kelvin|Kelvin'];
        var optionArrayRight = ['fahrenheit|Fahrenheit', 'celsius|Celsius', 'kelvin|Kelvin'];
    }
    // yaha 2nd kaa change lkarna hai
    else if (s1.value == "Area") {
        // var optionArrayLeft = ['sqkm|Square Kilometer', 'sqmeter|Square Meter', 'sqmile| Square Mile', 'sqyard|Square Yard','sqfoot|Square Foot','inch|Inch','hactare|Hactare','acre|Acre'];
        // var optionArrayRight = ['sqkm|Square Kilometer', 'sqmeter|Square Meter', 'sqmile| Square Mile', 'sqyard|Square Yard','sqfoot|Square Foot','inch|Inch','hactare|Hactare','acre|Acre'];
    }
    else if (s1.value == "DataTransferRate") {
        // var optionArrayLeft = ["bitps|Bit Per Second", "kbitps|KiloBit Per Second",'kbyteps|KiloByte Per Second',''];
        // var optionArrayRight = ["mb|MB", "meter|Meter"];
    }
    else {
        console.log("Hello World");
    }
    for (var option in optionArrayLeft) {
        var pair = optionArrayLeft[option].split("|");
        var newOptionLeft = document.createElement("option");
        newOptionLeft.value = pair[0];
        newOptionLeft.innerHTML = pair[1];
        s2.options.add(newOptionLeft);
    }
    for (var option in optionArrayRight) {
        var pair = optionArrayRight[option].split("|");
        var newOptionRight = document.createElement("option");
        newOptionRight.value = pair[0];
        newOptionRight.innerHTML = pair[1];
        s3.options.add(newOptionRight);
    }


    // ============================== Temperatur ======================================
    // const tempSelectLeft = document.getElementById("optionSelectLeft");
    // const tempSelectRight = document.getElementById("optionSelectRight");
    var selectOptionLeft = s2.options[s2.selectedIndex].value;
    console.log(selectOptionLeft);
    var selectOptionRight = s3.options[s3.selectedIndex].value;
    console.log(selectOptionRight);
    //======================== Celsius to Fahrenheit and Fahrenheit to celsius =======================

    if (selectOptionLeft == "celsius" && selectOptionRight == "fahrenheit") {
        console.log("Hurry! we do");
        const inputLeft = document.getElementById("inputLeft");
        const inputRight = document.getElementById("inputRight");
        inputLeft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            inputRight.value = CtoF(inputValue);
        })
        inputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            inputLeft.value = FtoC(inputvalue);
        })
    }

};

// default Calculation


const SelectLeftDefault = document.getElementById("SelectLeftDefault");
const SelectRightDefault = document.getElementById("SelectRightDefault");

// for formula

const formula = document.getElementById("formulaPrev");
// const optionLeftDefault = SelectLeftDefault.options;
// console.log(optionLeftDefault);

// ============================== Temperatur Default ======================================

var tempOptionLeft = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
console.log(tempOptionLeft);
var tempOptionRight = SelectRightDefault.options[SelectRightDefault.selectedIndex].value;

//======================== Celsius to Fahrenheit left input (Default) =======================

if (tempOptionLeft == "Celsius" && tempOptionRight == "Faherenheit") {
    let tempInputleft = document.getElementById("inputLeftDefault");
    let tempInputRight = document.getElementById("inputRightDefault");
    tempInputleft.addEventListener("input", (event) => {
        const inputValue = event.target.value;
        tempInputRight.value = CtoF(inputValue);
    })
    tempInputRight.addEventListener("input", (event) => {
        const inputvalue = event.target.value;
        tempInputleft.value = FtoC(inputvalue);
    })
    formula.innerHTML = '(0°C × 9/5) + 32 = 32°F';
};
//======================== Temperature left input Change =======================
SelectLeftDefault.addEventListener("change", () => {
    SelectRightDefault.selectedIndex  = 0;
    var optionLeftDefault = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
    var optionRightDefault = SelectRightDefault.options[SelectRightDefault.selectedIndex].value;
    console.log(optionLeftDefault);
    const element = optionLeftDefault;
    console.log("outside the if statement element " + element);
    // ctok
    if (element == "Celsius" && optionRightDefault == "Faherenheit") {
        SelectRightDefault.selectedIndex  = 2;
        let tempInputleft = document.getElementById("inputLeftDefault");
        let tempInputRight = document.getElementById("inputRightDefault");
        tempInputleft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            tempInputRight.value = CtoK(inputValue);
        })
        tempInputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            tempInputleft.value = KtoC(inputvalue);
        })
        formula.innerHTML=`0°C + 273.15 = 273.15K`;
        // continue;
    }
    // ftoc
    if (element == "Faherenheit" && optionRightDefault == "Faherenheit") {
        SelectRightDefault.selectedIndex  = 1;
        let tempInputleft = document.getElementById("inputLeftDefault");
        let tempInputRight = document.getElementById("inputRightDefault");
        tempInputleft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            tempInputRight.value = FtoC(inputValue);
        })
        tempInputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            tempInputleft.value = CtoF(inputvalue);
        })
        formula.innerHTML=`(0°F − 32) × 5/9 = -17.78°C`;
        // continue;
    }
    // ktoc
    else if (element == "Kelvin" && optionRightDefault == "Faherenheit") {
        SelectRightDefault.selectedIndex  = 1;
        let tempInputleft = document.getElementById("inputLeftDefault");
        let tempInputRight = document.getElementById("inputRightDefault");
        tempInputleft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            tempInputRight.value = KtoC(inputValue);
        })
        tempInputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            tempInputleft.value = CtoK(inputvalue);
        })
        formula.innerHTML=`0K − 273.15 = -273.1°C`;
        // continue;
    }
    else {
        console.log("exit");
    }

})

// //======================== Temperature Right input Change =======================
SelectRightDefault.addEventListener("change", () => {
    var optionLeftDefault = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
    var optionRightDefault = SelectRightDefault.options[SelectRightDefault.selectedIndex].value;
    const element = optionLeftDefault;
    if (element == "Celsius" && optionRightDefault == "Celsius") {
        SelectLeftDefault.selectedIndex  = 1;
        let tempInputleft = document.getElementById("inputLeftDefault");
        let tempInputRight = document.getElementById("inputRightDefault");
        tempInputleft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            tempInputRight.value = FtoC(inputValue);
        })
        tempInputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            tempInputleft.value = CtoF(inputvalue);
        });
        formula.innerHTML = `(0°F − 32) × 5/9 = -17.78°C`;
        // continue;
    }
    else if (element == "Faherenheit" && optionRightDefault == "Kelvin") {
        let tempInputleft = document.getElementById("inputLeftDefault");
        let tempInputRight = document.getElementById("inputRightDefault");
        tempInputleft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            tempInputRight.value = KtoF(inputValue);
        })
        tempInputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            tempInputleft.value = FtoK(inputvalue);
        })
        formula.innerHTML=`(0°F − 32) × 5/9 + 273.15 = 255.372K`;
    }
    else {
        console.log("exit");
    }

})





















