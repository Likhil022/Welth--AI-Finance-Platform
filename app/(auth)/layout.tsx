import React from "react";

import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex justify-center pt-20">{children}</div>;
};

export default AuthLayout;
