let currentRoom = '';

function openRoom(roomName) {
  currentRoom = roomName;
  const saved = localStorage.getItem(roomName);
  document.getElementById('memoryText').value = saved || '';
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

function saveMemory() {
  const text = document.getElementById('memoryText').value;
  localStorage.setItem(currentRoom, text);
  alert("Memória salva na " + currentRoom + "!");
  closePopup();
}
