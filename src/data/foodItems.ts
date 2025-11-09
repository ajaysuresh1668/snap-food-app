// Import all food images
import paneerButterMasala from "@/assets/food/paneer-butter-masala.jpg";
import vegBiryani from "@/assets/food/veg-biryani.jpg";
import dalTadka from "@/assets/food/dal-tadka.jpg";
import palakPaneer from "@/assets/food/palak-paneer.jpg";
import choleBhature from "@/assets/food/chole-bhature.jpg";
import alooParatha from "@/assets/food/aloo-paratha.jpg";
import vegFriedRice from "@/assets/food/veg-fried-rice.jpg";
import paneerTikka from "@/assets/food/paneer-tikka.jpg";
import vegSandwich from "@/assets/food/veg-sandwich.jpg";
import masalaDosa from "@/assets/food/masala-dosa.jpg";
import idliSambar from "@/assets/food/idli-sambar.jpg";
import chickenBiryani from "@/assets/food/chicken-biryani.jpg";
import butterChicken from "@/assets/food/butter-chicken.jpg";
import chickenFriedRice from "@/assets/food/chicken-fried-rice.jpg";
import chickenTikka from "@/assets/food/chicken-tikka.jpg";
import chicken65 from "@/assets/food/chicken-65.jpg";
import samosa from "@/assets/food/samosa.jpg";
import vadaPav from "@/assets/food/vada-pav.jpg";
import pavBhaji from "@/assets/food/pav-bhaji.jpg";
import frenchFries from "@/assets/food/french-fries.jpg";
import pakora from "@/assets/food/pakora.jpg";
import paneerRoll from "@/assets/food/paneer-roll.jpg";
import burger from "@/assets/food/burger.jpg";
import pizza from "@/assets/food/pizza.jpg";
import springRoll from "@/assets/food/spring-roll.jpg";
import thali from "@/assets/food/thali.jpg";
import coffee from "@/assets/food/coffee.jpg";
import chai from "@/assets/food/chai.jpg";
import mangoLassi from "@/assets/food/mango-lassi.jpg";
import gulabJamun from "@/assets/food/gulab-jamun.jpg";
import pasta from "@/assets/food/pasta.jpg";
import noodles from "@/assets/food/noodles.jpg";

export interface FoodItem {
  id: string;
  name: string;
  category: "veg" | "non-veg" | "snacks" | "combo" | "offers" | "beverages" | "desserts";
  price: number;
  image: string;
  available: boolean;
  description?: string;
  isOffer?: boolean;
  originalPrice?: number;
}

