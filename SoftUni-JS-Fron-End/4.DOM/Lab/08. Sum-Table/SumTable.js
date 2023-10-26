function sumTable() {
    const prices = Array.from(document.querySelectorAll('td:nth-child(even)'));
    prices.pop();
    let sum =0;
    prices.forEach((x) => sum+=Number(x.textContent));

    document.getElementById("sum").textContent = sum;
}