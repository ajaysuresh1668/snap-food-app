import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle2, Package, Truck, Timer } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type OrderStatus = "pending" | "preparing" | "ready";

const Tracking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state;

  const [status, setStatus] = useState<OrderStatus>("pending");
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    if (!orderDetails) {
      navigate("/");
      return;
    }

    // Simulate order progress
    const statusTimer = setTimeout(() => setStatus("preparing"), 3000);
    const readyTimer = setTimeout(() => setStatus("ready"), 10000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(statusTimer);
      clearTimeout(readyTimer);
      clearInterval(countdownInterval);
    };
  }, [orderDetails, navigate]);

  if (!orderDetails) {
    return null;
  }

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const getProgress = () => {
    if (status === "pending") return 33;
    if (status === "preparing") return 66;
    return 100;
  };

  const getStatusColor = () => {
    if (status === "pending") return "bg-warning";
    if (status === "preparing") return "bg-info";
    return "bg-success";
  };

  const getStatusText = () => {
    if (status === "pending") return "Order Received";
    if (status === "preparing") return "Being Prepared";
    return "Ready for Pickup";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">Track Order</h1>
              <p className="text-sm text-muted-foreground">Token #{orderDetails.tokenNumber}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Timer Card */}
        <Card className="shadow-card gradient-primary text-white animate-fade-in-up">
          <CardContent className="p-6 text-center">
            <Timer className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">Estimated Time</h2>
            <div className="text-5xl font-bold mb-2">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <p className="text-sm opacity-90">minutes remaining</p>
          </CardContent>
        </Card>

        {/* Status Progress */}
        <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Order Status</h2>
              <Badge className={getStatusColor()}>
                {getStatusText()}
              </Badge>
            </div>
            <Progress value={getProgress()} className="mb-6" />
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status !== "pending" ? "bg-success" : "bg-muted"}`}>
                  <CheckCircle2 className={`w-6 h-6 ${status !== "pending" ? "text-success-foreground" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Order Received</h3>
                  <p className="text-sm text-muted-foreground">Your order has been confirmed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status === "preparing" || status === "ready" ? "bg-success" : "bg-muted"}`}>
                  <Package className={`w-6 h-6 ${status === "preparing" || status === "ready" ? "text-success-foreground" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Preparing</h3>
                  <p className="text-sm text-muted-foreground">Chef is cooking your food</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status === "ready" ? "bg-success" : "bg-muted"}`}>
                  <Truck className={`w-6 h-6 ${status === "ready" ? "text-success-foreground" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Ready</h3>
                  <p className="text-sm text-muted-foreground">Your order is ready for pickup</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Order Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Bill Number</span>
                <span className="font-semibold text-foreground">{orderDetails.billNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Name</span>
                <span className="font-semibold text-foreground">{orderDetails.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Roll Number</span>
                <span className="font-semibold text-foreground">{orderDetails.rollNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment</span>
                <span className="font-semibold text-foreground">{orderDetails.paymentMethod.toUpperCase()}</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">₹{orderDetails.totalPrice}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {status === "ready" && (
          <Card className="shadow-hover gradient-secondary text-white animate-scale-in">
            <CardContent className="p-6 text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your Order is Ready! 🎉</h2>
              <p className="mb-4">Please collect from the counter</p>
              <p className="text-lg font-semibold">Show Token: {orderDetails.tokenNumber}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Tracking;
