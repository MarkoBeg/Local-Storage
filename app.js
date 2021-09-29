const KeyEl = document.getElementById("Key");
const ValueEl = document.getElementById("Value");
const btnEl = document.getElementById("send-data");
const storageEl = document.getElementById("storage");
const removeEl = document.getElementById("remove");

btnEl.addEventListener("click", () => {
  const key = KeyEl.value;
  const value = ValueEl.value;
  if (value && key) {
    localStorage.setItem(value, key);
  }
  console.log(key, value);

  for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    storageEl.textContent += "" + value;
  }
});

removeEl.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
