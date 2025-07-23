import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div>
      <SidebarProvider
      defaultOpen={true}
      style={{
        "--sidebar-width": "15rem",
        "--sidebar-width-mobile": "16rem",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  );
}
