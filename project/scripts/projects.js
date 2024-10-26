// FOOTER YEAR OUTPUT
const year = document.querySelector("#year");

// FOOTER LAST MODIFIED OUTPUT
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();

// DISABLED HAMBURGER BUTTON
// const mainnav = document.querySelector(".navigation")
// const hambutton = document.querySelector('#menu');

// hambutton.addEventListener("click", () => {
//	mainnav.classList.toggle("show");
//	hambutton.classList.toggle("show");
//});


// PRODUCT ARRAY WHERE ITEMS CAN BE ADDED WHERE DEEMED NECESSARY
const products = [
	{
	  	nameP: "Nature's Garden Healthy Trail Mix Snack Pack - 28.8 oz",
	  	asin: "B07D5BCH7D",
	  	description: "Embrace wholesome snacking with Nature's Garden Healthy Trail Mix Snack Packs! Packed with a hearty blend of mixed nuts, our trail mix is not just delicious—it's a heart-healthy, omega-3 rich choice designed for the entire family. Each 28.8 oz bag contains 24 individual servings, offering convenience and quality in every bite.",
	  	price: 21.97,
	    review: 4.7,
	    imgURL: "https://m.media-amazon.com/images/I/71gTlHV0kwL._SX425_PIbundle-24,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Premier Protein Shake, Chocolate, 30g Protein 1g Sugar 24 Vitamins Minerals Nutrients to Support Immune Health, 11.5 fl oz (Pack of 12)",
		asin: "B07MJL8NXR",
		description: "Packaged in a 11.5oz bottle, each Premier Protein Shake contains 30 grams of protein, complete with all the essential amino acids, 1g of sugar, 3-5g carbs (depending on flavor), 160 calories, 24 vitamins & minerals, and is also low in fat. We use a blend of milk protein and casein in our shakes to help fuel muscles quickly and for several hours to help support your goals. Enjoy a shake as a healthy snack, a breakfast on-the-go, an afternoon snack, or as pre- or post-workout fuel. They are delicious as is but are also highly customizable. Try blending with your favorite fruits and vegetables for a delicious smoothie or adding to cereal or oatmeal. Available in 9 delicious flavors: Cinnamon Roll, Chocolate, Vanilla, Cafe Latte, Caramel, Cookies & Cream, Strawberries & Cream, Bananas & Cream, and Peaches & Cream.",
		price: 30.38,
		review: 4.5,
		imgURL: "https://m.media-amazon.com/images/I/719eDVmYeYL._SX425_PIbundle-12,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Nissin Top Ramen Noodle Soup, Chicken, 3 Ounce (Pack of 24)",
		asin: "B006MBTC50",
		description: "THE ORIGINAL INSTANT RAMEN NOODLE SINCE 1970. Delicious as is or tossed with your favorite ingredients, Top Ramen is always a simple pleasure. With no added MSG, the great taste you love has been stripped down to its essential noodle goodness. Even vegetarians can enjoy our Soy Sauce and Chili flavors with their favorite toppings",
		price: 6.98,
		review: 4.6,
		imgURL: "https://m.media-amazon.com/images/I/81rorFXZawL._SX425_PIbundle-24,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "BEN'S ORIGINAL Ready Rice Jasmine Rice, Easy Dinner Side, 8.5 OZ Pouch (Pack of 6)",
		asin: "B07GBJ2D23",
		description: "BEN'S ORIGINAL Ready Rice Jasmine Rice provides a delicious substitute for white rice, brown rice, or wild rice in just 90 seconds. Great as a cooked rice side dish or part of a savory main course, this microwave rice offers 100% authentic Thai rice that is perfect for satisfying your desire for Southeast Asian food. This long grain rice comes in a BPA-free microwaveable rice pouch that eliminates prep and cleanup, making it easier than ever to create a globally-inspired meal. For effortless cooking, microwave this rice for 90 seconds or thoroughly heat it in a skillet before serving. Pair this rice with your favorite Southeast Asian cuisine entrees or serve it plain. This Jasmine rice is vegetarian, very low in sodium and fat, and contains no artificial flavors, no artificial colors, no preservatives, or cholesterol. BEN'S ORIGINAL is dedicated to creating meals and experiences that offer everyone a seat at the table.",
		price: 9.48,
		review: 4.6,
		imgURL: "https://m.media-amazon.com/images/I/815pWHOGCOS._SX425_PIbundle-6,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Evian Natural Spring Water, 1 L bottle, 12 pack",
		asin: "B00MWXJPA4",
		description: "Evian Natural spring water from the French Alps. evian water starts as snow and rain on the peaks of the pristine French Alps. Protected deep in the heart of the mountains, each drop filters through layers of mineral-rich glacial sands for over 15 years. evian natural spring water begins as snowflakes and mountain rain, naturally filtered through glacial rocks for over 15 years, giving evian its purity, mineral content and neutrally balanced 7.2 pH for delicious natural spring water. Pure as nature intended, the water springs from the source in Evian-Les-Bains where it's been bottled since 1826. Our pure bottled natural spring mineral water is always a refreshing, naturally hydrating drink. Its quality and taste make it perfect for serving by the glass, or drinking directly from the bottle at home, at school or at the gym. evian is committed to the environment & respecting the water cycle. Our recyclable plastic bottles contain up to 35% recycled plastic. They're perfect for your backpack or gym bag or keep them in your fridge for cool refreshment anytime. Our natural spring WATER has a balanced mineral composition and naturally occurring electrolytes that give it a distinctive, smooth taste, unique among bottled waters. It's the perfect rehydrating beverage, delicious either cold or at room temperature.",
		price: 20.88,
		review: 4.7,
		imgURL: "https://m.media-amazon.com/images/I/71Vf2S-FaaL._SX425_PIbundle-12,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Frito Lay Party Mix Variety Pack, (Pack of 40)",
		asin: "B076H2J9TZ",
		description: "Frito-Lay Variety Packs provides the perfect portion size and variety to keep your entire family happy. No matter what the occasion from stocking the pantry, to your next family party, to the lunch box, or even a desk break, all you have to do is grab a pack and go!",
		price: 22.43,
		review: 4.6,
		imgURL: "https://m.media-amazon.com/images/I/61tI2xybE8L._SX300_SY300_QL70_FMwebp_.jpg"
	},
	{
		nameP: "Dole Fruit Bowls No Sugar Added Variety Pack Snacks, Peaches, Mandarin Oranges & Cherry Mixed Fruit, 4oz 12 Cups, Gluten & Dairy Free, Bulk Lunch Snacks for Kids & Adults",
		asin: "B072151Q32",
		description: "Founded in Hawaii in 1851, Dole is the world's largest producer and marketer of high-quality fresh fruit and fresh vegetables. Dole markets a growing line of packaged and frozen foods, and is a produce industry leader in nutrition education and research. The Dole brand means the finest, high-quality products. Dole will continue to meet customers' expectations by consistently providing products that meet the highest standard - the Dole standard. Dole is focused on four pillars of sustainability in all of its operations: water management, carbon footprint, soil conservation and waste reduction. For Dole, anything less is unacceptable. Feel revitalized with the fresh taste of sun-ripened Dole Fruit Bowls at any time. Packed in 100% juice, Dole Fruit Bowls are a rich source of Vitamin C. These refreshing treats have 80 calories, no fat and 45% of the recommended daily allowance of Vitamin C. Rich in nutrition, it gives you healthy energy so you feel refreshed and ready to shine. Enjoy Dole Fruit Bowls at home, in the office or even on the go. Perfect with your breakfast, with lunch or dinner, or as a dessert. They are also perfect for a quick snack! Dole, make every day shine!",
		price: 7.98,
		review: 4.6,
		imgURL: "https://m.media-amazon.com/images/I/711HXUUFGzL._SX425_PIbundle-12,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Nate's 100% Pure, Raw & Unfiltered Honey - Award-Winning Taste, 32oz. Squeeze Bottle",
		asin: "B00CMQD3VS",
		description: "Enjoy Nature Nate’s 100% Pure, Raw & Unfiltered Honey on anything needing a little natural sweetness – morning coffee or tea, oatmeal, granola, or as a better-for-you sweetener in baked goods. Nature Nate's raw & unfiltered honey delivers a promise of the highest quality honey. Through rigorous testing and careful handling, we ensure every bottle of Nature Nate's honey is the highest quality from the inside out: no additives, no preservatives, never pasteurized, pollens intact, crafted for exceptional taste, and no sticky bottles. Our ultimate goal is to leave the world a little better than we found it by fostering happy hives and happy lives, giving of our time and resources from bees to beyond the bottle in communities of need.",
		price: 10.63,
		review: 4.7,
		imgURL: "https://m.media-amazon.com/images/I/71y-wEpDUUL._SX425_.jpg"
	},
	{
		nameP: "Welch's Fruit Snacks, Mixed Fruit, Perfect Halloween Candy Bulk Pack, Gluten Free, Individual Single Serve Bags, 0.8 oz (Pack of 40)",
		asin: "B0BWSKYV63",
		description: "At Welch’s fruit snacks we always use real fruit as the first ingredient, that’s why our fruit snacks are bursting with delicious taste. With over 10 mouthwatering Welch’s fruit snacks flavor varieties to love, it’s easy to find your favorite!",
		price: 8.06,
		review: 4.7,
		imgURL: "https://m.media-amazon.com/images/I/81vxpnstihL._SX425_.jpg"
	},
	{
		nameP: "Ring Pop Halloween Bulk Variety Candy - 20 Ct Individually Wrapped Lollipops w/ Assorted Flavors - Fun Candy For Party Favors, Halloween Parties, Trick or Treat Goodie Bags, Bachelorette Parties",
		asin: "B06XGNL1RX",
		description: "Ring Pop is the ultimate iconic wearable lollipop hard candy with an eye-catching candy gem that is deliciously playful. This hard candy is adored by kids and adults which makes it perfect for sharing with kids, family, and friends. Kids enjoy sharing and wearing their favorite candy gem with friends because hangouts are way more fun with Ring Pop! These shelf-stable treats are the perfect individually wrapped lollipops to share and are the ultimate candy for kids' party favors, kids birthday parties, birthday snacks, or just a fun and sweet treat. These spooky fun treats are great to add to a Halloween costume, pass out to trick or treaters, or use as decoration at a Halloween party! Vibrantly colorful and unique, Ring Pop adds a level of fun, no matter what or where it may be. So, what are you waiting for? Make it over the top and keep the fun going and bring a bag of these delicious candy treats in a variety of mouth-watering flavors to share with your kids, family, and friends. Ring Pop is ideal to use as birthday goody bag fillers, and give as a wearable, sweet reward for students. Also, a fun and unique idea to wear for bachelorette parties. Each lollipop variety bag includes 20 individually wrapped Ring Pop gem candy lollipops in a selection of 6 assorted flavors of classic mouthwatering favorites - Strawberry, Blue Raspberry, Twisted Blue Raspberry Watermelon, Sour Cherry, Watermelon, and Twisted Berry Blast. Unwrap the fun at your next gathering because the variety pack means there are different tasty flavors for kids to enjoy, but enough to go around and share the fun together! Keep them on hand as a pantry staple for a delicious, sweet treat. They're also perfect to bring to your next get-together, birthday party, or any special occasion. These individually wrapped candies are the perfect sweet treat to share with your kids, family, and friends, no matter the occasion. Our candy mix is shelf stable. Disclaimer: Not for children 3 and under.",
		price: 7.72,
		review: 4.8,
		imgURL: "https://m.media-amazon.com/images/I/81VRAP5PxsL._SX425_PIbundle-20,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Gerber Baby Foods 2nd Foods Meat, Chicken & Gravy, Mealtime for Baby, 2.5 Ounce Jar (Pack of 10)",
		asin: "B0835QJFPY",
		description: "Gerber Chicken and Gravy baby food purees are a delicious Gerber mealtime dinner option. Meats & poultry are among the best food sources for zinc for babies. Inspected by the USDA, they contain 7 grams of protein per jar & no added salt, artificial flavors or colors. Gerber 2nd Foods help expose babies to a variety of tastes and ingredient combinations, which is essential to help them accept new flavors. You can feed your little one straight from the container, or add some to a bowl and refrigerate the leftovers for up to one day.",
		price: 14.15,
		review: 4.5,
		imgURL: "https://m.media-amazon.com/images/I/51TSDYp0F7L._SX425_PIbundle-10,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "365 by Whole Foods Market, Paper Towels 135 Sheet Jumbo Rolls 3 Count, 135 Count",
		asin: "B07QLZHGL2",
		description: "Many paper towels are bleached with Chlorine, including some brands made with recycled paper. When paper is bleached with Chlorine, dangerous chemicals can be released into the environment. Our paper towels are whitened using a safer, environmentally progressive whitening process.",
		price: 5.49,
		review: 4.3,
		imgURL: "https://m.media-amazon.com/images/I/51feyhXYrCL._AC_SY355_.jpg"
	},
	{
		nameP: "Wonderful Pistachios No Shells, Roasted & Salted Nuts, 0.75 Ounce Bag (Pack of 9), Protein Snacks, Gluten Free, On-the-Go, Individually Wrapped Healthy Snacks",
		asin: "B07XSKK6Z4",
		description: "One Box of 9 individually wrapped 0.75 Ounce Bags of our Roasted & Salted No Shells Wonderful Pistachios. Wonderful Pistachios have literally come out of their shells. Same delicious taste, but with a little less work for you. Still great for snacking, they’re also a wonderful addition to your culinary creations. Wonderful Pistachios are a smart, healthy choice for folks around the world. Wonderful Pistachios grows all of its pistachios in California’s fertile San Joaquin Valley. The warm days and cool nights work in harmony with the region’s natural soils to create the perfect growing climate. We then carefully tend and harvest each pistachio using the latest in sustainable practices. Nutritious, healthy, and protein powered pistachios are great as part of an overall healthy diet. Note: Contains Tree Nuts (pistachios).",
		price: 7.11,
		review: 4.7,
		imgURL: "https://m.media-amazon.com/images/I/81SZKYpS5lL._SX425_PIbundle-9,TopRight,0,0_AA425SH20_.jpg"
	},
	{
		nameP: "Benchmark Bouquets, Flowering Fields, Glass Vase Included, Gift Fresh Flowers for Birthday, Anniversary, Get Well, Sympathy, Congratulations, Thank You, Just Because",
		asin: "B00KWX688S",
		description: "Our popular Flowering Fields bouquet is a testament to the finest handpicked field-grown flowers. It features bold and vibrant sunflowers, encircled by an array of the most distinctive colors and textures. Whether you're looking to brighten your own day or show someone you care, this bouquet is a vibrant representation of Mother Nature's best offerings. Its composition of yellow, purple, hot pink, orange, and green blooms comes together in a colorful and captivating symphony that's bound to make a statement and bring joy to any occasion.",
		price: 43.95,
		review: 4.1,
		imgURL: "https://m.media-amazon.com/images/I/91JiJrLlUnL._SX385_.jpg"
	},
  ];


