
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getQuote);

function getQuote(){
  fetch("http://api.quotable.io/random")
  .then(res => res.json())
  .then(data => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
  })
};

// todo list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button class="complete" onclick="completeTask(this)">Complete</button><button class="delete" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskSpan = button.previousElementSibling;
  taskSpan.classList.toggle('completed');
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

// notes
const noteInput = document.getElementById('noteInput');
const notesContainer = document.getElementById('notesContainer');

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.innerHTML = `<span>${noteText}</span><button class="delete" onclick="deleteNote(this)">Delete</button>`;
    notesContainer.appendChild(noteDiv);
    noteInput.value = '';
  }
}

function deleteNote(button) {
  const noteDiv = button.parentElement;
  notesContainer.removeChild(noteDiv);
}


// to store value
const journalForm = document.getElementById('journalForm');
const journalEntry = document.getElementById('journalEntry');
const entriesContainer = document.getElementById('entriesContainer');

function addEntry(event) {
  event.preventDefault(); // Prevent form submission

  const entryText = journalEntry.value.trim();
  if (entryText !== '') {
    // Save the entry to local storage
    saveEntryToLocalStorage(entryText);

    // Display the entries from local storage
    displayEntriesFromLocalStorage();

    // Clear the input field for the next entry
    journalEntry.value = '';
  }
}

function saveEntryToLocalStorage(entryText) {
  const date = new Date().toLocaleDateString(); // Get the current date
  const entryKey = `journal_entry_${date}`;
  localStorage.setItem(entryKey, entryText);
}


// Add event listener for form submission
journalForm.addEventListener('submit', addEntry);

