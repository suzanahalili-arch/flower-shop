let flowers = JSON.parse(localStorage.getItem("flowers")) || [
    { name: "Trëndafil", price: "5€", image: "images/trendafil.jpg" },
    { name: "Zambak", price: "7€", image: "images/zambak.jpg" },
    { name: "Orkide", price: "15€", image: "images/Orkide.jpg" }
];

function saveToLocalStorage() {
    localStorage.setItem("flowers", JSON.stringify(flowers));
}

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("flower-list");
    const form = document.getElementById("addFlowerForm");

    if (listContainer) {
        renderFlowers();
    }

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const name = document.getElementById("flowerName").value;
            const price = document.getElementById("flowerPrice").value;

            flowers.push({
                name,
                price,
                image: "images/trendafil.jpg"
            });

            saveToLocalStorage();
            form.reset();

            window.location.href = "index.html";
        });
    }
});

function renderFlowers() {
    const listContainer = document.getElementById("flower-list");
    listContainer.innerHTML = flowers
        .map(flower => `
            <div class="flower-item">
                <img src="${flower.image}" class="flower-image" alt="${flower.name}">
                <h3>${flower.name}</h3>
                <p>Çmimi: ${flower.price}</p>
            </div>
        `)
        .join("");

}
