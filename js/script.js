// Brian's text
const brianText = `<p>In 1961, scientists gathered to discuss <span>Extra-Terrestrials</span> and data gathered up until then. They came to the conclusion there were between <span>2 and 3 MILLION</span> species of aliens in the <span>Milky Way Galaxy</span> ALONE! Not to mention the other trillion galaxies in the known universe. No wonder the World is being visited daily.
     -Brian Bauska March 4, 2026</p>`;

// Function to insert brian's text into divs
function insertTextIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert brian's text into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = brianText;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertTextIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
