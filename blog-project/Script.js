window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.style.maxHeight = "0";
  } else {
    mobileMenu.style.maxHeight = "200px"; // مقدار max-height را به اندازه مناسب تنظیم کنید
  }
});

const toggleButton = document.getElementById("toggleButton");
const searchInput = document.getElementById("searchInput");
const searchContainer = document.getElementById("searchContainer");

// در ابعاد sm و md، نوار جستجو به صورت مخفی است
if (window.innerWidth > 1024) {
  // 1024px = lg
  searchInput.classList.add("opacity-0");
  searchContainer.style.maxHeight = "100px";
}

toggleButton.addEventListener("click", () => {
  if (searchInput.classList.contains("opacity-100")) {
    searchInput.classList.remove("opacity-100");
    searchInput.classList.add("opacity-0");
    searchContainer.style.maxHeight = "0";
  } else {
    searchInput.classList.remove("opacity-0");
    searchInput.classList.add("opacity-100");
    searchContainer.style.maxHeight = "100px"; // مقدار max-height را به اندازه مناسب تنظیم کنید
    searchInput.focus();
  }
});

const words = ["سلام دوستان !", "خوش آمدین به بلاگ آوران .", "پایین صحفه میتونید وبلاگ خودتون رو بنویسید !"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();


const togglebutton = document.getElementById('togglebutton');
const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`

const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`

togglebutton.addEventListener('click' , () => {
  document.documentElement.classList.toggle('dark')
  if(isDarkModeEnable()){
    togglebutton.innerHTML = lightSvg
  }
  else{
    togglebutton.innerHTML = darkSvg
  }

})

function isDarkModeEnable(){
  return document.documentElement.classList.contains('dark')
}