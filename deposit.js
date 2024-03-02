// deposit portion
document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositAmount = document.getElementById('deposit-field').value;

    let depositAreaField = document.getElementById('deposit-area');
    const depositPrevious = parseFloat(depositAreaField.innerText);
    depositAreaField.innerText = parseFloat(depositAmount) + depositPrevious ;
    document.getElementById('deposit-field').value = '';

    const balanceArea = document.getElementById('balance-area');
    console.log(balanceArea);
    const previousBalance = parseFloat(balanceArea.innerText);
    console.log(previousBalance);
    balanceArea.innerText = previousBalance + parseFloat(depositAmount);
})


// withdraw option
document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawAmount = document.getElementById('withdraw-amount').value;
    console.log(withdrawAmount);

    let withdrawAreaField = document.getElementById('withdraw-area');
    const withdrawArea = parseFloat(withdrawAreaField.innerText);
    withdrawAreaField.innerText = withdrawAmount;

    const balanceArea = document.getElementById('balance-area');
    console.log(balanceArea);
    const previousBalance = parseFloat(balanceArea.innerText);
    console.log(previousBalance);
    balanceArea.innerText = previousBalance - parseFloat(withdrawAmount);

    balanceArea.innerText = '';

})
