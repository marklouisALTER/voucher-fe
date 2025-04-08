import React from 'react'
import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from 'react-router-dom'
import { PageBreadcrumbs } from '@/components/common/Breadcrumbs'

const DashboardLaout:React.FC = () => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <PageBreadcrumbs />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-[#d1d4db]">
        <Outlet />
      </div>
    
    </SidebarInset>
  </SidebarProvider>
  )
}

export default DashboardLaout