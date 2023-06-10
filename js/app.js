// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


  //task 1
const mainEl = document.querySelector("main");
const mainBg = "var(--main-bg)"
mainEl.style.background = mainBg;
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

//task 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
const topMenuBg = "var(--top-menu-bg)";
topMenuEl.style.background = topMenuBg;
topMenuEl.setAttribute("class", "flex-around");

//task 3
menuLinks.forEach(function(menuLink) {
    const aElement = document.createElement("a");
     aElement.setAttribute("href", menuLinks[menuLinks.indexOf(menuLink)].href);
     aElement.innerText = menuLinks[menuLinks.indexOf(menuLink)].text;
     topMenuEl.appendChild(aElement);
}) 

//task 4
const subMenuEl = document.getElementById("sub-menu");
const subMenuBg = "var(--sub-menu-bg)";
subMenuEl.style.height = "100%";
subMenuEl.style.background = subMenuBg;
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// //task 5
const topMenuLinks = document.querySelectorAll("#top-menu a");
//console.log(topMenuLinks);
let showingSubMenu = false;


topMenuEl.addEventListener("click", handleTopMenu);
function handleTopMenu(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  } //else {
  //console.log(evt.target.innerHTML)
  //}
  // Next in the event listener, if the clicked <a> link has a class of active:
   if (evt.target.className.includes("active") === true) {
     // Remove the active class from the clicked <a> element.
     evt.target.classList.remove("active");
     // Set the showingSubMenu to false.
     showingSubMenu = false;
     // Set the CSS top property of subMenuEl to 0.
     subMenuEl.style.top = "0";
     // return; from the event listener function.
     return;
   }

   topMenuLinks.forEach(function(aElement) {
    aElement.classList.remove("active")
   })
//Next, the event listener should add a class name of active to the <a> element that was clicked.
evt.target.setAttribute("class", "active");

//Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
const targetLink = menuLinks.find(obj =>obj.text === String(evt.target.innerHTML));
const targetSubLink = targetLink.subLinks;


if (Object.keys(targetLink).includes("subLinks")) {
  showingSubMenu = true;
  //console.log(showingSubMenu);
} else {
  showingSubMenu = false;
  //console.log(showingSubMenu);
}
// if showingSubMenu is true:
if (showingSubMenu === true) {
  // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
  buildSubMenu (targetSubLink);
  // Set the CSS top property of subMenuEl to 100%.
  subMenuEl.style.top = "100%"  
} else {
  // Otherwise (showingSubMenu is false):
  // Set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = "0";
  // Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
  mainEl.innerHTML = "<h1>about</h1>";
}
function buildSubMenu(passedArray) {
  //clear content of submenu - 
  while (subMenuEl.hasChildNodes() === true) {
    aEl = document.querySelector("#sub-menu a");
    subMenuEl.removeChild(aEl);
  }
//   Iterates over the subLinks array passed as an argument; and for each "link" object:
passedArray.forEach(function(subMenuLink) {
  // Create an <a> element.
  const aElement = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aElement.setAttribute("href", passedArray[passedArray.indexOf(subMenuLink)].href);
  // Set the new element's content to the value of the text property of the "link" object.
  aElement.innerText = passedArray[passedArray.indexOf(subMenuLink)].text;
  // Append the new element to the subMenuEl element.
  subMenuEl.appendChild(aElement);
})
}
}

// task 6
subMenuEl.addEventListener("click",handleSubMenu);
function handleSubMenu(evt) {
evt.preventDefault();
if (evt.target.tagName !== "A") {
  return;
// } else {
//   console.log(evt.target.innerHTML);
// }
}
// Next, subMenuEl's event listener should:
// Set showingSubMenu to false.
showingSubMenu = false;
// Set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = 0;
// Next, subMenuEl's event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
topMenuLinks.forEach(function(aElement) {
  aElement.classList.remove("active")
 })
//  Next, subMenuEl's event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
mainEl.innerHTML = `<h1> ${evt.target.innerHTML} </h1>`
}
