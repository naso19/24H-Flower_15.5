var customers = []
// pushing the default users into an empty array
customers.push(new User("Nadja", "Soukka", "NaSo", "password"))
customers.push(new User("Faraz", "Jahoor", "FaJa", "password2"))
customers.push(new User("Nemanja", "Golubovic", "NeGo", "password3"))


for (let i = 0; i < customers.length; i++) {
     customer = JSON.parse(localStorage.getItem('customers'))
     customers[i] = new User(customers[i].firstName, customers[i].lastName, customers[i].username, customers[i].password);
}

