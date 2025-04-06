import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconType } from "react-icons"
import { NavLink, useLocation } from "react-router-dom"

export function NavProjects({
  projects,
}: {
  projects: {
    title: string
    url: string
    icon: IconType 
  }[]
}) {
  const { pathname } = useLocation()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden text-gray-400">
      <SidebarGroupLabel className="text-white">Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          const isActive = pathname === item.url

          // ✅ Optional debug
          console.log(`${item.title} => ${pathname} === ${item.url} ? ${isActive}`)

          return (
            <SidebarMenuItem
              key={item.title}
              className={`py-2 rounded-md transition-all ease-in-out ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  className="flex items-center gap-2"
                >
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
