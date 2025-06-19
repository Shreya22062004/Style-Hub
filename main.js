
document.addEventListener('DOMContentLoaded', function () {
  // --- Product Data ---
  const products = [
    // Men
    { id: 1, name: "Full Length Slim Fit Cargo Trousers with Flap Pockets", price: 899, image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250211/kqv3/67ab28a3bc78b543a937d320/-473Wx593H-443319764-beige-MODEL7.jpg", desc: "Classic Beige Chinos: Everyday Comfort.", rating: 4.5, category: "Men", brand: "Shein", color: "Beige" },
    { id: 2, name: "Street Full Length Relaxed Fit Cargo Trousers With Pockets", price: 999, image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250207/xd47/67a595bb2960820c4969253e/-473Wx593H-443319621-olive-MODEL6.jpg", desc: "Tactical Style: Everyday Cargo Pants.", rating: 4.6, category: "Men", brand: "Shein", color: "Olive" },
    { id: 3, name: "Pockethive Grey Parachute Pants", price: 1799, image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSO4573-02-3228.jpg?v=1721459295&quality=20", desc: "Sporty Cargo Pants with Drawstring.", rating: 4.1, category: "Men", brand: "Shein", color: "Grey" },

    // Women
    { id: 4, name: "Stylum Print Fit and Flare Maxi Dress", price: 899, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRe03ORcIvWnhr7WOkYxaONLoAwepXzcQQ1AQ0CiFenT5idRnRdI8YQpGeVsfVYtV8SzDNq8wQ4LdFuCwCp2uzB979s3AtSURJMvoOIAqM", desc: "Lightweight floral dress perfect for summer.", rating: 4.0, category: "Women", brand: "H&M", color: "Brown" },
    { id: 5, name: "MANOJAVA Cotton Printed Fit & Flare Midi Dress", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR77RUq_mFuKQq_QtDglT4AcC8zz0yKSuslHM3METLSCY7KML6Ng-BwOR-qf7Mto71xTFEk2M8GS4YVLLtaJgeVRw2T-W7yKBfDjvD1OeDIHYoUQDqs6dLo5g", desc: "Blue & White Botanical Bliss Midi Dress.", rating: 4.4, category: "Women", brand: "H&M", color: "Blue" },
    { id: 6, name: "Front Open Twill Dress", price: 2399, image: "https://cdn.shopify.com/s/files/1/0785/1674/8585/files/4thDEC2024Virgio-03521.jpg?v=1749547523&width=960&crop=center", desc: "Sleeveless Terracotta Shirtdress: Effortless Chic.", rating: 4.7, category: "Women", brand: "Reya", color: "Wood" },

    // Kids
    { id: 8, name: "Girls Midi/Knee Length Casual Dress", price: 599, image: "https://rukminim2.flixcart.com/image/300/400/xif0q/kids-dress/w/d/5/2-3-years-ln-01-le-nino-original-imahbk49ht8bw7xu.jpeg?q=90&crop=false", desc: "Playful Denim Shirtdress with Colorful Buttons.", rating: 4.8, category: "Kids", brand: "Le Nino", color: "Blue" },
    { id: 9, name: "Ollington St. Poplin Woven Half Sleeves Solid Shirt & Skirt With Pockets ", price: 1099, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoU0Fa-ZThPyq8-8YCMgkcqGVmsMAJAi2qnoAP4VJWZYUedMOI_5lsxar3JAktp5CBDU&usqp=CAU", desc: "Fashionably Fun: Cropped Shirt & Cargo Skirt.", rating: 4.3, category: "Kids", brand: "Ollington", color: "Brown" },
    { id: 10, name: "Cotton Half Sleeves Monsters Printed Coordinating Tee & Shorts Sets ", price: 599, image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/19905211a.webp", desc: "Adorable Monster Mash Kids' Set.", rating: 4.9, category: "Kids", brand: "Le Nino", color: "Cresm" },

    // Accessories
    { id: 11, name: "Anti Tarnish Stainless Steel Gold Single Diamond Necklace Crystal Gold-plated Plated Stainless Steel Necklace", price: 248, image: "https://images.meesho.com/images/products/543417479/nz32q_512.webp", desc: "Trendy unisex denim jacket.", rating: 4.2, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 12, name: "Heart Artificial Jewellery - Necklace Set", price: 299, image: "https://m.media-amazon.com/images/I/51nVlkYahlL._AC_SL1500_.jpg", desc: "Layered Gold Necklace: Pearls, Chains & Heart.", rating: 4.2, category: "Accessories", brand: "VIRGIO", color: "Gold" },
    { id: 13, name: "Stainless Steel EvilEye Necklace Crystal Gold-plated Plated Stainless Steel Necklace", price: 299, image: "https://assets.ajio.com/medias/sys_master/root/20240806/4fKi/66b228b11d763220fa62e88d/-473Wx593H-700265704-rosegold-MODEL3.jpg", desc: "Mystic Evil Eye Necklace: Style & Protection.", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Silver" },

    //WOMEN
    { id: 7, name: "Floral Print Cotton Midi Dress", price: 799, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwjahQYuTKQaN4HVWaD7fY0d-tzzHTIOcVUmb8a196lkFgQNGG6cT2H2eeRGgU2NjL3I7kGaRuEOZW3b96dE59df20-XH67gkEUCXWt4OXxpS7NtUFM4re", desc: "Sparkling Solitaire: Timeless Elegance.", rating: 4.5, category: "Women", brand: "Zara", color: "White" },
    { id: 14, name: "Women's Floral Print Puff Sleeve Casual Dress", price: 449, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSaFUs_KAfAIN3p7mxfoAqp8aHDyE5w5D_p9Knrja9xJ5T1fM2L9MeE24ppSry0BQY1Kh3EyPpfrie9PjphZ2dxDeInJsumHZgYN_7cakIA4S4sQm6tHig5Xw", desc: "Lemon Print Perfection Smocked Midi Dress.", rating: 4.5, category: "Women", brand: "VIRGIO", color: "White" },
    { id: 15, name: "Women's Denim Dress with Shoulder Straps", price: 1399, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1QZDlW4vi4SRUEL1srBM21uBuynZzXnoH3bhrkRt5XUz-Rx44rQR7GVey_pGyCJjngVbxnkQ5dd4MIlhHdYRNb7gVzmhMXQwAO7iy9NDsRSjLFhKz09Cn", desc: "Denim Dream Midi: Strappy & Sweet.", rating: 4.5, category: "Women", brand: "Zara", color: "Blue" },
    { id: 16, name: "Tunic Pant Co-ords Set", price: 1599, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/apparel-set/v/e/m/l-bp-jisora-147-co-ords-bappa-original-imaha3pghyet5ds6.jpeg?q=70&crop=false", desc: "Effortless Ivory Co-ord with Jungle-Inspired Prints.", rating: 4.5, category: "Women", brand: "Bappa", color: "White" },
    { id: 17, name: "Women Self Design Cotton Blend Kurta", price: 499, image: "https://images.meesho.com/images/products/539408686/vvtcv_512.webp", desc: "Vibrant Pink Paisley Kurta: A Traditional Twist.", rating: 4.5, category: "Women", brand: "H&M", color: "Pink" },
    { id: 18, name: "Women's 2 Piece Outfit Loose Tank Top and Wide Leg Pants Sets", price: 699, image: "https://m.media-amazon.com/images/I/51I8iB9dT5L._SY879_.jpg", desc: "Effortless Linen Loungewear Set.", rating: 4.5, category: "Women", brand: "VIRGIO", color: "Beige" },
    { id: 19, name: "Botanical Printed Sleeveless Top & Trouser", price: 999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmr9UNDGS2Fz88x2NXf7iCL4-OiwvkBh6ejf4JHrncOpuCInAuw1wDuOul9kTUr-HfJ8jim_tKrObU1jiRkZ5In9fmZ9ysBdAtyyVcbnio", desc: "Boho Chic Co-ord with Floral Medallions.", rating: 4.5, category: "Women", brand: "VIRGIO", color: "Cream" },
    { id: 20, name: "Solid Camp Neck Coat", price: 2799, image: "https://assets.newme.asia/wp-content/uploads/2025/05/28112904520b714e/NM-PRC-144-CTS-24-NOV-11218-BEIGE(1)-650x975.webp", desc: "Polyster Everyday Overcoat", rating: 4.5, category: "Women", brand: "H&M", color: "Beige" },
    { id: 21, name: "Women's Regular Fit Jacket", price: 899, image: "https://m.media-amazon.com/images/I/61yqrscHuZL._AC_SX569_.jpg", desc: "Striped Cuff Blazer: Smart & Stylish.", rating: 4.5, category: "Women", brand: "H&M", color: "Beige" },
    { id: 22, name: "Women Ethnic Motifs Printed Kurta", price: 399, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/32434530/2025/2/4/2c2f11bd-701c-448b-826c-afc37d5d76481738666301028-Anouk-Women-Ethnic-Motifs-Printed-Kurta-7121738666300714-5.jpg", desc: "Embroidered Maroon Kurta: Traditional Elegance.", rating: 4.5, category: "Women", brand: "Zara", color: "Maroon" },
    { id: 23, name: "Women Printed Pure Cotton Straight Kurta", price: 499, image: "https://rukminim1.flixcart.com/image/300/300/xif0q/kurta/x/p/m/xl-mehndi-lace-kurta-bkapparels-original-imah49vtngggk7gw.jpeg", desc: "Lace-Trimmed Olive Kurta: Elegant & Earthy.", rating: 4.5, category: "Women", brand: "Bappa", color: "Green" },
    { id: 24, name: "Embroidered Kurta, Trouser/Pant & Dupatta Set", price: 899, image: "https://images.meesho.com/images/products/526039242/jrxnm_512.webp", desc: "Regal Purple Salwar Suit with Golden Embroidery.", rating: 4.5, category: "Women", brand: "VIRGIO", color: "Purple" },
    { id: 25, name: "Women Printed Pure Cotton Straight Kurta ", price: 399, image: "https://rukminim2.flixcart.com/image/750/1100/xif0q/kurta/q/g/a/l-short-kurti123-atiisundar-original-imah8dgyxhhnbvc4.jpeg?q=90&crop=false", desc: "Chic Printed Kurti: Bohemian Charm.", rating: 4.5, category: "Women", brand: "VIRGIO", color: "Green" },
    { id: 26, name: "Women's Rayon Viscose Straight Solid Kurta with Pant & Dupatta", price: 799, image: "https://m.media-amazon.com/images/I/61L8TihZr2L._SY879_.jpg", desc: "Sophisticated Taupe Salwar Suit with Striped Dupatta.", rating: 4.5, category: "Women", brand: "H&M", color: "Beige" },
    { id: 27, name: "Floral Printed Lace Inserts A-Line Ethnic Dress", price: 899, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/32076467/2025/4/25/3c11ae63-4356-488d-a463-5a0820751feb1745573566251-Sangria-Women-Ethnic-Dresses-8081745573565612-1.jpg", desc: "Graceful Sage Green Midi with Floral Print.", rating: 4.5, category: "Women", brand: "Zara", color: "Green" },
    { id: 107, name: "Red Silk Chanderi Hand Painted Kurta with Pant and Dupatta ", price: 39999, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/4/c4ea53bA779_1.jpg?rnd=20200526195200&tr=w-1080", desc: "Embrace yourself in a Red Suit", rating: 4.5, category: "Women", brand: "Devnaagri", color: "Red" },
    { id: 108, name: "Black Bloom in the Dark V Neck Gathered Dress", price: 999, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/a/9ade94bRTOR0010_1.jpg?rnd=20200526195200&tr=w-1080", desc: "A Blue Kurta for a Beautiful women", rating: 4.5, category: "Women", brand: "Zara", color: "Blue" },

    //ACCESSORIES
    { id: 28, name: "Gold-Plated Clover Pendant Chain", price: 99, image: "https://images.meesho.com/images/products/403625188/do1tj_512.jpg", desc: "Lucky Clover Charm Necklace.", rating: 4.2, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 29, name: "Fringe Artificial jewellery - Pendant Necklace", price: 399, image: "https://images.meesho.com/images/products/3254521/1_512.webp", desc: "Dainty Dazzle Drop Necklace.", rating: 4.2, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 30, name: "Geometric Artificial Jewellery - Earring Set", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjprdYkvMbP4sRxMTQiynN7pTmYS_ACopqKjKShlvIci5qOSRrB2Rpvrb4UgwVvmyTDCQ&usqp=CAU", desc: "Golden Hoop Earring Collection.", rating: 4.8, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 30, name: "Set of 24 Gold Plated Half Hoop Earrings", price: 799, image: "https://images.meesho.com/images/products/428768973/h8xv5_512.jpg", desc: "Golden Hoop & Pearl Earring Extravaganza.", rating: 4.8, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 30, name: "Needdle Tassel Halo Gold Drop Earrings", price: 699, image: "https://www.justlilthings.in/cdn/shop/files/JLT12848a.jpg?v=1736768858&width=800", desc: "Dangling Teardrop Threader Earrings.", rating: 4.8, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 31, name: "Fashion Bow Knot Alloy Plating Inlay Artificial Gemstones Pearl Women's Drop Earrings 1 Pair", price: 299, image: "https://image3.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2022/12/1/1598165049397088256/Fashion-Bow-Knot-Alloy-Plating-Inlay-Artificial-Gemstones-Pearl-Women-s-Drop-Earrings-1-Pair.jpg", desc: "Chic & Diverse Earring Collection.", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Pearl" },
    { id: 32, name: "Enamelled Golden Bracelet", price: 249, image: "https://everstylish.com/media/catalog/product/cache/fc1e90810f81d5d5f869fad087b9d639/j/e/jew1103807-14.jpg", desc: "Daisy Chain Bracelet: Floral Charm.", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "White" },
    { id: 33, name: "Artificial Green Bracelets", price: 399, image: "https://www.justlilthings.in/cdn/shop/products/jltb0260.jpg?v=1736772636&width=800", desc: "Double-Layered Gemstone Bracelet.", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Green" },
    { id: 33, name: "Sea-lover's Statement Bracelet", price: 199, image: "https://everstylish.com/media/catalog/product/cache/fc1e90810f81d5d5f869fad087b9d639/j/e/jew1103553.jpg", desc: "Charming Pearl & Gold Link Bracelet.", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Pearl" },
    { id: 34, name: "American Diamond Studded Gold Plated Bracelet", price: 499, image: "https://cdn-image.blitzshopdeck.in/ShopdeckCatalogue/tr:f-webp,w-1200,fo-auto/62205ecc26e96ffd07cb7044/media/EoBsjARt_Q350SMULA5_2024-04-29_1.jpeg", desc: "Elegant Wave & Sparkle Bracelet.", rating: 4.8, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 35, name: "Geometric Bracelet Set", price: 399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsXpYnLk6U1k1UEpNPNeZKFFox1c_SYKNMBoDTO1qlYEFXs2seSCfDzQcKNmQl7MM3zM&usqp=CAU", desc: "Golden Layered Bracelet Stack.", rating: 4.8, category: "Accessories", brand: "Savana", color: "Gold" },
    { id: 113, name: "The Yor Multiwearble Slider Necklace", price: 68999, image: "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPP1033N05_YAA22XXXXXXXXXXXX_ABCD00-PICS-00003-1024-93109.png", desc: "Enhance your Look", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Gold" },
    { id: 114, name: "The Neerja Evil Eye Bracelet", price: 29999, image: "https://kinclimg3.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIMG0652V13_YAA18BEEYXXXXXXXX_ABCD00-PICS-00000-1024-74526.png", desc: "Ward off negativity, invite good vibes: Your evil eye bracelet", rating: 4.8, category: "Accessories", brand: "Blue Stone", color: "Gold" },

    //MEN
    { id: 36, name: "Drop Shoulder Typographic Back Print Crew Tshirt", price: 499, image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250526/cmVN/68341e2155340d4b4f51349d/-473Wx593H-443327683-bottlegreen-MODEL4.jpg", desc: "Deep Forest Green Fabric Texture.", rating: 4.6, category: "Men", brand: "Shein", color: "Green" },
    { id: 37, name: "Cotton Blend Regular Fit Colorblock Half Sleeves Men's Henley T-Shirt", price: 399, image: "https://g.sdlcdn.com/imgs/k/3/w/Try-This-Cotton-Blend-Regular-SDL574187582-1-b5a73.jpg", desc: "Stylish Bi-Color Zip Polo.", rating: 4.1, category: "Men", brand: "Shein", color: "White" },
    { id: 38, name: "The Best-Sellers - 3 Pack", price: 1299, image: "https://nobero.com/cdn/shop/files/5_b39e764d-ca0e-4e4d-9f04-488c1900c98d.jpg?v=1743680010", desc: "Empowering Tees: Believe, Think Big, Be Authentic.", rating: 4.6, category: "Men", brand: "Shein", color: "Black" },
    { id: 39, name: "100% Pure Cotton Oversized Loose Baggy Fit Drop Shoulder Round Neck Cool Front Chest Typographic Logo Printed Raglan Sleeve T-Shirt for Men", price: 499, image: "https://m.media-amazon.com/images/I/617Gu65SvGL._SY879_.jpg", desc: "Streetwise Raglan Tee: Veirdo Vibe.", rating: 4.1, category: "Men", brand: "Veirdo", color: "Green" },
    { id: 40, name: "The Lifestyle Co. Drop-Shoulder Sleeves Pure Cotton T-shirt", price: 499, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29143556/2024/6/26/6c2f6411-b0c2-472c-a3be-d1e4f3e6b4301719400032557-Roadster-Men-Tshirts-1011719400032117-1.jpg", desc: "Effortless Street Style: Graphic Tee & Khaki Shorts.", rating: 4.6, category: "Men", brand: "Roadster", color: "Cream" },
    { id: 41, name: "Square Blue Shirt", price: 599, image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_March22_0158.jpg?v=1652165010&quality=20", desc: "Cool & Checkered: The Perfect Casual Shirt.", rating: 4.1, category: "Men", brand: "Ornate", color: "Blue" },
    { id: 42, name: "Dark Brown Check Shirt", price: 699, image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/65d4c2323208a8a1c81f8f69deeb8263.webp?v=1716882588&quality=20", desc: "Casual Comfort: Classic Brown Plaid Shirt.", rating: 4.6, category: "Men", brand: "Ornate", color: "Brown" },
    { id: 43, name: "Men Spread Collar Striped Casual Shirt", price: 599, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/22/RW0JYxK2_a022e472d6bc4ac58815df594c76ac31.jpg", desc: "Effortlessly Cool Knitted Stripe Shirt.", rating: 4.1, category: "Men", brand: "Shein", color: "Brown" },
    { id: 71, name: "JACK & JONES Single-Breasted Slim Fit Blazer", price: 3499, image: "https://m.media-amazon.com/images/I/51-kfTzrtYL._SY879_.jpg", desc: "Statement Suiting: Bold Florals Meet Classic Navy.", rating: 4.6, category: "Men", brand: "Tommy Hilfiger", color: "Blue" },
    { id: 72, name: "Men's Floral Print Embroidered Nehru Jacket", price: 6499, image: "https://m.media-amazon.com/images/I/61hYZun78-L._SY879_.jpg", desc: "Soft Hues, Sharp Style: Pink Kurta with Jacquard Vest.", rating: 4.7, category: "Men", brand: "Tommy Hilfiger", color: "Pink" },
    { id: 73, name: " Embroidered Velvet Black Bandhgala", price: 4999, image: "https://m.media-amazon.com/images/I/81AUksss-UL._SX679_.jpg", desc: "Grandeur in Gold & Black: Regal Embroidered Jacket.", rating: 4.1, category: "Men", brand: "Tommy Hilfiger", color: "Black" },
    { id: 74, name: "Men's Blazer", price: 7999, image: "https://img.johnpride.in/upperwear/blazernehrujackets/JPBL7818/jpbl7818-1.jpg", desc: "Confidence in Khaki: The Modern Blazer Look.", rating: 4.1, category: "Men", brand: "Allen Solly", color: "Beige" },
    { id: 75, name: "Slim Fit Pastel Green Suit", price: 4999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK05w772UyrmOMrkhgITNErcs9AxqpbmYQrru5JTcmdRuvC1K4Qyv2HVb1H9NOvSy3Ik&usqp=CAU", desc: "Verdant Vibe: Step out in Mint Green.", rating: 4.7, category: "Men", brand: "Allen Solly", color: "Green" },
    { id: 76, name: "Ivory Woven Kurta Set with Dori Embroidered Bundi", price: 39999, image: "https://www.devnaagri.com/cdn/shop/files/CelebWebsite2333_b6834c59-53e2-4825-a4bb-ab1bc4ef3404.jpg?v=1739185265", desc: "Subtle Sophistication: Embroidered Kurta with Nehru Jacket.", rating: 4.9, category: "Men", brand: "Devnaagri", color: "Cream" },
    { id: 77, name: "Muhurtham set with long sleeveless sherwani with Kurta Set", price: 49999, image: "https://koranm.com/cdn/shop/files/KORA_South_0160.jpg?v=1737372308&width=1080", desc: "Subtle Sophistication: long sleeveless sherwani with Kurta Set", rating: 4.7, category: "Men", brand: "Allen Solly", color: "Cream" },
    { id: 78, name: "Kurta Pyjama Set for Mens Ethnic & Designer Wear", price: 1099, image: "https://m.media-amazon.com/images/I/51FE21IGnyS._SY879_.jpg", desc: "Graceful Florals: Printed Kurta for Men.", rating: 4.7, category: "Men", brand: "Allen Solly", color: "White" },
    { id: 79, name: "Mens Embroidery Work with Digital Print Cotton Silk Long Sleeve Ethinic Wear Mandarian Collar Traditinal Kurta Pyjama Set", price: 999, image: "https://m.media-amazon.com/images/I/31FXWOSBAfL.jpg", desc: "Pink & Playful: Artistic Print Kurta for Men.", rating: 4.3, category: "Men", brand: "Tommy Hilfiger", color: "Pink" },
    { id: 80, name: "Men's Solid Cotton Blend Straight Kurta Shirt", price: 799, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTasDHPbI_jNiFbrRx_a82w-bV7KtioVKK3J29fcM9Gamdz0LuDJNEdLfNUKjW7vO2JgeRyGcaQopdztpJak9PYz5vePuGkhFXtG5oWTdbb", desc: "Understated Elegance: The Perfect Green Kurta.", rating: 4.5, category: "Men", brand: "Shein", color: "Green" },
    { id: 110, name: "Overshirt", price: 1799, image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Augusto_jan3058.jpg?v=1674813245&quality=50", desc: "Modern Comfort, Urban Edge: The Khaki Overshirt.", rating: 4.5, category: "Men", brand: "Shein", color: "Beige" },
    { id: 111, name: "SATIN STRETCH SHIRT HOLAND - OLIVE", price: 2499, image: "https://thehouseofrare.com/cdn/shop/products/IMG_0180_f6c0cc37-6ce6-4d0b-82ac-fd550ecd4ada_765x.jpg?v=1743587518", desc: "Subtle Sophistication: The Olive Green Formal Shirt.", rating: 4.5, category: "Men", brand: "Shein", color: "Olive" },
    { id: 112, name: "Men's Light Grey Solid Regular Fit Washed Full Sleeve Denim Jacket", price: 1099, image: "https://www.urbanofashion.com/cdn/shop/files/jakt-denim-lgrey-1.jpg?v=1730801207", desc: "Street style essential: The faded blue denim jacket.", rating: 4.5, category: "Men", brand: "Shein", color: "Grey" },

    //SAREES
    { id: 81, name: "Burgundy Saree with Raw Silk Blouse", price: 74999, image: "https://www.devnaagri.com/cdn/shop/products/nora-fatehi-in-burgundy-saree-with-raw-silk-blouse-celebrity-devnaagri-925092.jpg?height=2048&v=1749459140&width=2048", desc: "Pink Petal Elegance: Nora Fatehi in Embroidered Saree.", rating: 4.9, category: "Sarees", brand: "Devnaagri", color: "Pink" },
    { id: 82, name: "Women's Pure Soft Kanjivaram Silk Saree for Wedding Kanchipuram Pattu Banarasi Wear", price: 999, image: "https://m.media-amazon.com/images/I/719SCXmVzoL._SX679_.jpg", desc: "Majestic Drapes: A Vision in Silk and Gold.", rating: 4.7, category: "Sarees", brand: "Ajmera", color: "Pink" },
    { id: 83, name: "Handloom Violet Pure Silk Chanderi Saree With Floral Motifs", price: 24999, image: "https://sutraclothing.in/cdn/shop/files/IMG_0129.jpg?v=1737370594&width=1000", desc: "Regal in Royal Purple: A Timeless Banarasi Saree.", rating: 4.7, category: "Sarees", brand: "Ajmeera", color: "Purple" },
    { id: 84, name: "Deep Purple Embroidered Velvet Saree Set", price: 72999, image: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1736431631526_Virasatwebsite50.jpg", desc: "Elegant Plum Velvet Saree with Intricate Gold Embroidery.", rating: 4.7, category: "Sarees", brand: "Devnaagri", color: "Purple" },
    { id: 85, name: "Anouk Colourblocked Printed Tissue Saree", price: 1499, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZC0S5M8PPe4WEpB0UNNb37_2aPxWYUHHipUo6gZfKClvFc7gOBRcFWDaSsZ5Z3nc1R7hd9sr9lww3kfISRwdYxFZ2339w-IdBI9K47QVk", desc: "Golden Hour Glam: Cream and Yellow Saree.", rating: 4.5, category: "Sarees", brand: "Ajmera", color: "Gold" },
    { id: 86, name: "Anouk Embellished Sequinned Tissue Saree", price: 1999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0WW_2u501rmzs3SAUggMl2xXLmE1dYoc54IqG4Qp3UPy_17ru0snDGpZ9fZsK-mbp7IuH9UDm4FIlwizi3mJYRB-jsoCioecn4ob2XL31WK8UDXgz-hCeww", desc: "Emerald Enchantment: Golden Embroidered Chiffon Saree.", rating: 4.4, category: "Sarees", brand: "Ajmera", color: "Green" },
    { id: 87, name: "Women's Embellished Sequinned Tissue Designer Saree", price: 1999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmaOy3bjBV7Pa00VVj4GrHnGAhS0Fjr_UdSn4z5cw635cJvcZ7BDqvojVp4MUECCE-UEx1PQBQwKoQg-4jka3cpVi5Azm_7swm_o75bbyWVSdZ3Tv_pPzx", desc: "Regal Radiance: Golden Embellishments on Nude Saree.", rating: 4.5, category: "Sarees", brand: "Ajmera", color: "Gold" },
    { id: 88, name: "Printed Pure Georgette Saree", price: 1499, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwFtOuGqDf3PLG40eJg2I15pG98RriynfyBKllujRyR4A29TsWXD9ANBvJLVEe9ZApqJT2h98ozDw0fbGseoNIsAcOLsA3_IewPH-hFSQ", desc: "Elegant Strokes: Blue & Beige Printed Saree.", rating: 4.7, category: "Sarees", brand: "Ajmera", color: "Blue" },
    { id: 89, name: "Ethnic Motifs Saree", price: 999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD0MN1rd8BoRyaeEJ3IDZFLMLQM_oEEzZNm5uVmnH3vLCWQ_JESjuA5_5NQRDtqk_l-mP0T3iw3fcvas5Tzoe29vdqN2ANWxs-vweGB22p3gaMbFVj4kyM", desc: "Serene Sophistication: Block Print Saree in Blue Tones.", rating: 4.3, category: "Sarees", brand: "Ajmera", color: "Blue" },
    { id: 90, name: "Embellished Sequinned Net Saree", price: 1899, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5Fgw0c1trQh3ps03z_3yzGlUXwq3b0Z_x_YpCtPsDnIaaWlr8hW9cV7c_nsOY0fplaPN9SmZ2ANlccKBZs91ZaNMpSsP0tVYqh1EWyJE", desc: "Subtle Sparkle: The Perfect Net Saree for Celebrations.", rating: 4.1, category: "Sarees", brand: "Ajmera", color: "Gold" },
    { id: 91, name: "Ethnic Motifs Woven Design Banarasi Saree", price: 1999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr88mS4yVf-PFen7Aa_zGsnaw3KJ2i6hrLwNsCzrImgCzdB98GtlJzG5O1xzIWXH4rxGT0P9N2MLG_plFQobqRdhl2YK_Lnz5PNBu38mJehYtZ3ogeXjv0", desc: "Pretty in Pink: Elegant Benarasi Saree with Gold Accents.", rating: 4.1, category: "Sarees", brand: "Ajmera", color: "Pink" },
    { id: 92, name: "Banarasi Silk Saree", price: 1499, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgHx5Rjx6UEGyr2q41qtlvImZFG0EyFFOsihjjV8U91tHKT7UIsbBBPF_myoaa5gZxxXK0QEJgazBm_oahaS9miFHKVxwyauEUuEUd8s8r", desc: "Eternal Glamour: Black Silk Saree with Rich Red & Gold Border.", rating: 4.1, category: "Sarees", brand: "Ajmera", color: "Black" },
    { id: 99, name: "Sky Blue Embroidered Silk Organza Saree", price: 42999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qf9veDtOoKEvau_DbTAb2XzAGUMvo-53B9dFw6GX7_vfFTiwcHFRL1tXAjlmn933lh4&usqp=CAU", desc: "Sky Blue Dream: Elegant Saree with Floral Embroidery.", rating: 4.7, category: "Sarees", brand: "Devnaagri", color: "Blue" },
    { id: 100, name: "Dusty Rose Embroidered Velvet Saree Set", price: 79999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAMo3viL4YLDkG393Xu1UgkC_eKmb2302XSdV85UPtnlmZkJaBZs9tp3xlcI1INXcpSI&usqp=CAU", desc: "Velvet Grandeur: A Richly Embroidered Shawl Elevates This Stunning Saree.", rating: 4.8, category: "Sarees", brand: "Devnaagri", color: "Red" },
    { id: 101, name: "Red Real Zari Exclusive Shikargha Design Handwoven Pure Katan Silk Banarasi Brocade Saree with Kalga Border", price: 99500, image: "https://www.bunkala.com/cdn/shop/files/BKBS-11162_Red_Real_Zari_Exclusive_Bridal_Wear_Shikargha_Design_Handwoven_Pure_Katan_Silk_Banarasi_Brocade_Saree_with_Kalga_Border.jpg?v=1697041849&width=823", desc: "A richly Embroided Stunning Saree", rating: 4.9, category: "Sarees", brand: "Bunkala", color: "Red" },
    { id: 102, name: "Gold Mauve Jaal Kanjivaram Silk Saree", price: 82899, image: "https://www.singhanias.in/cdn/shop/files/505200_1.jpg?v=1740141038&width=970", desc: "The perfect pink for your next grand occasion: Sabyasachi's.", rating: 4.6, category: "Sarees", brand: "Sabyasachi", color: "Pink" },
    { id: 103, name: "Handloom Pure Silk Traditional Banarasi Saree", price: 25999, image: "https://sutraclothing.in/cdn/shop/files/IMG_9855.jpg?v=1737386119&width=1000", desc: "Eternal Radiance: This Benarasi Saree Drapes You in Pure Pink and Gold Grandeur.", rating: 4.6, category: "Sarees", brand: "Sabyasachi", color: "Pink" },
    { id: 104, name: "White & Blue Silk Hand Painted Embroidered Saree with Stitched Blouse", price: 69999, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/4/c4ea53bS201B_1.jpg?rnd=20200526195200&tr=w-1080", desc: "Drape yourself in understated luxury with a Devnaagri white masterpiece.", rating: 4.7, category: "Sarees", brand: "Devnaagri", color: "White" },
    { id: 105, name: "Red Son-Patti Saree with Unstitched Blouse & Veil", price: 99999, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/182ba4aNK_MASAC00002855_1.jpg?rnd=20200526195200&tr=w-1080", desc: "Unleash your inner fire: Drape yourself in a captivating red saree.", rating: 4.8, category: "Sarees", brand: "Sabyasachi", color: "Red" },
    { id: 106, name: "Exclusive Alia Bhatt in Ivory Silk Organza Saree", price: 44999, image: "https://images.meesho.com/images/products/136222996/mv2yi_512.webp", desc: "Alia Bhatt: A vision of ethereal grace in a pristine white saree.", rating: 4.6, category: "Sarees", brand: "Devnaagri", color: "White" },


    //KIDS
    { id: 44, name: "Dungaree For Baby Girls Party Embroidered Polycotton, Cotton Crepe Blend ", price: 399, image: "https://images.meesho.com/images/products/356091579/3yrld_512.jpg", desc: "Charming Ruffled Top with Black Suspender Skirt.", rating: 4.9, category: "Kids", brand: "Le Nino", color: "Multicolor" },
    { id: 45, name: "Shirt & Shorts Clothing for Boys", price: 1199, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/f/4fa4ce1NK_AJDEZ00002682_1.jpg?rnd=20200526195200&tr=w-1080", desc: "Cool Comfort: Boys' Shirt & Shorts Combos.", rating: 4.9, category: "Kids", brand: "AJ Dezines", color: "Black" },
    { id: 46, name: "Boys Cotton Spread Collar Shacket", price: 899, image: "https://assets.myntassets.com/w_412,q_50,dpr_2,fl_progressive/v1/assets/images/32720528/2025/3/6/7653a990-fd15-4f4b-8fb2-cc3f23adb9501741250182033-TALES--STORIES-Boys-Cotton-Spread-Collar-Shacket-67217412501-1.jpg", desc: "Classic Khaki & White: A Young Gentleman's Style.", rating: 4.9, category: "Kids", brand: "AJ Dezines", color: "Beige" },
    { id: 47, name: "boys printed t-shirt & jeans with jacket", price: 1099, image: "https://img0.junaroad.com/uiproducts/21560595/zoom_0-1731947962.jpg", desc: "Effortlessly Cool: Grey Denim Duo for Boys.", rating: 4.9, category: "Kids", brand: "Limeroad", color: "Grey" },
    { id: 48, name: "Young Boy Solid Textured Short Sleeve Shirt And Shorts Two-Piece Set ||Shirt And PANT FOR BOYS ", price: 599, image: "https://m.media-amazon.com/images/I/61nQs8J6igL._SY879_.jpg", desc: "Pleated Perfection: Comfy Brown Co-ord Set.", rating: 4.9, category: "Kids", brand: "Limeroad", color: "Brown" },
    { id: 49, name: "Woven Sherwani", price: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwS69CnMw5yXmI-e26e1d0wTUMPCqKV9mzyH6yc7bmvLa6gqIJ81sCNQ9GMRutmUERCA&usqp=CAU", desc: "Royalty in Black & Gold: A Young Prince's Ensemble.", rating: 4.9, category: "Kids", brand: "Pantaloons", color: "Black" },
    { id: 50, name: "Boys Festive & Party Sherwani and Churidar Set ", price: 799, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-ethnic-set/n/q/t/7-8-years-pkj-444-hasibul-fashion-original-imagqgjbghkqxzqz.jpeg?q=20&crop=false", desc: "Two Thumbs Up for This Blue Ethnic Charm!", rating: 4.9, category: "Kids", brand: "Limeroad", color: "Blue" },
    { id: 51, name: "Silk Blend Woven Full Sleeves Solid Sherwani & Pant With Chevron Embroidered Jacket & Necklace Set", price: 1999, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/MAY/19/ljz9lEvF_438d3dfeb6c048bdbaf9a047626596aa.jpg", desc: "Pink Paisley Panache: Party-Ready for Young Gents.", rating: 4.9, category: "Kids", brand: "Pantaloons", color: "Pink" },
    { id: 52, name: "2-Pc Floral Kurta Set", price: 1299, image: "https://m.media-amazon.com/images/I/51I+3vFL-HL._SY679_.jpg", desc: "Golden Motifs on Green: A Modern Take on Tradition.", rating: 4.9, category: "Kids", brand: "Pantaloons", color: "Green" },

    //SHOES

    { id: 53, name: "Velcro Walking Shoes For Boys ", price: 499, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-kids-shoe/q/4/l/4-greco-white-pu-pine-original-imah29mztqtjh4hj.jpeg?q=20&crop=false", desc: "Ready to Run: Dynamic Kicks for Little Feet.", rating: 4.9, category: "Shoes", brand: "Bata", color: "White" },
    { id: 54, name: "Spiderman Velcro Casual Shoes For Boys & Girls", price: 599, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-shoe/w/q/l/8c-spider-orng-znsroyal-original-imah534hjbdggmjv.jpeg?q=90&crop=false", desc: "Unleash Your Inner Hero: Spiderman Light-Up Kicks!", rating: 4.9, category: "Shoes", brand: "Bata", color: "Orange" },
    { id: 55, name: "KOBURG Unisex Kids Sandals", price: 799, image: "https://m.media-amazon.com/images/I/71LMKdBBQpL._SY695_.jpg", desc: "Ready for Fun: Two-Tone Kids' Sandals.", rating: 4.9, category: "Shoes", brand: "Bata", color: "Grey" },
    { id: 56, name: "Boys Colourblocked Round Toe Memory Foam Sneakers", price: 799, image: "https://m.media-amazon.com/images/I/71sR-9h3AKL._AC_UY1000_.jpg", desc: "Walk with Style: The New Casual Sneaker.", rating: 4.9, category: "Shoes", brand: "Adidas", color: "White" },
    { id: 57, name: "Girls PU Slip-On Sneakers", price: 799, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/28/xvZrUU4w_1987042a960545989839db7da2466c11.jpg", desc: "Sparkle and Stride: Unicorn Slip-Ons for Little Princesses.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Pink" },
    { id: 58, name: "Stylish Fashionable Velcro Ballerinas/Belly Sandal/Booties for Girls", price: 799, image: "https://m.media-amazon.com/images/I/51MreUEOjZL._SY695_.jpg", desc: "Twinkle Toes: Glitter Mary Janes for Girls.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Pink" },
    { id: 59, name: "Velcro Strappy Sandals For Girls ", price: 499, image: "https://images.meesho.com/images/products/269824862/llbas_512.webp", desc: "Fancy Floral Wedges for Little Fashionistas.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Pink" },
    { id: 60, name: "Slipper for Women Men Flip Flop Double Buckle Pillow Sliders EVA Flat Sandals for Girls Boys Soft Open Toe Non Slip Platform Bedroom Outdoor Slippers", price: 799, image: "https://m.media-amazon.com/images/I/41JrgVQTfgL.jpg", desc: "Bubblegum Bliss: Chunky Pink Sandals for Comfort and Style.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Pink" },
    { id: 61, name: "Sunflower Ladies Slipper for Unique collecion for Woman", price: 599, image: "https://m.media-amazon.com/images/I/71oOIOjv0rL._SX695_.jpg", desc: "Golden Hour Glow: Sunflower Sandals for Sunny Days.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Yellow" },
    { id: 62, name: "COMFORT Clogs Footwear", price: 599, image: "https://m.media-amazon.com/images/I/616O3xPoFIL._SY695_.jpg", desc: "Fun on Your Feet: Playful Clogs with Charms!", rating: 4.9, category: "Shoes", brand: "Bata", color: "White" },
    { id: 63, name: "Extra Soft Diabetic & Orthopedic Slippers/Doctor Sole Chappal & Comfortable LightWeight Foortwear For Men's", price: 1299, image: "https://m.media-amazon.com/images/I/71t4CMpNwbL._SY695_.jpg", desc: "Step into Comfort: Orthopedic Slippers for Happy Feet.", rating: 4.9, category: "Shoes", brand: "Adidas", color: "Brown" },
    { id: 64, name: "Men's Feather Light EVA Sole Shoe Style Comfortable Dress Sandal With Memory Cushion|Stitched Hook & Loop Sandal For Work|Evening|Festive", price: 1599, image: "https://m.media-amazon.com/images/I/51qa-KXcbAL._SY695_.jpg", desc: "Stellar Comfort: Men's Grey Dress Sandals.", rating: 4.9, category: "Shoes", brand: "Bata", color: "Grey" },
    { id: 65, name: "Women Heels Sandal ", price: 499, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/j/u/u/3-a-27-gry-3-3-0-zuliet-collection-grey-original-imahbagvhzfn9h2z.jpeg?q=20&crop=false", desc: "Graceful Steps: Embellished Heels for Every Occasion.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Grey" },
    { id: 66, name: "Comfortable Tan Doctor Sole Sandals for Girls", price: 999, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/31587431/2024/11/19/e802c26e-25aa-4972-b134-1441ffb9c7e61731998866031-Shoetopia-Women-Buckled-Platform-Heel-Sandals-81173199886542-1.jpg", desc: "Everyday Comfort: Buckled Brown Sandals.", rating: 4.9, category: "Shoes", brand: "Bata", color: "Brown" },
    { id: 67, name: "Floral Embroidered Ethnic Wedge Heel Slip-On Sandals for Women", price: 999, image: "https://m.media-amazon.com/images/I/517JBosRNPL._SY695_.jpg", desc: "Intricate Blooms: Embroidered Wedges for Special Occasions.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Brown" },
    { id: 68, name: "Women's El-gv-wn-50 Sandal", price: 1699, image: "https://m.media-amazon.com/images/I/51J1wAzZJZL._SY695_.jpg", desc: "Strut in Style: Elevate Your Look with Black Platform Heels.", rating: 4.9, category: "Shoes", brand: "Bata", color: "Black" },
    { id: 69, name: "Stylish Flats Slippers For Women And Girls", price: 499, image: "https://m.media-amazon.com/images/I/41N3OMEHfsL._SY695_.jpg", desc: "Easygoing Chic: Bow Detail Flat Sandals.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Pink" },
    { id: 93, name: "DOCTOR HEALTH SUPER SOFT Women's Flip-Flops Slippers | Flip-Flops ", price: 899, image: "https://m.media-amazon.com/images/I/51osKy99duL._SY625_.jpg", desc: "Cloud-Like Comfort: Super Soft Flip-Flops for Happy Feet.", rating: 4.9, category: "Shoes", brand: "Adidas", color: "White" },
    { id: 94, name: "Women Stylish Trending and comfort Fancy Flat Fashion sandal", price: 499, image: "https://m.media-amazon.com/images/I/61MajYBZfRL._SY695_.jpg", desc: "Step into Summer with Floral Charm Sandals!", rating: 4.9, category: "Shoes", brand: "Mochi", color: "White" },
    { id: 95, name: "Women Casual Shoes", price: 799, image: "https://m.media-amazon.com/images/I/61BOt894PEL._SY695_.jpg", desc: "Candy Kicks: Chunky Trainers in Pastel Hues.", rating: 4.9, category: "Shoes", brand: "Adidas", color: "White" },
    { id: 96, name: "DOCTOR HEALTH SUPER Knitted Comfortable Stylish Classy Ballerina", price: 899, image: "https://m.media-amazon.com/images/I/81A-dVeVGHL._SY695_.jpg", desc: "Cloud-like Comfort: Knitted Ballerinas for Everyday Elegance.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Brown" },
    { id: 97, name: "Women's Open Toe Flats", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSl_gbNxpSmbsCTfxtDvd3SzSUrMfW8myK_vmzOZazoo3XCz9B1n8rxdz5BN8SIYSUy0RvFs4eyCW4IVpkaLJiGY0d5t4H6MQPyMQHq8mbp", desc: "Classic Comfort, Golden Touch: Arizona Sandals.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Black" },
    { id: 98, name: "Beige Woven Design Open Toe Flats", price: 699, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQncUQH18OnJJJZTUhxi1tIqt-8mGPP86CPvRf6H60ufDR_8TGZ1m2bkN88nxP9X1pX-bDwl0uXubmRMvU2RmyLZZbq4VztQ-CD1xVHX_E", desc: "Contemporary Chic: White Woven Flats with Black Trim.", rating: 4.9, category: "Shoes", brand: "Mochi", color: "Beige" },
    { id: 109, name: "Women's Black Slip On Sneakers", price: 6999, image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/e/1e45fca5596054_1.jpg?rnd=20200526195200&tr=w-1080", desc: "Black Boots : Hush Puppies", rating: 4.9, category: "Shoes", brand: "Hush Puppies", color: "Black" },

  ];

  const PRODUCTS_PER_PAGE = 8;
  let currentProductPage = 1;


  // For auth messages if script.js loads after main.js (optional, depends on your auth setup)
  let authModal, authMessageDisplay;
  // --- State ---
  let currentCategory = "All";
  let currentBrand = "All";
  let currentColor = "All";
  let currentMaxPrice = 100000;
  let currentSearch = "";
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  let users = JSON.parse(localStorage.getItem('users')) || {};
  let currentUser = localStorage.getItem('currentUser') || null;

  // --- DOM ---
  const showMoreBtn = document.getElementById('showMoreBtn');
  const productGrid = document.getElementById('productGrid');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const allProductsSection = document.getElementById('allProductsSection');
  const allProductsGrid = document.getElementById('allProductsGrid');
  const backToMainBtn = document.getElementById('backToMainBtn');
  const goToCartFromBuyNow = document.getElementById('goToCartFromBuyNow');
  const buyNowModal = document.getElementById('buyNowModal');
  // Cart overlay elements
  const cartPage = document.getElementById('cartPage');
  const mainContent = document.getElementById('mainContent');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSummary = document.getElementById('cartSummary');
  const cartEmptyMsg = document.getElementById('cartEmptyMsg');
  const closeCartPage = document.getElementById('closeCartPage');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const emptyContinueShoppingBtn = document.getElementById('emptyContinueShoppingBtn');
  const proceedToBuyBtn = document.getElementById('proceedToBuyBtn');
  const proceedModal = new bootstrap.Modal(document.getElementById('proceedModal'));
  const closeProceedModal = document.getElementById('closeProceedModal');
  const welcomeMessage = document.getElementById('welcomeMessage');

  function handleProductGridClick(e) {
    // Buy Now
    if (e.target.closest('.buy-now-btn')) {
      const id = Number(e.target.closest('.buy-now-btn').dataset.id);
      const product = products.find(p => p.id === id);
      if (!product) return;
      document.getElementById('buyNowModalBody').innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="img-fluid rounded mb-3" style="max-height:140px;">
      <h5 class="mb-2">${product.name}</h5>
      <p class="mb-2 text-accent fw-bold">₹${product.price}</p>
      <p class="mb-0">${product.desc}</p>
      <div class="mt-3">
        <span class="badge bg-success">Special Offer: Free shipping on your first order!</span>
      </div>
    `;
      new bootstrap.Modal(document.getElementById('buyNowModal')).show();
      return;
    }
    // Add to Cart
    if (e.target.closest('.add-to-cart-btn')) {
      const id = Number(e.target.closest('.add-to-cart-btn').dataset.id);
      addToCart(id, 1);
      showToast('Added to cart!');
      return;
    }

  }

  productGrid.addEventListener('click', handleProductGridClick);
  if (allProductsGrid) {
    allProductsGrid.addEventListener('click', handleProductGridClick);
  }

  productGrid.addEventListener('click', handleProductGridClick);
  if (allProductsGrid) allProductsGrid.addEventListener('click', handleProductGridClick);

  // --- Render paginated products for homepage ---
  function renderProducts(page = 1) {
    productGrid.innerHTML = '';
    let filtered = products.filter(p =>
      (currentCategory === "All" || p.category === currentCategory) &&
      (currentBrand === "All" || p.brand === currentBrand) &&
      (currentColor === "All" || p.color === currentColor) &&
      p.price <= currentMaxPrice &&
      (p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.desc.toLowerCase().includes(currentSearch.toLowerCase()))
    );

    const total = filtered.length;
    const end = page * PRODUCTS_PER_PAGE;
    const show = filtered.slice(0, end);

    if (show.length === 0) {
      productGrid.innerHTML = `<div class="col-12 text-center text-accent py-4">No products found.</div>`;
      showMoreBtn.style.display = "none";
      return;
    }

    show.forEach(product => {
      const isWish = wishlist.includes(product.id);
      const card = document.createElement('div');
      card.className = 'col-sm-6 col-md-4 col-lg-3';
      card.innerHTML = `
      <div class="card product-card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-accent fw-bold mb-1">₹${product.price}</p>
          <button class="btn btn-accent buy-now-btn w-100 mb-2" data-id="${product.id}">Buy Now</button>
          <button class="btn btn-outline-accent add-to-cart-btn w-100 mb-2" data-id="${product.id}">
            <i class="fa fa-cart-plus me-1"></i>Add to Cart
          </button>
        </div>
      </div>
    `;
      productGrid.appendChild(card);
    });

    showMoreBtn.style.display = (end < total) ? "inline-block" : "none";
  }

  // --- Render all products for full-page mode ---
  function renderAllProducts() {
    allProductsGrid.innerHTML = '';
    let filtered = products.filter(p =>
      (currentCategory === "All" || p.category === currentCategory) &&
      (currentBrand === "All" || p.brand === currentBrand) &&
      (currentColor === "All" || p.color === currentColor) &&
      p.price <= currentMaxPrice &&
      (p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.desc.toLowerCase().includes(currentSearch.toLowerCase()))
    );
    if (filtered.length === 0) {
      allProductsGrid.innerHTML = `<div class="col-12 text-center text-accent py-4">No products found.</div>`;
      return;
    }
    filtered.forEach(product => {
      const isWish = wishlist.includes(product.id);
      const card = document.createElement('div');
      card.className = 'col-sm-6 col-md-4 col-lg-3';
      card.innerHTML = `
      <div class="card product-card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-accent fw-bold mb-1">₹${product.price}</p>
          <button class="btn btn-accent buy-now-btn w-100 mb-2" data-id="${product.id}">Buy Now</button>
          <button class="btn btn-outline-accent add-to-cart-btn w-100 mb-2" data-id="${product.id}">
            <i class="fa fa-cart-plus me-1"></i>Add to Cart
          </button>
        </div>
      </div>
    `;
      allProductsGrid.appendChild(card);
    });

  }

  // --- Show More button: switch to all-products mode ---
  showMoreBtn.onclick = function () {
    mainContent.classList.add('d-none');
    allProductsSection.classList.remove('d-none');
    renderAllProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Back to Main Page button: restore main sections ---
  backToMainBtn.onclick = function () {
    allProductsSection.classList.add('d-none');
    mainContent.classList.remove('d-none');
    currentProductPage = 1;
    renderProducts(currentProductPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Filtering event listeners: support both modes ---
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.onclick = function () {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      currentProductPage = 1;
      if (mainContent.classList.contains('d-none')) {
        renderAllProducts();
      } else {
        renderProducts(currentProductPage);
      }
    }
  });
  document.getElementById('brandFilter').onchange = function () {
    currentBrand = this.value;
    currentProductPage = 1;
    if (mainContent.classList.contains('d-none')) {
      renderAllProducts();
    } else {
      renderProducts(currentProductPage);
    }
  };
  document.getElementById('colorFilter').onchange = function () {
    currentColor = this.value;
    currentProductPage = 1;
    if (mainContent.classList.contains('d-none')) {
      renderAllProducts();
    } else {
      renderProducts(currentProductPage);
    }
  };
  document.getElementById('priceFilter').oninput = function () {
    currentMaxPrice = parseInt(this.value);
    document.getElementById('priceFilterLabel').textContent = `₹${currentMaxPrice}`;
    currentProductPage = 1;
    if (mainContent.classList.contains('d-none')) {
      renderAllProducts();
    } else {
      renderProducts(currentProductPage);
    }
  };
  document.getElementById('searchForm').onsubmit = function (e) {
    e.preventDefault();
    currentSearch = document.getElementById('searchInput').value;
    currentProductPage = 1;
    if (mainContent.classList.contains('d-none')) {
      renderAllProducts();
    } else {
      renderProducts(currentProductPage);
    }
  };
  document.getElementById('searchInput').oninput = function () {
    currentSearch = this.value;
    currentProductPage = 1;
    if (mainContent.classList.contains('d-none')) {
      renderAllProducts();
    } else {
      renderProducts(currentProductPage);
    }
  };

  // --- Initial render ---
  renderProducts(currentProductPage);

  // --- Cart Logic ---
  function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
  function updateCartCount() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  }
  function addToCart(id, qty = 1) {
    const found = cart.find(item => item.id === id);
    if (found) found.qty += qty;
    else cart.push({ id, qty });
    saveCart();
    updateCartCount();
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
  }
  function setCartQty(id, qty) {
    const found = cart.find(item => item.id === id);
    if (found) found.qty = qty;
    saveCart();
    updateCartCount();
  }
  updateCartCount();

  // --- Cart Overlay ---
  cartBtn.onclick = showCartPage;
  if (closeCartPage) closeCartPage.onclick = hideCartPage;
  if (continueShoppingBtn) continueShoppingBtn.onclick = hideCartPage;
  if (emptyContinueShoppingBtn) emptyContinueShoppingBtn.onclick = hideCartPage;
  if (closeProceedModal) closeProceedModal.onclick = hideCartPage;
  if (proceedToBuyBtn) proceedToBuyBtn.onclick = function () {
    cart = [];
    saveCart();
    updateCartCount();
    renderCartPage();
    proceedModal.show();

  };

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cartCount');
    let count = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.textContent = count;
  }


  function showCartPage() {
    document.getElementById('mainContent').classList.add('d-none');
    document.getElementById('cartPage').classList.remove('d-none');
    renderCartPage();
  }


  if (goToCartFromBuyNow) {
    goToCartFromBuyNow.onclick = function () {
      // Close the Buy Now modal
      const modal = bootstrap.Modal.getInstance(buyNowModal);
      if (modal) modal.hide();
      // Open the cart overlay/page
      showCartPage();
    };
  }

  function hideCartPage() {
    document.getElementById('mainContent').classList.remove('d-none');
    document.getElementById('cartPage').classList.add('d-none');
  }
  function renderCartPage() {
    const cartSummary = document.getElementById('cartSummary');
    const cartEmptyMsg = document.getElementById('cartEmptyMsg');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    if (!cart || cart.length === 0) {
      cartSummary.classList.add('d-none');
      cartEmptyMsg.classList.remove('d-none');
      return;
    }
    cartSummary.classList.remove('d-none');
    cartEmptyMsg.classList.add('d-none');
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      subtotal += product.price * item.qty;
      const div = document.createElement('div');
      div.className = 'cart-item d-flex align-items-center';
      div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="flex-grow-1">
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-price">₹${product.price} x 
          <input type="number" min="1" class="cart-item-qty" value="${item.qty}" data-id="${item.id}">
          = <span class="text-accent fw-bold">₹${product.price * item.qty}</span>
        </div>
      </div>
      <button class="cart-item-remove ms-2" data-id="${item.id}" title="Remove"><i class="fa fa-trash"></i></button>
    `;
      cartItemsContainer.appendChild(div);
    });
    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
  }

  if (cartItemsContainer) {
    cartItemsContainer.addEventListener('input', function (e) {
      if (e.target.classList.contains('cart-item-qty')) {
        const id = Number(e.target.dataset.id);
        let qty = Number(e.target.value);
        if (qty < 1 || isNaN(qty)) qty = 1;
        setCartQty(id, qty);
        renderCartPage();
      }
    });
    cartItemsContainer.addEventListener('click', function (e) {
      if (e.target.closest('.cart-item-remove')) {
        const id = Number(e.target.closest('.cart-item-remove').dataset.id);
        removeFromCart(id);
        renderCartPage();
      }
    });
  }

  // --- Show/hide main content and welcome message after login/logout ---
  function showWelcome(username) {
    if (welcomeMessage) {
      welcomeMessage.textContent = `Welcome, ${username}!`;
      welcomeMessage.style.display = 'block';
    }
    if (mainContent) {
      mainContent.style.display = 'block';
    }
  }
  function hideWelcome() {
    if (welcomeMessage) welcomeMessage.style.display = 'none';
    if (mainContent) mainContent.style.display = 'none';
  }

  // --- On page load, check if user is logged in ---
  const user = getCurrentUser && getCurrentUser();
  if (user) {
    showWelcome(user);
  } else {
    hideWelcome();
  }


  // --- Toast Message ---
  function showToast(msg) {
    let toast = document.getElementById('customToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'customToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '30px';
      toast.style.right = '30px';
      toast.style.background = '#232526';
      toast.style.color = '#00e676';
      toast.style.padding = '14px 28px';
      toast.style.borderRadius = '8px';
      toast.style.boxShadow = '0 2px 12px #00e67633';
      toast.style.fontWeight = 'bold';
      toast.style.zIndex = 9999;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = 'block';
    toast.style.opacity = 1;
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => toast.style.display = 'none', 400);
    }, 1800);
  }

});
