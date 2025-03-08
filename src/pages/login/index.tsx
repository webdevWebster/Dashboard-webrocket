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

export function LoginForm() {
  return (
    <div className="wrapper">
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
            <CardFooter className="flex justify-between">
                <Button variant="outline">Register</Button>
                <Button>Login</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
