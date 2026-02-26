export type OrderItemDialogIcon = "laptop" | "mouse" | "box";

export type OrderItemDetailsDialogItem = {
  id: string;
  name: string;
  codeText: string; // "কোড: ০২৫৬০১"
  categoryText?: string; // "ক্যাটাগরি: ল্যাপটপ"
  icon?: OrderItemDialogIcon;

  techTitle?: string; // "প্রযুক্তিগত বৈশিষ্ট্য"
  techDescription?: string;
  techBullets?: string[];

  pricing: {
    qty: number;
    regularUnitPriceText: string;
    vatUnitPriceText: string;
    regularTotalText: string;
    vatTotalText: string;
  };
};

export type OrderItemsDetailsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  items: OrderItemDetailsDialogItem[];
};