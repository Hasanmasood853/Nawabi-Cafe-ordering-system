// Centralized price list - values match <option value="...">
const prices = {
    deals: {
        none: 0,
        deal1: 590,
        deal2: 1020,
        deal3: 1820,
        deal4: 550,
        deal5: 430,
        deal6: 950,
        deal7: 399,
        deal8: 680,
        deal9Reg: 1220, // deal no 9 Regular
        deal9Spe: 1220, // deal no 9 Special
        deal10: 2100,
        deal11Reg: 3020,// Deal no 11 Regular
        deal11Spe: 3120,// Deal no 11 Special
        deal12: 2550,
        deal13: 3350,
        deal14: 4999
    },
    pizza: {
        none: { small: 0, medium: 0, large: 0 },
        pizza1: { medium: 1470, large: 2150 },   // Extreme Pan Peri Peri
        pizza2: { medium: 1470, large: 2150 },    // Extreme Pan Malai
        pizza3: { medium: 1590, large: 2190 },    // Extreme Pan Crispy Chicken
        pizza4: { medium: 1250, large: 1990 },   // Spanish Pizza
        pizza5: { medium: 1190, large: 1690 },   // Chicken Cheese Stuffed
        pizza6: { medium: 1190, large: 1690 },  // Chicken Kabab Stuffed
        pizza7: { medium: 1190, large: 1690 },  // Kababish Stuffed
        pizza8: { medium: 1190, large: 1690 },  // Crown Crust Pizza
        pizza9: { small: 550, medium: 980, large: 1450 },  // Nawabi Special
        pizza10: { small: 550, medium: 980, large: 1450 }, // Born Fire Pizza
        pizza11: { small: 550, medium: 980, large: 1450 },  // Malai Boti Pizza
        pizza12: { small: 530, medium: 980, large: 1390 },  // Chicken Fajita Pizza
        pizza13: { small: 530, medium: 980, large: 1390 },  // Chicken Tikka Pizza
        pizza14: { small: 530, medium: 980, large: 1390 },  // Afghani Tikka Pizza
        pizza15: { small: 530, medium: 980, large: 1390 }, // BBQ Lover Pizza
        pizza16: { small: 500, medium: 980, large: 1300 }, //Cheese Lover pizza
        pizza17: { small: 500, medium: 980, large: 1300 },   // Organic Vegi Pizza
        pizza18: { small: 500, medium: 980, large: 1300 }    // Kids Special Pizza
    },
    burgers: {
        none: 0,
        burger1: 350, // Zinger Burger
        burger2: 400, // Nawabi Special Cheese Burger
        burger3: 250, // Chicken Patty Burger
        burger4: 500, // Zinger + Patty Burger
        burger5: 280, // Chicken Tikka Cheese Burger
        burger6: 80,  // Extra Topping Cheese Charges
        burger7: 390, // Chicken Grill Burger
        burger8: 650, // Nawabi Special Grill Burger
        burger9: 450, // Grill Beef Burger
        burger10: 750 // Nawabi Special Beef Burger
    },
    others: {
        none: 0,
        fries1: 170, // Single Serving Fries
        fries2: 300, // Double Serving Fries
        fries3: 360, // Loaded Fries Small
        fries4: 590,  // Loaded Fries Large
        sauce1: 50, // Peri Peri Sauce
        sauce2: 50, // Thousand Island Sauce
        salad1: 190, // Russian Salad (Half)
        salad2: 280  // Special Fruit Salad (Full)
    },
    rolls_sandwich: {
        none: 0,
        roll1: 499, // Behari Roll
        roll2: 380, // BBQ Roll
        roll3: 350, // Zinger Paratha Roll
        roll4: 180, // Shawarma Roll
        sandwich1: 430, // Club Sandwich
        sandwich2: 350, // Peri Peri Panini Sandwich
        sandwich3: 350, // Malai Panini Sandwich
        sandwich4: 200  // Tikka Panini Sandwich
    },
    wings_Pasta: {
        none: 0,
        wings1: 250,   // Hot Wings (5 Piece)
        wings2: 470,   // Hot Wings (10 Piece)
        nuggets1: 200, // Nuggets (5 Piece)
        nuggets2: 380, // Nuggets (10 Piece)
        bakedWings: 490,
        pasta1: 450, // Chicken Creamy Pasta
        pasta2: 750  // Chicken Cheese Pasta
    },
    bbq: {
        none: 0,
        bbq1: 300,  // Chicken Tikka Leg (1 Piece)
        bbq2: 350,  // Chicken Tikka Chest (1 Piece)
        bbq3: 120,  // Chicken Tikka Boti (Seikh)
        bbq4: 170,  // Chicken Malai Boti (Seikh)
        bbq5: 150,  // Chicken Kabab (1 Piece)
        bbq6: 170,  // Reshmi Kabab (1 Piece)
        bbq7: 200,  // Kastori Boti (Seikh)
        bbq8: 350,  // Pizza Kabab (1 Piece)
        bbq9: 1200, // Grill Fish (1 KG)
        bbq10: 200    // Beef Kebab (1 Piece) - NA
    },

    sweets: {
        none: 0,
        scoop1: 70,  // 1 Scoop
        scoop2: 130, // 2 Scoop
        scoop3: 170, // 3 Scoop
        tea1: 150, // Kashmiri Chye
        tea2: 80,  // Doodh Pati
        tea3: 80,// Gurr Wali Chye
        shake1: 250, //Ice cream Shake
        shake2: 160, //Mint Margerita
        shake3: 220, //Date Shake
        shake4: 200, //Banana Shake
        shake5: 200, //strawberry Shake
    },

};


