const container = document.querySelector(".card__container");
const button = document.querySelector(".card__button");
const displayUsers = async() => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	const cards = users.map(
		(user) => `
  <div class="card">
      <div class="card__content">
        <h3 class="card__header" id="name">${user.name}</h3>
        <p class="card__info" id="email">${user.email}</p>
         <div class="card__button">
        <a href="single.html?userId=${user.id}">Get User’s Posts</a>
        </div>
      </div>
 </div>
      `
	);
return(container.innerHTML = cards.join(" "))
};

displayUsers();

