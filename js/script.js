
//create a function to insert Html to parent element
function insertInfo (position, content){
  position.insertAdjacentHTML('beforeend', content);
}
/*
Create the `showPage` function
*/
function showPage (list, page){
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML ='';
//Create li element on each page
  for(let i = 0; i < list.length; i++){
    if(i >= startIndex && i < endIndex){
      const li = document.createElement('li');
      li.className = 'student-item cf';
      // li.id = `student${i}`
      const div = document.createElement('div');
      div.className = 'student-detail';
      li.appendChild(div);

      const studentImg = `<img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">`;
      const studentName = `<h3>${list[i].name.first} ${list[i].name.last}</h3>`;
      const studentEmail = `<span class="email">${list[i].email}</span>`;
      const studentDate =
        `<div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>`;

     insertInfo(div, studentImg);
     insertInfo(div, studentName);
     insertInfo(div, studentEmail);
     insertInfo(div, studentDate);

     studentList.appendChild(li);
    }
  }
}
/*
Create the `addPagination` function
*/
function addPagination (list) {
  const totalButtons = Math.ceil(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';
//create pagination buttons
  if(totalButtons >0){
    for (let i = 1; i <= totalButtons; i++){
      const li = document.createElement('li');
      const button = `<button type="button">${i}</button>`;
      insertInfo(li, button);
      linkList.appendChild(li);
      linkList.querySelector('button').className = 'active';
    }
  }
//Add event listener for buttons
  linkList.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      const buttonLists = linkList.querySelectorAll('button');
      for(let i = 0; i < buttonLists.length; i++){
        buttonLists[i].className = '';
      }
      e.target.className = 'active';
    }
    const page = e.target.textContent;
    showPage(list, page);
  });
}
// Call functions
showPage(data, 1);
addPagination(data);

/*
Create the search bar
*/
const header = document.querySelector('.header');
const label = document.createElement('label');
label.setAttribute('for', 'search');
label.setAttribute('class', 'student-search');

const span = `<span>Search by name</span>`;
const input = `<input id="search" placeholder="Search by name...">`;
const searchButton = `<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>`;
insertInfo(label, span);
insertInfo(label, input);
insertInfo(label, searchButton);

header.appendChild(label);

/*
Create show no results function
*/
function noResults(){
  const ul = document.querySelector('.student-list');
  const text = `<h3>No results found</h3>`;
  ul.innerHTML = text;
}
/*
Create find name function
*/
function findName (){
  const inputValue = document.querySelector('label input').value.toUpperCase();
  let newList = [];
  for (let i = 0; i < data.length; i++){
    const firstName = data[i].name.first.toUpperCase();
    const lastName = data[i].name.last.toUpperCase();
    if(firstName.match(inputValue) || lastName.match(inputValue)){
        newList.push(data[i]);
      }
    }
  if(newList.length === 0){
    noResults();
  }else{
    showPage(newList, 1);
  }
  addPagination(newList);
}
/*
Add keyup event listener to input field
*/
document.querySelector('label input').addEventListener('keyup', findName);
/*
Add click event listener to search button
*/
document.querySelector('label button').addEventListener('click', findName);
