const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = document.querySelector("header p"),
closeIcon = document.querySelector("header i"),
titleTag = document.querySelector("input"),
descTag = document.querySelector(".desc"),
descIgr = document.querySelector(".ingr"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
let isUpdate = false, updateId;

addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add a new Recipe";
    addBtn.innerText = "Add Recipe";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = "";
    titleTag.value = descIgr.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showRecipes() {
    if(!recipes) return;
    document.querySelectorAll(".recipe").forEach(li => li.remove());
    recipes.forEach((recipe, id) => {
        let ingedient = recipe.ingedient.replaceAll("\n", '<br/>-');
        let filterDesc = recipe.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="recipe">
                        <div class="details">
                            <p>${recipe.title}</p>
                            <span>Ingredients:</span>
                            <ul>
                                <li id ="pointer">-${ingedient}<br></li>
                            </ul>
                        </div>
                        <div class="bottom-content">
                            <span>${recipe.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateRecipe(${id}, '${recipe.title}', '${ingedient}', '${filterDesc}')"<i class="uil uil-pen"></i>Edit/Show</li>
                                    <li onclick="deleteRecipe(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showRecipes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteRecipe(recipeId) {
    let confirmDel = confirm("Are you sure you want to delete this recipe?");
    if(!confirmDel) return;
    recipes.splice(recipeId, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    showRecipes();
}

function updateRecipe(recipeId, title, filterIngr,filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    let ingedient = filterIngr.replaceAll('<br/>-','\r\n');
    updateId = recipeId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descIgr.value = ingedient;
    descTag.value = description;
    popupTitle.innerText = "Show your recipe";
    addBtn.innerText = "Update Recipe";
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(),
    ingedient = descIgr.value.trim(),
    description = descTag.value.trim();

    if(title || ingedient || description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear();

        let noteInfo = {title,ingedient,description, date: `${month} ${day}, ${year}`}
        if(!isUpdate) {
            recipes.push(noteInfo);
        } else {
            isUpdate = false;
            recipes[updateId] = noteInfo;
        }
        localStorage.setItem("recipes", JSON.stringify(recipes));
        showRecipes();
        closeIcon.click();
    }
});
