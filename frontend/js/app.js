const compareMode = 
new URLSearchParams(window.location.search).get("compare");

const selectedBrand =
new URLSearchParams(window.location.search).get("brand");

let allPhones = [];

async function loadPhones() {
    const response = await fetch("http://localhost:5000/api/phones");
    allPhones = await response.json();

    if (selectedBrand) {
        const filtered = 
        allPhones.filter(phone => phone.brand === selectedBrand);

        displayPhones(filtered);
    } else {
        displayPhones(allPhones);
    }

}

function displayPhones(phones) {
    const container = document.getElementById("phoneContainer");


        container.innerHTML = "";

        phones.forEach(phone => {

            container.innerHTML += `
                <div class="phone-card">
                    <img 
                    src="http://localhost:5000/images/${phone.image}"
                    alt="${phone.brand} ${phone.model}"
                    >

                    <h3>${phone.brand} ${phone.model}</h3>

                    <p>$${phone.price}</p>
                    
                    <p>${phone.ram}GB RAM</p>

${
compareMode
?
`<button onclick="selectSecondPhone('${phone._id}')">
Compare With This
</button>`
:
`<button onclick="viewDetails('${phone._id}')">
View Details
</button>`
}
                 </div>
            `;
        });
}

function viewDetails(id) {
    window.location.href = `details.html?id=${id}`;
}
async function selectSecondPhone(id) {

    const response = await fetch(
        `http://localhost:5000/api/phones/${id}`
    );

    const phone2 = await response.json();

    localStorage.setItem(
        "phone2",
        JSON.stringify(phone2)
    );

    window.location.href = "compare.html";
}

    function filterPhones(brand) {

        if (brand === "All") {
            displayPhones(allPhones);
            return;
        }

        const filtered = allPhones.filter(
            phone => phone.brand === brand
        );
        
        displayPhones(filtered);
    }

loadPhones();

const searchInput = document.getElementById("searchInput");

const suggestions =
document.getElementById("suggestions");

if(searchInput) {
    searchInput.addEventListener("input", ()=> {

        const value =
        searchInput.value.toLowerCase();
        suggestions.innerHTML = "";

        if(value==="") return;

        const matches =
        allPhones.filter(phone =>

            `${phone.brand} ${phone.model}`
            .toLowerCase()
            .includes(value)
        );

        matches.slice(0,6).forEach(phone => {
            const div =
            document.createElement("div");

            div.className = "suggestion";

            div.innerHTML =
            `${phone.brand} ${phone.model}`;

            div.onclick = () => {

                window.location.href =
                `details.html?id=${phone._id}`;
            };

            suggestions.appendChild(div);

        });
    });

    document.addEventListener("click", (e) => {
        if(!searchInput.contains(e.target) &&
            !suggestions.contains(e.target)) {
                suggestions.innerHTML = "";

            }
    });

}