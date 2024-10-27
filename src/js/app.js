let form = document.querySelector("form");
let notesListSection = document.querySelector(".notes-list__content");

form.onsubmit = function (event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let priority = document.getElementById("priority").value;

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
  priorityElement.textContent =
    priority === "select-priority"
      ? "No priority"
      : priority[0].toUpperCase() + priority.substring(1);

  noteArticle.appendChild(titleElement);
  noteArticle.appendChild(contentElement);
  noteArticle.appendChild(priorityElement);

  notesListSection.appendChild(noteArticle);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("priority").value = "select-priority";
};
