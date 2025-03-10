import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import './style.css'
import Header from "@/components/header";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";

import imgAstronauta from '../../assets/astronauta.webp'

export function LoginForm() {
  return (
    <>
        <div className="wrapper flex justify-center ">
            <div>
                <img src={imgAstronauta} alt="Imagem de astronauta" width={350} height={350}/>
            </div>
            <Card className="relative w-[350px] overflow-hidden">
                <CardHeader>
                    <CardTitle>Faça seu login</CardTitle>
                    <CardDescription>
                        Entre com sua conta
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Entre com seu e-mail" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Entre com sua senha"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                    <div className="flex gap-2 mb-4">
                        <Link to="/">
                            <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                        </Link>
                        <Button>Login</Button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="cursor-pointer">Esqueci minha senha</Label>
                        <Link to='/Registrar'>
                            <Label htmlFor="password" className="cursor-pointer">Não tenho conta</Label>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    </>
  );
}
