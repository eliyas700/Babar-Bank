// Deposit Section
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositAmount = document.getElementById('deposit-update');
    const previousDepositAmount=depositAmount.innerText;
    const presentDepositAmount = parseFloat(previousDepositAmount) + parseFloat (depositValue);
    depositAmount.innerText = presentDepositAmount;
    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalAmount = previousTotalBalance.innerText;
    const newTotalBalance = parseFloat (previousTotalAmount) + parseFloat (depositValue) ;
    previousTotalBalance.innerText = newTotalBalance;
    //Clear Value
    depositInput.value='';
})

//Withdraw Section
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue= withdrawInput.value;
    const withdrawAmount = document.getElementById('withdraw-update');
    const previousWithdrawAmount = withdrawAmount.innerText ;
    const presentWithdrawAmount = withdrawValue;
    withdrawAmount.innerText = parseFloat (presentWithdrawAmount) + parseFloat (previousWithdrawAmount);
    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalAmount = previousTotalBalance.innerText;
    const newTotalBalance = parseFloat (previousTotalAmount) - parseFloat (withdrawValue) ;
    previousTotalBalance.innerText = newTotalBalance;
 
    // Clear 
    withdrawInput.value = '';
})
