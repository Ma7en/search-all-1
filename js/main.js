
/*  
===============================================
===============================================
*/

/* start search 1 */
let s1searchBtn = document.querySelector(".search-1 .search-btn");
let s1cancelBtn = document.querySelector(".search-1 .cancel-btn");
let s1searchBox = document.querySelector(".search-1 .search-box");
let s1searchInput = document.querySelector(".search-1 input");
let s1searchData = document.querySelector(".search-1 .search-data");

s1searchBtn.addEventListener("click", () => {
    s1searchBox.classList.add("active");
    s1searchInput.classList.add("active");
    s1searchBtn.classList.add("active");
    s1cancelBtn.classList.add("active");
    if(s1searchInput.value != "") {
        let values = s1searchInput.value;
        s1searchData.classList.remove("active");
        // s1searchData.innerHTML = "Yoy Just typed " + "<span>" + values +"</span>";
        s1searchData.innerHTML = `You Just typed <span>${values}</span>`;
    } else {
        s1searchData.innerHTML = "";
    }
});

s1cancelBtn.addEventListener("click", () => {
    s1searchBox.classList.remove("active");
    s1searchInput.classList.remove("active");
    s1searchBtn.classList.remove("active");
    s1cancelBtn.classList.remove("active");
    s1searchData.classList.add("active");

    s1searchInput.value = "";
});



/* end search 1 */

/*  
===============================================
===============================================
*/

/* start search 2 */

let s2searchResults = document.querySelector(".search-2 .search-results"),
    s2inputSearch = document.querySelector(".search-2 .input-search");

window.addEventListener("load", () => {
    if(s2inputSearch != focus) {
        s2inputSearch.innerHTML = "";
    } else {
        s2inputSearch.innerHTML = "";
    }
});

// 
function s2clearResult() {
    s2searchResults.innerHTML = "";
}

// 
function s2getResults() {
    let search = s2inputSearch.value;
    s2clearResult();
    if(search.length > 0) {
        for(let i = 0; i < database.length; i++) {
            if(database[i].name.toLowerCase().includes(search.toLowerCase()) || database[i].desc.toLowerCase().includes(search.toLowerCase())) {
                s2searchResults.innerHTML += `
                <div class="box">
                    <div class="box-left">
                        <h2>
                            ${database[i].name}
                        </h2>
                        <p>
                            ${database[i].desc}
                        </p>
                    </div>
                    <div class="box-right">
                        <img src="${database[i].img}" alt="${database[i].name}" />
                    </div>
                </div>
                `;
            }
        }
    } else {
        s2PrintAll();
    }
}

function s2PrintAll() {
    for(let i = 0; i < database.length; i++) {
        s2searchResults.innerHTML += `
            <div class="box">
                <div class="box-left">
                    <h2>
                        ${database[i].name}
                    </h2>
                    <p>
                        ${database[i].desc}
                    </p>
                </div>
                <div class="box-right">
                    <img src="${database[i].img}" alt="${database[i].name}" />
                </div>
            </div>
        `
    }
}

s2inputSearch.addEventListener("keyup", s2getResults);

s2PrintAll();


/* end search 2 */

/*  
===============================================
===============================================
*/

/* start search 3 */



/* end search 3 */

/*  
===============================================
===============================================
*/

/* start search 4 */



/* end search 4 */


/*  
===============================================
===============================================
*/

/* start search 5 */



/* end search 5 */

/*  
===============================================
===============================================
*/

/* start search 6 */



/* end search 6 */


/*  
===============================================
===============================================
*/

/* start search 7 */



/* end search 7 */

/*  
===============================================
===============================================
*/

/* start search 8 */



/* end search 8 */


/*  
===============================================
===============================================
*/

/* start search 9 */



/* end search 9 */

/*  
===============================================
===============================================
*/

/* start search 10 */



/* end search 10 */

/*  
===============================================
===============================================
*/

/* start search 11 */



/* end search 11 */

/*  
===============================================
===============================================
*/

/* start search 12 */



/* end search 12 */


/*  
===============================================
===============================================
*/

/* start search 13 */



/* end search 13 */

/*  
===============================================
===============================================
*/

