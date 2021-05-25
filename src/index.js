function fetchData() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })

    .then((data) => {
      // console.log(data);
      const html = data
        .map((user) => {
          return `
          
        <div class = 'user'>
        <p class = 'name'> ${user.name}</p>
        <img class ='img'  src ='${user.image_url}'  style="width:50px;height:120px;"/>
         <p class = description> ${user.description}</p>
        </div>`;
        })
        .join("");
      // console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
