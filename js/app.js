// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  //task 1
const mainEl = document.querySelector("main");
const mainBg = "var(--main-bg)"
mainEl.style.background = mainBg;
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

//task 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%"
const topMenuBg = "var(--top-menu-bg)"
topMenuEl.style.background = topMenuBg;
topMenuEl.setAttribute("class", "flex-around");

//task 3
menuLinks.forEach(function(menuLink) {
    const aElement = document.createElement("a");
     aElement.setAttribute("href", menuLinks[menuLinks.indexOf(menuLink)].href);
     aElement.innerText = menuLinks[menuLinks.indexOf(menuLink)].text;
     topMenuEl.appendChild(aElement);
}) 


