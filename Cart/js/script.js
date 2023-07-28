
const menuItems = [
    { name: "Pizza", price: "$10.99" },
    { name: "Burger", price: "$7.99" },
    { name: "Pasta", price: "$9.49" },
];

// Function to generate menu items dynamically
function generateMenuItems() {
    const menuSection = document.querySelector(".menu");
    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    `;
        menuSection.appendChild(menuItem);
    });
}

// Call the function to generate menu items
generateMenuItems();
