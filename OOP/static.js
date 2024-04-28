class User {
  constructor(username, password){
    this.username = username;
    this.password = password;
  }

  static getEncryptedPassword(){
    return `${this.password}abc`
  }

}

const userOne = new User("one", 123)
// console.log(userOne);
console.log(User.getEncryptedPassword());
