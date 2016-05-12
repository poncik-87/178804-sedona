var link = document.querySelector(".search-btn");
var form_block = document.querySelector(".booking-form");
var form = form_block.querySelector("form");
var inputs = form.querySelectorAll("input");
var child_count = form_block.querySelector(".children-input");
var child_count_minus = form_block.querySelector(".children-container .icon-minus");
var child_count_plus = form_block.querySelector(".children-container .icon-plus");
var adult_count = form_block.querySelector(".adult-input");
var adult_count_minus = form_block.querySelector(".adult-container .icon-minus");
var adult_count_plus = form_block.querySelector(".adult-container .icon-plus");

link.addEventListener("click", function(event) {
  event.preventDefault();
  form_block.classList.toggle("show-booking-form");
  form_block.classList.remove("booking-form-error");
});

form.addEventListener("submit", function(event) {
  var filled = true;
  for (var i = 0; i < inputs.length; i++) {
    filled &= !!inputs[i].value;
  }
  if (!filled) {
    event.preventDefault();
    form_block.classList.remove("booking-form-error");
    form_block.offsetWidth = form_block.offsetWidth;
    form_block.classList.add("booking-form-error");
  }
});

child_count_minus.addEventListener("mouseup", function(event) {
  var num_child_count = Number(child_count.value);
  if (num_child_count > 0)
    child_count.value = num_child_count - 1;
});

child_count_plus.addEventListener("mouseup", function(event) {
  var num_child_count = Number(child_count.value);
  if (num_child_count < 49)
    child_count.value = num_child_count + 1;
});

adult_count_minus.addEventListener("mouseup", function(event) {
  var num_adult_count = Number(adult_count.value);
  if (num_adult_count > 1)
    adult_count.value = num_adult_count - 1;
});

adult_count_plus.addEventListener("mouseup", function(event) {
  var num_adult_count = Number(adult_count.value);
  if (num_adult_count < 49)
    adult_count.value = num_adult_count + 1;
});