// Deals Selector
const dealItems = document.querySelectorAll("#deals .dropdown-item");
const dealSelect = document.querySelector(".original-select[name='Deals']");
const dealPrice = document.querySelector('#dealPrice');
let dealSelection = [];
let dealTotal = 0;
dealItems.forEach(dealItem => {
    dealItem.addEventListener("click", () => {
        const dropdownHeader = document.querySelector("#deal-dropdown .dropdown-header");
        const selectedValue = dealItem.getAttribute("data-value");
        const price = prices.deals[selectedValue] || 0;

        if (selectedValue != "none") {
            dealSelection.push({ name: dealItem.textContent, price: price });
            dropdownHeader.textContent = dealItem.textContent;
            dealSelect.value = selectedValue;
            renderList();
        } else {
            dropdownHeader.textContent = "None";
            dealSelect.value = "none";
            dealPrice.innerHTML = "";
            dealTotal = 0;
            updateTotal(dealTotal)
        }
    });
});

// Pizza Selector
const pizzaItems = document.querySelectorAll("#pizza .dropdown-item");
const pizzaPrice = document.querySelector('#pizzaPrice');
const pizzaSelect = document.querySelector(".original-select[name='Pizza']");
const dropdownHeader = document.querySelector("#pizza-dropdown .dropdown-header");

let pizzaSelection = [];
let selectedSize = "none";
let selectedFlavour = "none";
let selectedFlavourName = "";
let pizzaTotal = 0;

// Pizza Size Check 
const smallPizza = document.querySelector('#small');
const mediumPizza = document.querySelector('#medium');
const largePizza = document.querySelector('#large');
const pizzaButtons = [smallPizza, mediumPizza, largePizza];

pizzaButtons.forEach(p => p.disabled = true);

