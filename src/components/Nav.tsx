import logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="border-b border-gray-200 sticky top-0 z-50 bg-white ">

            <nav className="flex justify-between gap-4 container py-4  mx-auto max-w-6xl ">

                <img src={logo} className="h-9" alt="" />

                <ul className="flex gap-6 items-center text-slate-600 font-semibold text-[13px]">
                    <li className="text-[#DB2777]"><a href="/">Home</a></li>
                    <li><a href="/">Technologies</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>

                <div className="flex gap-4 text-[13px]">
                    <button className="px-4 py-2 rounded-4xl font-semibold hover:bg-gray-100 cursor-pointer">
                        Sign In
                    </button>

                    <button className="px-4 py-2 bg-[#DB2777] text-white rounded-4xl hover:bg-pink-300 cursor-pointer ">
                        Sign Up
                    </button>
                </div>

            </nav>

        </div>
    );
};

export default Nav;