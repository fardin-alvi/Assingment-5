function donateButtonId(id) {
    const firstInput = parseFloat(document.getElementById(id).value);
    return firstInput;
}
function cardMoneyId(id) {
    const cardMoney = parseFloat(document.getElementById(id).innerText)
    return cardMoney;
}
function qoutesbyId(id) {
    const qoute = document.getElementById(id).innerText;
    return qoute;
}
