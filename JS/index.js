document.getElementById('first-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText)
    if (!isNaN(donateButtonId('first-input')) && donateButtonId('first-input') < availableBalance) {
        const moneyAmount = donateButtonId('first-input') + cardMoneyId('first-card-money')
        document.getElementById('first-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('first-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
    
})
document.getElementById('second-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText);
    if (!isNaN(donateButtonId('second-input')) && donateButtonId('second-input') < availableBalance) {
        const moneyAmount = donateButtonId('second-input') + cardMoneyId('second-card-money')
        document.getElementById('second-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('second-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
})
document.getElementById('third-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText)
    if (!isNaN(donateButtonId('third-input')) && donateButtonId('third-input') < availableBalance ) {
        const moneyAmount = donateButtonId('third-input') + cardMoneyId('third-card-money')
        document.getElementById('third-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('third-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
})