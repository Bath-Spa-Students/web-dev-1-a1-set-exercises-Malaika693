function calculateTotal() {
    const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
    const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);
    const totalCost = costPerLiter * litersPurchased;
    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}
