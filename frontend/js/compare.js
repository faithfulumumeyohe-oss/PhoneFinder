const phone1 = JSON.parse(localStorage.getItem("phone1"));
const phone2 = JSON.parse(localStorage.getItem("phone2"));

function showPhone(phone, containerId){

    document.getElementById(containerId).innerHTML = `
    
    <img
    src="http://localhost:5000/images/${phone.image}"
    >
    
    <h2>${phone.brand} ${phone.model}</h2>
    
    <p>Price: $${phone.price}</p>
    
    <p>RAM: ${phone.ram} GB</p>
    
    <p>Storage: ${phone.storage} GB</p>
    
    <p>Battery: ${phone.battery} mAh</p>
    
    `;
}

showPhone(phone1,"leftPhone");
showPhone(phone2,"rightPhone");

function comparePhones(){
    document.getElementById("comparison")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// TABLE TITLES

document.getElementById("phone1Title").innerText =
`${phone1.brand} ${phone1.model}`;

document.getElementById("phone2Title").innerText =
`${phone2.brand} ${phone2.model}`;


// BRAND

document.getElementById("phone1Brand").innerText =
phone1.brand;

document.getElementById("phone2Brand").innerText =
phone2.brand;


// PRICE

document.getElementById("phone1Price").innerText =
`$${phone1.price}`;

document.getElementById("phone2Price").innerText =
`$${phone2.price}`;


// RAM

document.getElementById("phone1RAM").innerText =
`${phone1.ram} GB`;

document.getElementById("phone2RAM").innerText =
`${phone2.ram} GB`;


// STORAGE

document.getElementById("phone1Storage").innerText =
`${phone1.storage} GB`;

document.getElementById("phone2Storage").innerText =
`${phone2.storage} GB`;


// BATTERY

document.getElementById("phone1Battery").innerText =
`${phone1.battery} mAh`;

document.getElementById("phone2Battery").innerText =
`${phone2.battery} mAh`;


function comparePrice(){

    if(phone1.price < phone2.price){

       const winner =
       document.getElementById("phone1Price");

       winner.classList.add("winner");

       winner.innerHTML =
       `$${phone1.price}
       <br>
       <span class="winner-badge">
        WINNER
       </span>`;

    }

    else if(phone2.price < phone1.price){

        const winner =
        document.getElementById("phone2Price");

        winner.classList.add("winner");

        winner.innerHTML =
        `$${phone2.price}
        <br>
        <span class="winner-badge>
        WINNER
        </span>`;
    }

}


function compareRAM(){

    if(phone1.ram > phone2.ram){

        const winner =
        document.getElementById("phone1RAM");

        winner.classList.add("winner");

        winner.innerHTML =
        `${phone.ram} GB
        <br>
        <span class="winner-badge>
        WINNER
        </span>`;
    }

    else if(phone2.ram > phone1.ram){

        const winner =
        document.getElementById("phone2RAM");

        winner.classList.add("winner");

        winner.innerHTML =
        `${phone2.ram} GB
        <br>
        <span class="winner-badge">
        WINNER
        </span>`;
    }

}


function compareStorage(){

   if(phone1.storage > phone2.storage){

    const winner =
    document.getElementsByName("phone1Storage");

    winner.classList.add("winner");

    winner.innerHTML =
    `${phone1.storage} GB
    <br>
    <span class="winner-badge">
    WINNER
    </span>`;

   }
   else if(phone2.storage >  phone1.storage){

    const winner =
    document.getElementById("phone2Storage");

    winner.classList.add("winner");

    winner.innerHTML =
    `${phone2.storage} GB
    <br>
    <span class="winner-badge>
    WINNER
    </span>`;
   }
}

function compareBattery(){
    if(phone1.battery > phone2.battery){

        const winner =
        document.getElementById("phone1Battery");

        winner.classList.add("winner");

        winner.innerHTML =
        `${phone1.battery} mAh
        <br>
        <span class="winner-badge">
        WINNER
        </span>`;
    }
    else if(phone2.battery > phone1.battery){
  
        const winner =
        document.getElementById("phone2Battery");
        
        winner.classList.add("winner");

        winner.innerHTML =
        `${phone2.battery} mAh
        <br>
        <span class="winner-badge">
        WINNER
        </span>`;

    }
}

comparePrice();
compareRAM();
compareStorage();
compareBattery();