const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const price = document.querySelector('#price');
const stall = document.querySelector('#stall');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && author.value == '' && year.value == '' && price.value=='' && stall.value=='') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new Year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Creating new Price
    const newPrice = document.createElement('th');
    newPrice.innerHTML = price.value;
    newRow.appendChild(newPrice);

    // Creating new Stall
    const newStall = document.createElement('th');
    newStall.innerHTML = stall.value;
    newRow.appendChild(newStall);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});
