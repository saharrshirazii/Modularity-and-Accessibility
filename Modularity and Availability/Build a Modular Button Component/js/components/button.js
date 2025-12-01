
export function createButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  document.body.appendChild(button);
  button.addEventListener("click", onClick);
  return button;
}
