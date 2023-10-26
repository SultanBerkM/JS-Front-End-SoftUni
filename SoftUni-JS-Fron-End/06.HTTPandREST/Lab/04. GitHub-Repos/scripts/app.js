function loadRepos() {
   const container = document.querySelector("#res"); 
   fetch("https://api.github.com/users/testnakov/repos")
   .then((res) => res.text())
   .then((res) => container.innerHTML = res);
}