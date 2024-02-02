const joke = document.querySelector("#joke");
const button = document.querySelector("#button");

function handleClick() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.type === "single") {
        return (joke.textContent = data.joke);
      } else {
        return (joke.textContent = data.delivery + data.setup);
      }
    });
}

button.addEventListener("click",() =>{
    handleClick()
})
