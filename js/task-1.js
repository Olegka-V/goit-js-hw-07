const ulCat = document.querySelector("#categories");
const items = document.querySelectorAll(".item");


ulCat.style.display = 'flex';
ulCat.style.flexDirection = 'column';
ulCat.style.gap = `24px`;



console.log(`Number of categories ${items.length}`);
const sumItem = ulCat.getElementsByClassName("item");
const categorys = document.querySelectorAll("h2");
items.forEach(item => {
    const title = item.firstElementChild.innerText;
    console.log(`Category ${ title }`);
    const elements = item.lastElementChild.children.length;
    console.log(`Elements ${elements}`);
});
 
