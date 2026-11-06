
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const currentYearSpan = document.querySelector('#currentyear');
const today = new Date();
currentYearSpan.textContent = today.getFullYear();


const lastModifiedParagraph = document.querySelector('#lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
