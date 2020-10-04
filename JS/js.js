import users from './obj.js'
// Obtengo el elemento HTML donde quiero agregar nuevo contenido
const tableBody = document.getElementById('table-users-body');
// Obtengo los datos que quiero agregar
// const user0 = users[0];
// const user1 = users[1];
// Armo mi html
// const row = '<tr><td>'+ user0.name +'</td></tr>';
// const row = '<tr><td>'+ users[1].name +'</td></tr>';
// Agrego todo el html al elemento que obtuve en el paso 1
// tableBody.innerHTML = row;

function printUsers() {
    tableBody.innerHTML = '';
    // for(let i = 0; i < users.length; i++) {
    //     const row = '<tr><td>'+ users[i].name +'</td><td>' + users[i].age + '</td><td>' + users[i].email + '</td><td>' + users[i].gender + '</td></tr>';
    //     tableBody.innerHTML += row;
    // }
    //const usuarios = users.map(user => '<tr><td>'+ user.name +'</td><td>' + user.age + '</td><td>' + user.email + '</td><td>' + user.gender + '</td></tr>');
    users.forEach(user => {
        const row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.gender}</td>
                    </tr>`;
        tableBody.innerHTML += row; 
    })
}


function academloUsers() {
    tableBody.innerHTML = '';
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].email.endsWith('academlo.com')) {
    //         const row = '<tr><td>'+ users[i].name +'</td><td>' + users[i].age + '</td><td>' + users[i].email + '</td><td>' + users[i].gender + '</td></tr>';
    //         tableBody.innerHTML += row;
    //     }
    // }
    users.forEach(user => {
        if(user.email.endsWith('academlo.com')) {
            const row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${user.gender}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        }
    })
}

function averageAgeUsers() {
    tableBody.innerHTML = '';
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].age >= 20 && users[i].age <= 40) {
    //         const row = '<tr><td>'+ users[i].name +'</td><td>' + users[i].age + '</td><td>' + users[i].email + '</td><td>' + users[i].gender + '</td></tr>';
    //         tableBody.innerHTML += row;
    //     }
    // }
    users.forEach(user => {
        if(user.age >= 20 && user.age <= 40) {
            const row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${user.gender}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        }
    })

}

function onlyWomenUsers() {
    tableBody.innerHTML = '';
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].gender.endsWith('Female')) {
    //         const row = '<tr><td>'+ users[i].name +'</td><td>' + users[i].age + '</td><td>' + users[i].email + '</td><td>' + users[i].gender + '</td></tr>';
    //         tableBody.innerHTML += row;
    //     }
    // }
    const women = users.filter(user => user.gender.endsWith('Female'));
    women.forEach(user => {
        // if(user.gender.endsWith('Female')) {
            const row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${user.gender}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        // }
    })

}
function printInfoUsers() {
    const usersInfo = document.getElementById("users-info");
    // let html = '';
    // for(let i = 0; i < users.length; i++) {
    //     html += 
    //     '<div class="card" style="width: 18rem;">'+
    //     '<div class="card-body">'+
    //       '<h5 class="card-title">'+users[i].name+'</h5>'+
    //       '<h6 class="card-subtitle mb-2 text-muted">'+users[i].age+'</h6>'+
    //       '<p class="card-text">'+users[i].email+'</p>'
    //       ;        
          
    //     let social = users[i].social; // -> esto es un array
    //     for(let j = 0; j < social.length; j++) {
    //         social[j].url //-> esto es cada objeto dentro de social
    //         html +='<a href="'+social[j].url+'" class="card-link">'+social[j].name+'</a>';
    //     }
    //     html += '</div></div>';
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
window.printUsers = printUsers;
window.academloUsers = academloUsers;
window.averageAgeUsers = averageAgeUsers;
window.onlyWomenUsers = onlyWomenUsers;
window.printInfoUsers = printInfoUsers;
