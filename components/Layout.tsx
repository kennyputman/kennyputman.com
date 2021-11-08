import React, { FC, HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Layout: FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
