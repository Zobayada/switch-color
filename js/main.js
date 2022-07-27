let colorIcons = document.querySelector('.color-icon'),
    icons = document.querySelector('.color-icon .icons');

icons.addEventListener("click", () => {
    colorIcons.classList.toggle("open");
})

let buttons = document.querySelectorAll(".btn");
for (var button of buttons) {
    button.addEventListener("click", (e) => {
        let target = e.target;
        let open = document.querySelector(".open");
        if (open) open.classList.remove("open");

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        let root = document.querySelector(":root"),
            dataColor = target.getAttribute("data-color"),
            color = dataColor.split(" ");

        root.style.setProperty("--white", color[0]);
        root.style.setProperty("--dark", color[1]);
        root.style.setProperty("--navbar", color[2]);
        root.style.setProperty("--switch", color[3]);
        root.style.setProperty("--bg-light", color[4]);

        let iconName = target.className.split(" ")[2],
            colorText = document.querySelector(".home span");

        if (target.classList.contains("fa-moon-o")) {
            target.classList.replace(iconName, "fa-sun-o");
            colorIcons.style.display = "none";
            colorText.classList.add("darkMode");
        } else if (target.classList.contains("fa-sun-o")) {
            target.classList.replace("fa-sun-o", "fa-moon-o");
            colorIcons.style.display = "block";
            colorText.classList.remove("darkMode");
            document.querySelector(".btn.blue").click();
        }

        console.log(color);
    })
}