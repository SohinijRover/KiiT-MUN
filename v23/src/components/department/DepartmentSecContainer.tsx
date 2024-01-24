import Image from "next/image";

type DepartmentSecContainerProps = {
    imgSource: string,
    name: string,
    position: string,
    className?: string,
}

const DepartmentSecContainer = ({ imgSource, name, position, className }: DepartmentSecContainerProps) => {
  return (
    <>
    <div className="">
    <div className={` bg-buttonBackground mt-16 h-[150px] w-full flex justify-center object-cover ${className}`}>
      <div>

        <Image
            src={imgSource}
            alt={name}
            width={142}
            height={250}
            quality={70}
            className="-translate-y-14 h-[206px] w-auto object-cover"
            ></Image>
            </div>
    </div>
    <div className="mt-2">
        <h1 className="font-bold text-center">{ name }</h1>
        <h2 className="font-medium text-center text-[10px]">{ position }</h2>
    </div>
    </div>
    </>
  )
};

export default DepartmentSecContainer;
