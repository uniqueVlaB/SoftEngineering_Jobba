export async function ApiSetCategories(setCategories){
await fetch('https://localhost:7159/api/Categories',{
    method:'GET'
  })
  .then(response => response.json())
  .then(data => {
    setCategories(data)
  sessionStorage.setItem("categories", JSON.stringify(data))
  })
}

export async function ApiAddCategory(categoryName){
  await fetch('https://localhost:7159/api/Categories',{
    method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + sessionStorage.getItem("authToken")
      },
      body: JSON.stringify({
       name: categoryName
      })
  }).then(response => response.json())
  .then(data => console.log(data))
  }