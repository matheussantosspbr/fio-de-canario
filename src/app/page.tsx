import Image from "next/image";
import ButtonLink from "./components/ButtonLink";
import { LucideInstagram } from "lucide-react";

export default function Home() {
  const whatsappText = "Olá, gostaria de comprar um Fio de Canário!";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh w-80">
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="flex flex-col items-center justify-center mb-4">
          <figure>
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </figure>
          <h1 className="text-4xl font-bold norican-regular text-[#875b2d]">Fio de Canário</h1>
          <p className="text-xs bg-[#875b2d] rounded-full px-2 py-0.5 text-white mb-2">Onde o crochê ganha asas.💛🪽</p>
          <div>
            <button onClick={() => window.open("https://www.instagram.com/fiodecanario", "_blank", "noopener,noreferrer")} className="h-10 w-10 cursor-pointer hover:bg-[#875b2d]/80 transition-colors bg-[#875b2d] rounded-full flex items-center justify-center text-white">
              <LucideInstagram />
            </button>
          </div>
        </div>
        <ButtonLink className="flex items-center justify-center gap-2 w-full" type="PRIMARY" href={`https://wa.me/${whatsappNumber}?text=${whatsappText.replaceAll(" ", "%20")}`}>
          <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
          <span className="text-white">Compre Aqui</span>
        </ButtonLink>
      </div>
      <p className="text-xs font-medium text-white text-center mb-10">Feito com ♥ pelo Dev. Matheus Santos. <br />© 2026.</p>
    </main>
  );
}
