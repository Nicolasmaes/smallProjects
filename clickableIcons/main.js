var icons = [
    {
        id: "one",
        picture: "chrome"
    },
    {
        id: "two",
        picture: "firefox"
    },
    {
        id: "three",
        picture: "bk"
    },
];

var container = document.getElementById("container");

(function loopingTheArray() {
    icons.forEach(i => {
        const singleIcon =
            `   <button onclick="animation('${i.id}')">
        <div id="imageBox${i.id}" class="image">
            <div id="tick${i.id}" class="tick">
                <img src="tick.png" alt="">
            </div>
            <img class="resizing" id="${i.id}" src="${i.picture}.svg" alt="">
        </div>
    </button>` ;
        container.innerHTML += singleIcon;
    });
}());


function animation(id) {
    var image = document.getElementById(id);
    var box = document.getElementById("imageBox" + id);
    var tickBox = document.getElementById("tick" + id);

    image.classList.toggle("reduction");
    box.classList.toggle("border");
    tickBox.classList.toggle("display");
}






