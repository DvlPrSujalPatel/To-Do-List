const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Function to add a task

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add close button (span element)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    // Clear input box

    inputBox.value = '';
    saveData();
}

// Event listener for Enter key in input box
inputBox.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        AddTask();
    }
});

// Event delegation for handling task completion and deletion
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// Function to load tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Load tasks when the page is loaded
showTask();