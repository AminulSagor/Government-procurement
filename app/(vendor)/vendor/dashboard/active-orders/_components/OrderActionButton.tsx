import { Button } from "@/components/ui/button";


export default function OrderActionButton({ label }: { label: string }) {
  return (
    <Button className="h-9 rounded-xl text-sm bg-primary-color">
      {label}
    </Button>
  );
}
