export default function ProductDescriptionCard({ description }: { description: string }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="text-sm font-extrabold text-slate-900">বিস্তারিত পণ্যের বিবরণ</div>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
        {description}
      </div>
    </section>
  );
}