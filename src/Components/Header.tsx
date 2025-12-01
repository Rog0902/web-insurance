import { FaPhoneAlt } from "react-icons/fa";
import VietNamLang from "../assets/lang-vn.svg"

function Header() {
    return (
        <div className="w-full h-16 bg-gray-60 sticky top-0 z-50 bg-gray-100 flex items-center justify-center text-[#00854A] text-base sm:text-[22px] font-bold barlow-font">
            <div className="w-full max-w-[1370px] flex">
                <p className="flex-1 flex items-center ml-5 text-[13px] sm:text-[22px]">DBV ĐÔNG NAM BỘ</p>
                <div className="flex-1 flex items-center justify-end mr-10">
                    <FaPhoneAlt className="mr-2" />
                    <> 0933001009</>
                </div>
                <div className=" flex items-center justify-end mr-5">
                    <img src={VietNamLang} alt="Vietnamese Language" className="mr-2" />
                    VIE
                </div>
            </div>
        </div>
    );
}

export default Header;