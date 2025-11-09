import Grid from "@/components/Grid";
import { Aurora } from "@/components/Aurora";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNavBar } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-emerald-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Aurora />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
