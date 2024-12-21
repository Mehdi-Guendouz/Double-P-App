import { Home, LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-white.svg";
import { useUserStore } from "@/hooks/user-store";

export function AppSidebar() {
  const userStore = useUserStore();
  const navigate = useNavigate();
  // Menu items.
  const items = [
    {
      title: "Home",
      url: "/main",
      icon: Home,
    },
    {
      title: "profile",
      url: "#",
      icon: Settings,
    },
  ];

  const handleLogOut = () => {
    userStore.logout();
    localStorage.removeItem("userToken");
    navigate("login");
  };

  return (
    <Sidebar className="bg-black">
      <SidebarContent className="bg-secondary-black text-white flex flex-col justify-between ">
        <SidebarGroup>
          <div className="p-4 mb-5">
            <Link to={"/"} className="flex items-center space-x-4  ">
              <img src={logo} alt="logo" />
              <span>
                <Link to="#about" className="capitalize font-bold text-xl">
                  double P
                </Link>
              </span>
            </Link>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="flex items-center gap-1 h-1/2 p-4 ">
          <div
            className="flex items-center gap-1 hover:text-red-600 hover:bg-white hover:rounded-md w-full p-2 cursor-pointer duration-300 transition-all"
            onClick={handleLogOut}
          >
            <LogOut className="h-5 w-5 " />
            <span>Logout</span>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
