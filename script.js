console.log("Welcome to S21k Converter");

// ===============================Formula Section of the S21k Converter=================================

// ------------------- Formula Section Temperature ---------------------

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

// ================= The Function poputlate to change the option of the Converter Type =======================
function populate(s1, s2, s3, s4) {
    // =========================== Important refrences for All =============================
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    let SelectLeftDefault = document.getElementById("SelectLeftDefault");
    let SelectRightDefault = document.getElementById("SelectRightDefault");
    let inputLeftDefault = document.getElementById("inputLeftDefault");
    let inputRightDefault = document.getElementById("inputRightDefault");
    let inputLeft = document.getElementById("inputLeft");
    let inputRight = document.getElementById("inputRight");
    var conversionName = document.getElementById(s4);

    // =========================== conversionName ===========================
    conversionName.innerText ="";

    // =============== Clear the Option section of the Both Select Sides====================
    s2.innerHTML = "";
    s3.innerHTML = "";
    // =============== Hidding the Select and Input Default option in DOM ===================

    // ---------------- select option ----------------
    SelectLeftDefault.classList.add("hidden");
    SelectRightDefault.classList.add("hidden");

    // ---------------- input option ----------------
    inputLeftDefault.classList.add("hidden");
    inputRightDefault.classList.add("hidden");

    // =============== Removing the hidden Class of Select and Input Manual option in DOM ===================
    
    // ---------------- input option ----------------
    inputLeft.classList.remove("hidden");
    inputRight.classList.remove("hidden");

    // ---------------- select option ----------------
    s2.classList.remove("hidden");
    s3.classList.remove("hidden");

    

    if (s1.value == "Temperature") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        var optionArrayLeft = ['celsius|Celsius', 'fahrenheit|Fahrenheit', 'kelvin|Kelvin'];
        var optionArrayRight = ['fahrenheit|Fahrenheit', 'celsius|Celsius', 'kelvin|Kelvin'];
        conversionName.innerText = conversionNameUpdate;
    }
    // yaha 2nd kaa change lkarna hai
    else if (s1.value == "Area") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['sqmeter|Square Meter',  'sqkm|Square Kilometer', 'sqmile| Square Mile', 'sqyard|Square Yard','sqfoot|Square Foot','inch|Inch','hactare|Hactare','acre|Acre'];
        var optionArrayRight = ['sqkm|Square Kilometer', 'sqmeter|Square Meter', 'sqmile| Square Mile', 'sqyard|Square Yard','sqfoot|Square Foot','inch|Inch','hactare|Hactare','acre|Acre'];
    }
    else if (s1.value == "Data Transfer Rate") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ["bitps|Bit Per Second", "kbitps|KiloBit Per Second",'kbyteps|KiloByte Per Second','kbitps|KiloBit Per Second','mbitps|MegaBit Per Second','mbyteps|MegaByte Per Second','mebibitps|MebiBit Per Second','gbitps|GigaBit Per Second','gbyteps|GigaByte Per Second','gibibitps|GibiBit Per Second','terabitps|TeraBit Per Second','terabyteps|TeraByte Per Second','tebibitps|TebiBit Per Second'];
        var optionArrayRight = ["bitps|Bit Per Second", "kbitps|KiloBit Per Second",'kbyteps|KiloByte Per Second','kbitps|KiloBit Per Second','mbitps|MegaBit Per Second','mbyteps|MegaByte Per Second','mebibitps|MebiBit Per Second','gbitps|GigaBit Per Second','gbyteps|GigaByte Per Second','gibibitps|GibiBit Per Second','terabitps|TeraBit Per Second','terabyteps|TeraByte Per Second','tebibitps|TebiBit Per Second'];
    }
    else if (s1.value == "Energy") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['kilojoule|Kilojoule','gramcalarie|Gram Calarie','kilocalarie|KiloCalarie','watthr|Watt hour','kilowatthr|KiloWatt Hour','electronwatt|Electron Watt','britishthermalunit|British Thermal Unit','ustherm|US Therm','footpound|Foot-Pound'];
        var optionArrayRight = ['kilojoule|Kilojoule','gramcalarie|Gram Calarie','kilocalarie|KiloCalarie','watthr|Watt hour','kilowatthr|KiloWatt Hour','electronwatt|Electron Watt','britishthermalunit|British Thermal Unit','ustherm|US Therm','footpound|Foot-Pound'];
    }
    else if (s1.value == "Frequency") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['hertz|Hertz','kilohertz|KiloHertz','megahertz|MegaHertz','gigahertz|GigaHertz'];
        var optionArrayRight = ['hertz|Hertz','kilohertz|KiloHertz','megahertz|MegaHertz','gigahertz|GigaHertz'];
    }
    else if (s1.value == "Fuel Economy") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['kilometerperliter|KiloMeter Per Liter','milespergallon|Miles per Gallon','kilometerperliter|KiloMeter per Liter','literper100km|Liter per 100 Kilometers'];
        var optionArrayRight = ['kilometerperliter|KiloMeter Per Liter','milespergallon|Miles per Gallon','kilometerperliter|KiloMeter per Liter','literper100km|Liter per 100 Kilometers'];
    }
    else if (s1.value == "Length") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['km|KiloMeter','cm|Centimeter','mm|Milimeter','micrometer|Micrometer','nanometer|Nanometer','mile|Mile','yard|Yard','foot|Foot','inch|Inch'];
        var optionArrayRight = ['km|KiloMeter','cm|Centimeter','mm|Milimeter','micrometer|Micrometer','nanometer|Nanometer','mile|Mile','yard|Yard','foot|Foot','inch|Inch'];
    }
    else if (s1.value == "Mass") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['kilogram|KiloGram','tonne|Tonne','gram|Gram','miligram|Miligram','microgram|MicroGram','imperialton|Imperial Ton','uston|US Ton','stone|Stone','pound|Pound','qunce|Qunce'];
        var optionArrayRight = ['kilogram|KiloGram','tonne|Tonne','gram|Gram','miligram|Miligram','microgram|MicroGram','imperialton|Imperial Ton','uston|US Ton','stone|Stone','pound|Pound','qunce|Qunce'];
    }
    else if (s1.value == "Plane Angle") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['degree|Degree','gradian|Gradian','miliradian|MiliRadian','minuteofarc|Minute of Arc','radian|Radian','secondofarc|Second of Arc'];
        var optionArrayRight = ['degree|Degree','gradian|Gradian','miliradian|MiliRadian','minuteofarc|Minute of Arc','radian|Radian','secondofarc|Second of Arc'];
    }
    else if (s1.value == "Pressure") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['pascal|Pascal','bar|Bar','poundpersecinch|Pound per Second Inch','standardatmosphere|Standard Atmosphere','ton|Ton'];
        var optionArrayRight = ['pascal|Pascal','bar|Bar','poundpersecinch|Pound per Second Inch','standardatmosphere|Standard Atmosphere','ton|Ton'];
    }
    else if (s1.value == "Speed") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['meterpersec|Meter Per Second','milespersec|Mile per Second','mileperhour|Mile per Hour','kilometerpersec|Kilometer per Second','knot|Knot'];
        var optionArrayRight = ['meterpersec|Meter Per Second','milespersec|Mile per Second','mileperhour|Mile per Hour','kilometerpersec|Kilometer per Second','knot|Knot'];
    }
    else if (s1.value == "Time") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['second|Second','nanosecond|NanoSecond','microsecond|MicroSecond','milisecond|MiliSecond','minute|Minute','hour|Hour','day|Day','week|Week','month|Month','calenderyear|Calender Year','decade|Decade','century|Century'];
        var optionArrayRight = ['second|Second','nanosecond|NanoSecond','microsecond|MicroSecond','milisecond|MiliSecond','minute|Minute','hour|Hour','day|Day','week|Week','month|Month','calenderyear|Calender Year','decade|Decade','century|Century'];
    }
    else if (s1.value == "Volume") {
        var conversionNameUpdate = s1.options[s1.selectedIndex].value;
        conversionName.innerText = conversionNameUpdate;
        var optionArrayLeft = ['second|Second','nanosecond|NanoSecond','microsecond|MicroSecond','milisecond|MiliSecond','minute|Minute','hour|Hour','day|Day','week|Week','month|Month','calenderyear|Calender Year','decade|Decade','century|Century'];
        var optionArrayRight = ['second|Second','nanosecond|NanoSecond','microsecond|MicroSecond','milisecond|MiliSecond','minute|Minute','hour|Hour','day|Day','week|Week','month|Month','calenderyear|Calender Year','decade|Decade','century|Century'];
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
        inputLeft.value="";
        
    }
    for (var option in optionArrayRight) {
        var pair = optionArrayRight[option].split("|");
        var newOptionRight = document.createElement("option");
        newOptionRight.value = pair[0];
        newOptionRight.innerHTML = pair[1];
        s3.options.add(newOptionRight);
        inputRight.value="";
    }

    // ================================================ Default Value of S21k Converter ===============================================

    // ================================================ Temperatur =====================================================

    var selectOptionLeft = s2.options[s2.selectedIndex].value;
    console.log(selectOptionLeft);
    var selectOptionRight = s3.options[s3.selectedIndex].value;
    console.log(selectOptionRight);
    //======================== Celsius to Fahrenheit and Fahrenheit to celsius =======================

    if (selectOptionLeft == "celsius" && selectOptionRight == "fahrenheit") {        
        inputLeft.addEventListener("input", (event) => {
            const inputValue = event.target.value;
            inputRight.value = CtoF(inputValue);
        })
        inputRight.addEventListener("input", (event) => {
            const inputvalue = event.target.value;
            inputLeft.value = FtoC(inputvalue);
        })
    }
    // ================================================ Manual Value of S21k Converter ===============================================

    // ================================================ Temperatur =====================================================

    //======================== Temperature left input Change =======================
    s2.addEventListener("change", () => {
        var optionLeftManual = s2.options[s2.selectedIndex].value;
        // var optionRightManual = s3.options[s3.selectedIndex].value;
        console.log("hello i am in here");
        s3.selectedIndex = 0;
        // ctok

        if (optionLeftManual == "celsius") {
            s3.selectedIndex = 2;
            console.log(s3.options[s3.selectedIndex]);
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = CtoK(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = KtoC(inputvalue);
            })
            formula.innerHTML = `0°C + 273.15 = 273.15K`;
            // continue;
        }
        // ftoc
        else if (optionLeftManual == "fahrenheit") {
            s3.selectedIndex = 1;
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = FtoC(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = CtoF(inputvalue);
            })
            formula.innerHTML = `(0°F − 32) × 5/9 = -17.78°C`;
            // continue;
        }
        // ktoc

        else if (optionLeftManual == "kelvin") {
            s3.selectedIndex = 1;
            // console.log(s3);
            console.log(s3.options[s3.selectedIndex]);
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = KtoC(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = CtoK(inputvalue);
            })
            formula.innerHTML = `0K − 273.15 = -273.1°C`;
            // continue;
        }
        else {
            console.log("exit");
        }

    });


    // //======================== Temperature Right input Change =======================

    s3.addEventListener("change", () => {
        var optionLeftManual = s2.options[s2.selectedIndex].value;
        var optionRightManual = s3.options[s3.selectedIndex].value;
        if (optionRightManual == "celsius") {
            s2.selectedIndex = 1;
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = FtoC(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = CtoF(inputvalue);
            });
            formula.innerHTML = `(0°F − 32) × 5/9 = -17.78°C`;
            // continue;
        }
        else if (optionRightManual == "fahrenheit") {
            s2.selectedIndex = 2;
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = KtoF(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = FtoK(inputvalue);
            })
            formula.innerHTML = `(0°F − 32) × 5/9 + 273.15 = 255.372K`;
        }
        else if (optionRightManual == "kelvin") {
            console.log("iamkelvin");
            s2.selectedIndex = 1;
            inputLeft.addEventListener("input", (event) => {
                const inputValue = event.target.value;
                inputRight.value = FtoK(inputValue);
            })
            inputRight.addEventListener("input", (event) => {
                const inputvalue = event.target.value;
                inputLeft.value = KtoF(inputvalue);
            })
            formula.innerHTML = `(0°F − 32) × 5/9 + 273.15 = 255.372K`;
        }
        else {
            console.log("exit");
        }

    });

};

