// Get the drag items
const items = document.querySelectorAll('.item');

// Add drag event listeners to each item
items.forEach(item => {
     item.addEventListener('dragstart', dragStart);
     item.addEventListener('dragend', dragEnd);
});

// Store the dragged item
let draggedItem = null;

// Drag event handlers
function dragStart() {
     draggedItem = this;
     this.classList.add('dragging');
}

function dragEnd() {
     draggedItem = null;
     this.classList.remove('dragging');
}

// Get the drop container
const dropContainer = document.querySelector('.drop-container');

// Add drop event listeners to the drop container
dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragenter', dragEnter);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);

// Drop event handlers
function dragOver(e) {
     e.preventDefault();
}

function dragEnter(e) {
     e.preventDefault();
     this.classList.add('drag-over');
}

function dragLeave() {
     this.classList.remove('drag-over');
}

function drop() {
     this.classList.remove('drag-over');
     this.appendChild(draggedItem);
     showMessage('Item dropped!');
}

// Show a message in the drop container
function showMessage(message) {
     const dropMessage = document.querySelector('.drop-message');
     dropMessage.textContent = message;
}

// Reset the containers and the message
function resetContainers() {
     const dragItemsContainer = document.querySelector('.drag-items');
     const dropContainer = document.querySelector('.drop-container');
     const dropMessage = document.querySelector('.drop-message');

     // Clear the drop container
     dropContainer.innerHTML = '<div class="drop-message">Drop items here</div>';

     // Reset the drag items container
     dragItemsContainer.innerHTML = '';
     items.forEach(item => {
          item.classList.remove('dragging');
          dragItemsContainer.appendChild(item);
     });

     // Reset the message
     dropMessage.textContent = 'Drop items here';
}
