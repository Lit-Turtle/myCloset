//hats items
const hlBtn = document.getElementById("hl-btn");
const hImg = document.getElementById("h-img");
const hrBtn = document.getElementById("hr-btn");
let hPos = 0;
let hats = ["https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8018800tan-1.jpg"/*bbc orange*/, 
    "https://cdn.shopify.com/s/files/1/0052/8342/t/2/assets/P9260011-Edit.jpg?v=1653462873"/*Zippy 50*/
];
//top items
const tlBtn = document.getElementById("tl-btn");
const tImg = document.getElementById("t-img");
const trBtn = document.getElementById("tr-btn");
let tPos = 0;
let tops = ["https://image.hm.com/assets/hm/82/70/827052378745fd6c04c1b2fed9580a4b2f303536.jpg?imwidth=1536"/*sunshine tee*/,
    "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/1100x/040ec09b1e35df139433887a97daa66f/b/a/baabldgcrewwht-1.jpg"/*astroboy long-sleeve*/,
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445593/item/goods_30_445593_3x4.jpg?width=600"/*tan mickey tee*/,
    "https://i.shgcdn.com/57c3a1d4-7229-4fd5-a722-3b5ab5eaccbe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/*bape hotwheels*/
];
//bottom items
const blBtn = document.getElementById("bl-btn");
const bImg = document.getElementById("b-img");
const brBtn = document.getElementById("br-btn");
let bPos = 0;
let bottoms = ["https://di2ponv0v5otw.cloudfront.net/posts/2023/03/05/6404d044dbb0e78e3f15dcf0/m_wp_6404d06ac1c346aceb4edd1d.webp"/*kaki tiger*/,
    "https://image.hm.com/assets/hm/c9/f5/c9f59cabee8ae45afa27dc54f5376c8925d8a2ab.jpg?imwidth=1536"/*trust the process*/
];
//shoes items
const slBtn = document.getElementById("sl-btn");
const sImg = document.getElementById("s-img");
const srBtn = document.getElementById("sr-btn");
let sPos = 0;
let shoes = ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVcu0wCAIhNwIRoWuRm5j0o1u7TY-IlrBMwLXQFm5DNslLkXAnxFYSYVYECAFMHFI_W6j5gnjLpjzEvOo5gG_-aVRK1oBipFnh6TwEaMTMdhhQBTrlogETZm3Um1AVFWqJ9S5BSfpnFcY&usqp=CAc" /*foam rnnr*/,
    "https://images.stockx.com/images/Nike-Court-Vision-Mid-Go-the-Extra-Smile-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358"/*go the extra smile*/,
    "https://cdn.flightclub.com/TEMPLATE/012307/1.jpg"/*mid black red*/,
    "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Why-So-Sad-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358"/*why so sad*/,
    "https://images.stockx.com/images/Nike-Air-Max-1-86-Big-Bubble-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358"/*big red bubble*/,
    "https://media.kohlsimg.com/is/image/kohls/2694477_White_Gray?wid=620&hei=620&op_sharpen=1"/*white fuzz crocs*/
];

//on start
hImg.innerHTML = `<img src=${hats[hPos]}/>`;
tImg.innerHTML = `<img src=${tops[tPos]}/>`;
bImg.innerHTML = `<img src=${bottoms[bPos]}/>`;
sImg.innerHTML = `<img src=${shoes[sPos]}/>`;

//hat buttons
hlBtn.addEventListener("click", () => {
    if(hPos != 0 ) {
        hPos-= 1;
        hImg.innerHTML = `<img src=${hats[hPos]} />`;
    } else {
        hPos = hats.length - 1;
        hImg.innerHTML = `<img src=${hats[hPos]} />`;
    }
});
hrBtn.addEventListener("click", () => {
    if(hPos != hats.length - 1) {
        hPos+= 1;
        hImg.innerHTML = `<img src=${hats[hPos]} />`;
    } else {
        hPos = 0;
        hImg.innerHTML = `<img src=${hats[hPos]} />`;
    }
});

//tops buttons
tlBtn.addEventListener("click", () => {
    if(tPos != 0 ) {
        tPos-= 1;
        tImg.innerHTML = `<img src=${tops[tPos]} />`;
    } else {
        tPos = tops.length - 1;
        tImg.innerHTML = `<img src=${tops[tPos]} />`;
    }
});
trBtn.addEventListener("click", () => {
    if(tPos != tops.length - 1) {
        tPos+= 1;
        tImg.innerHTML = `<img src=${tops[tPos]} />`;
    } else {
        tPos = 0;
        tImg.innerHTML = `<img src=${tops[tPos]} />`;
    }
});

//bottoms buttons
blBtn.addEventListener("click", () => {
    if(bPos != 0 ) {
        bPos-= 1;
        bImg.innerHTML = `<img src=${bottoms[bPos]} />`;
    } else {
        bPos = tops.length - 1;
        bImg.innerHTML = `<img src=${bottoms[bPos]} />`;
    }
});
brBtn.addEventListener("click", () => {
    if(bPos != bottoms.length - 1) {
        bPos+= 1;
        bImg.innerHTML = `<img src=${bottoms[bPos]} />`;
    } else {
        bPos = 0;
        bImg.innerHTML = `<img src=${bottoms[bPos]} />`;
    }
});

//shoes buttons
slBtn.addEventListener("click", () => {
    if(sPos != 0 ) {
        sPos-= 1;
        sImg.innerHTML = `<img src=${shoes[sPos]} />`;
    } else {
        sPos = shoes.length - 1;
        sImg.innerHTML = `<img src=${shoes[sPos]} />`;
    }
});
srBtn.addEventListener("click", () => {
    if(sPos != shoes.length - 1) {
        sPos+= 1;
        sImg.innerHTML = `<img src=${shoes[sPos]} />`;
    } else {
        sPos = 0;
        sImg.innerHTML = `<img src=${shoes[sPos]} />`;
    }
});