import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Wallet, FileText, Settings, DoorOpen, User, HouseIcon, IdCardIcon, Heart, Download } from "lucide-react";

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
          <DropdownMenuLabel>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Webster Ribeiro</h2>
                <p className="text-sm text-gray-500">designribeiro@gmail.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <User size={16} /> Perfil
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <HouseIcon size={16} /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <IdCardIcon size={16} /> Assinatura
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <Heart size={16} /> Curtidas
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <Download size={16} /> Downloads
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2">
            <DoorOpen size={16} /> Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
