import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="py-3 px-20 flex flex justify-between w-full ">
      <div className="p-2 font-extrabold text-lg orange-400">TARDE COFFEE</div>
      <nav className="flex items-center cursor-pointer">
        <ul className="flex gap-5">
          <li>Menu</li>
          <li>Drinks</li>
          <li>Membership</li>
          <li>Gifticon</li>
          <li>News</li>
          <li>Customer</li>
        </ul>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger>Language</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>한국어</DropdownMenuItem>
          <DropdownMenuItem>EN</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
