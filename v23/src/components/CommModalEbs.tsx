import Image from "next/image";

type CommModalEbsType = {
  name: string
  title?: string
  imgSource: string
  className?: string
}

const CommModalEbs = ({ className, name, title, imgSource }: CommModalEbsType) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`rounded-full overflow-hidden border-4 border-[#B0693B] ${className}`}>
        <Image 
            src={imgSource} 
            alt={name}
            width={170}
            height={170}
            className="object-cover object-top"
        ></Image>
      </div>
      <div className="text-center mt-2">
        <h1 className="font-bold text-lg">{name}</h1>
        <h2 className="text-xs font-semibold">{ title }</h2>
      </div>
    </div>
  )
};

export default CommModalEbs;
