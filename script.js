const responses = [
    {
        text: "1",
        image: "images/1.png"
    },
    {
        text: "2",
        image: "images/2.png"
    },
];

function generateResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    document.getElementById("responseText").innerText = response.text;
    const imageElement = document.getElementById("responseImage");
    imageElement.src = response.image;
    imageElement.style.display = "block";

    const button = document.querySelector("button");
    button.disabled = true;
    button.innerText = "Veuillez attendre";
    setTimeout(() => {  button.disabled = false; }, 10000); 
    button.innerText = "Appuis sur le bouton";
    
}

