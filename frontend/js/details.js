const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Allow phone to be availabe everywhere
let phone;

// Load the selecred phone's details
async function loadPhones() {
    const response = await fetch(
    `http://localhost:5000/api/phones/${id}`
    );

phone = await response.json();

// Display phone details
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

    // Save Recently Viewed Phones

    let recentlyViewed =
    JSON.parse(localStorage.getItem("recentPhones")) || [];

    // Remove duplicate
    recentlyViewed = recentlyViewed.filter(
        item => item._id !== phone._id
    );

    // Add current phone to the beginning
    recentlyViewed.unshift(phone);

    // Keep only the last 5 phone
    recentlyViewed = recentlyViewed.slice(0, 5);

    // Save to localStorage
    localStorage.setItem(
        "recentPhones",
        JSON.stringify(recentlyViewed)
    );

    // Display Recent Phones
    displayRecentPhones();
}

// Back button
function goBack() {
    window.history.back();
}

// Compare button
document.querySelector(".compare-btn").addEventListener("click", () => {
  
    localStorage.setItem(
        "phone1",
        JSON.stringify(phone)
    );

    window.location.href =
    "phones.html?compare=true";
});

// Display recently viewed phoned
function displayRecentPhones() {

    const container =
    document.getElementById("recentPhonesContainer");

    // Prevent errors if the container doesn't exist
    if (!container) return;

    const recentPhones =
    JSON.parse(localStorage.getItem("recentPhones")) || [];

    container.innerHTML = "";

    recentPhones.forEach(phone => {

        container.innerHTML += `
        
        <div class="recent-card">
        
        <img 
        src="http://localhost:5000/images/${phone.image}"
        alt="${phone.brand} ${phone.model}">
        
        <h3>
        ${phone.brand} ${phone.model}
        </h3>
        
        <button
        onclick="window.location.href='details.html?id=${phone._id}'">
        View Phone
        </button>

        </div>


        `;
    });
}

// Load everything when the page open
loadPhones();