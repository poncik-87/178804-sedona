var link = document.querySelector(".search-btn");
var formBlock = document.querySelector(".booking-form");
var form = formBlock.querySelector("form");
var inputs = form.querySelectorAll("input");
var childCount = formBlock.querySelector(".children-input");
var childCountMinus = formBlock.querySelector(".children-container .icon-minus");
var childCountPlus = formBlock.querySelector(".children-container .icon-plus");
var adultCount = formBlock.querySelector(".adult-input");
var adultCountMinus = formBlock.querySelector(".adult-container .icon-minus");
var adultCountPlus = formBlock.querySelector(".adult-container .icon-plus");

formBlock.classList.add("booking-form-hide");

link.addEventListener("click", function(event) {
  event.preventDefault();
  formBlock.classList.toggle("show-booking-form");
  formBlock.classList.remove("booking-form-error");
});

form.addEventListener("submit", function(event) {
  var filled = true;
  for (var i = 0; i < inputs.length; i++) {
    filled &= !!inputs[i].value;
  }
  if (!filled) {
    event.preventDefault();
    formBlock.classList.remove("booking-form-error");
    formBlock.offsetWidth = formBlock.offsetWidth;
    formBlock.classList.add("booking-form-error");
  }
});

childCountMinus.addEventListener("click", function() {
  var numChildCount = Number(childCount.value);
  if (numChildCount > 0)
    childCount.value = numChildCount - 1;
});

childCountPlus.addEventListener("click", function() {
  var numChildCount = Number(childCount.value);
  if (numChildCount < 49)
    childCount.value = numChildCount + 1;
});

adultCountMinus.addEventListener("click", function() {
  var numAdultCount = Number(adultCount.value);
  if (numAdultCount > 1)
    adultCount.value = numAdultCount - 1;
});

adultCountPlus.addEventListener("click", function() {
  var numAdultCount = Number(adultCount.value);
  if (numAdultCount < 49)
    adultCount.value = numAdultCount + 1;
});
