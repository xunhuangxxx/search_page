
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

      div.insertAdjacentHTML('beforeend', studentImg);
      div.insertAdjacentHTML('beforeend', studentName);
      div.insertAdjacentHTML('beforeend', studentEmail);


      const studentDate =
        `<div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>`;

      li.insertAdjacentHTML('beforeend', studentDate);


      studentList.appendChild(li);
    }
  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
