import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FoodItem } from "@/data/foodItems";
import { useCartStore } from "@/lib/cartStore";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface FoodCardProps {
  item: FoodItem;
}

export const FoodCard = ({ item }: FoodCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!item.available) {
      toast.error("Item not available");
      return;
    }
    addItem(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden hover-lift shadow-card group">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isOffer && (
          <div className="absolute top-2 right-2 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            OFFER
          </div>
        )}
        {!item.available && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold">
              Not Available
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.name}</h3>
            {item.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {item.isOffer && item.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold text-primary">₹{item.price}</span>
            </div>
            
            {item.available && (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Available
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            disabled={!item.available}
            className="w-full gradient-primary font-semibold"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
