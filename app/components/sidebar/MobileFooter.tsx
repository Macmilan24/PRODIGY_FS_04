"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-0 z-40 w-full flex justify-between items-center bg-white border-t-[1px] border-gray-300 lg:hidden">
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          active={route.active}
          href={route.href}
          icon={route.icon}
          onClick={() => route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
