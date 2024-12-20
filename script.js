window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Split the "BIRTHDAY" text into individual letters
  const text = document.getElementById("birthday-text");
  const letters = text.innerText.split("").map((letter, index) => {
    return `<span style="--i:${index}">${letter}</span>`;
  }).join("");

  // Insert the split letters back into the element
  text.innerHTML = letters;
};
