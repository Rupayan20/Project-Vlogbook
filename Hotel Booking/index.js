//For Check-In & Check-out Calender
let today = new Date();
let date = today.getDate();
let nextDate = today.getDate()+1;
let month = (today.getMonth());
let months = ["Jan","Feb","March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
month = months[month];
if (date < 10) 
    date = "0" + date;
let year = today.getFullYear();

let inDate = month+"-"+date+"-"+year;
let outDate = month+"-"+nextDate+"-"+year;


document.getElementById("checkInText").value = inDate;
document.getElementById("checkOutText").value = outDate;

var checkInDate = new Pikaday({
     field: document.getElementById('checkInText'),
     format: 'MMM D, YYYY',
     minDate: new Date(inDate),
     numberOfMonths: 2,
     theme: 'dark-theme' 
    });
var checkOutDate = new Pikaday({ field: document.getElementById('checkOutText'),
     format: 'MMM D, YYYY',
     minDate: new Date(outDate),
     numberOfMonths: 2,
     theme: 'dark-theme' 
});


//For Heading
document.querySelector("#radioInt").addEventListener("click",funcInt);
function funcInt() {
    document.querySelector("h3").innerHTML = "Book International Hotel & Homestays";
  }

  document.querySelector("#radioInd").addEventListener("click",funcInd);
function funcInd() {
    document.querySelector("h3").innerHTML = "Book Hotel & Homestays";
  }
