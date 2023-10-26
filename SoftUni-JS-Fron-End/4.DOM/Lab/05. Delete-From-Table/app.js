function deleteByEmail() {
    const removeItem = document.querySelector("label input").value;
    const emails = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const result = document.getElementById('result');

    let email = emails.find((e) => e.textContent === removeItem);
    if(email){
        email.parentElement.remove();
        result.textContent = "Deleted";
        document.querySelector("label input").value = '';
    }
    else{
        result.textContent = "Not found.";
    }
}