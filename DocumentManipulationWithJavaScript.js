let products = [
    {name: "cd", price: 10.00, description: "Listen to your favorite music"},
    {name: "stereo", price: 700.50, description: "Top tier sound quality for all your favorites"},
    {name: "soundboard", price: 300.00, description: "Create and download all your favorite sounds and sound effects"}
    ];

    function displayCatalog() {
        const message = document.getElementById("product-catalog");
        let productDetails = "<ul>"
        products.forEach(product => {
            productDetails += `<li>${product.name}, ${product.price}, ${product.description}</li>`
        });
        productDetails += "</ul>"
        message.innerHTML = productDetails
    }

    document.getElementById("container").addEventListener("load", displayCatalog());