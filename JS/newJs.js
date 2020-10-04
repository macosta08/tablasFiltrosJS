import users from './obj.js'

const tableBody = document.getElementById('table-users-body');

function createRowTbody(user){
    let row;
    row = `<tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
            </tr>`;
    return row; 
  }
  function getfullTbody(usuarios){
    let tBody = usuarios.map(user => createRowTbody(user)).join(" ");
    return tBody;
  }

  function getTbodyFiltered(usuarios, callback){
    let tBody = usuarios.filter(callback).map(user => createRowTbody(user)).join(" ");
    return tBody;
  }

  function printUsers() {
    tableBody.innerHTML = '';
    let tBody = getfullTbody(users);
    tableBody.innerHTML = tBody;
  }

  function academloUsers(){
    tableBody.innerHTML = '';
    let tBody = getTbodyFiltered(users, user => user.email.endsWith('@academlo.com'));
    tableBody.innerHTML = tBody;
  }

  function averageAgeUsers(){
    tableBody.innerHTML = '';
    let tBody = getTbodyFiltered(users, user => user.age >= 20 && user.age <= 40);
    tableBody.innerHTML = tBody;
  }

  function onlyWomenUsers(){
    tableBody.innerHTML = '';
    let tBody = getTbodyFiltered(users, user => user.gender.endsWith('Female'));
    tableBody.innerHTML = tBody;
  }
  
  function printInfoUsers() {
    const usersInfo = document.getElementById("users-info");
    let html = '';
    users.forEach((user) => {
        html += 
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${user.age}</h6>
              <p class="card-text">${user.email}</p>`
              ;      

        user.social.forEach((s) => {
            html +=`<a href="${s.url}" target="blank" class="card-link">${s.name}</a>`;
        })
        html += '</div></div>';
    })
    usersInfo.innerHTML = html;
}


  //---------------------------------------------------------------------------------
 window.printUsers = printUsers;
 window.academloUsers = academloUsers;
 window.averageAgeUsers = averageAgeUsers;
 window.onlyWomenUsers = onlyWomenUsers;
 window.printInfoUsers = printInfoUsers;


