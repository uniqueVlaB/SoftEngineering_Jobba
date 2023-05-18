import { authData } from "../models/authData";

export async function ApiLogin({email, password}){
        const rawResponse = await fetch('https://localhost:7159/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: email,
          password: password})
        });
        if(rawResponse.status !== 200){
          const content = await rawResponse.json();
          alert(content)
          return false
        }
        else{
       const content = await rawResponse.json();
       authData.userName = content.expiration
       authData.token = content.accessToken
       authData.email = email
       sessionStorage.setItem("authState","true")
       sessionStorage.setItem("authToken",content.accessToken)
       sessionStorage.setItem("authEmail",email)
       sessionStorage.setItem("authUsername",content.accessToken)
       return true
      }
}
export async function ApiRegister({email, password}){
  const rawResponse = await fetch('https://localhost:7159/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email,
    password: password})
  });
  if(rawResponse.status !== 200){
    const content = await rawResponse.json();
    alert(content)
    return false
  }
  else{
 const content = await rawResponse.json();
 authData.userName = content.expiration
 authData.token = content.accessToken
 authData.email = email
 sessionStorage.setItem("authState","true")
 sessionStorage.setItem("authToken",content.accessToken)
 sessionStorage.setItem("authEmail",email)
 sessionStorage.setItem("authUsername",content.accessToken)
 return true
}
}