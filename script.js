document.getElementById("ButtonPalette").addEventListener("click", function () {
    const value = document.getElementById("TextInput").value.trim();
    const root = document.documentElement;
    const pokemon = document.getElementById("Joltik");

    if (value === "1") {
        root.style.setProperty("--color-primary", "#401b50");
        root.style.setProperty("--color-secondary", "#a9e383");
        root.style.setProperty("--color-accent", "#8d0715");
        root.style.setProperty("--color-light", "#b4cdd7");
        root.style.setProperty("--color-contrast", "#10a09d");

        pokemon.src = "Floette.png";
    } 
    else if (value === "2") {
        root.style.setProperty("--color-primary", "#5444b9");
        root.style.setProperty("--color-secondary", "#a69ffa");
        root.style.setProperty("--color-accent", "#824af8");
        root.style.setProperty("--color-light", "#b2cde2");
        root.style.setProperty("--color-contrast", "#dc3f11");

        pokemon.src = "Gible.png";
    } 
    else if (value === "3") {
        root.style.setProperty("--color-primary", "#7e4bae");
        root.style.setProperty("--color-secondary", "#ffb55e");
        root.style.setProperty("--color-accent", "#aa4f9c");
        root.style.setProperty("--color-light", "#ebceff");
        root.style.setProperty("--color-contrast", "#d92610");

        pokemon.src = "Joltik.png";
    } 
    else {
        alert("Only 1, 2 and 3 are allowed to change the website color palette");
    }
});