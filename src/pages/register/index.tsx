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
import { Link } from "react-router-dom";


export function RegisterForm() {
  return (
    <>
        <div className="wrapper">
            <Card className="relative w-[350px] overflow-hidden">
                <CardHeader>
                    <CardTitle>Faça seu Cadastro</CardTitle>
                    <CardDescription>
                        Preencha as informações
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nome">Nome completo</Label>
                                <Input 
                                    id="nome" 
                                    type="text" 
                                    placeholder="Digite seu nome" 
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Telefone</Label>
                                <Input 
                                    id="telefone" 
                                    type="tel" 
                                    placeholder="(00) 00000-0000" 
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Digite seu e-mail" 
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Escolha uma senha"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link to='/'>
                        <Button variant="outline">Cancelar</Button>
                    </Link>
                    <Button>Registrar</Button>
                </CardFooter>
            </Card>
        </div>
    </>
  );
}
