import Image from "next/image";

type TeamContainerProps = {
    imgSource: string,
    name: string,
    position: string,
    blueBg: boolean,
}

const TeamContainer = ({ blueBg, imgSource, name, position }: TeamContainerProps) => {
  return (
    <div className={`${blueBg ? "bg-secBlueBg" : "bg-secGreenBg"} mt-16 h-[150px] min-w-[240px] max-w-[280px] min-w[240px] w-full col-span-1 pl-1 flex justify-between object-cover`}>
        <div className="mt-6">
            <h1 className="font-bold text-center text-xs">{ name }</h1>
            <h2 className="font-semibold text-center text-[10px]">{ position }</h2>
        </div>
        <Image
            src={imgSource}
            alt={name}
            width={142}
            height={182}
            quality={70}
            className="-translate-y-8 h-[182px] w-auto object-cover"
        ></Image>
    </div>
  )
};

export default TeamContainer;
