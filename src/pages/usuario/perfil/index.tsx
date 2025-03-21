import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Esquema de validação com Zod
const formSchema = z.object({
  profilePhoto: z.string().url().optional(),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  cpf: z.string().min(11, "CPF inválido"),
  whatsapp: z.string().min(11, "WhatsApp inválido"),
  cep: z.string().min(8, "CEP inválido"),
  street: z.string().min(1, "Rua é obrigatória"),
  city: z.string().min(1, "Cidade é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
});

// Tipo inferido a partir do esquema Zod
type FormData = z.infer<typeof formSchema>;

export function Perfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 max-w-2xl mx-auto"
    >
      {/* Foto de Perfil */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full sm:w-auto">
          <Label htmlFor="profilePhoto">Foto de Perfil</Label>
          <Input
            id="profilePhoto"
            type="url"
            {...register("profilePhoto")}
            placeholder="URL da foto"
            className="w-full"
          />
          {errors.profilePhoto && (
            <p className="text-sm text-red-500">{errors.profilePhoto.message}</p>
          )}
        </div>
      </div>

      {/* Nome */}
      <div>
        <Label htmlFor="name" className="mb-2">Nome</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Seu nome"
          className="w-full"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="mb-2">Email</Label>
        <Input
          id="email"
          {...register("email")}
          placeholder="Seu email"
          className="w-full"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* CPF */}
      <div>
        <Label htmlFor="cpf" className="mb-2">CPF</Label>
        <Input
          id="cpf"
          {...register("cpf")}
          placeholder="Seu CPF"
          className="w-full"
        />
        {errors.cpf && (
          <p className="text-sm text-red-500">{errors.cpf.message}</p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <Label htmlFor="whatsapp" className="mb-2">WhatsApp</Label>
        <Input
          id="whatsapp"
          {...register("whatsapp")}
          placeholder="Seu WhatsApp"
          className="w-full"
        />
        {errors.whatsapp && (
          <p className="text-sm text-red-500">{errors.whatsapp.message}</p>
        )}
      </div>

      {/* CEP */}
      <div>
        <Label htmlFor="cep" className="mb-2">CEP</Label>
        <Input
          id="cep"
          {...register("cep")}
          placeholder="Seu CEP"
          className="w-full"
        />
        {errors.cep && (
          <p className="text-sm text-red-500">{errors.cep.message}</p>
        )}
      </div>

      {/* Rua */}
      <div>
        <Label htmlFor="street" className="mb-2">Rua</Label>
        <Input
          id="street"
          {...register("street")}
          placeholder="Sua rua"
          className="w-full"
        />
        {errors.street && (
          <p className="text-sm text-red-500">{errors.street.message}</p>
        )}
      </div>

      {/* Cidade e Número */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city" className="mb-2">Cidade</Label>
          <Input
            id="city"
            {...register("city")}
            placeholder="Sua cidade"
            className="w-full"
          />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="number" className="mb-2">Número</Label>
          <Input
            id="number"
            {...register("number")}
            placeholder="Número"
            className="w-full"
          />
          {errors.number && (
            <p className="text-sm text-red-500">{errors.number.message}</p>
          )}
        </div>
      </div>

      {/* Bairro */}
      <div>
        <Label htmlFor="neighborhood" className="mb-2">Bairro</Label>
        <Input
          id="neighborhood"
          {...register("neighborhood")}
          placeholder="Seu bairro"
          className="w-full"
        />
        {errors.neighborhood && (
          <p className="text-sm text-red-500">{errors.neighborhood.message}</p>
        )}
      </div>

      {/* Botão de Envio */}
      <Button type="submit" className="w-full sm:w-auto cursor-pointer">
        Salvar alterações
      </Button>
    </form>
  );
}