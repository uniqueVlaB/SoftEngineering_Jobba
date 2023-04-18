import { authData } from "./authData";

export function setAuthData({email, password}){
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
       authData.loginState = true
       authData.userName = content.expiration
       authData.token = content.accessToken
      })();
}