// 🔴 Replace this with your API Gateway URL later
const API_URL = "https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/visit";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById("visitorCount").innerText = data.visits;
    })
    .catch(error => {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitorCount").innerText = "Error";
    });
