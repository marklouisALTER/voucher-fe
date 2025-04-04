import * as React from "react"
import {
  BookOpen,
  Bot,
  ClockArrowDown,
  Frame,
  LifeBuoy,
  Logs,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  UserCog,
} from "lucide-react"
import { FaCartShopping } from "react-icons/fa6";

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  invoicing: [
    {
      title: "Invoicing",
      url: "#",
      icon: IoReceipt,
      items: [
        {
          title: "Refund",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
  ],
  others: [
    {
      title: "Pending Orders",
      url: "#",
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
  return (
    <Sidebar variant="inset" className="bg-brand-primary" {...props}>
      <SidebarHeader className="bg-brand-primary/90">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
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
          <SidebarMenuItem className="bg-[#1a4963] py-2 rounded-md">
            <SidebarMenuButton asChild>
              <a href="#">
                <Frame className="text-white" />
                <span className="text-white">Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={data.invoicing} />
        {/* <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter className="bg-brand-primary">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
