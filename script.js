//hats items
const hlBtn = document.getElementById("hl-btn");
const hImg = document.getElementById("h-img");
const hrBtn = document.getElementById("hr-btn");
let hPos = 0;
let hats = ["https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8018800tan-1.jpg"/*bbc orange*/, 
    "https://cdn.shopify.com/s/files/1/0052/8342/t/2/assets/P9260011-Edit.jpg?v=1653462873"/*Zippy 50*/,
    "https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg"/*white/no hat*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Apex%20Grey.png"/*grey Apex*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Blue%20Greddy.png"/*blue greddy*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Supreme%20Green.png"/*Supreme Green*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Surf%20Hi.png"/*surf hi*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Thrasher%20Beanie.png"/*skate to destroy beanie*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/White%20Greddy.png"/*white greddy*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/hi%20Green.png"/*hi green*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/im%20local%20black.png"/*im local hat*/
];
//top items
const tlBtn = document.getElementById("tl-btn");
const tImg = document.getElementById("t-img");
const trBtn = document.getElementById("tr-btn");
let tPos = 0;
let tops = ["https://image.hm.com/assets/hm/82/70/827052378745fd6c04c1b2fed9580a4b2f303536.jpg?imwidth=1536"/*sunshine tee*/,
    "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/1100x/040ec09b1e35df139433887a97daa66f/b/a/baabldgcrewwht-1.jpg"/*astroboy long-sleeve*/,
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445593/item/goods_30_445593_3x4.jpg?width=600"/*tan mickey tee*/,
    "https://i.shgcdn.com/57c3a1d4-7229-4fd5-a722-3b5ab5eaccbe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/*bape hotwheels*/,
    "https://shopfd.com/cdn/shop/products/FD_product_Mens_Image_112.jpg?v=1530148625"/*formula drift rain jacket*/,
    "https://d141zx60z515qt.cloudfront.net/mp62586fb643/pr56db7/img0_800w.webp"/*nike ek jacket*/,
    "https://cdn.mainlinemenswear.co.uk/images/w_900,h_900/f_auto,q_auto/mainlinemenswear/shopimages/products/208468/Mainimage.jpg/Nike%20Logo%20Puffer%20Jacket%20Grey"/*nike grey puffer*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/106/640/730/original/1543823_02.jpg.jpeg?action=crop&width=1500"/*assc mastermind*/,
    "https://www.solebystyle.com/cdn/shop/files/KAWS-x-Warhol-Graphic-476119-Sweatshirt-Black.webp?v=1725031824"/*kaws black long sleeve*/,
    "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dw18e9458c/tillys/images/catalog/1000x1000/429911100.jpg"/*nike sb hoodie*/,
    "https://nevercontent.jp/cdn/shop/products/csb8yblkfrnt.png?v=1658910211&width=2500"/*red never content tee*/,
    "https://www.uniqlo.com.hk/hmall/test/u0000000021231/main/first/1000/1.jpg"/*vintage camera tee*/,
    "https://fanatics.frgimages.com/seattle-seahawks/mens-nike-devon-witherspoon-royal-seattle-seahawks-throwback-player-game-jersey_ss5_p-200398611+pv-2+u-7e4vprhnwvecigbvbofr+v-wflsox0ll5r336ilkraz.jpg?_hv=2&w=900"/*seahawk witherspoon jersey*/,
    "https://fanatics.frgimages.com/houston-texans/mens-nike-cj-stroud-navy-houston-texans-2nd-alternate-game-jersey_ss5_p-200430447+pv-3+u-dcklz45jqf9ayrdvl7dx+v-qgfd0ulz8nasvhctwxc7.jpg?_hv=2&w=900"/*texans cj jersey*/,
    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F02%2Funiqlo-ut-pokemon-magma-collab-collection-release-info-003.jpg?q=75&w=800&cbr=1&fit=max"/*uniqulo pokemon tee*/,
    "https://cdn11.bigcommerce.com/s-8dv4td49lk/images/stencil/1280x1280/products/6612/13668/476352_344N677D_09_A010__84392.1723590900.jpg?c=1"/*kaw black tee*/,
    "https://au-sell.com/cdn/shop/files/BackoftheKAWSxWarholBananaUniqloUTGraphicT-ShirtWhite_SS24_-au.sellstore.png?v=1724639044"/*blue kaws white tee*/,
    "https://www.dtlr.com/cdn/shop/products/Nike-DR7986-121-M-024.jpg?v=1665771166"/*nike medieval white tee*/,
    "https://extrabutterny.com/cdn/shop/products/DQ4593-133-1.jpg?v=1657829832"/*jordan ring white tee*/,
    "https://i.ebayimg.com/images/g/kZQAAOSwvXZnFtbU/s-l1200.jpg"/*nyc blue tee*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/086/882/981/original/1179004_02.jpg.jpeg?action=crop&width=1500"/*assc koi shirt*/,
    "https://oldnavy.gap.com/webcontent/0052/477/493/cn52477493.jpg"/*the age of trees tee*/,
    "https://image.goxip.com/GO0jTItHUZ8BGpsonktgMFS1n48=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FJ-Balvin-Blanco-x-Takashi-Murakami-Large-Flower-Hoodie-Black.jpg"/*murakami black hoodie*/,
    "https://cdn-images.farfetch-contents.com/18/40/46/86/18404686_39540759_1000.jpg"/*assc wave hoodie*/,
    "https://humbledlifestyle.com/cdn/shop/products/H3.png?v=1679727894"/*purple humbled hoodie*/,
    "https://i5.walmartimages.com/asr/7f8c22b2-80d0-427a-a22b-9420012c681d.05d988df28ec19e00b5600f57ef233fb.jpeg"/*jordan breakfast club grey hoodie*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/756/317/original/917406_01.jpg.jpeg?action=crop&width=1500"/*assc grey hoodie*/,
    "https://i.ebayimg.com/images/g/N8cAAOSwbDNkTr12/s-l1200.jpg"/*jordan x undefeated black hoodie*/,
    "https://i.ebayimg.com/images/g/XYIAAOSwm-tmsY8e/s-l400.jpg"/*gtr white camo hoodie*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/094/515/003/original/1308642_01.jpg.jpeg?action=crop&width=800"/*assc undefeated hoodie*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/064/330/818/original/859511_01.jpg.jpeg?action=crop&width=800"/*assc worldwide hoodie*/,
    "https://images.squarespace-cdn.com/content/v1/6010430e723baf1b6601dbda/1613443961121-KABBTMQW6GMMOYELT19M/image0.jpeg"/*community over cars black hoodie*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Free%20Planet%20Shirt.png"/*free planet tee*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Human%20Made%20Dark%20Blue.png"/*human made dark blue*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Imperical%20Black.png"/*imperical black*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Koi%20Button%20Shirt.png"/*koi button*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Never%20Content%20White.png"/*never content white*/
];
//bottom items
const blBtn = document.getElementById("bl-btn");
const bImg = document.getElementById("b-img");
const brBtn = document.getElementById("br-btn");
let bPos = 0;
let bottoms = ["https://di2ponv0v5otw.cloudfront.net/posts/2023/03/05/6404d044dbb0e78e3f15dcf0/m_wp_6404d06ac1c346aceb4edd1d.webp"/*kaki tiger*/,
    "https://image.hm.com/assets/hm/c9/f5/c9f59cabee8ae45afa27dc54f5376c8925d8a2ab.jpg"/*trust the process*/,
    "https://www.brooklyncloth.com/cdn/shop/files/BFM9867F_SND-1.jpg?v=1745436593&width=800"/*kaki sweats*/,
    "https://www.worknwear.ca/cdn/shop/files/c1bd25fa-9585-5745-8e46-1a476a978653_1800x1800_649ccdf5-6826-4c51-89a9-bd963d723439_grande.webp?v=1693235304"/*white logo sweats*/,
    "https://i5.walmartimages.com/asr/314ea9d2-f384-4f0b-9491-03c9ce3e9720.8321e8a13d9eb6bfc7022a64f21ecde6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"/*older black sweats*/,
    "https://shopcgx.com/cdn/shop/files/EQYFB03249_-_black.png?v=1708279691"/*newer black sweats*/,
    "https://bfasset.costco-static.com/U447IH35/as/p4nxfkrt9wq3j4bpr8t8mr/100572615-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"/*black/grey sweats*/,
    "https://i.ebayimg.com/images/g/zekAAOSwBUdloNil/s-l1600.webp"/*black baggy pants*/,
    "https://i5.walmartimages.com/asr/f5b6a855-10b9-4b80-bade-02eaea2ab154.af04ddd19fc717f9838e1d19cde7cded.jpeg"/*grey short with stripe*/,
    "https://legendbrand.com/cdn/shop/products/1134-01_1800x1800.jpg"/*black short*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/No%20Logo%20Sweats.png"/*white no logo sweats*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/mauishorts.png"/*maui and sons shorts*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/mauiswimtrunks.png"/*maui and sons swim shorts*/
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
hImg.innerHTML = `<img src=${hats[hPos]} class="hat-img"/>`;
tImg.innerHTML = `<img src=${tops[tPos]} class="top-img"/>`;
bImg.innerHTML = `<img src=${bottoms[bPos]} class="bottom-img"/>`;
sImg.innerHTML = `<img src=${shoes[sPos]} class="shoe-img"/>`;

//hat buttons
hlBtn.addEventListener("click", () => {
    if(hPos != 0 ) {
        hPos-= 1;
        hImg.innerHTML = `<img src=${hats[hPos]} class="hat-img" />`;
    } else {
        hPos = hats.length - 1;
        hImg.innerHTML = `<img src=${hats[hPos]} class="hat-img"/>`;
    }
});
hrBtn.addEventListener("click", () => {
    if(hPos != hats.length - 1) {
        hPos+= 1;
        hImg.innerHTML = `<img src=${hats[hPos]} class="top-img"/>`;
    } else {
        hPos = 0;
        hImg.innerHTML = `<img src=${hats[hPos]} class="top-img"/>`;
    }
});

//tops buttons
tlBtn.addEventListener("click", () => {
    if(tPos != 0 ) {
        tPos-= 1;
        tImg.innerHTML = `<img src=${tops[tPos]} class="bottom-img"/>`;
    } else {
        tPos = tops.length - 1;
        tImg.innerHTML = `<img src=${tops[tPos]} class="bottom-img"/>`;
    }
});
trBtn.addEventListener("click", () => {
    if(tPos != tops.length - 1) {
        tPos+= 1;
        tImg.innerHTML = `<img src=${tops[tPos]} class="shoe-img"/>`;
    } else {
        tPos = 0;
        tImg.innerHTML = `<img src=${tops[tPos]} class="shoe-img"/>`;
    }
});

//bottoms buttons
blBtn.addEventListener("click", () => {
    if(bPos != 0 ) {
        bPos-= 1;
        bImg.innerHTML = `<img src=${bottoms[bPos]} />`;
    } else {
        bPos = bottoms.length - 1;
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

//Adding Own Cloth
const cateSelect = document.getElementById("addSelect");
const addInput = document.getElementById("addInput");
const addSubmit = document.getElementById("addSubmit");

addSubmit.addEventListener("click", () => {
    if(addInput.value != ""){
        if(cateSelect.value == "hat") {
            hats.push(addInput.value);
        } else if (cateSelect.value == "top") {
            tops.push(addInput.value);
        } else if(cateSelect.value == "bottom") {
            bottoms.push(addInput.value);
        } else if(cateSelect.value == "shoe") {
            shoes.push(addInput.value);
        } else {
            alert("Please select a category");
        }

        addInput.value = "";
    } else {
        alert("Please enter image address");
    }
    
});

//Save Fits
const saveBtn = document.getElementById("save-btn");
const saveBox = document.getElementById("save-box");

saveBtn.addEventListener("click", ()=>{
    saveBox.innerHTML += `<div id="savedSets">
        <div id="top-img">
            <img src="${tops[tPos]}" id="saveLeft" />
            <img src="${hats[hPos]}" id="saveRight" />
        </div>
        <div id="bottom-img">
            <img src="${bottoms[bPos]}" id="saveLeft" />
            <img src="${shoes[sPos]}" id="savedRight" />
        </div>
    </div>`;
});
