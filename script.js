const draggables = document.querySelectorAll(".draggable");
let selectedId;
draggables.forEach((draggable, i) => {
  draggable.setAttribute("draggable", true);

  draggable.addEventListener("dragstart", (e) => {
    draggable.setAttribute("id", `selected`);
  });
});

const dropZone = document.getElementById("droppable");
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", (e) => {
 
  const selectedItem = document.getElementById("selected");
 
  if (selectedItem?.parentElement?.className == 'list') {
    const newItem = selectedItem.cloneNode(true);
    newItem.removeAttribute('id')
    dropZone.appendChild(newItem);
    selectedItem.removeAttribute('id')
  }
});
