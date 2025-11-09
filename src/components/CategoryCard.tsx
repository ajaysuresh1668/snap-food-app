import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  category: string;
}

export const CategoryCard = ({ title, icon: Icon, color, category }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden cursor-pointer hover-lift shadow-card transition-smooth group"
      onClick={() => navigate(`/menu?category=${category}`)}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div 
            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-smooth`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
