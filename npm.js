const bars = document.querySelector('#bars'),
strengthDiv = document.querySelector('#strength'),
passwordInput  = document.querySelector('#password');

const strength = {
    1: "weak",
    2: "medium",
    3: "strong",
};

const getIndicator = (passowrd, strengthValue) => {
    strengthValue.upper = /[A-Z]/.test(passowrd)
    strengthValue.lower = /[a-z]/.test(passowrd)
    strengthValue.numbers = /\d/.test(passowrd)

    let strengthIndicator = 0;
    for (let metric in strengthValue) {
        if(strengthValue[metric] === true ){
            strengthIndicator++;
        }
    }

    return strength[strengthIndicator] ?? "";
} 

const getStrength = (passowrd) => {
    let strengthValue = {
        upper: false,
        numbers: false,
        lower: false,
    };

    return getIndicator(passowrd, strengthValue)
};

const handleChange = () => {

    let { value: passowrd } = passwordInput;

    console.log(passowrd)

    const strengtText = getStrength(passowrd);
    bars.classList = "";

    if (strengtText) {
        strengthDiv.innerText = `${strengtText} Password`;
        bars.classList.add(strengtText);
    }
    else {
        strengthDiv.innerText = "";
    }
}