"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text";

import './style.css'
import Subheader from "./subHeader";

export default function Header() {
  return (
    <>
        <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
            {/* Logo */}
            <div className="text-xl font-bold">MeuSite</div>

            {/* Botão de Ação */}
            <div className="actionsHeader">
                <h1 className="text-sm font-bold tracking-tighter md:text-5xl lg:text-7xl textAurora">
                    Assine o <AuroraText className="textAurora">Premium</AuroraText>
                </h1>
                <Button className="hidden md:block" variant="secondary">Cadastre-se</Button>
                <Button className="hidden md:block">Entrar</Button>
            </div>

            {/* Menu Mobile */}
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-4 p-6">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-black">Home</a>
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-black">Sobre</a>
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-black">Contato</a>
                <Button className="mt-4">Entrar</Button>
            </SheetContent>
            </Sheet>
        </div>
        </header>
        <Subheader />
    </>
  );
}
