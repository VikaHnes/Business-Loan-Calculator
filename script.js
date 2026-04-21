// Виконала: Гнесь Вікторія Петрівна
function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(amount) || isNaN(term) || isNaN(rate) || amount <= 0 || term <= 0 || rate < 0) {
        alert("Будь ласка, введіть коректні додатні числа у всі поля.");
        return;
    }

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalOverpayment = 0;

    if (rate === 0) {
        monthlyPayment = amount / term;
        totalPayment = amount;
        totalOverpayment = 0;
    } else {
        const monthlyRate = (rate / 100) / 12;
        const mathPower = Math.pow(1 + monthlyRate, term);
        monthlyPayment = amount * (monthlyRate * mathPower) / (mathPower - 1);
        totalPayment = monthlyPayment * term;
        totalOverpayment = totalPayment - amount;
    }

    const formatCurrency = (number) => {
        return number.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₴';
    };

    document.getElementById('monthly-payment').innerText = formatCurrency(monthlyPayment);
    document.getElementById('total-overpayment').innerText = formatCurrency(totalOverpayment);
    document.getElementById('total-payment').innerText = formatCurrency(totalPayment);
}
