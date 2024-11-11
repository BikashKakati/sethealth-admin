import React, { ReactNode } from "react";

type AnalyticsCardPropType = {
  children: ReactNode;
};
const AnalyticsCard: React.FC<AnalyticsCardPropType> = ({ children }) => {
  return (
    <div className="h-full flex-1 rounded-lg bg-slate-50 p-3">
      {children}
    </div>
  );
};

export default AnalyticsCard;
