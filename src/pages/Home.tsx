import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { Leaf, Drumstick, Cookie, Utensils, Sparkles, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";

const Home = () => {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const categories = [
    { title: "Veg", icon: Leaf, color: "bg-secondary", category: "veg" },
    { title: "Non-Veg", icon: Drumstick, color: "bg-destructive", category: "non-veg" },
    { title: "Snacks", icon: Cookie, color: "bg-warning", category: "snacks" },
    { title: "Combo", icon: Utensils, color: "bg-info", category: "combo" },
    { title: "Offers", icon: Sparkles, color: "bg-accent", category: "offers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl">
              🍽️
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Campus Canteen</h1>
              <p className="text-xs text-muted-foreground">Fresh & Affordable</p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/cart")}
            variant="outline"
            className="relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <div className="text-6xl mb-6 animate-scale-in">🎓</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Welcome to Campus Canteen
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Delicious food at student-friendly prices. Order now and skip the queue!
          </p>
          <Button 
            onClick={() => navigate("/menu")}
            size="lg"
            className="gradient-primary text-lg px-8 py-6 h-auto shadow-hover"
          >
            Order Now
            <ShoppingBag className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={category.category} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in-up">
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-muted-foreground">Get your order ready in minutes</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Student Friendly</h3>
              <p className="text-muted-foreground">Affordable prices for students</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Daily Offers</h3>
              <p className="text-muted-foreground">Special deals every day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
