import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Wallet, FileText, Settings } from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="User Avatar" />
              <AvatarFallback>WR</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg rounded-lg">
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <LayoutDashboard size={16} /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <Wallet size={16} /> Carteira
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <FileText size={16} /> Arquivos
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <Settings size={16} /> Configurações
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
