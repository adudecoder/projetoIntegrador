const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
        return false;
    }
}

const btnSubmit = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const valor = document.querySelector("#describe");

    const valorElemento = valor.value;

    console.log(valorElemento);

});