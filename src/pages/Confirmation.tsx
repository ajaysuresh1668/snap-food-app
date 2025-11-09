import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, Receipt, Hash, Clock } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import confetti from "canvas-confetti";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clearCart = useCartStore((state) => state.clearCart);
  
  const orderDetails = location.state;

  useEffect(() => {
    if (!orderDetails) {
      navigate("/");
      return;
    }

    // Clear cart
    clearCart();

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, [orderDetails, navigate, clearCart]);

  if (!orderDetails) {
    return null;
  }

  const estimatedTime = Math.floor(10 + Math.random() * 10); // 10-20 minutes

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="container max-w-md mx-auto">
        <Card className="shadow-hover animate-scale-in">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-success-foreground" />
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-muted-foreground mb-8">
              Your order has been received and is being prepared
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Receipt className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Bill Number</span>
                </div>
                <Badge variant="secondary" className="text-base">
                  {orderDetails.billNumber}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Token Number</span>
                </div>
                <Badge className="gradient-primary text-xl font-bold">
                  {orderDetails.tokenNumber}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Estimated Time</span>
                </div>
                <span className="font-semibold text-foreground">{estimatedTime} mins</span>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-primary">
                  ₹{orderDetails.totalPrice}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Payment: {orderDetails.paymentMethod.toUpperCase()}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => navigate("/tracking", { state: orderDetails })}
                className="w-full gradient-primary h-12"
              >
                Track Order
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full h-12"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
