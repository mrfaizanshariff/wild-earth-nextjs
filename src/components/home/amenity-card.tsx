import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';

interface AmenityCardProps {
  icon: any;
  title: string;
  description: string;
}

export function AmenityCard({ icon: Icon, title, description }: AmenityCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4 flex justify-center">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text/80">{description}</p>
    </Card>
  );
}