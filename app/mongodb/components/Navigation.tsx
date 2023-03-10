import Link from "next/link"

const NavigationBar = () => (
  <nav className=" w-full h-16
  border-t border-zinc-400 rounded-t-md bg-black bg-opacity-25
  flex justify-evenly items-center">

    <NavItem icon="🏠" link="/"/>
    <NavItem icon="🌊" link="/mongodb"/>      
    <NavItem icon="💬" link="/mongodb"/>      
    <NavItem icon="🔒" link="/mongodb"/>      
  </nav>
)


const NavItem = (
  props:{
    icon:string,
    link:string
  }
  ) => (
  <Link
  href={props.link}
  className="text-4xl h-12
  flex items-center justify-center
  border-l-2 border-zinc-400 hover:border-zinc-200 bg-neutral-900 hover:bg-neutral-800 rounded-lg p-2">
    {props.icon}
  </Link>
)

export default NavigationBar