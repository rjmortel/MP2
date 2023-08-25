// secret admin login

function handleKeyUp(e) {
  if (e.ctrlKey && e.altKey && e.which == 76) {
    //76 is the key code for letter L
    document.getElementById("admin").innerHTML += `
	
	<div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
            <form id="passwordFormAdmin">
            <label class="form-label text-center">Admin login</label>
            <input type="password" class="form-control" id="passwordInputAdmin" placeholder="Password" required>
            <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
          </form>
            </div>
          </div>
        </div>
      </div>-

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
    window.location.href = "assets/pages/admin.html";
    return true;
  } else {
    alert("Incorrect Password");
    return false;
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
  // Check if the event target is the submit button in the password form on admin login
  if (e.target.id === "submitBtn") {
    e.preventDefault();
  }
});

//Submit Button on admin login password
document.addEventListener("submit", function (event) {
  if (event.target.id === "passwordFormAdmin") {
    event.preventDefault(); // Prevent default form submission behavior

    const passwordInput = document.getElementById("passwordInputAdmin");

    if (passwordInput && validatePassword(passwordInput.value)) {
      console.log("input password: ", passwordInput.value);
      window.location.href = "/assets/pages/admin.html"; // Redirect to another page
    } else {
      // Password is invalid, show error message
    }
  }
});

//packages
function totalIt()
{
   var input = document.getElementsByName("product");
   var total = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total += parseFloat(input[i].value);
      }
   }
   document.getElementById("total").value = "₱" + total.toFixed(2);
}
function totalIt2()
{
   var input = document.getElementsByName("product2");
   var total2 = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total2 += parseFloat(input[i].value);
      }
   }
   document.getElementById("total2").value = "₱" + total2.toFixed(2);
}
function totalIt3()
{
   var input = document.getElementsByName("product3");
   var total3 = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total3 += parseFloat(input[i].value);
      }
   }
   document.getElementById("total3").value = "₱" + total3.toFixed(2);
}

// scheduler
// Function to display the task entries
let displayEntries = () => {
  let taskContainer = document.getElementById("taskContainer");
 

  // Retrieve the task entries from localStorage
  let taskEntries = JSON.parse(localStorage.getItem("taskEntries")) || [];

  if (taskEntries.length === 0) {  
    taskContainer.innerHTML = `<tr>
                                  <td colspan="4">No task added.</td>
                                </tr>`;
  } else {
    let display = "";
    taskEntries.forEach((item, index) => {
      display += `<tr>
                    <td>${item.task}</td>
                    <td>${item.phone}</td>
                    <td>${item.date}</td>
                    <td>
                      <button onclick="deleteEntry(${index})">Delete</button>
                      <button onclick="updateEntry(${index})">Update</button>
                    </td>
                  </tr>`;
    });
    taskContainer.innerHTML = display;
   
  }
};

// Function to delete a task entry
let deleteEntry = (index) => {
  let taskEntries = JSON.parse(localStorage.getItem("taskEntries")) || [];
  taskEntries.splice(index, 1);
  localStorage.setItem("taskEntries", JSON.stringify(taskEntries));
  displayEntries();
};

// Function to update a task entry
let updateEntry = (index) => {
  let taskEntries = JSON.parse(localStorage.getItem("taskEntries")) || [];
  let updatedTask = prompt("Enter the updated name:", taskEntries[index].task);
  let updatedPhone = prompt("Enter the updated phone number:", taskEntries[index].phone);
  let updatedDate = prompt("Enter the updated date (YYYY-MM-DD):", taskEntries[index].date);

  if (updatedTask && updatedPhone && updatedDate) {
    taskEntries[index].task = updatedTask;
    taskEntries[index].phone = updatedPhone;
    taskEntries[index].date = updatedDate;
    localStorage.setItem("taskEntries", JSON.stringify(taskEntries));
    displayEntries();
  }
};






 
   document.addEventListener("DOMContentLoaded", function() {
    // Function to add a new task entry
    let addTask = (event) => {
      event.preventDefault(); // Prevent form submission
      // Get the input values
      let taskInput = document.getElementById("taskInput");
      let dateInput = document.getElementById("dateInput");
      let phoneInput = document.getElementById("phoneInput");
      // Create a new task object
      let newTask = {
        task: taskInput.value,
        date: dateInput.value,
        phone: phoneInput.value
      };
      // Retrieve the existing task entries from localStorage
      let taskEntries = JSON.parse(localStorage.getItem("taskEntries")) || [];
      // Add the new task object to the array
      taskEntries.push(newTask);
      // Save the updated task entries to localStorage
      localStorage.setItem("taskEntries", JSON.stringify(taskEntries));
      // Clear the input fields
      taskInput.value = "";
      dateInput.value = "";
      phoneInput.value = "";
    };
  
    var taskForm = document.getElementById("taskForm")
if (taskForm) {
  taskForm.addEventListener("submit", addTask);
}
 
    // Add an event listener to the form submit button
    // document.getElementById("taskForm").addEventListener("submit", addTask);
  });






// reviews
let postContainer = document.querySelector("#postContainer");

let nameInput = document.querySelector("#nameInput");
let commentInput = document.querySelector("#commentInput");

let rate = Array.from(document.getElementsByName("srate"));
    console.log(rate);

getRateValue = () => {
  let rateValue;
    for (let i = 0; i < 5; i++) {
        if (rate[i].checked)
            rateValue = rate[i].value;
           
    }
    return rateValue;
}

function getRating() {
    let printStar = "";
    for (let star of rate) {
        if (star.checked) {
            console.log(star.value);
            
            for (let i = 1; i <= star.value; i++){
                printStar += `<i class="material-icons" style="font-size:18px;color:gold">star_rate</i>`;
            }
        }
    }
    return printStar;
}

document.getElementById("postBtn").addEventListener("click", getRateValue);

let postBtn = document.querySelector("#postBtn");
if (postBtn) {
  postBtn.addEventListener("click", getRateValue);
}

//array from local storage
let postEntries = JSON.parse(localStorage.getItem("postEntries"));

let displayReviews = () => { 
    if (postEntries == null) {
        postContainer.innerHTML = `<div>
                                        No reviews yet.
                                    <div>`
    } else {
        let show = "";
        postEntries.forEach((x) => {
            show += `<div class="reviewsCard" id="post${x.id}">
                            <div class="customerRate">
                                ${x.rate}
                            </div>
                            <div class="customerComment rem-border">
                                ${x.comment}
                            </div>
                            <div class="customerName rem-border">
                                ${x.name}
                            </div>
                        </div>`;
            postContainer.innerHTML = show;
        })
    }
}

displayReviews();


// document.querySelectorAll('input[name="srate"]').forEach(function(radio) {
//   radio.addEventListener('click', function(e) {
//     e.preventDefault();
//   });
// });

let addComment = (event) => {
  event.preventDefault();

  //id
  let n = localStorage.getItem("idValue");

  let nameValue = nameInput.value;
  let commentValue = commentInput.value;

  let commentItem = {
    name: nameValue,
    comment: commentValue,
    rate: getRating(),
    id: ++n
    
  };

  if (postEntries == null) {
    postEntries = [];
  }

  postEntries.push(commentItem);

  localStorage.setItem("postEntries", JSON.stringify(postEntries));
  localStorage.setItem("idValue", n);

  displayReviews();
};

document.getElementById("postBtn").addEventListener("click", addComment);
