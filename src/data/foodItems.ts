export interface FoodItem {
  id: string;
  name: string;
  category: "veg" | "non-veg" | "snacks" | "combo" | "offers";
  price: number;
  image: string;
  available: boolean;
  description?: string;
  isOffer?: boolean;
  originalPrice?: number;
}

export const foodItems: FoodItem[] = [
  // Veg Items
  { id: "v1", name: "Paneer Butter Masala", category: "veg", price: 80, image: "🧈", available: true, description: "Rich and creamy paneer curry" },
  { id: "v2", name: "Veg Biryani", category: "veg", price: 60, image: "🍚", available: true, description: "Aromatic rice with mixed vegetables" },
  { id: "v3", name: "Dal Tadka", category: "veg", price: 40, image: "🍲", available: true, description: "Yellow lentils with spices" },
  { id: "v4", name: "Palak Paneer", category: "veg", price: 75, image: "🥬", available: true, description: "Spinach curry with cottage cheese" },
  { id: "v5", name: "Veg Pulao", category: "veg", price: 50, image: "🍛", available: true, description: "Flavored rice with vegetables" },
  { id: "v6", name: "Chole Bhature", category: "veg", price: 55, image: "🫓", available: true, description: "Spicy chickpeas with fried bread" },
  { id: "v7", name: "Aloo Paratha", category: "veg", price: 35, image: "🥔", available: true, description: "Potato stuffed flatbread" },
  { id: "v8", name: "Veg Fried Rice", category: "veg", price: 55, image: "🍜", available: true, description: "Indo-Chinese fried rice" },
  { id: "v9", name: "Paneer Tikka", category: "veg", price: 90, image: "🧀", available: true, description: "Grilled cottage cheese cubes" },
  { id: "v10", name: "Veg Sandwich", category: "veg", price: 30, image: "🥪", available: true, description: "Fresh vegetable sandwich" },
  { id: "v11", name: "Masala Dosa", category: "veg", price: 45, image: "🫔", available: true, description: "South Indian crispy crepe" },
  { id: "v12", name: "Idli Sambar", category: "veg", price: 35, image: "⚪", available: true, description: "Steamed rice cakes with lentil curry" },

  // Non-Veg Items
  { id: "n1", name: "Chicken Biryani", category: "non-veg", price: 100, image: "🍗", available: true, description: "Flavorful rice with tender chicken" },
  { id: "n2", name: "Butter Chicken", category: "non-veg", price: 110, image: "🍛", available: true, description: "Creamy tomato-based chicken curry" },
  { id: "n3", name: "Chicken Fried Rice", category: "non-veg", price: 75, image: "🍚", available: true, description: "Indo-Chinese rice with chicken" },
  { id: "n4", name: "Fish Fry", category: "non-veg", price: 120, image: "🐟", available: true, description: "Crispy fried fish" },
  { id: "n5", name: "Egg Curry", category: "non-veg", price: 60, image: "🥚", available: true, description: "Boiled eggs in spicy gravy" },
  { id: "n6", name: "Chicken Tikka", category: "non-veg", price: 130, image: "🍢", available: true, description: "Grilled marinated chicken" },
  { id: "n7", name: "Mutton Curry", category: "non-veg", price: 150, image: "🍖", available: true, description: "Tender mutton in rich gravy" },
  { id: "n8", name: "Chicken 65", category: "non-veg", price: 95, image: "🔥", available: true, description: "Spicy fried chicken chunks" },
  { id: "n9", name: "Prawn Curry", category: "non-veg", price: 140, image: "🦐", available: true, description: "Prawns in coconut gravy" },
  { id: "n10", name: "Egg Biryani", category: "non-veg", price: 70, image: "🍳", available: true, description: "Biryani with boiled eggs" },

  // Snacks
  { id: "s1", name: "Samosa", category: "snacks", price: 15, image: "🥟", available: true, description: "Crispy triangular pastry" },
  { id: "s2", name: "Vada Pav", category: "snacks", price: 20, image: "🍔", available: true, description: "Spicy potato fritter in bun" },
  { id: "s3", name: "Pav Bhaji", category: "snacks", price: 50, image: "🍞", available: true, description: "Spicy vegetable mash with bread" },
  { id: "s4", name: "Spring Roll", category: "snacks", price: 35, image: "🌯", available: true, description: "Crispy vegetable roll" },
  { id: "s5", name: "French Fries", category: "snacks", price: 40, image: "🍟", available: true, description: "Crispy golden fries" },
  { id: "s6", name: "Pakora", category: "snacks", price: 25, image: "🫘", available: true, description: "Mixed vegetable fritters" },
  { id: "s7", name: "Paneer Roll", category: "snacks", price: 45, image: "🌮", available: true, description: "Paneer wrapped in flatbread" },
  { id: "s8", name: "Cutlet", category: "snacks", price: 20, image: "🥙", available: true, description: "Spiced potato patty" },
  { id: "s9", name: "Bread Pakora", category: "snacks", price: 25, image: "🍞", available: true, description: "Fried bread with filling" },
  { id: "s10", name: "Veg Puff", category: "snacks", price: 15, image: "🥐", available: true, description: "Flaky pastry with veg filling" },
  { id: "s11", name: "Burger", category: "snacks", price: 50, image: "🍔", available: true, description: "Veg/Chicken burger" },
  { id: "s12", name: "Pizza Slice", category: "snacks", price: 40, image: "🍕", available: true, description: "Cheesy pizza slice" },

  // Combos
  { id: "c1", name: "Rice + Dal + Sabzi", category: "combo", price: 70, image: "🍽️", available: true, description: "Complete meal combo" },
  { id: "c2", name: "Roti + Sabzi + Dal", category: "combo", price: 65, image: "🍛", available: true, description: "Traditional thali" },
  { id: "c3", name: "Biryani + Raita", category: "combo", price: 85, image: "🍚", available: true, description: "Biryani with yogurt" },
  { id: "c4", name: "Sandwich + Fries", category: "combo", price: 60, image: "🥪", available: true, description: "Snack combo" },
  { id: "c5", name: "Dosa + Coffee", category: "combo", price: 55, image: "☕", available: true, description: "South Indian breakfast" },
  { id: "c6", name: "Paratha + Curd", category: "combo", price: 45, image: "🥛", available: true, description: "North Indian breakfast" },
  { id: "c7", name: "Chicken Rice + Coke", category: "combo", price: 100, image: "🥤", available: true, description: "Non-veg meal combo" },
  { id: "c8", name: "Thali Special", category: "combo", price: 90, image: "🍱", available: true, description: "Full course meal" },

  // Offers
  { id: "o1", name: "Student Special Lunch", category: "offers", price: 50, originalPrice: 70, image: "🎓", available: true, description: "Affordable full meal", isOffer: true },
  { id: "o2", name: "Morning Breakfast Deal", category: "offers", price: 30, originalPrice: 45, image: "🌅", available: true, description: "Breakfast combo", isOffer: true },
  { id: "o3", name: "Evening Snack Combo", category: "offers", price: 35, originalPrice: 50, image: "🌆", available: true, description: "Tea + snacks", isOffer: true },
  { id: "o4", name: "Weekend Special Biryani", category: "offers", price: 80, originalPrice: 100, image: "🎉", available: true, description: "Special biryani", isOffer: true },
  { id: "o5", name: "2+1 Samosa Offer", category: "offers", price: 30, originalPrice: 45, image: "🎁", available: true, description: "Buy 2 get 1 free", isOffer: true },
  { id: "o6", name: "Combo for Two", category: "offers", price: 120, originalPrice: 150, image: "👥", available: true, description: "Meal for 2 people", isOffer: true },
];
