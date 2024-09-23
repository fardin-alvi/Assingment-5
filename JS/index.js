document.getElementById('first-donate-button').addEventListener('click', function () {
    if (!isNaN(donateButtonId('first-input'))) {
        const moneyAmount = donateButtonId('first-input') + cardMoneyId('first-card-money')
        document.getElementById('first-card-money').innerText = moneyAmount;
        const available = parseFloat(document.getElementById('main-balance').innerText) - donateButtonId('first-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
    
})
document.getElementById('second-donate-button').addEventListener('click', function () {
    if (!isNaN(donateButtonId('second-input'))) {
        const moneyAmount = donateButtonId('second-input') + cardMoneyId('second-card-money')
        document.getElementById('second-card-money').innerText = moneyAmount;
        const available = parseFloat(document.getElementById('main-balance').innerText) - donateButtonId('second-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
})
document.getElementById('third-donate-button').addEventListener('click', function () {
    if (!isNaN(donateButtonId('third-input'))) {
        const moneyAmount = donateButtonId('third-input') + cardMoneyId('third-card-money')
        document.getElementById('third-card-money').innerText = moneyAmount;
        const available = parseFloat(document.getElementById('main-balance').innerText) - donateButtonId('third-input');
        document.getElementById('main-balance').innerText = available;
    }
    else {
        alert('Invalid Amount')
    }
})