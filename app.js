const button =
document.getElementById("btn");
const adviceText =
document.getElementById("advice");

async function getAdvice() {
    try {
        const response = await
        fetch("https://api.adviceslip.com/advice", {
            cache: "no-cache" 
        })
        const data = await
        response.json();
        adviceText.textContent =
        data.slip.advice;
    } catch (error) {
        adviceText.textContent =
        "Failed to fetch advice"
    }
}


button.addEventListener("click",
getAdvice);