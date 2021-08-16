//deposit Amout
document.getElementById('deposit_btn').addEventListener('click', function () {
    //deposit Money
    const depositInput = document.getElementById('deposit_input');

    const depositAmountText = depositInput.value;
    const depositAmountNuber = parseFloat(depositAmountText);

    //deposit span amount
    const depositCurrent = document.getElementById('deposit_current');


    const previusDepositTotalText = depositCurrent.innerText;
    const previusDepositNumber = parseFloat(previusDepositTotalText);

    const newDepositTotal = previusDepositNumber + depositAmountNuber;

    depositCurrent.innerText = newDepositTotal;

    //balance add
    const currentBalance = document.getElementById('current_balance');
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);

    const totalBalance = depositAmountNuber + currentBalanceNumber;

    currentBalance.innerText = totalBalance;

    //clear deposit input value
    depositInput.value = '';
});

//withdraw balance
document.getElementById('withdraw_btn').addEventListener('click', function () {
    //inputField convert number
    const withdrawButton = document.getElementById('withdraw_input');
    const withdrawInputText = withdrawButton.value;
    const withdrawInputNumber = parseFloat(withdrawInputText);

    //withdraw balance convert
    const currentWithdraw = document.getElementById('current_withdraw');
    const currentWithdrawText = currentWithdraw.innerText;
    const currentWithdrawNumber = parseFloat(currentWithdrawText);


    const currentWithdrawTotal = withdrawInputNumber + currentWithdrawNumber;
    currentWithdraw.innerText = currentWithdrawTotal;

    //balance minus
    const currentWithdrawBalance = document.getElementById('current_balance');
    const currentWithdrawTexts = currentWithdrawBalance.innerText;
    const currentWithdrawNumbers = parseFloat(currentWithdrawTexts);

    //minus the withdraw balance from current balance

    const newTotal = currentWithdrawNumbers - withdrawInputNumber;

    currentWithdrawBalance.innerText = newTotal;



    //clear input field
    withdrawButton.value = '';
})