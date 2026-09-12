import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="w-full bg-white px-8 pt-10 mt-10">


            <div className="mx-auto flex max-w-6xl justify-between">


                <div className="w-80">
                    <div className="mb-3 flex items-center gap-2">


                        <img src={logo} className="h-6" alt="" />

                    </div>

                    <p className="text-[10px] leading-4 text-slate-400">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <div className="mt-4 flex gap-5 text-[10px] font-medium text-slate-600">
                        <a href="/">GitHub</a>
                        <a href="/">Twitter</a>
                        <a href="/">LinkedIn</a>
                    </div>
                </div>


                <div>
                    <h3 className="mb-3 text-[10px] font-bold uppercase text-slate-800">
                        Product
                    </h3>

                    <div className="flex flex-col gap-2 text-[10px] text-slate-400">
                        <a href="/">Home</a>
                        <a href="/">Technologies</a>
                        <a href="/">Projects</a>
                    </div>
                </div>


                <div>
                    <h3 className="mb-3 text-[10px] font-bold uppercase text-slate-800">
                        Company
                    </h3>

                    <div className="flex flex-col gap-2 text-[10px] text-slate-400">
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                        <a href="/">Careers</a>
                    </div>
                </div>


                <div>
                    <h3 className="mb-3 text-[10px] font-bold uppercase text-slate-800">
                        Legal
                    </h3>

                    <div className="flex flex-col gap-2 text-[10px] text-slate-400">
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                    </div>
                </div>

            </div>


            <div className="mx-auto mt-10 max-w-6xl border-t border-slate-100"></div>


            <div className="mx-auto flex max-w-6xl justify-between py-5 text-[10px] text-slate-400">
                <p>© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-5">
                    <a href="/">
                        Privacy
                    </a>
                    <a href="/">
                        Terms
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;