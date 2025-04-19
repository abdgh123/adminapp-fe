import Link from "next/link";
import { Button } from "@/components/ui/button";
function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#134679] p-4 border-r rounded-[15px] ">
      <nav className="space-y-4 mt-[20px] ">
        <Link href="/" className="block text-gray-800 hover:text-black ">
          <Button
            className="w-full bg-[#134679] text-white hover:bg-[#36618c] hover:text-white border-none"
            variant="outline"
          >
            Admission Flow
          </Button>
        </Link>
        <Link href="./input" className="block text-gray-800 hover:text-black">
          <Button
            className="w-full bg-[#134679] text-white hover:bg-[#36618c] hover:text-white border-none"
            variant="outline"
          >
            Input Test
          </Button>
        </Link>
      </nav>
    </aside>
  );
}
export default Sidebar;
