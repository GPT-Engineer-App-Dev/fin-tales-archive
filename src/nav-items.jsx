import { Fish } from "lucide-react";
</lov-replace>

<lov-search>
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
</lov-search>
<lov-replace>
    title: "Fish Facts",
    to: "/",
    icon: <Fish className="h-4 w-4" />,
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
];
