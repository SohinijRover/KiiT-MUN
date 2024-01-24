import Link from "next/link";

const navItems = [
  {
    name: 'Committees', 
    link: '/committees'
  },
  {
    name: 'Executive Board', 
    link: '/executive-board'
  },
  {
    name: 'Downloads', 
    link: '/downloads'
  },
  {
    name: 'Code of Conduct', 
    link: "https://drive.google.com/file/d/19eqeg_VWljxfpufT-wv1Ghx41NhvFeMi/view"
  }
]

const MunDropdown = () => {
  return (
    <div className=" transition-all duration-400 absolute px-4 text-center bg-buttonBackground rounded-lg right-1/2 translate-x-1/2 py-2 mt-4 text-white hidden group-hover:block ease-in-out">
      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#C0896A] absolute -translate-y-[100%] right-1/2 translate-x-1/2 "></div>
      {navItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div key={index} className={`py-2 px-4 whitespace-nowrap 
            ${index === navItems.length - 1 ? "border-none" : "border-b border-white border-opacity-50"}
          `}>
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  )
};

export default MunDropdown;
