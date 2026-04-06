import VendorCreateForm from "./_components/vendor-create-form";

export default function NewVendorPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-off-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
        {/* breadcrumb-ish header */}
        <div className="mb-5">
          <div className="text-xs text-slate-500">
            ড্যাশবোর্ড &nbsp;›&nbsp; ভেন্ডর &nbsp;›&nbsp; নতুন ভেন্ডর
          </div>
          <h1 className="mt-1 text-lg font-extrabold text-slate-900">
            নতুন ভেন্ডর নিবন্ধন
          </h1>
        </div>

        <VendorCreateForm />
      </div>
    </main>
  );
}