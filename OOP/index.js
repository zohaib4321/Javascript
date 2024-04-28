
function User(username, loginCount, isLoggedIn) {
    // username = 'Arham'
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

User.prototype.getUserLoginCount = function(){
    return `${this.loginCount}`
}

// Constructor func like 'new' give new instance

let userOne = new User('Zohaib', 2, true)
let userTwo = new User('Arham', 3, false)

console.log(userOne.getUserLoginCount())
console.log(userTwo)

