var link = document.querySelector(".search-btn");
      var form_block = document.querySelector(".booking-form");
      var form = form_block.querySelector("form");
      var inputs = form.querySelectorAll("input");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        form_block.classList.add("init-booking-form");
        form_block.classList.toggle("show-booking-form");
        form_block.classList.toggle("hide-booking-form");
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