pizzaItems.forEach(pizzaItem => {
    pizzaItem.addEventListener('click', () => {
        selectedFlavour = pizzaItem.getAttribute("data-value");
        selectedFlavourName = pizzaItem.textContent;

        if (selectedFlavour === "none") {
            dropdownHeader.textContent = "None";
            pizzaSelect.value = "none";
            pizzaSelection = [];
            pizzaPrice.innerHTML = "";
            pizzaTotal = 0;
            updateTotal(pizzaTotal);
            pizzaButtons.forEach(p => p.disabled = true);
        } else {
            dropdownHeader.textContent = pizzaItem.textContent;
            pizzaSelect.value = selectedFlavour;
            pizzaPrice.innerHTML = `${pizzaItem.textContent} (Select Size Please)`;
            let matched = false;
            // 1st 8 pizzas dont have small size available
            for (let pizzaIndex = 1; pizzaIndex <= 8; pizzaIndex++) {
                if (selectedFlavour === `pizza${pizzaIndex}`) {
                    smallPizza.disabled = true;
                    mediumPizza.disabled = false;
                    largePizza.disabled = false;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                pizzaButtons.forEach(p => p.disabled = false);
            }
        }
    });
});

pizzaButtons.forEach(pizzaBtn => {
    pizzaBtn.addEventListener('click', () => {
        selectedSize = pizzaBtn.id;

        if (selectedFlavour !== "none") {
            const price = prices.pizza[selectedFlavour]?.[selectedSize] || 0;
            pizzaSelection.push({
                name: `${selectedFlavourName} (${selectedSize})`,
                price: price
            });
            renderList();
        } else if (selectedFlavour === "none") {
            dropdownHeader.textContent = "None";
            pizzaSelect.value = "none";
            selectedFlavour = "none";
        }
    });
});


// Burgers Selector
const burgerItems = document.querySelectorAll("#burger .dropdown-item");
const burgerPrice = document.querySelector('#burgerPrice');
const burgerSelect = document.querySelector(".original-select[name='Burger']");
let burgerSelection = [];
let burgerTotal = 0;
burgerItems.forEach(burgerItem => {
    burgerItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#burger-dropdown .dropdown-header");
        const selectedValue = burgerItem.getAttribute("data-value");
        const price = prices.burgers[selectedValue] || 0;
        if (selectedValue != "none") {
            burgerSelection.push({ name: burgerItem.textContent, price: price });
            dropdownHeader.textContent = burgerItem.textContent;
            burgerSelect.value = selectedValue;
            renderList();
        } else {
            dropdownHeader.textContent = "None";
            burgerSelect.value = "none";
            burgerPrice.innerHTML = "";
            burgerSelection = [];
            burgerTotal = 0;
            updateTotal(burgerTotal);
        }
    })
})

// Wings / Pasta I have named selectors as wwings but it covers both pasta and wings
const wingsItems = document.querySelectorAll("#wings .dropdown-item");
const wingsPrice = document.querySelector('#wingsPrice');
const wingsSelect = document.querySelector(".original-select[name='Wings']");
let wingSelection = [];
let wingsTotal = 0;
wingsItems.forEach(wingsItem => {
    wingsItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#wings-dropdown .dropdown-header");
        const selectedValue = wingsItem.getAttribute("data-value");
        const price = prices.wings_Pasta[selectedValue] || 0;
        if (selectedValue != "none") {
            wingSelection.push({ name: wingsItem.textContent, price: price });
            dropdownHeader.textContent = wingsItem.textContent;
            wingsSelect.value = selectedValue;
            renderList();
        } else {
            dropdownHeader.textContent = "None";
            wingsSelect.value = "none";
            wingsPrice.innerHTML = "";
            wingsTotal = 0;
            updateTotal(wingsTotal);
        }
    })
})

// Rolls / sandwich I have named selectors as rolls but it covers both rolls and sandwich
const rollsItems = document.querySelectorAll("#roll .dropdown-item");
const rollsPrice = document.querySelector('#rollPrice');
const rollsSelect = document.querySelector(".original-select[name='ROlls_Sandwich']");
let rollSelection = [];
let rollsTotal = 0;
rollsItems.forEach(rollsItem => {
    rollsItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#roll-dropdown .dropdown-header");
        const selectedValue = rollsItem.getAttribute("data-value");
        const price = prices.rolls_sandwich[selectedValue] || 0;
        if (selectedValue != "none") {
            rollSelection.push({ name: rollsItem.textContent, price: price });
            dropdownHeader.textContent = rollsItem.textContent;
            rollsSelect.value = selectedValue;
            renderList();
        } else {
            dropdownHeader.textContent = "None";
            rollsSelect.value = "none";
            rollsPrice.innerHTML = "";
            rollsTotal = 0;
            rollSelection = [];
            updateTotal(rollsTotal);
        }
    })
})
// Salad / Fries / Sauces I have named selectors as other
const otherItems = document.querySelectorAll("#other .dropdown-item");
const otherPrice = document.querySelector('#otherPrice');
const otherSelect = document.querySelector(".original-select[name='Other_Items']");
let otherTotal = 0;
let otherSelection = [];
otherItems.forEach(otherItem => {
    otherItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#other-dropdown .dropdown-header");
        const selectedValue = otherItem.getAttribute("data-value");
        const price = prices.others[selectedValue] || 0;
        if (selectedValue != "none") {
            otherSelection.push({ name: otherItem.textContent, price: price });
            dropdownHeader.textContent = otherItem.textContent;
            otherSelect.value = selectedValue;
            renderList();
        } else {
            otherSelection = [];
            dropdownHeader.textContent = "None";
            otherSelect.value = "none";
            otherPrice.innerHTML = "";
            otherTotal = 0;
            updateTotal(otherTotal);
        }
    })
})

