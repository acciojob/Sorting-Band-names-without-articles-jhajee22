//your code here
const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from a band name
function removeArticles(bandName) {
    return bandName.replace(/^(a|an|the) /i, '').trim();
}

// Use map to create an array of band names without articles
const bandNamesWithoutArticles = bandNames.map(removeArticles);

// Sort the band names without articles
bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

// Create a ul element with id 'band' and add li elements
const ulElement = document.createElement('ul');
ulElement.id = 'band';

bandNamesWithoutArticles.forEach(bandName => {
    const liElement = document.createElement('li');
    liElement.textContent = bandName;
    ulElement.appendChild(liElement);
});

// Append the ul element to the HTML document
document.body.appendChild(ulElement);


