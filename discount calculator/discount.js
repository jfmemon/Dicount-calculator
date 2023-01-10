// getting your user amount
function getUserAmount() {
    const userAmountInput = document.getElementById('userAmount-input');
    const userAmountText = userAmountInput.value;
    const userAmount = parseFloat(userAmountText);
    const userAmountResult = (userAmount / 100 ) * 70;
    userAmountInput.value = '';
    return userAmountResult;
}

document.getElementById('apply-button').addEventListener('click', function() {
    const outputField = document.getElementById('amount-show');
    const userAmount = getUserAmount();
    const verificationInput = document.getElementById('verify-input');
    const verificationInputValue = verificationInput.value;
    if (userAmount > 0 && verificationInputValue == 'DOM') {
        outputField.innerText = userAmount;
    }else{
        alert('Maybe you entered something wrong :(');
    }
    verificationInput.value = '';
});