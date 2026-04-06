import { Card, CardContent } from "@/components/ui/card";

function StatCard({ item }: { item: StatItem }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        {item.icon}
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{item.title}</p>
          <p className="text-lg font-semibold">{item.value} টি</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatCard;
