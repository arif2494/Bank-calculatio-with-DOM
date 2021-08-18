// *DEposite functionality
document.getElementById('deposite-button').addEventListener('click', function() {
	const depositeInput = document.getElementById('deposite-input');
	const depositeAmountText = depositeInput.value;
	const depositeAmount = parseFloat(depositeAmountText);
	// ?get current deposite
	const depositeDisplay = document.getElementById('deposite-display');
	const depositeDisplayText = depositeDisplay.innerText;
	const previousDepositeTotal = parseFloat(depositeDisplayText);
	depositeDisplay.innerText = previousDepositeTotal + depositeAmount;
	// ?update balace
	const balanceDisplay = document.getElementById('balance-display');
	const balanceDisplayText = balanceDisplay.innerText;
	const previousBalanceTotal = parseFloat(balanceDisplayText);
	balanceDisplay.innerText = depositeAmount + previousBalanceTotal;
	// ? Clear input field
	depositeInput.value = '';
});

// *Withdraw functionality
document.getElementById('withdraw-button').addEventListener('click', function() {
	const withdrawInput = document.getElementById('withdraw-input');
	const withdrawAmountText = withdrawInput.value;
	const withdrawAmount = parseFloat(withdrawAmountText);
	// ?Update withdraw amount
	const withdrawDisplay = document.getElementById('withdraw-display');
	const withdrawDisplayText = withdrawDisplay.innerText;
	const previousWithdrawTotal = parseFloat(withdrawDisplayText);
	withdrawDisplay.innerText = previousWithdrawTotal + withdrawAmount;
	// ? update the main balance
	const balanceDisplay = document.getElementById('balance-display');
	const balanceDisplayText = balanceDisplay.innerText;
	const previousBalanceTotal = parseFloat(balanceDisplayText);
	balanceDisplay.innerText = previousBalanceTotal - withdrawAmount;
	// ?claer withdraw input
	withdrawInput.value = '';
});
