// secret admin login

function handleKeyUp(e) {
  if (e.ctrlKey && e.altKey && e.which == 76) {
    //76 is the key code for letter L
    document.getElementById("admin").innerHTML += `
	
	<div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <form id="passwordForm" class="">
                <div class="mb-3">
                  <label for="passwordInput" class="form-label">ADMIN PASSWORD</label>
                  <input type="password" id="passwordInput" class="form-control form-control-sm" required>
                  
                </div>
                <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

	  `;
    openModal();
    document.removeEventListener("keyup", handleKeyUp);
  }
}

document.addEventListener("keyup", handleKeyUp);

function openModal() {
  const modal = document.querySelector("#modal1");
  const bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
}

function validatePassword(password) {
  // Password validation
  var passRef = "kai1234";
  if (password == passRef) {
    // alert("Connect")
    window.location.href = "/assets/pages/admin.html";
  } else {
    alert("Incorrect Password");
    return true;
  }
}

// gallery modal function
document.addEventListener("click", function (e) {
  console.log("clicked!");
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
  // Check if the event target is the submit button in the password form
  if (e.target.id === "submitBtn") {
    e.preventDefault();
  }
});

//Submit Button
document.getElementById("passwordForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordInput = document.getElementById("passwordInput");

  if (passwordInput.checkValidity() && validatePassword(passwordInput.value)) {
    console.log("input password: ", passwordInput.value);
  } else {
    // Password is invalid, show error message
    passwordInput.classList.add("is-invalid");
  }
});
