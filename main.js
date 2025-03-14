function loadUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function readInput(input) {
    return document.getElementById(input);
}

function registerUser() {
    let username = readInput('username').value;
    let password = readInput('password').value;
    let users = loadUsers();

    if (username === '' || password === '') {
        alert('Iltimos username va passwordni kiriting!');
        return;
    }

    let user_exist = false

    for (let user of users) {
        if (user.username == username) {
            user_exist = true
            break;
        }
    }

    if (user_exist) {
        alert('Bu user allaqachon mavjud! Boshqa username tanlang!');
        return;        
    }
    
    users.push({ username, password });
    saveUsers(users);
    alert("Ro'yhatdan mufaqqiyatli o'tdingiz!");
    window.location.href = 'index2.html';
}

function loginUser() {
    let username = readInput('loginusername').value;
    let password = readInput('loginpassword').value;
    let users = loadUsers();

    let user_exist = false

    for (let user of users) {
        if (user.username == username && user.password == password) {
            user_exist = true
            break;
        }
    }

    if (user_exist) {
        alert('Login muaffaqiyatli amalga oshdi!');
    } else {
        alert('Username yoki password xato kiritildi!');
    }
}