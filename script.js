//hats items
const hlBtn = document.getElementById("hl-btn");
const hImg = document.getElementById("h-img");
const hrBtn = document.getElementById("hr-btn");
const leftH = document.getElementById("left-hat");
const rightH = document.getElementById("right-hat");

let hPos = 0;
let hats = [
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/BillionaireOrangeHat.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/BlackSwissBeanie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/GreddyHat.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/GreenYellowBeanie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/HiGreenHat.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/LocalHat.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/WhiteThrasherBeanie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/hat/Zippy'sHat.webp?raw=true",
    ""
];
//top items
const tlBtn = document.getElementById("tl-btn");
const tImg = document.getElementById("t-img");
const trBtn = document.getElementById("tr-btn");
let tPos = 0;
let tops = [
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/BlackQuarterZip.webp?raw=true"/* Black Quarter Zip*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/BrownCollarandWhiteTee.webp?raw=true"/* Brown collar and white T*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/BrownLongSleeve.webp?raw=true"/* Brown long sleeve*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/EuropeLongSleeveCollar.webp?raw=true"/* Europe Long Sleeve Collar*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/FortunaFishBlackTShirt.webp?raw=true"/* Fortuna Black TShirt */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/GreenLongSleeve.webp?raw=true"/* Green Long Sleeve */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/GreyKawsLongSleeve.webp"/* Grey Long Sleeve*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/GreyLongSleeve.webp"/* Grey Long Sleeve */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/GreyWashedTShirt.webp?raw=true"/* Grey Washed TShirt*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/HumanMadeGreenTShirt.webp?raw=true"/* Human Made Green TShirt*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/LibertyWalkGreenHoodie.webp?raw=true"/* Liberty Walk Green Hoodie */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/LightBlueButtonUp.webp"/* Light Blue Button Up */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/LiverpoolJersey.webp"/* Liverpool Jersey */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/NurburgringBlackTSHirt.webp?raw=true"/* Nurburgring Black TShirt */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/OhtaniJapanJersey.webp?raw=true"/* */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/OhtaniJapanJersey.webp?raw=true"/* Ohtani Japan Jersey*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/StroudJersey.webp?raw=true"/* Stroud Jersey */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/TanWhiteCollarT.webp?raw=true"/* Tan White Collar */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/TeddyGreenTShirt.webp?raw=true"/* Teedy Green TShirt */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/AsscSeahawksHoodie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/WCJapanJersey.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/WhiteKnit.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/WhiteLongSleeve.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/WitherspoonJersey.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/JordanUndefeatedHoodie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/NikeEKJacket.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/NikeGreyPufferJacket.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/PorscheHoodie.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/BlackKnitLongSleeve.webp?raw=true"/*Black knit long sleeve */,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/BlackCollarTShirt.webp?raw=true", /*Black collar TShirt */
    "https://image.hm.com/assets/hm/82/70/827052378745fd6c04c1b2fed9580a4b2f303536.jpg?imwidth=1536"/*sunshine tee*/,
    "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/1100x/040ec09b1e35df139433887a97daa66f/b/a/baabldgcrewwht-1.jpg"/*astroboy long-sleeve*/,
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/445593/item/goods_30_445593_3x4.jpg?width=600"/*tan mickey tee*/,
    "https://i.shgcdn.com/57c3a1d4-7229-4fd5-a722-3b5ab5eaccbe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/*bape hotwheels*/,
    "https://shopfd.com/cdn/shop/products/FD_product_Mens_Image_112.jpg?v=1530148625"/*formula drift rain jacket*/,
    "https://cdn.mainlinemenswear.co.uk/images/w_900,h_900/f_auto,q_auto/mainlinemenswear/shopimages/products/208468/Mainimage.jpg/Nike%20Logo%20Puffer%20Jacket%20Grey"/*nike grey puffer*/,
    "https://www.solebystyle.com/cdn/shop/files/KAWS-x-Warhol-Graphic-476119-Sweatshirt-Black.webp?v=1725031824"/*kaws black long sleeve*/,
    "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dw18e9458c/tillys/images/catalog/1000x1000/429911100.jpg"/*nike sb hoodie*/,
    "https://nevercontent.jp/cdn/shop/products/csb8yblkfrnt.png?v=1658910211&width=2500"/*red never content tee*/,
    "https://www.uniqlo.com.hk/hmall/test/u0000000021231/main/first/1000/1.jpg"/*vintage camera tee*/,
    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F02%2Funiqlo-ut-pokemon-magma-collab-collection-release-info-003.jpg?q=75&w=800&cbr=1&fit=max"/*uniqulo pokemon tee*/,
    "https://cdn11.bigcommerce.com/s-8dv4td49lk/images/stencil/1280x1280/products/6612/13668/476352_344N677D_09_A010__84392.1723590900.jpg?c=1"/*kaw black tee*/,
    "https://au-sell.com/cdn/shop/files/BackoftheKAWSxWarholBananaUniqloUTGraphicT-ShirtWhite_SS24_-au.sellstore.png?v=1724639044"/*blue kaws white tee*/,
    "https://extrabutterny.com/cdn/shop/products/DQ4593-133-1.jpg?v=1657829832"/*jordan ring white tee*/,
    "https://i.ebayimg.com/images/g/kZQAAOSwvXZnFtbU/s-l1200.jpg"/*nyc blue tee*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/086/882/981/original/1179004_02.jpg.jpeg?action=crop&width=1500"/*assc koi shirt*/,
    "https://image.goxip.com/GO0jTItHUZ8BGpsonktgMFS1n48=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FJ-Balvin-Blanco-x-Takashi-Murakami-Large-Flower-Hoodie-Black.jpg"/*murakami black hoodie*/,
    "https://i5.walmartimages.com/asr/7f8c22b2-80d0-427a-a22b-9420012c681d.05d988df28ec19e00b5600f57ef233fb.jpeg"/*jordan breakfast club grey hoodie*/,
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/756/317/original/917406_01.jpg.jpeg?action=crop&width=1500"/*assc grey hoodie*/,
    "https://i.ebayimg.com/images/g/N8cAAOSwbDNkTr12/s-l1200.jpg"/*jordan x undefeated black hoodie*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Free%20Planet%20Shirt.png"/*free planet tee*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Human%20Made%20Dark%20Blue.png"/*human made dark blue*/,
    "https://raw.githubusercontent.com/Lit-Turtle/closetimg/main/Never%20Content%20White.png"/*never content white*/,
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/top/AsscRiverHoodie.webp?raw=true"/*assc river hoodie*/
];
//bottom items
const blBtn = document.getElementById("bl-btn");
const bImg = document.getElementById("b-img");
const brBtn = document.getElementById("br-btn");
let bPos = 0;
let bottoms = [
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/BaggyBlackSweats.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/BlackBarrelJeans.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/BlackCargoSweats.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/BlueJeanShorts.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/BrownSweats.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/DarkGreyBarrelJeans.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/bottom/GapBlueJeans.webp?raw=true"
];
//shoes items
const slBtn = document.getElementById("sl-btn");
const sImg = document.getElementById("s-img");
const srBtn = document.getElementById("sr-btn");
let sPos = 0;
let shoes = [
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/shoe/AirMax1RedShoe.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/shoe/BlackJordanShoe.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/shoe/FoamRnrShoe.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/shoe/SmileShoe.webp?raw=true",
    "https://github.com/Lit-Turtle/myCloset/blob/main/images/shoe/WhysoSadShoe.webp?raw=true"
];

