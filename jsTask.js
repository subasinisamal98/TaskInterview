let inventory = [];
function addItem(name, category, quantity, price, supplier) {
    const item = {
        name: name,
        category: category,
        quantity: quantity,
        price: price,
        supplier: supplier
    };
    inventory.push(item);
}
function listItems() {
    inventory.forEach(item => {
        console.log(`${item.name} - ${item.category} - Quantity: ${item.quantity} - Price: ${item.price} - Supplier: ${item.supplier}`);
    });
}

function calculateTotalValue() {
    let totalValue = 0;
    inventory.forEach(item => {
        totalValue = totalValue + item.quantity * item.price;
    });
    console.log(`Total Inventory Value: $${totalValue}`);
}

function findByCategory(category) {
    const itemsInCategory = inventory.filter(item => item.category === category);
    itemsInCategory.forEach(item => {
        console.log(`${item.name} - ${item.category} - Quantity: ${item.quantity} - Price: ${item.price} - Supplier: ${item.supplier}`);
    });
}

function lowStockAlert() {
    const lowStockItems = inventory.filter(item => item.quantity <= 5);
    lowStockItems.forEach(item => {
        console.log(`${item.name} - ${item.category} - Quantity: ${item.quantity} - Price: ${item.price} - Supplier: ${item.supplier}`);
    });
}

addItem("Laptop", "Electronics", 5, 1500, "TechSupplier");
addItem("Desk", "Furniture", 10, 150, "OfficeWorld");
addItem("Mouse", "Electronics", 5, 25, "TechSupplier");
addItem("Chair", "Furniture", 7, 75, "OfficeWorld");
addItem("Monitor", "Electronics", 4, 500, "TechSupplier");

listItems();
calculateTotalValue();
findByCategory("Electronics");
lowStockAlert();
