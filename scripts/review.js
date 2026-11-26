const REVIEW_COUNT_KEY = "reviewCount";

const previousCount = Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
const newCount = previousCount + 1;

localStorage.setItem(REVIEW_COUNT_KEY, String(newCount));

const countElement = document.querySelector("#reviewCount");
if (countElement) {
  countElement.textContent = String(newCount);
}

// Footer year and last modified date
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedPara = document.querySelector("#lastModified");
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}