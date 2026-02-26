import AdministrativeStructureCard from "@/app/(office)/office/dashboard/account-settings/_components/administrative-structure-card";
import ContactCard from "@/app/(office)/office/dashboard/account-settings/_components/contact-card";
import OfficeProfileHeader from "@/app/(office)/office/dashboard/account-settings/_components/office-profile-header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const AccountSettings = () => {
  return (
    <div className={`${poppins.className} space-y-3 max-w-7xl mx-auto`}>
      <OfficeProfileHeader />

      <div className="grid md:grid-cols-5 gap-5">
        <div className="col-span-5 md:col-span-2">
          <AdministrativeStructureCard />
        </div>

        <div className="col-span-5 md:col-span-3">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
