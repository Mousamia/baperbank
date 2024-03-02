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


// 