export const foodItems: FoodItem[] = [
  // Veg Items
  { id: "v1", name: "Paneer Butter Masala", category: "veg", price: 80, image: paneerButterMasala, available: true, description: "Rich and creamy paneer curry" },
  { id: "v2", name: "Veg Biryani", category: "veg", price: 60, image: vegBiryani, available: true, description: "Aromatic rice with mixed vegetables" },
  { id: "v3", name: "Dal Tadka", category: "veg", price: 40, image: dalTadka, available: true, description: "Yellow lentils with spices" },
  { id: "v4", name: "Palak Paneer", category: "veg", price: 75, image: palakPaneer, available: true, description: "Spinach curry with cottage cheese" },
  { id: "v5", name: "Veg Pulao", category: "veg", price: 50, image: vegBiryani, available: true, description: "Flavored rice with vegetables" },
  { id: "v6", name: "Chole Bhature", category: "veg", price: 55, image: choleBhature, available: true, description: "Spicy chickpeas with fried bread" },
  { id: "v7", name: "Aloo Paratha", category: "veg", price: 35, image: alooParatha, available: true, description: "Potato stuffed flatbread" },
  { id: "v8", name: "Veg Fried Rice", category: "veg", price: 55, image: vegFriedRice, available: true, description: "Indo-Chinese fried rice" },
  { id: "v9", name: "Paneer Tikka", category: "veg", price: 90, image: paneerTikka, available: true, description: "Grilled cottage cheese cubes" },
  { id: "v10", name: "Veg Sandwich", category: "veg", price: 30, image: vegSandwich, available: true, description: "Fresh vegetable sandwich" },
  { id: "v11", name: "Masala Dosa", category: "veg", price: 45, image: masalaDosa, available: true, description: "South Indian crispy crepe" },
  { id: "v12", name: "Idli Sambar", category: "veg", price: 35, image: idliSambar, available: true, description: "Steamed rice cakes with lentil curry" },
  { id: "v13", name: "Veg Noodles", category: "veg", price: 50, image: noodles, available: true, description: "Hakka style vegetable noodles" },
  { id: "v14", name: "Paneer Pulao", category: "veg", price: 70, image: vegBiryani, available: true, description: "Paneer rice with aromatic spices" },
  { id: "v15", name: "Rajma Rice", category: "veg", price: 55, image: dalTadka, available: true, description: "Red kidney beans with rice" },

  // Non-Veg Items
  { id: "n1", name: "Chicken Biryani", category: "non-veg", price: 100, image: chickenBiryani, available: true, description: "Flavorful rice with tender chicken" },
  { id: "n2", name: "Butter Chicken", category: "non-veg", price: 110, image: butterChicken, available: true, description: "Creamy tomato-based chicken curry" },
  { id: "n3", name: "Chicken Fried Rice", category: "non-veg", price: 75, image: chickenFriedRice, available: true, description: "Indo-Chinese rice with chicken" },
  { id: "n4", name: "Fish Fry", category: "non-veg", price: 120, image: chickenTikka, available: true, description: "Crispy fried fish" },
  { id: "n5", name: "Egg Curry", category: "non-veg", price: 60, image: butterChicken, available: true, description: "Boiled eggs in spicy gravy" },
  { id: "n6", name: "Chicken Tikka", category: "non-veg", price: 130, image: chickenTikka, available: true, description: "Grilled marinated chicken" },
  { id: "n7", name: "Mutton Curry", category: "non-veg", price: 150, image: butterChicken, available: true, description: "Tender mutton in rich gravy" },
  { id: "n8", name: "Chicken 65", category: "non-veg", price: 95, image: chicken65, available: true, description: "Spicy fried chicken chunks" },
  { id: "n9", name: "Prawn Curry", category: "non-veg", price: 140, image: butterChicken, available: true, description: "Prawns in coconut gravy" },
  { id: "n10", name: "Egg Biryani", category: "non-veg", price: 70, image: chickenBiryani, available: true, description: "Biryani with boiled eggs" },
  { id: "n11", name: "Chicken Noodles", category: "non-veg", price: 80, image: noodles, available: true, description: "Hakka noodles with chicken" },
  { id: "n12", name: "Chicken Curry", category: "non-veg", price: 105, image: butterChicken, available: true, description: "Traditional chicken curry" },
  { id: "n13", name: "Egg Fried Rice", category: "non-veg", price: 65, image: chickenFriedRice, available: true, description: "Fried rice with scrambled eggs" },

  // Snacks
  { id: "s1", name: "Samosa", category: "snacks", price: 15, image: samosa, available: true, description: "Crispy triangular pastry" },
  { id: "s2", name: "Vada Pav", category: "snacks", price: 20, image: vadaPav, available: true, description: "Spicy potato fritter in bun" },
  { id: "s3", name: "Pav Bhaji", category: "snacks", price: 50, image: pavBhaji, available: true, description: "Spicy vegetable mash with bread" },
  { id: "s4", name: "Spring Roll", category: "snacks", price: 35, image: springRoll, available: true, description: "Crispy vegetable roll" },
  { id: "s5", name: "French Fries", category: "snacks", price: 40, image: frenchFries, available: true, description: "Crispy golden fries" },
  { id: "s6", name: "Pakora", category: "snacks", price: 25, image: pakora, available: true, description: "Mixed vegetable fritters" },
  { id: "s7", name: "Paneer Roll", category: "snacks", price: 45, image: paneerRoll, available: true, description: "Paneer wrapped in flatbread" },
  { id: "s8", name: "Cutlet", category: "snacks", price: 20, image: pakora, available: true, description: "Spiced potato patty" },
  { id: "s9", name: "Bread Pakora", category: "snacks", price: 25, image: pakora, available: true, description: "Fried bread with filling" },
  { id: "s10", name: "Veg Puff", category: "snacks", price: 15, image: samosa, available: true, description: "Flaky pastry with veg filling" },
  { id: "s11", name: "Burger", category: "snacks", price: 50, image: burger, available: true, description: "Veg/Chicken burger" },
  { id: "s12", name: "Pizza Slice", category: "snacks", price: 40, image: pizza, available: true, description: "Cheesy pizza slice" },
  { id: "s13", name: "Onion Rings", category: "snacks", price: 35, image: pakora, available: true, description: "Crispy fried onion rings" },
  { id: "s14", name: "Chicken Roll", category: "snacks", price: 55, image: paneerRoll, available: true, description: "Chicken wrapped in flatbread" },
  { id: "s15", name: "Cheese Balls", category: "snacks", price: 40, image: pakora, available: true, description: "Deep fried cheese balls" },

  // Combos
  { id: "c1", name: "Rice + Dal + Sabzi", category: "combo", price: 70, image: thali, available: true, description: "Complete meal combo" },
  { id: "c2", name: "Roti + Sabzi + Dal", category: "combo", price: 65, image: thali, available: true, description: "Traditional thali" },
  { id: "c3", name: "Biryani + Raita", category: "combo", price: 85, image: chickenBiryani, available: true, description: "Biryani with yogurt" },
  { id: "c4", name: "Sandwich + Fries", category: "combo", price: 60, image: vegSandwich, available: true, description: "Snack combo" },
  { id: "c5", name: "Dosa + Coffee", category: "combo", price: 55, image: masalaDosa, available: true, description: "South Indian breakfast" },
  { id: "c6", name: "Paratha + Curd", category: "combo", price: 45, image: alooParatha, available: true, description: "North Indian breakfast" },
  { id: "c7", name: "Chicken Rice + Coke", category: "combo", price: 100, image: chickenBiryani, available: true, description: "Non-veg meal combo" },
  { id: "c8", name: "Thali Special", category: "combo", price: 90, image: thali, available: true, description: "Full course meal" },
  { id: "c9", name: "Pasta + Garlic Bread", category: "combo", price: 85, image: pasta, available: true, description: "Italian combo" },
  { id: "c10", name: "Burger + Fries + Coke", category: "combo", price: 95, image: burger, available: true, description: "Classic fast food combo" },

  // Beverages
  { id: "b1", name: "Coffee", category: "beverages", price: 20, image: coffee, available: true, description: "Hot filter coffee" },
  { id: "b2", name: "Chai", category: "beverages", price: 15, image: chai, available: true, description: "Indian masala tea" },
  { id: "b3", name: "Mango Lassi", category: "beverages", price: 35, image: mangoLassi, available: true, description: "Creamy mango yogurt drink" },
  { id: "b4", name: "Cold Coffee", category: "beverages", price: 40, image: coffee, available: true, description: "Iced coffee with ice cream" },
  { id: "b5", name: "Fresh Lime Soda", category: "beverages", price: 25, image: mangoLassi, available: true, description: "Refreshing lime drink" },
  { id: "b6", name: "Buttermilk", category: "beverages", price: 20, image: mangoLassi, available: true, description: "Spiced yogurt drink" },
  { id: "b7", name: "Soft Drink", category: "beverages", price: 20, image: mangoLassi, available: true, description: "Coke/Pepsi/Sprite" },
  { id: "b8", name: "Mineral Water", category: "beverages", price: 15, image: mangoLassi, available: true, description: "Bottled water" },

  // Desserts
  { id: "d1", name: "Gulab Jamun", category: "desserts", price: 30, image: gulabJamun, available: true, description: "Sweet milk solid balls" },
  { id: "d2", name: "Ice Cream", category: "desserts", price: 35, image: gulabJamun, available: true, description: "Vanilla/Chocolate/Strawberry" },
  { id: "d3", name: "Brownie", category: "desserts", price: 40, image: gulabJamun, available: true, description: "Chocolate brownie with ice cream" },
  { id: "d4", name: "Kheer", category: "desserts", price: 30, image: gulabJamun, available: true, description: "Rice pudding dessert" },

  // Offers
  { id: "o1", name: "Student Special Lunch", category: "offers", price: 50, originalPrice: 70, image: thali, available: true, description: "Affordable full meal", isOffer: true },
  { id: "o2", name: "Morning Breakfast Deal", category: "offers", price: 30, originalPrice: 45, image: idliSambar, available: true, description: "Breakfast combo", isOffer: true },
  { id: "o3", name: "Evening Snack Combo", category: "offers", price: 35, originalPrice: 50, image: samosa, available: true, description: "Tea + snacks", isOffer: true },
  { id: "o4", name: "Weekend Special Biryani", category: "offers", price: 80, originalPrice: 100, image: chickenBiryani, available: true, description: "Special biryani", isOffer: true },
  { id: "o5", name: "2+1 Samosa Offer", category: "offers", price: 30, originalPrice: 45, image: samosa, available: true, description: "Buy 2 get 1 free", isOffer: true },
  { id: "o6", name: "Combo for Two", category: "offers", price: 120, originalPrice: 150, image: thali, available: true, description: "Meal for 2 people", isOffer: true },
];
