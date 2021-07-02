const allPosts = document.querySelector(".allPost");
const owner = document.querySelector(".postOwner");
const back = document.querySelector("back");
const fetchPosts = async (id) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);
	const data = await response.json();
    console.log(data);
	const posts = data.map(
		(post) => `
            <div class="postContainer">
                <h4 class="title">${post.title}</h4>
                <p class="body">${post.body}</p>
            </div>`
	);


	return (allPosts.innerHTML = posts.join(""));
};

const fetchUser = async (id) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const user = await response.json();
    console.log(user.name);
	owner.innerHTML= `All ${user.name}'s Posts`;

};

const url = new URLSearchParams(window.location.search);
const Id = url.get("userId");

window.addEventListener("load",() => {
	fetchUser(Id);
	fetchPosts(Id);
});
