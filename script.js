const totalBillInput = document.getElementById('totalBill');
const tipButtons = document.querySelectorAll('.tip-btns');
const customTipInput = document.getElementById('customTip');
const totalPersonInput = document.getElementById('totalPerson');
const noPerson = document.querySelector('.no-person');
const tipAmountResult = document.querySelector('#tip-amount-result');
const totalResult = document.querySelector('#total-result');
const resetButton = document.querySelector('#reset-btn');

//set up "" variable value when refreshed
totalBillInput.value = "";
customTipInput.value = "";
totalPersonInput.value = 1;

//define and setting changing variable 
let totalBillValue = 0,
    tipPersonAmount,
    tipValue = 0,
    totalPersonValue = 1; 

//add eventlistener and function
totalBillInput.addEventListener('input',billInput);
tipButtons.forEach(tipButton =>{
    tipButton.addEventListener('click', tipBtn);
});
customTipInput.addEventListener('input',tipInput);
totalPersonInput.addEventListener('input',personInput);
resetButton.addEventListener('click', resetBtn);

//function section
function billInput(){
    totalBillValue = parseFloat(totalBillInput.value);
    calculate();

}

function tipBtn(button){
    tipButtons.forEach(tipButton =>{
        tipButton.classList.remove('active');
        if(button.target.innerHTML == tipButton.innerHTML){
            tipButton.classList.add('active');
            tipValue = parseFloat(tipButton.innerHTML) / 100;
        }
    })
    customTipInput.value = "";
    calculate();
}

function tipInput(){
    tipValue = parseFloat(customTipInput.value) / 100;
    tipButtons.forEach(tipButton =>{
        tipButton.classList.remove('active');
    })
    if(customTipInput.value !== ''){
        calculate();
    }

}

function setPersonValue(){
    if(totalPersonInput.value == "" || totalPersonInput.value == 0){
        totalPersonInput.style.border = "red 2px solid";
    }else{
        totalPersonInput.style.border = "white 2px solid";
    }
}

function personInput(){
    setPersonValue()
    totalPersonValue = parseFloat(totalPersonInput.value);
    calculate();
    
}

function calculate(){
    let tipAmount = (tipValue * totalBillValue) / totalPersonValue;
    tipAmountResult.innerHTML = tipAmount.toFixed();


    if(totalPersonInput.value == ""){
        tipPersonAmount = 0;
    }else{
        tipPersonAmount = totalBillValue * (tipValue + 1) / totalPersonValue;
        totalResult.innerHTML = tipPersonAmount.toFixed();
    }
}

function resetBtn(){
    totalBillInput.value = "";
    customTipInput.value = "";
    totalPersonInput.value= 1;
    tipAmountResult.innerHTML = 0;
    totalResult.innerHTML = 0;
    tipButtons.forEach(tipButton =>{
        tipButton.classList.remove('active');
    })
}

