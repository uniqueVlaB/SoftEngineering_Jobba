import { authData } from "../models/authData";

export function ApiLogin({email, password}){
    (async () => {
        const rawResponse = await fetch('https://localhost:7159/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: email,
          password: password})
        });
       const content = await rawResponse.json();
       authData.userName = content.expiration
       authData.token = content.accessToken
       authData.email = email
       localStorage.setItem("authState","true")
       localStorage.setItem("authToken",content.accessToken)
       localStorage.setItem("authEmail",email)
       localStorage.setItem("authUsername",content.accessToken)
      })();
}