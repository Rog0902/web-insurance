import { FaPhoneAlt } from "react-icons/fa";
import VietNamLang from "../assets/lang-vn.svg"

function Header() {
    return (
        <div className="w-full h-16 bg-gray-60 sticky top-0 z-50 flex items-center justify-center text-[#00854A] text-[22px] font-bold barlow-font">
            <div className="w-[1370px] flex">
                <div className="flex-1 flex items-center ml-5">DBV ĐÔNG NAM BỘ</div>
                <div className="flex-1 flex items-center justify-end mr-20">
                    <FaPhoneAlt className="mr-2" />
                    <> 0933001009</>
                </div>
                <div className=" flex items-center justify-end">
                    <img src={VietNamLang} alt="Vietnamese Language" className="mr-2" />
                    VIE
                </div>
            </div>
        </div>
    );
}

export default Header;