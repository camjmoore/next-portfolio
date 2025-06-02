import Image from "next/image";

export default function Headshot() {
  return (
      <div className="hidden md:flex lg:flex items-center">
        <div className="h-10 min-w-10 z-10 overflow-hidden bg-zinc-800 rounded-full border border-white/10">
          <Image
            src="/headshot.png"
            alt="a headshot photo of the next dev you plan to hire"
            quality={50}
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center text-center min-w-32 h-10 py-1 text-sm pointer-events-auto">
          <h2 className="px-1 mx-auto text-sm font-bold"> Cameron Moore </h2>
        </div>
      </div>
  );
}
