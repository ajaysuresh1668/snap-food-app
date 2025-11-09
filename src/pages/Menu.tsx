import { useState, useMemo } from "react";
import { FoodCard } from "@/components/FoodCard";
import { foodItems } from "@/data/foodItems";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";

const Menu = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = useCartStore((state) => state.getTotalItems());

  const filteredItems = useMemo(() => {
    let items = foodItems;

    // Filter by category
    if (selectedCategory !== "all") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Menu</h1>
            <Button
              onClick={() => navigate("/cart")}
              variant="outline"
              size="icon"
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

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </header>

      {/* Categories Tabs */}
      <div className="sticky top-[73px] z-40 bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full grid grid-cols-4 lg:grid-cols-8 h-auto gap-1 bg-muted/50 p-1">
              <TabsTrigger value="all" className="text-xs md:text-sm">All</TabsTrigger>
              <TabsTrigger value="veg" className="text-xs md:text-sm">🌿 Veg</TabsTrigger>
              <TabsTrigger value="non-veg" className="text-xs md:text-sm">🍗 Non-Veg</TabsTrigger>
              <TabsTrigger value="snacks" className="text-xs md:text-sm">🍿 Snacks</TabsTrigger>
              <TabsTrigger value="combo" className="text-xs md:text-sm">🍱 Combo</TabsTrigger>
              <TabsTrigger value="beverages" className="text-xs md:text-sm">☕ Drinks</TabsTrigger>
              <TabsTrigger value="desserts" className="text-xs md:text-sm">🍰 Desserts</TabsTrigger>
              <TabsTrigger value="offers" className="text-xs md:text-sm">✨ Offers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Food Items Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} items
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-muted-foreground">No items found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