// default Calculation

const SelectLeftDefault = document.getElementById("SelectLeftDefault");
const SelectRightDefault = document.getElementById("SelectRightDefault");

// for formula

const formula = document.getElementById("formulaPrev");

// ============================== Temperatur Default ======================================

var tempOptionLeft = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
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
    SelectRightDefault.selectedIndex = 0;
    var optionLeftDefault = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
    var optionRightDefault = SelectRightDefault.options[SelectRightDefault.selectedIndex].value;
    console.log(optionLeftDefault);
    const element = optionLeftDefault;
    console.log("outside the if statement element " + element);
    // ctok
    if (element == "Celsius") {
        SelectRightDefault.selectedIndex = 2;
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
        formula.innerHTML = `0°C + 273.15 = 273.15K`;
        // continue;
    }
    // ftoc
    else if (element == "Faherenheit") {
        SelectRightDefault.selectedIndex = 1;
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
        formula.innerHTML = `(0°F − 32) × 5/9 = -17.78°C`;
        // continue;
    }
    // ktoc
    else if (element == "Kelvin") {
        SelectRightDefault.selectedIndex = 1;
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
        formula.innerHTML = `0K − 273.15 = -273.1°C`;
        // continue;
    }
    else {
        console.log("exit");
    }

    // ================================================ Area =====================================================

})


// ================================== Default Value ==========================================

// //======================== Temperature Right input Change =======================
SelectRightDefault.addEventListener("change", () => {
    var optionLeftDefault = SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value;
    var optionRightDefault = SelectRightDefault.options[SelectRightDefault.selectedIndex].value;
    const element = optionLeftDefault;
    if (optionRightDefault == "Celsius") {
        SelectLeftDefault.selectedIndex = 1;
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
    else if (optionRightDefault == "Kelvin") {
        SelectLeftDefault.selectedIndex = 1;
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
        formula.innerHTML = `(0°F − 32) × 5/9 + 273.15 = 255.372K`;
    }
    else if (optionRightDefault == "Faherenheit") {
        SelectLeftDefault.selectedIndex = 2;
        console.log(SelectLeftDefault.options[SelectLeftDefault.selectedIndex].value);
        console.log("iam hiiiiis");
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
        formula.innerHTML = `(0°F − 32) × 5/9 + 273.15 = 255.372K`;
    }
    else {
        console.log("exit");
    }

})























