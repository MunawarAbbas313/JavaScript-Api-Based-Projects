const jokeContainer = document.querySelector(".joke");
const  btn = document.querySelector(".Jokebtn");

const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=single";

const getjoke = async (item)=>{
    const response =  await fetch(url);
    const data = await response.json();
    const jok = data.joke;
    jokeContainer.textContent = `${jok}`;
    
    
    
    
}
btn.addEventListener("click", getjoke)
