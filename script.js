// Obtener orderId de la URL
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

if (orderId) {
    fetch(`https://tu-backend.com/api/orders/${orderId}`)
        .then(response => response.json())
        .then(data => {
            const downloadUrl = data.downloadUrl;
            document.getElementById('download-link').href = downloadUrl;
            document.getElementById('download-link').textContent = "Descargar Libro";
        })
        .catch(error => {
            console.error('Error obteniendo el enlace de descarga:', error);
        });
}

// Agregamos un evento al botón para volver a la tienda
document.getElementById("boton-volver").addEventListener("click", () => {
    // Cambia la URL a la de tu tienda
    window.location.href = "https://www.google.com/?hl=es";
});
