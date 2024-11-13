var images = [
    "https://i.pinimg.com/originals/7d/1b/10/7d1b103a9d357946511e056972a97d06.gif",
    "https://i.pinimg.com/originals/87/c1/27/87c1277dfc9c6c4e332595aa4838e713.gif", 
    "https://i.pinimg.com/originals/6f/52/a3/6f52a365ea0d10dee4938555c88ae2cd.gif",
    "https://giffiles.alphacoders.com/220/220128.gif",
    "https://giffiles.alphacoders.com/219/219233.gif"
];

var currentIndex = 0;

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function selectImage(index) {
    currentIndex = index;
    updateImage();
}

function updateImage() {
    var sliderImg = document.getElementById("slider-img");
    sliderImg.src = images[currentIndex];

    for (var i = 0; i < images.length; i++) {
        var thumbnailImg = document.querySelector(".thumbnail:nth-child(" + (i + 1) + ") img");
        thumbnailImg.style.border = i === currentIndex ? "2px solid red" : "2px solid transparent";
    }
}
