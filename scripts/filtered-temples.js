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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    }
];

// DOM References for Grid & Heading
const gridContainer = document.querySelector('.res-grid');
const categoryTitle = document.querySelector('#category-title');

// Function to Dynamically Render Temple Cards
function createTempleCard(filteredTemples) {
    gridContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedication = document.createElement('p');
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement('p');
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '400');
        img.setAttribute('height', '250');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        gridContainer.appendChild(card);
    });
}

// Initial Render (Displays All Temples)
createTempleCard(temples);

// Navigation Filter Event Listeners
document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Home";
    createTempleCard(temples);
});

document.querySelector('#old').addEventListener('click', (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Old";
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    createTempleCard(oldTemples);
});

document.querySelector('#new').addEventListener('click', (e) => {
    e.preventDefault();
    categoryTitle.textContent = "New";
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    createTempleCard(newTemples);
});

document.querySelector('#large').addEventListener('click', (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Large";
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

document.querySelector('#small').addEventListener('click', (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Small";
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});