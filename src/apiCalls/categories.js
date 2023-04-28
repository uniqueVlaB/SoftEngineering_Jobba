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