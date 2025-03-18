import {
  KitchenProduct,
  GardenProduct,
  TechProduct,
  ClothingProduct,
  BeautyProduct,
} from "./ProductClass";

export const products = [
  new KitchenProduct("Toaster", 29.99, "Will only midly char your bread"),
  new KitchenProduct("Kettle", 11.5, "This kettle will last a lifetime!"),
  new KitchenProduct("Microwave", 32.99, "Superheat your food, the lazy way."),
  new KitchenProduct("Air fryer", 70.0, "Fry your food with the magic of air."),

  new GardenProduct(
    "Plastic chair",
    5.99,
    "Slightly comfy and guaranteed to break!"
  ),
  new GardenProduct(
    "Gnome",
    100.0,
    "A short, but effective protector of the garden."
  ),
  new GardenProduct("Barbecue", 82.5, "Perfect for a summer gathering!"),
  new GardenProduct("Hosepipe", 11.99, "For making dry things less dry."),
  new TechProduct("Flat screen TV", 1199.99, "Eye candy of the tastiest sort."),

  new TechProduct(
    "SmartPhone",
    750.0,
    "Who said your attention span was too short?"
  ),
  new TechProduct("Wireless speaker", 89.5, "Great for blasting on the bus!"),
  new TechProduct("Headphones", 50.99, "For a considerate commuter."),

  new ClothingProduct(
    "Tuxedo",
    84.99,
    "Look effortlessly smart, for any occasion."
  ),
  new ClothingProduct("Beanie", 2.5, "Hey, aren't you a cool little hipster!"),
  new ClothingProduct("socks", 14.0, "Keep those piggies nice and warm."),
  new ClothingProduct(
    "T-shirt",
    18.99,
    "Represent your favourite band, anywhere, anytime!"
  ),

  new BeautyProduct(
    "Lipstick",
    4.99,
    "Leave your mark on all the drinking glasses!"
  ),
  new BeautyProduct("Shampoo", 6.5, "Clean those luscious locks of yours."),
  new BeautyProduct(
    "Eyeliner",
    11.99,
    "Outline those lovely peepers you've got!"
  ),
];
