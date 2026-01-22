import OfficeProfileHeader from "@/app/(office)/office/dashboard/account-settings/_components/office-profile-header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const AccountSettings = () => {
  return (
    <div className={`${poppins.className} space-y-3`}>
      <OfficeProfileHeader />

      <div>
        
      </div>
    </div>
  );
};

export default AccountSettings;
