// *DEposite functionality
document.getElementById('deposite-button').addEventListener('click', function() {
	// Get input value
	const depositeAmount = getInputValue('deposite-input');
	if (depositeAmount > 0) {
		// get current deposite
		updateTotalField('deposite-display', depositeAmount);
		// update main balace
		updateBalance(depositeAmount, true);
	}
});

// *Withdraw functionality
document.getElementById('withdraw-button').addEventListener('click', function() {
	// Get input value
	const withdrawAmount = getInputValue('withdraw-input');
	const currentBalance = getCurrentBalance();
	if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
		// Update withdraw amount
		updateTotalField('withdraw-display', withdrawAmount);
		//  update the main balance
		updateBalance(withdrawAmount, false);
	}
});

// * all functoins
//  Get all the inputs
function getInputValue(inputId) {
	const mainInput = document.getElementById(inputId);
	const inputText = mainInput.value;
	const inputAmount = parseFloat(inputText);
	// ? Clear input field
	mainInput.value = '';
	return inputAmount;
}
//  set and update input display
function updateTotalField(inputId, userAmount) {
	const display = document.getElementById(inputId);
	const displayText = display.innerText;
	const previousDisplayTotal = parseFloat(displayText);
	return (display.innerText = previousDisplayTotal + userAmount);
}
//  Get current balance
function getCurrentBalance() {
	const balanceDisplay = document.getElementById('balance-display');
	const balanceDisplayText = balanceDisplay.innerText;
	const previousBalanceTotal = parseFloat(balanceDisplayText);

	return previousBalanceTotal;
}

// Update main balance
function updateBalance(amount, isAdd) {
	const balanceDisplay = document.getElementById('balance-display');
	const previousBalanceTotal = getCurrentBalance();
	if (isAdd == true) {
		balanceDisplay.innerText = amount + previousBalanceTotal;
	} else {
		balanceDisplay.innerText = previousBalanceTotal - amount;
	}
}
