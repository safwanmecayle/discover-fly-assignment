// tickethandling Selection

function handleTktClass(ticket, isTicketIncreased) {
    var tktClassInput = document.getElementById(ticket + '-count');
    var tktClassCount = parseInt(tktClassInput.value);
    let tktClasstNewCount = tktClassCount;
    if (isTicketIncreased == true) {
        tktClasstNewCount = tktClassCount + 1;
    }
    if (isTicketIncreased == false && tktClassCount > 0) {
        tktClasstNewCount = tktClassCount - 1;
    }
    tktClassInput.value = tktClasstNewCount;

    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = tktClasstNewCount * 150;
    }
    if (ticket == 'economyClass') {
        ticketTotal = tktClasstNewCount * 100;
    }
    document.getElementById(ticket + '-price').innerText = ticketTotal;
    calculations ();
}
// calculations Selection

function calculations () {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById('economyClass-count');
    const economyClassCount = parseInt(economyClassInput.value);
    totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('total-amount').innerText = totalPrice;
    var VAT = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = VAT;
    let grandTotal = VAT + totalPrice ;
    document.getElementById("final-amount").innerText = grandTotal;
}
// bookingConfirmation function

function bookingConfirmation (){
    alert("CONGRATS!!! Have a nice trip !!")
}

              // function handleEconomyClassTkt (ticketIncreased) {
                //     let economyClassTktInput= document.getElementById('economyclasstkt-count');
                //     var economyClassTktCount = parseInt(economyClassTktInput.value);
                //     let economyClassTktNewCount = economyClassTktCount;
                //     if (ticketIncreased == true ) {
                //         economyClassTktNewCount = economyClassTktCount - 1;
                //      }
                //     if (ticketIncreased == false &&  economyClassTktCount > 0 ) {
                //         economyClassTktNewCount = economyClassTktCount + 1; 
                //      }
                //     economyClassTktInput.value = economyClassTktNewCount;
                //     let ticketCost = economyClassTktNewCount * 100;
                //     document.getElementById('economyclasstkt-price').innerText = ticketCost;
                // }

                // function handleEconomyClassTkt (ticketIncreased) {
                //     let economyClassTktInput= document.getElementById('economyclasstkt-count');
                //     var economyClassTktCount = parseInt(economyClassTktInput.value);
                //     let economyClassTktNewCount = economyClassTktCount;
                //     if (ticketIncreased == true ) {
                //         economyClassTktNewCount = economyClassTktCount - 1;
                //      }
                //     if (ticketIncreased == false &&  economyClassTktCount > 0 ) {
                //         economyClassTktNewCount = economyClassTktCount + 1; 
                //      }
                //     economyClassTktInput.value = economyClassTktNewCount;
                //     let ticketCost = economyClassTktNewCount * 100;
                //     document.getElementById('economyclasstkt-price').innerText = ticketCost;
                // }

        //    document.getElementById('firstclasstkt-increase').addEventListener('click', function () {
        //     var firstClassTktInput= document.getElementById('firstclasstkt-count');
        //     var firstClassTktCount = parseInt(firstClassTktInput.value);
        //     let firstClassTktNewCount = firstClassTktCount + 1;
        //     firstClassTktInput.value = firstClassTktNewCount;
        //     let ticketCost = firstClassTktNewCount * 150;
        //     document.getElementById('firstclasstkt-price').innerText = ticketCost;

        //    });
        //     document.getElementById('firstclasstkt-decrease').addEventListener('click', function () {
        //     var firstClassTktInput= document.getElementById('firstclasstkt-count');
        //     var firstClassTktCount = parseInt(firstClassTktInput.value);
        //     let firstClassTktNewCount = firstClassTktCount - 1;
        //     firstClassTktInput.value = firstClassTktNewCount;
        //     let ticketCost = firstClassTktNewCount * 150;
        //     document.getElementById('firstclasstkt-price').innerText = ticketCost;
        //    });
