// app/(admin)/account-settings/change-password/page.tsx
import ChangePasswordPageView from "./_components/ChangePasswordPageView";
import { changePasswordDemo } from "./_data/change-password.demo";

export default function ChangePasswordPage() {
  return <ChangePasswordPageView demo={changePasswordDemo} />;
}
