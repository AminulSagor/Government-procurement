export default function OrderStatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-gray">
      {status}
    </span>
  );
}
