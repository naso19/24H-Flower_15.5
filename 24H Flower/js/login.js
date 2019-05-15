function login() {

    var username = document.getElementById("uname").value;
    var password = document.getElementById("pw").value;

    // get customers from local storage and look for matching username&password combination
    for (i = 0; i < customers.length; i++) {
        customers = JSON.parse(localStorage.getItem('customers'))
        customers[i] = new User(customers[i].firstName, customers[i].lastName, customers[i].username, customers[i].password);
        if (username == customers[i].username && password == customers[i].
            password) {
            // save the loged in username as currentUser, so that items are saved to the right user's cart
            localStorage.setItem('currentUser', JSON.stringify(username));

            window.location = "./productflowers.html";
            return false
        }
    } alert("login is not correct")
}

// logout button removes currentUser and takes the user to the login page
function logout() {
    localStorage.removeItem("currentUser");
    window.location = "./Loginpage.html";
    return false
}
