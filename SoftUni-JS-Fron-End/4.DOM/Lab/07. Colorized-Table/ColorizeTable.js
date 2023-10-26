function colorize() {
    let evenRows = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    evenRows.forEach((e) => e.style.background = 'teal');
}