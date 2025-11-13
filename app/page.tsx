import Grid from "@/components/Grid";
import { Aurora } from "@/components/Aurora";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNavBar } from "@/components/ui/FloatingNavbar";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className='relative bg-emerald-950 flex justify-center items-center flex-col mx-auto sm:px-10 !px-0 overflow-clip'>
      <div className="w-full">
        <FloatingNavBar navItems={navItems} />
        <Aurora />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
