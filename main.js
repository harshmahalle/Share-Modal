const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//model open function
const openModal = () => {
    console.log("model is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

//model close function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}