// Ice cream / Shakes / Tea I have named selectors as sweets
const sweetsItems = document.querySelectorAll("#sweets .dropdown-item");
const sweetsPrice = document.querySelector('#sweetsPrice');
const sweetsSelect = document.querySelector(".original-select[name='Other_Items']");
let sweetSelection = [];
let sweetTotal = 0;
sweetsItems.forEach(sweetsItem => {
    sweetsItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#sweets-dropdown .dropdown-header");
        const selectedValue = sweetsItem.getAttribute("data-value");
        const price = prices.sweets[selectedValue] || 0;
        if (selectedValue != "none") {
            sweetSelection.push({ name: sweetsItem.textContent, price: price })
            dropdownHeader.textContent = sweetsItem.textContent;
            sweetsSelect.value = selectedValue;
            renderList()
        } else {
            sweetSelection = []
            dropdownHeader.textContent = "None";
            sweetsSelect.value = "none";
            sweetsPrice.innerHTML = "";
            sweetTotal = 0;
            updateTotal(sweetTotal)
        }
    })
})

// bbq Selector
const bbqItems = document.querySelectorAll("#bbq .dropdown-item");
const bbqPrice = document.querySelector('#bbqPrice');
const bbqSelect = document.querySelector(".original-select[name='bbq']");
let bbqTotal = 0;
let bbqSelection = [];
bbqItems.forEach(bbqItem => {
    bbqItem.addEventListener('click', () => {
        const dropdownHeader = document.querySelector("#bbq-dropdown .dropdown-header");
        const selectedValue = bbqItem.getAttribute("data-value");
        const price = prices.bbq[selectedValue] || 0;
        if (selectedValue != "none") {
            bbqSelection.push({ name: bbqItem.textContent, price: price });
            dropdownHeader.textContent = bbqItem.textContent;
            bbqSelect.value = selectedValue;
            renderList();
        } else {
            bbqSelection = [];
            dropdownHeader.textContent = "None";
            bbqSelect.value = "none";
            bbqPrice.innerHTML = "";
            bbqTotal = 0;
            updateTotal(bbqTotal);
        }
    })
})

