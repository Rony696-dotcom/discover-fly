function handleBookingChange(booking, isIncrease) {
    const bookingInput = document.getElementById(booking + '-count');
    const bookingCount = parseInt(bookingInput.value);
    let bookingNewCount = bookingCount;
    if (isIncrease == true) {
        bookingNewCount = bookingCount + 1;
    }
    if (isIncrease == false && bookingCount > 0) {
        bookingNewCount = bookingCount - 1;

    }
    bookingInput.value = bookingNewCount;

    let bookingTotal = 0;
    if (booking == 'first') {
        bookingTotal = bookingNewCount * 150;
    }
    if (booking == 'economy') {
        bookingTotal = bookingNewCount * 100;
    }

    calculateTotal();

}


function calculateTotal() {
    const firstClassCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = '&' + subTotal;
    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = tax + subTotal;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

