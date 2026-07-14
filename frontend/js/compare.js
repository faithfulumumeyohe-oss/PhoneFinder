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