import React from "react";
import navBackground from '../assets/nav-background.png'
import FooterBackground from '../assets/Footer.png'

export const Home = () => {
    return (
        <div className="bg-white flex flex-row justify-center w-full">

            {/* Body */}
            <div className="bg-variable-collection-global-white w-[1440px] h-[1700px] relative">

                {/* footer */}
                <div className="absolute w-[1440px] h-[189px] top-[1511px] left-0" style={{
                    backgroundImage: `url(${FooterBackground})`,
                    backgroundSize: '100% 100%', // Set background size if needed
                }}>
                    <div className="absolute w-[283px] h-[40px] top-[71px] left-[586px]">
                        <div className="absolute w-[268px] top-0 left-0 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[2.50px] leading-[normal]">
                            2023 Sistine &amp; Co.
                        </div>
                        <div className="absolute w-[31px] h-[26px] top-px left-[252px] bg-[url(copyright-icon.png)] bg-cover bg-[50%_50%]" />
                    </div>
                    <div className="absolute w-[116px] h-[131px] top-[29px] left-[139px] bg-[url(sistine-s-icon.png)] bg-cover bg-[50%_50%]">
                        <div className="relative w-[26px] h-[28px] top-[103px] left-[76px] bg-[url(trademark.png)] bg-cover bg-[50%_50%]" />
                    </div>
                    <div className="absolute w-[285px] h-[56px] top-[75px] left-[1002px] bg-[url(sistine-brush.png)] bg-cover bg-[50%_50%]">
                        <div className="relative w-[24px] h-[23px] top-[28px] left-[231px] bg-[url(image.png)] bg-cover bg-[50%_50%]" />
                    </div>
                </div>

                {/* the 2 Left box divs */}
                <div className="absolute w-[601px] h-[907px] top-[480px] left-[75px]">
                    <img
                        className="absolute w-[601px] h-[570px] top-0 left-0 object-cover"
                        alt="Rectangle"
                        src="rectangle-3.png"
                    />

                    {/* Bottom left box */}
                    <div className="w-[456px] h-[345px] top-[562px] left-[85px] bg-[url(frame-3.png)] absolute shadow-[0px_30px_85px_#00000080] bg-cover bg-[50%_50%]" />
                </div>

                {/* Top Hero div */}
                <div className="absolute w-[1440px] h-[387px] top-0 left-0"
                    style={{
                        backgroundImage: `url(${navBackground})`,
                        backgroundSize: '100% 100%', // Set background size if needed
                    }}>
                    <p className="absolute top-[229px] left-[183px] [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[2.50px] leading-[normal] whitespace-nowrap">
                        showcase &amp; market your craft
                    </p>
                    <div className="absolute w-[460px] top-[155px] left-[155px] [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[65px] text-center tracking-[6.50px] leading-[normal] whitespace-nowrap">
                        For Creatives
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col h-[292px] items-end justify-end relative">
                        <a href="/login" className="mb-4 pr-8 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center underline whitespace-nowrap">
                            Log In
                        </a>
                        <a href="/signup" className="mb-4 pr-8 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center underline whitespace-nowrap">
                            Sign Up
                        </a>
                        <a href="/" className="mb-4 pr-8 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center underline whitespace-nowrap">
                            Home
                        </a>
                        <a href="/discover" className="mb-4 pr-8 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center underline whitespace-nowrap">
                            Discover
                        </a>
                        <a href="/cart" className="mb-4 pr-8 [font-family:'Alice-Regular',Helvetica] font-normal text-black text-[25px] text-center underline whitespace-nowrap">
                            Cart
                        </a>
                    </div>
                </div>


                {/* Top right box div */}
                <div className="absolute w-[523px] h-[552px] top-[535px] left-[757px] bg-[url(frame-1.png)] bg-cover bg-[50%_50%]">
                    <div className="w-[523px] h-[552px] top-0 left-0 bg-[url(frame-6.png)] absolute shadow-[0px_30px_85px_#00000080] bg-cover bg-[50%_50%]" />
                    <div className="w-[523px] h-[552px] top-0 left-0 bg-[url(frame-7.png)] absolute shadow-[0px_30px_85px_#00000080] bg-cover bg-[50%_50%]" />
                </div>

                {/* Bottom right box div */}
                <div className="w-[544px] h-[211px] top-[1176px] left-[736px] bg-[url(frame-2.png)] absolute shadow-[0px_30px_85px_#00000080] bg-cover bg-[50%_50%]" />


            </div>
        </div>
    );
};

export default Home