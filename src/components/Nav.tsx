import  logo  from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="border-b border-gray-200">

        <nav className="flex justify-between gap-4 container mx-auto py-3  ">

    <img src={logo} alt="" />
    
    <ul className="flex gap-4 items-center text-slate-600 font-semibold">
        <li className="text-[#DB2777]">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    <div className="flex gap-4">
    <button className="hover:bg-gray-100">
        Sign In
    </button>

    <button className="px-4 py-2 bg-pink-600 text-white rounded-4xl
    hover:bg-pink-300">
        Sign Up
    </button>
</div>
        
     </nav>

     </div>
    );
};

export default Nav;