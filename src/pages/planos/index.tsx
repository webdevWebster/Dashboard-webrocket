// components/Plans.tsx
import Footer from "@/components/footer";
import Header from "@/components/header";

const plans = [
  {
    name: "Plano Básico",
    price: "R$29,99/mês",
    features: [
      "5 Download por dia",
      "Acesso a recursos básicos",
    ],
    isFeatured: false,
  },
  {
    name: "Plano Intermediário",
    price: "R$49,99/mês",
    features: [
      "15 Download por dia",
      "Suporte ao cliente",
    ],
    isFeatured: false,
  },
  {
    name: "Plano Avançado",
    price: "R$99,99/mês",
    features: [
      "25 Download por dia",
      "Consultoria personalizada",
    ],
    isFeatured: true, // Destaque para o plano avançado
  },
];

const Plans = () => {
  return (
    <>
        <Header />
        <section className="py-30 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Escolha o Melhor Plano para Você</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <div
                key={index}
                className={`${
                    plan.isFeatured
                    ? "bg-blue-600 text-white shadow-xl transform scale-105 transition-all duration-300"
                    : "bg-white text-gray-800"
                } p-6 rounded-lg shadow-md flex flex-col items-center justify-between`}
                >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>
                <ul className="list-disc text-left space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm">
                        {feature}
                    </li>
                    ))}
                </ul>
                <button
                    className={`${
                    plan.isFeatured
                        ? "bg-yellow-400 text-gray-800"
                        : "bg-gray-800 text-white"
                    } py-2 px-6 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-yellow-500`}
                >
                    Assine Agora
                </button>
                </div>
            ))}
            </div>
        </div>
        </section>
        <Footer />
    </>
  );
};

export default Plans;
