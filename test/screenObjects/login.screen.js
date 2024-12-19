class Login {
    constructor(){
        this.userName = "~Username input field"
        this.password = "~Password input field"
        this.loginButton = "~Login button"
    }

  async accessLogin(username, password){
        await $(this.userName).setValue(username)
        await $(this.password).setValue(password)
        await $(this.loginButton).click()
    }
}
export default new Login()