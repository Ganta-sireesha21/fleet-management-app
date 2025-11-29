let vehicles = [];
const form = document.getElementById("vehicleForm");
const vehiclelist = document.getElementById("vehiclelist");
const filterType = document.getElementById("flterType");
form.addEventListener("submit", function (e)) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const type = document.getElementById("type").value.trim();
    const capacity = document.getElementById("capacity").value;
    const availability = document.getElementById("availability").value.trim();
if (!name || !type || !capacity) {
    alert("please fill all field");
    return;
}
const newVehicle = {
    id: Date.now(),
    name,
    type,
    capacity,
    availability
}
vehicles.push(newVehicle);
displayVehicles(vehicles);
form.reset();
};
 function displayVehicles(data) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
    <h3>${v.name}</h3>
    <p>Type: ${v.type}</p>
    <p>capacity: ${v.capacity}</p>
    <p>availability: ${v.availability}</p>
 }