function refreshPage() {
	location.reload();
}

createProductCard(products);

// PRODUCT FILTERING
const resetAnchor = document.querySelector("#reset");
	resetAnchor.addEventListener("click", refreshPage);

const belowAnchor = document.querySelector("#below");
belowAnchor.addEventListener("click", () => {
	createProductCard(products.filter(product => product.price < 10));
})

const aboveAnchor = document.querySelector("#above");
aboveAnchor.addEventListener("click", () => {
	createProductCard(products.filter(product => product.price >= 10));
})

const topAnchor = document.querySelector("#top");
topAnchor.addEventListener("click", () => {
	createProductCard(products.filter(product => product.review > 4.5));
})

const lessAnchor = document.querySelector("#less");
lessAnchor.addEventListener("click", () => {
	createProductCard(products.filter(product => product.review <= 4.5));
})


// Create Product Card Function and Loop
function createProductCard(filteredProducts) {
	document.querySelector(".container").innerHTML = "";
	filteredProducts.forEach(product => { 
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let description = document.createElement("p");
		let price = document.createElement("p");
		let review = document.createElement("p");
		let asin = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = `${product.nameP}`;
		description.innerHTML = `<span class="label"><b>Description:</b></span> ${product.description}`;
		price.innerHTML = `<span class="label"><b>Price:</b></span> $${product.price}`;
		review.innerHTML = `<span class="label"><b>Review:</b></span> ${product.review} out of 5`;
		asin.innerHTML = `<span class="label"><b>SKU:</b></span> ${product.asin}`;
		img.setAttribute("src", product.imgURL);
		img.setAttribute("alt", `image of ${product.nameP}`);
		img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
		card.appendChild(description);
		card.appendChild(price);
		card.appendChild(review);
		card.appendChild(asin);

		document.querySelector(".container").appendChild(card);
		});
	}

// **NOTE: THE IDEA WAS TO CREATE A 2 COLUMN TABLE WHERE LEFT IS FOR IMAGE AND RIGHT WOULD BE FOR THE TEXTS BUT CAN'T SEEM TO HAVE IT WORK WHILE USING JS