const centerH = document.getElementById("center-hat");
const centerT = document.getElementById("center-top");
const centerB = document.getElementById("center-bottom");
const centerS = document.getElementById("center-shoe");

const leftT = document.getElementById("left-top");
const rightT = document.getElementById("right-top");
const leftB = document.getElementById("left-bottom");
const rightB = document.getElementById("right-bottom");
const leftS = document.getElementById("left-shoe");
const rightS = document.getElementById("right-shoe");

const mod = (n, m) => ((n % m) + m) % m;

function showHat() {
    leftH.src   = hats[mod(hPos - 1, hats.length)];
    centerH.src = hats[hPos];
    rightH.src  = hats[mod(hPos + 1, hats.length)];

    // warm the cache one step further out so fast clicking stays instant
    [hPos - 2, hPos + 2].forEach(i => {
        new Image().src = hats[mod(i, hats.length)];
    });
}

function showTop() {
    leftT.src = tops[mod(tPos - 1, tops.length)];
    centerT.src = tops[tPos];
    rightT.src = tops[mod(tPos + 1, tops.length)];
}

function showBottom() {
    leftB.src = bottoms[mod(bPos - 1, bottoms.length)];
    centerB.src = bottoms[bPos];
    rightB.src = bottoms[mod(bPos + 1, bottoms.length)];
}

function showShoe() {
    leftS.src = shoes[mod(sPos - 1, shoes.length)];
    centerS.src = shoes[sPos];
    rightS.src = shoes[mod(sPos + 1, shoes.length)];
}

showHat();
showTop();
showBottom();
showShoe();

hlBtn.addEventListener("click", () => {
    hPos = mod(hPos - 1, hats.length);
    showHat();
});

hrBtn.addEventListener("click", () => {
    hPos = mod(hPos + 1, hats.length);
    showHat();
});

tlBtn.addEventListener("click", () => {
    tPos = (tPos - 1 + tops.length) % tops.length;
    showTop();
});

trBtn.addEventListener("click", () => {
    tPos = (tPos + 1) % tops.length;
    showTop();
});

blBtn.addEventListener("click", () => {
    bPos = (bPos - 1 + bottoms.length) % bottoms.length;
    showBottom();
});

brBtn.addEventListener("click", () => {
    bPos = (bPos + 1) % bottoms.length;
    showBottom();
});

slBtn.addEventListener("click", () => {
    sPos = (sPos - 1 + shoes.length) % shoes.length;
    showShoe();
});

srBtn.addEventListener("click", () => {
    sPos = (sPos + 1) % shoes.length;
    showShoe();
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

saveBtn.addEventListener("click", () => {
    saveBox.insertAdjacentHTML("beforeend", `
        <div class="saved-set">
            <div class="saved-row">
                <img src="${hats[hPos]}" id="saveLeft" alt="Hat" />
                <img src="${tops[tPos]}" id="saveRight" alt="Shirt" />
            </div>
            <div class="saved-row">
                <img src="${shoes[sPos]}" id="saveLeft" alt="Shoes" />
                <img src="${bottoms[bPos]}" id="saveRight" alt="Shorts" />
            </div>
        </div>
    `);
});

//Background Color Picker
const colorPicker = document.getElementById("bgColor");

document.addEventListener("click", function (event) {
    if (event.target.closest("button, input, a, select, textarea, .cate-box")) {
        return;
    }

    colorPicker.click();
});

colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value;
});
