import React from "react";

interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children, footer, header }) => (
  <div className="page-template">
    {header}
    <main>{children}</main>
    {footer}
  </div>
);

export default MainTemplate; 