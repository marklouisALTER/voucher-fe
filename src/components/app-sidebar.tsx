import * as React from "react"
import {
  ClockArrowDown,
  Frame,
  Logs,
  UserCog,
} from "lucide-react"
import { FaCartShopping } from "react-icons/fa6";

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects" 
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IoReceipt } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  invoicing: [
    {
      title: "Invoice Management",
      url: "#",
      icon: IoReceipt,
      items: [
        {
          title: "Refund",
          url: "/dashboard/invoicing-management/refund",
        },
        {
          title: "Summary Reports",
          url: "#",
        },
      ],
    },
  ],
  other_links: [
    {
      title: "Pending Orders",
      url: "/dashboard/pending-orders",
      icon: ClockArrowDown,
    },
    {
      title: "Account Settings",
      url: "#",
      icon: UserCog,
    },
    {
      title: "Activity Log",
      url: "#",
      icon: Logs,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();

  return (
    <Sidebar variant="inset" className="bg-brand-primary" {...props}>
      <SidebarHeader className="bg-brand-primary/90">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-xs">
                  <FaCartShopping className="text-brand-primary" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-white">Resibo Pilipinas</span>
                  <span className="truncate text-gray-300 text-xs">Electronic Invoice</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-brand-primary">
        {/* Dashboard link */}
        <SidebarMenu className="mt-5 p-2">
          <SidebarMenuItem className={`py-2 rounded-md ${pathname === "/dashboard" ? "text-white" : "text-gray-400"}`}>
            <SidebarMenuButton asChild>
              <NavLink
                to="/dashboard"
                end
              >
                <Frame />
                <span>Dashboard</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={data.invoicing} />
        <NavProjects projects={data.other_links} />
      </SidebarContent>
      <SidebarFooter className="bg-brand-primary">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
