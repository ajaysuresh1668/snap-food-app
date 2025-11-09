import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCartStore } from "@/lib/cartStore";
import { ArrowLeft, CreditCard, Wallet, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Order = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCartStore();
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const totalPrice = getTotalPrice();

  const handleConfirmOrder = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!rollNumber.trim()) {
      toast.error("Please enter your roll number");
      return;
    }

    // Generate order details
    const billNumber = `BILL${Date.now().toString().slice(-6)}`;
    const tokenNumber = Math.floor(100 + Math.random() * 900);
    
    navigate("/confirmation", {
      state: {
        billNumber,
        tokenNumber,
        name,
        rollNumber,
        paymentMethod,
        items,
        totalPrice,
      },
    });
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/cart")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Order Details</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Customer Details */}
        <Card className="shadow-card animate-fade-in-up">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Your Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  placeholder="Enter your roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-smooth">
                  <RadioGroupItem value="gpay" id="gpay" />
                  <Label htmlFor="gpay" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Wallet className="w-5 h-5 text-primary" />
                    <span>Google Pay / UPI</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-smooth">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Banknote className="w-5 h-5 text-success" />
                    <span>Cash on Counter</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-smooth">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                    <CreditCard className="w-5 h-5 text-info" />
                    <span>Card Payment</span>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Order Summary</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-semibold text-foreground">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={handleConfirmOrder}
            className="w-full gradient-primary h-12 text-lg"
          >
            Confirm Order - ₹{totalPrice}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
