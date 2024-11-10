let form = document.querySelector("form");
let notesListSection = document.querySelector(".notes-list__content");

form.onsubmit = function (event) {
  event.preventDefault();

  let title = event.target.title.value;
  let content = event.target.content.value;
  let priority = event.target.priority.value;

  let noteArticle = document.createElement("article");
  noteArticle.className = "notes-list__note";

  let titleElement = document.createElement("h3");
  titleElement.className = "notes-list__note-title";
  titleElement.textContent = title;

  let contentElement = document.createElement("p");
  contentElement.className = "notes-list__note-content";
  contentElement.textContent = content;

  let priorityElement = document.createElement("p");
  priorityElement.className = "notes-list__note-priority";

  if (priority === "select-priority") {
    priorityElement.textContent = "No priority";
  } else {
    priorityElement.textContent =
      priority[0].toUpperCase() + priority.substring(1);
  }

  noteArticle.appendChild(titleElement);
  noteArticle.appendChild(contentElement);
  noteArticle.appendChild(priorityElement);

  notesListSection.appendChild(noteArticle);

  form.reset();
};
