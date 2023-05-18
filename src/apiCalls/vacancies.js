import { vacancy } from "../models/vacancy"

 export async function ApiSetUserVacancies(categoryId, page, itemsPerPage, setVacancies, setPage) {
    await fetch('https://localhost:7159/api/Vacancies/MyVacancies?' + new URLSearchParams({
    CategoryId: categoryId,
    Page: page,
    Header: "",
    ItemsPerPage: itemsPerPage
    }), {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem("authToken")
    }
    })
    .then(response => response.json())
    .then(data => {
    setVacancies(data);
    if (data.totalPages === 0 || data.totalPages < page)
    setPage(1);
    });
    }

    export async function ApiSetVacancies(categoryId, page, itemsPerPage, header, setVacancies, setPage) {
      await fetch('https://localhost:7159/api/Vacancies?' + new URLSearchParams({
      CategoryId: categoryId,
      Page: page,
      Header: header,
      ItemsPerPage: itemsPerPage
      }), {
      method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
      setVacancies(data);
      if (data.totalPages === 0 || data.totalPages < page)
      setPage(1);
      });
      }

      export async function ApiSaveVacancy(headerValue, descriptionValue, categoryId) {
         await fetch('https://localhost:7159/api/Vacancies/' + vacancy.id,{
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + sessionStorage.getItem("authToken")
          },
          body: JSON.stringify({
            header: headerValue,
            description: descriptionValue,
            categoryId: categoryId
          })
      }).then(response => response.json())
      .then(data => console.log(data))
         }

         
export async function ApiAddVacancy(headerValue, descriptionValue, categoryId) {
            await fetch('https://localhost:7159/api/Vacancies/',{
           method:'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization':'Bearer ' + sessionStorage.getItem("authToken")
             },
             body: JSON.stringify({
               header: headerValue,
               description: descriptionValue,
               categoryId: categoryId
             })
         }).then(response => response.json())
         .then(data => console.log(data))
            }

export async function ApiDeleteVacancy(vacancyy) {
  
   await fetch('https://localhost:7159/api/Vacancies/' + vacancyy.id,{
      method:'DELETE',
      headers: {
          'Authorization':'Bearer ' + sessionStorage.getItem("authToken")
        },
    }).then(response => console.log(response.status))
               }