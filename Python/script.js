let c2=document.querySelector("#c2");// 2 chappati
let c3=document.querySelector("#c3");// 3 chapatti
let c4=document.querySelector("#c4");// 4 chapatti
let displayMonthNumber=document.querySelector("#displayMonthNumber");// Access month number like 1, 2, 3, 4...12
let displayMonthName = document.querySelector("#displayMonthName");// Access month name like Jan, Feb, Mar.... Dec
let rangeSlider=document.querySelector("#range");// Accessed range slider
let dayOff=document.querySelector("#enterDayOff");// Accessed day off
let checkBillButton=document.querySelector("#checkBillButton");// Accessd button to check bill amount
let dispalyAmount = document.querySelector("#dispalyAmount");// Accessed display amount section to dispaly amount after it get calculated.
let displayPhoneNumber = document.querySelector("#displayPhoneNumber");// Accessed phone number section to get display phone number after bit got generated for payment.
let c2Price=1800;
let c3Price=2200;
let c4Price=2600;
 let date=new Date();
 let currentYear=date.getFullYear();
// Range slider. It will display numbert like 1, 2, 3, 4, 5, 6...12
rangeSlider.addEventListener("input", ()=>{
    displayMonthNumber.textContent=rangeSlider.value;
    if(rangeSlider.value==1) {
        displayMonthName.innerText="Jan";
    } else if(rangeSlider.value==2) {
        displayMonthName.innerText = "Feb";
    } else if(rangeSlider.value==3) {
        displayMonthName.innerText = "Mar";
    } else if(rangeSlider.value==4) {
        displayMonthName.innerText = "Apr";
    }else if(rangeSlider.value==5) {
        displayMonthName.innerText = "May";
    } else if(rangeSlider.value==6) {
        displayMonthName.innerText = "Jun";
    } else if(rangeSlider.value==7) {
        displayMonthName.innerText = "Jul";
    }else if(rangeSlider.value==8) {
        displayMonthName.innerText = "Aug";
    }else if(rangeSlider.value==9) {
        displayMonthName.innerText = "Sep";
    }else if(rangeSlider.value==10) {
        displayMonthName.innerText = "Oct";
    }else if(rangeSlider.value==11) {
        displayMonthName.innerText = "Nov";
    }else {
        displayMonthName.innerText = "Dec";
    }
});
// Button control
checkBillButton.addEventListener("click", ()=>{
    // alert("Heelo");
    // alert(new Date(2025, 2, 0).getDate());
    alert(currentYear);


});