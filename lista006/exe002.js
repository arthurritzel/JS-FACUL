var latitude
var longitude
async function coords(){
    await navigator.geolocation.getCurrentPosition((positions)=>{
        latitude = positions.coords.latitude
        longitude = positions.coords.longitude

        console.log(latitude, longitude)

        const map = L.map("map").setView([latitude, longitude], 14);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("Localizacao")
        .openPopup();
    })
}
coords();

