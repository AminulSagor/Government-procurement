import AuthLeftPanel from "@/app/auth/_components/auth-left-panel";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-full flex min-h-screen">
      <AuthLeftPanel />
      <div className="w-full md:w-1/2">{children}</div>
    </div>
  );
};

export default AuthLayout;
