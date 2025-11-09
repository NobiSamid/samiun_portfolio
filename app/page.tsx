import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Aurora } from "@/components/Aurora";
// import { ModeToggle } from "@/components/ModeToggle";
import { NavBar } from "@/components/NavBar";


export default function Home() {
  return (
    <main className="relative bg-emerald-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <ModeToggle /> */}
        <NavBar />
        <Aurora />
        <Grid />
      </div>
    </main>
  );
}
