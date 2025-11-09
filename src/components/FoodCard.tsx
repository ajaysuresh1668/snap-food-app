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
    <Card className="overflow-hidden hover-lift shadow-card">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="text-4xl">{item.image}</div>
            <div className="flex flex-col items-end gap-1">
              {item.isOffer && item.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
              <span className="text-lg font-bold text-primary">₹{item.price}</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
            {item.description && (
              <p className="text-xs text-muted-foreground">{item.description}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between gap-2">
            {item.available ? (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Available
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                Not Available
              </Badge>
            )}
            
            {item.isOffer && (
              <Badge className="bg-warning text-warning-foreground">
                OFFER
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            disabled={!item.available}
            className="w-full gradient-primary"
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
