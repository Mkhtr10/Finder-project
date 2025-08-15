const snicn = document.getElementById('snicn');
const modeMenu = document.getElementById('mode');
const lightBtn = document.getElementById('lightMode');
const darkBtn = document.getElementById('darkMode');


// Toggle menu visibility when clicking the icon
snicn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent click from closing instantly
    modeMenu.style.display = (modeMenu.style.display === 'block') ? 'none' : 'block';
});

// Close the menu when clicking outside
document.addEventListener('click', () => {
    modeMenu.style.display = 'none';
});

// Switch to Light Mode
function light() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    snicn.classList.remove('fa-moon');
    snicn.classList.add('fa-sun');
    modeMenu.style.display = 'none';
}

// Switch to Dark Mode
function dark() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    snicn.classList.remove('fa-sun');
    snicn.classList.add('fa-moon');
    modeMenu.style.display = 'none';
}

// Menu button click handlers
lightBtn.addEventListener('click', light);
darkBtn.addEventListener('click', dark);

// Keep saved theme when page reloads
if (localStorage.getItem('theme') === 'dark') {
    dark();
} else {
    light();
}

document.querySelector("#customize button").addEventListener("click", function() {
    document.getElementById("cstmNav").classList.add("active");
    document.getElementById("overlay").classList.toggle("show");
});

function closeCstmNav() {
    document.getElementById("cstmNav").classList.remove("active");
    document.getElementById("overlay").classList.remove("show");
}

document.querySelectorAll("#clrs input[type='color']").forEach(input => {
    input.addEventListener("input", function() {
        const span = this.closest(".clr").querySelector("span");
        span.textContent = this.value;
    });
});

document.getElementById("primaryColorPicker").addEventListener("input", (e) => {
    const color = e.target.value;
    document.getElementById("primaryColorValue").textContent = color;

    document.documentElement.style.setProperty("--primary-color", color);
});