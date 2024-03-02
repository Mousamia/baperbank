document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositAmount = document.getElementById('deposit-field').value;
    console.log( typeof depositAmount);

    let depositAreaField = document.getElementById('deposit-area');
    const depositPrevious = parseFloat(depositAreaField.innerText);
    depositAreaField.innerText = parseFloat(depositAmount) + depositPrevious ;

    document.getElementById('deposit-field').value = '';

})