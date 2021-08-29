export async function Login(email, password) {
    if(email === "teste@hotmail.com" && password === "123"){
        const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        return({error:false, jwt})
    } else {
        throw new Error("Invalid email and/or password!")
    }
}