// cross icon functionality
document.addEventListener("DOMContentLoaded", () => {
    [bbqPrice, sweetsPrice, otherPrice, rollsPrice, wingsPrice, burgerPrice, dealPrice, pizzaPrice].forEach((container) => {
        container.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove-icon")) {
                const index = e.target.getAttribute("data-index");

                if (container === bbqPrice) {
                    bbqSelection.splice(index, 1);
                    renderList();
                } else if (container === sweetsPrice) {
                    sweetSelection.splice(index, 1);
                    renderList();
                } else if (container === otherPrice) {
                    otherSelection.splice(index, 1);
                    renderList();
                } else if (container === rollsPrice) {
                    rollSelection.splice(index, 1);
                    renderList();
                } else if (container === wingsPrice) {
                    wingSelection.splice(index, 1);
                    renderList();
                } else if (container === burgerPrice) {
                    burgerSelection.splice(index, 1);
                    renderList();
                } else if (container === dealPrice) {
                    dealSelection.splice(index, 1);
                    renderList();
                } else if (container === pizzaPrice) {
                    pizzaSelection.splice(index, 1);
                    renderList();
                }
            }
        });
    });
});
function renderList() {
    // for bbq
    bbqPrice.innerHTML = bbqSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div> `)
        .join("")
    bbqTotal = bbqSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(bbqTotal);
    // for sweets --> Shakes / Ice cream / Tea
    sweetsPrice.innerHTML = sweetSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div> `)
        .join("")
    sweetTotal = sweetSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(sweetTotal);
    // for other -->    Fries and sauces and salad
    otherPrice.innerHTML = otherSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div> `)
        .join("")
    otherTotal = otherSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(otherTotal);
    // for rolls -->    rolls and sandwich
    rollsPrice.innerHTML = rollSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div> `)
        .join("")
    rollsTotal = rollSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(rollsTotal);
    // for wings -->    wings nuggets and pasta
    wingsPrice.innerHTML = wingSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div> `)
        .join("")
    wingsTotal = wingSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(wingsTotal);
    // for burgers
    burgerPrice.innerHTML = burgerSelection
        .map((item, index) => `
             <div class="cross-icon">
                 ${item.name} Rs ${item.price}/-
                 <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
             </div> `)
        .join("")
    burgerTotal = burgerSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(burgerTotal);
    // for Deals
    dealPrice.innerHTML = dealSelection
        .map((item, index) => `
             <div class="cross-icon">
                 ${item.name} Rs ${item.price}/-
                 <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
             </div> `)
        .join("")
    dealTotal = dealSelection.reduce((sum, item) => sum + item.price, 0);

    updateTotal(dealTotal);

    // for pizza
    pizzaPrice.innerHTML = pizzaSelection
        .map((item, index) => `
            <div class="cross-icon">
                ${item.name} Rs ${item.price}/-
                <i class="fa-solid fa-circle-xmark remove-icon" data-index="${index}"></i>
            </div>
        `)
        .join("");

    pizzaTotal = pizzaSelection.reduce((sum, item) => sum + item.price, 0);
    updateTotal(pizzaTotal);

}

// Total Price
let totalPrice = document.querySelector('#total-price');

function updateTotal() {
    let calculateBill = sweetTotal + bbqTotal + otherTotal + rollsTotal + wingsTotal + burgerTotal + pizzaTotal + dealTotal;
    totalPrice.textContent = calculateBill;
} // after this you can print bill I am not adding that functionality

const confirmBtn = document.querySelector('#confirmBtn');
confirmBtn.addEventListener('click', () => {
    if (totalPrice.innerHTML === "" || totalPrice.innerHTML === "0") {
        alert("Please select some order");
    } else {
        alert(`Order confirmed! Your Bill is Rs ${totalPrice.textContent}/-`);
        location.reload();
    }
});


// Order selection procedure

document.addEventListener('DOMContentLoaded', function () {
    // Initialize both dropdowns
    initDropdown('deal-dropdown', 'deals');
    initDropdown('pizza-dropdown', 'pizza');
    initDropdown('burger-dropdown', 'burger');
    initDropdown('roll-dropdown', 'roll');
    initDropdown('wings-dropdown', 'wings');
    initDropdown('other-dropdown', 'other');
    initDropdown('sweets-dropdown', 'sweets');
    initDropdown('bbq-dropdown', 'bbq');

    function initDropdown(dropdownId, selectId) {
        const dropdown = document.getElementById(dropdownId);
        const header = dropdown.querySelector('.dropdown-header');
        const list = dropdown.querySelector('.dropdown-list');
        const items = dropdown.querySelectorAll('.dropdown-item');
        const originalSelect = document.getElementById(selectId);

        if (originalSelect.value) {
            const selectedOption = originalSelect.options[originalSelect.selectedIndex];
            header.textContent = selectedOption.text;


            items.forEach(item => {
                if (item.getAttribute('data-value') === originalSelect.value) {
                    item.classList.add('selected');
                }
            });
        }

        header.addEventListener('click', function () {
            const isOpen = list.classList.contains('open');

            // Close all dropdowns first
            document.querySelectorAll('.dropdown-list').forEach(dd => {
                dd.classList.remove('open');
            });
            document.querySelectorAll('.dropdown-header').forEach(h => {
                h.classList.remove('open');
            });

            // Toggle this dropdown if it wasn't open
            if (!isOpen) {
                list.classList.add('open');
                header.classList.add('open');
            }
        });

        // Handle item selection
        items.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                const text = this.textContent;
                header.textContent = text;
                header.classList.remove('open');
                originalSelect.value = value;


                items.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');

                list.classList.remove('open');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
                list.classList.remove('open');
                header.classList.remove('open');
            }
        });
    }
}); 