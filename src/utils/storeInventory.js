import {
  KitchenProduct,
  GardenProduct,
  TechProduct,
  ClothingProduct,
  BeautyProduct,
  GroceryProduct,
} from "./ProductClass";

// array of products
const products = [
  new KitchenProduct(
    "Toaster",
    29.99,
    "Will only midly char your bread",
    "https://media.royaldesign.co.uk/6/mareld-nod-7?w=800&quality=80"
  ),
  new KitchenProduct(
    "Kettle",
    11.5,
    "This kettle will last a lifetime!",
    "https://m.media-amazon.com/images/I/61kgG2hAusL.jpg"
  ),
  new KitchenProduct(
    "Microwave",
    32.99,
    "Superheat your food, the lazy way.",
    "https://static1.squarespace.com/static/5e4fd2afdc83ee789018fc14/5e95d67ee8579f209b5e9283/5ea03d38bc13e62e02a33fb9/1587559812191/?format=1500w"
  ),
  new KitchenProduct(
    "Air fryer",
    70.0,
    "Fry your food with the magic of air.",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1682530691-718uTMDRFL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
  ),

  new GardenProduct(
    "Plastic chair",
    5.99,
    "Slightly comfy and guaranteed to break!",
    "https://m.media-amazon.com/images/I/51iHV5IyaQL.jpg"
  ),
  new GardenProduct(
    "Gnome",
    100.0,
    "A short, but effective protector of the garden.",
    "https://m.media-amazon.com/images/I/71CsleMfE0L.jpg"
  ),
  new GardenProduct(
    "Barbecue",
    82.5,
    "Perfect for a summer gathering!",
    "https://as1.ftcdn.net/v2/jpg/08/13/68/90/1000_F_813689020_3N58wKGUqJ2r0KkxBOwS1Ej6LZEFhDMR.jpg"
  ),
  new GardenProduct(
    "Hosepipe",
    11.99,
    "For making dry things less dry.",
    "https://m.media-amazon.com/images/I/71wxm34bQaL.jpg"
  ),
  new TechProduct(
    "Flat screen TV",
    1199.99,
    "Eye candy of the tastiest sort.",
    "https://m.media-amazon.com/images/I/81pieXC63IL.jpg"
  ),

  new TechProduct(
    "SmartPhone",
    750.0,
    "Who said your attention span was too short?",
    "https://img.freepik.com/premium-vector/realistic-phone-isolated-white-background-smartphone-template-your-mockup_7993-6350.jpg"
  ),
  new TechProduct(
    "Wireless speaker",
    89.5,
    "Great for blasting on the bus!",
    "https://www.beaconelectrical.co.uk/image_resize/crop/mw1500/mh750/products/7761/sonsrsult70beu8_main.jpg"
  ),
  new TechProduct(
    "Headphones",
    50.99,
    "For a considerate commuter.",
    "https://m.media-amazon.com/images/I/71St1R5DFGL.jpg"
  ),

  new ClothingProduct(
    "Tuxedo",
    84.99,
    "Look effortlessly smart, for any occasion.",
    "https://t4.ftcdn.net/jpg/11/80/59/69/360_F_1180596923_cUbghQlz8ZgdUZ5ttjH64o0ZflYSmokG.jpg"
  ),
  new ClothingProduct(
    "Beanie",
    2.5,
    "Hey, aren't you a cool little hipster!",
    "https://www.cashmerechoice.co.uk/cdn/shop/products/LomondLambswool-Clyde-Navy_600x.jpg?v=1708623546"
  ),
  new ClothingProduct(
    "socks",
    14.0,
    "Keep those piggies nice and warm.",
    "https://as1.ftcdn.net/v2/jpg/02/67/77/92/1000_F_267779236_kIMDxtL4nMTksQbU3e4MJUNnnERWveKW.jpg"
  ),
  new ClothingProduct(
    "T-shirt",
    18.99,
    "Represent your favourite band, anywhere, anytime!",
    "https://www.militarykit.com/cdn/shop/products/sport-grey-cotton-tshirt.jpg?v=1591341911"
  ),

  new BeautyProduct(
    "Lipstick",
    4.99,
    "Leave your mark on all the drinking glasses!",
    "https://sdcdn.io/mac/gb/mac_sku_M0N904_1x1_0.png?width=1440&height=1440"
  ),
  new BeautyProduct(
    "Shampoo",
    6.5,
    "Clean those luscious locks of yours.",
    "https://m.media-amazon.com/images/I/71RnvqaKDML.jpg"
  ),
  new BeautyProduct(
    "Eyeliner",
    11.99,
    "Outline those lovely peepers you've got!",
    "https://picture.drhauschka.co.uk/media/image/b3/6a/f6/3237401-liquid-eyeliner-container-01-01-420005981hL1ZozrGSVu3D.jpg"
  ),
  new BeautyProduct(
    "Moisuriser",
    5.99,
    "Hydrated skin is spotless skin!",
    "https://m.media-amazon.com/images/I/61bqyfjQwcL.jpg"
  ),

  new GroceryProduct(
    "Coffee beans",
    8.99,
    "nature's energy drink, straight from Colombia",
    "https://media.istockphoto.com/id/165942509/photo/coffee-beans-isolated-on-white.jpg?s=612x612&w=0&k=20&c=jXUyAOqECZR5nrecgKOabFn_2sG7t8XNr9EXW_Be6rM="
  ),
  new GroceryProduct(
    "Yorkshire Gold",
    5.0,
    "The only acceptable tea.",
    "https://yorkshire-tea-2016-cms.s3.amazonaws.com/blog-images/2010/09/Yorkshire-Gold-wins-2-Great-Taste-stars.jpg"
  ),
  new GroceryProduct(
    "Eggs",
    2.99,
    "By the dozen and free range!",
    "https://static.vecteezy.com/system/resources/previews/030/672/478/large_2x/of-eggs-with-no-background-with-white-back-free-photo.jpg"
  ),
  new GroceryProduct(
    "Cookies",
    4.99,
    "A favourite of that weird blue thing.",
    "https://static.vecteezy.com/system/resources/previews/030/665/837/large_2x/cookies-with-white-background-high-quality-ultra-hd-free-photo.jpg"
  ),
];

// using reduce to create a categories object that stores the Product objects as its properties.
// an initial value of {} is passed so that all products get reduced
const categories = products.reduce((accumulator, product) => {
  // if there is no property matching the category name, then:
  if (!accumulator[product.category]) {
    // set that property to an object with a products key and an empty array as its value
    accumulator[product.category] = { products: [] };
  }
  // if there is already a property matching the category name, then push the object to it
  accumulator[product.category].products.push(product);

  return accumulator;
}, {});

export const storeInventory = {
  allProducts: products,
  categories: categories,
};
