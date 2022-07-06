const data = [
    {
        name: "Iphone 6s",
        price: 25000,
        id: 0,
        url: "https://100fon.ru/upload/iblock/6c4/6c46d77843cc7fcd7a455a24cde61fc6.jpg",
    },
    {
        name: "Iphone 7",
        price: 15000,
        id: 1,
        url: "https://novorossiysk.iprofishop.ru/upload/iblock/2f0/2f0c1208f3e90d2a07da58afffc1d875.png",
    },
    {
        name: "Iphone XR",
        price: 105000,
        id: 2,
        url: "https://cdn.svyaznoy.ru/upload/iblock/5b5/01%20e2z.jpg/resize/483x483/hq/",
    },
    {
        name: "Iphone 13pro",
        price: 200000,
        id: 3,
        url: "https://denika.ua/image/cache/product/305639/main-1-350x350.jpg",
    },
    {
        name: "Iphone 5s",
        price: 10000,
        id: 4,
        url: "https://cdn.shopify.com/s/files/1/0326/2971/9176/products/apple-iphone-5s-silver-fully-unlocked-cell-phones-16gb-gold-dailysale-131536_350x.jpg?v=1640828355",
    },
    {
        name: "Iphone 4s",
        price: 8000,
        id: 5,
        url: "https://images.satom.ru/i3/firms/28/5647/5647192/pic_efb2bdc22ed529b_1024x3000.jpg",
    },
];

const list = document.querySelector(".shop-list");

function render() {
    data.map((item) => {
        let addedOrNo;
        if (localStorage.favData) {
            addedOrNo = JSON.parse(localStorage.favData).includes(item.id)
                ? "Добавлено"
                : "Купить";
        } else {
            addedOrNo = "Купить";
        }
        list.insertAdjacentHTML(
            "afterbegin",
            `<li class="card" data-id="${item.id}">
                        <img
                            src="${item.url}"
                            alt=""
                            class="card-photo"
                        />
                        <h3 class="card-title">${item.name}</h3>
                        <span class="price"
                            >${item.price}<ion-icon name="cash-outline"></ion-icon
                        ></span>
                        <button class="buy-btn">${addedOrNo}</button>
                    </li>`
        );
    });
}

render();

const buyBtns = document.querySelectorAll(".buy-btn");

buyBtns.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (!localStorage.getItem("favData")) {
            localStorage.setItem("favData", JSON.stringify([]));
        }
        let id = +e.target.parentNode.dataset.id;
        if (JSON.parse(localStorage.favData).includes(id)) {
            b.textContent = "Добавлено";
        }
        let newData = JSON.parse(localStorage.favData);
        if (newData.includes(id)) return;
        newData.push(id);
        localStorage.setItem("favData", JSON.stringify(newData));
        b.textContent = "Добавлено";
    });
});
