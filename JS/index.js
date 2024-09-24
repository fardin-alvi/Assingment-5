const cardContainer = document.getElementById('cards-container')
const historyContainer = document.getElementById('history-container')
const historyButton = document.getElementById('history-button');
const donationBtn = document.getElementById('donation-btn');
const blogButton = document.getElementById('blog-button')
const navBar = document.getElementById('nav-section')

window.addEventListener('scroll', function () {
    navBar.classList.add('backdrop-blur-lg')
})
blogButton.addEventListener('click', function () {
    window.location.assign('blog.html');
})
document.getElementById('first-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText)
    if (!isNaN(donateButtonId('first-input')) && donateButtonId('first-input') <= availableBalance && donateButtonId('first-input') > 0) {
        const moneyAmount = donateButtonId('first-input') + cardMoneyId('first-card-money')
        document.getElementById('my_modal_5').showModal()
        document.getElementById('first-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('first-input');
        document.getElementById('main-balance').innerText = available;
        const historyContent = document.createElement('div');
        historyContent.classList.add('border', 'border-gray-300', 'py-4','px-5', 'w-10/12', 'mx-auto','rounded-xl','space-y-1')
        historyContent.innerHTML = `<p class ='text-lg font-medium'>${donateButtonId("first-input")} Taka is Donated for ${qoutesbyId('noakhali-qoute')}</p>
        <p class='shadow-lg py-2 px-2 bg-slate-50'> <span class ='font-medium'>Date:</span> ${new Date()}</p>`
        historyContainer.insertBefore(historyContent, historyContainer.firstChild);
    }
    else {
        alert('Invalid Amount')
    }
    document.getElementById('first-input').value = '';
})
document.getElementById('second-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText);
    if (!isNaN(donateButtonId('second-input')) && donateButtonId('second-input') <= availableBalance) {
        const moneyAmount = donateButtonId('second-input') + cardMoneyId('second-card-money')
        document.getElementById('my_modal_5').showModal()
        document.getElementById('second-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('second-input');
        document.getElementById('main-balance').innerText = available;
        const historyContent = document.createElement('div');
        historyContent.classList.add('border', 'border-gray-300', 'py-4', 'px-5', 'w-10/12', 'mx-auto', 'rounded-xl', 'space-y-1')
        historyContent.innerHTML = `<p class ='text-lg font-medium'>${donateButtonId("second-input")} Taka is Donated for ${qoutesbyId('feni-qoute')}</p>
        <p class='shadow-lg py-2 px-2 bg-slate-50'> <span class ='font-medium'>Date:</span> ${new Date()}</p>`
        historyContainer.insertBefore(historyContent, historyContainer.firstChild)
    }
    else {
        alert('Invalid Amount')
    }
    document.getElementById('second-input').value = '';
})
document.getElementById('third-donate-button').addEventListener('click', function () {
    const availableBalance = parseFloat(document.getElementById('main-balance').innerText)
    if (!isNaN(donateButtonId('third-input')) && donateButtonId('third-input') <= availableBalance) {
        const moneyAmount = donateButtonId('third-input') + cardMoneyId('third-card-money')
        document.getElementById('my_modal_5').showModal()
        document.getElementById('third-card-money').innerText = moneyAmount;
        const available = availableBalance - donateButtonId('third-input');
        document.getElementById('main-balance').innerText = available;
        const historyContent = document.createElement('div');
        historyContent.classList.add('border', 'border-gray-300', 'py-4', 'px-5', 'w-10/12', 'mx-auto', 'rounded-xl', 'space-y-1')
        historyContent.innerHTML = `<p class ='text-lg font-medium'>${donateButtonId("third-input")} Taka is Donated for ${qoutesbyId('Qouta-qoute')}</p>
        <p class='shadow-lg py-2 px-2 bg-slate-50'> <span class ='font-medium'>Date:</span> ${new Date()}</p>`
        historyContainer.insertBefore(historyContent, historyContainer.firstChild)
    }
    else {
        alert('Invalid Amount')
    }
    document.getElementById('third-input').value = '';

})
donationBtn.addEventListener('click', function () {
    donationBtn.classList.add('bg-btn_color', 'text-black');
    historyButton.classList.remove('bg-btn_color', 'text-black');
    historyButton.classList.add('text-gray-500', 'font-medium', 'border');
    cardContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');
})
historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-btn_color', 'text-black');
    donationBtn.classList.remove('bg-btn_color', 'text-black');
    donationBtn.classList.add('text-gray-500', 'font-medium', 'border');
    cardContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');
})


