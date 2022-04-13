
//create a function to insert Html to parentelement
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
  for (let i = 1; i <= totalButtons; i++){
    const li = document.createElement('li');
    button = `<button type="button">${i}</button>`;
    insertInfo(li, button);
    linkList.appendChild(li);
  }
  linkList.querySelector('button').className = 'active';

//create event listener for buttons
  linkList.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      const buttonLists = linkList.querySelectorAll('button');
      for(let i = 0; i < buttonLists.length; i++){
        buttonLists[i].className = '';
      }
      e.target.className = 'active';
    }
//Call showPage function
    const page = e.target.textContent;
    showPage(list, page);
  });
}


// Call functions
showPage(data, 1);
addPagination(data);
