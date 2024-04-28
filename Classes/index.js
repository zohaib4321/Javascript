class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
}

const user = new User("Zohaib", "zohaib@gmail.com", 123)

console.log(user)
