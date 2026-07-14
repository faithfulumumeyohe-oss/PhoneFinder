const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Make phone available everywhere
let phone ; // global variable

async function loadPhone() {
    const response = await fetch(`http://localhost:5000/api/phones/${id}`);
    
    phone = await response.json();

    document.getElementById("phoneImage").src =
    `http://localhost:5000/images/${phone.image}`;

    document.getElementById("phoneName").innerText = 
    `${phone.brand} ${phone.model}`;
    
    document.getElementById("phonePrice").innerText =
    `$${phone.price}`;

    document.getElementById("brand").innerText =
    phone.brand;

    document.getElementById("ram").innerText =
    `${phone.ram} GB`;

    document.getElementById("storage").innerText =
    `${phone.storage} GB`;

    document.getElementById("battery").innerText =
    `${phone.battery} mAh`;

}

function goBack() {
    window.history.back();
}

document.querySelector(".compare-btn").addEventListener("click", () => {

    localStorage.setItem("phone1", JSON.stringify(phone));

    window.location.href = "phones.html?compare=true";

});

loadPhone();