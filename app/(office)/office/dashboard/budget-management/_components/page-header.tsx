function PageHeader() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          তৈরি করা বাজেট রিপোর্টের তালিকা
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          আপনার অফিসের জন্য সাম্প্রতিক সকল বাজেট একত্রে দেখুন ও পরিচালনা করুন।
        </p>
      </div>
    </div>
  );
}

export default PageHeader;
