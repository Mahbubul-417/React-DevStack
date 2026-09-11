import logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="border-b border-gray-200 ">

        <nav className="flex justify-between gap-4 container  mx-10 py-4 px-8  ">

    <img src={logo} className="h-9" alt="" />
    
    <ul className="flex gap-6 items-center text-slate-600 font-semibold text-[13px]">
    <li className="text-[#DB2777]"><a href="/home">Home</a></li>
    <li><a href="/service.com">Technologies</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    </ul>

    <div className="flex gap-4 text-[13px]">
    <button className="px-4 py-2 rounded-4xl font-semibold hover:bg-gray-100">
        Sign In
    </button>

    <button className="px-4 py-2 bg-[#DB2777] text-white rounded-4xl
    hover:bg-pink-300 ">
        Sign Up
    </button>
</div>
        
     </nav>

     </div>
    );
};

export default Nav;