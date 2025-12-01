import LogoFooter from "../assets/logo_1751201096793.svg"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full h-auto bg-gray-100 flex flex-col items-center-safe text-[#000000] not-last-of-type:barlow-font">
            <div className=" w-full max-w-[1370px] h-auto flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10">
                <div className=" flex-1 flex flex-col mt-3 text-center lg:text-left lg:items-start lg:justify-start">
                    <img src={LogoFooter} alt="DBV Đông Nam Bộ Logo" className=" mx-auto lg:mx-0" /> <br />
                    <a className="text-xl lg:text-[23px] font-semibold">
                        DBV ĐÔNG NAM BỘ
                    </a> <br />

                    <a className="flex items-center text-base lg:text-[18px] mt-1 mx-auto lg:mx-0">
                        <HiOutlineLocationMarker className="inline-block mr-2 w-5 h-5" />
                        Xuân Lộc, Đồng Nai</a>
                    <a className="flex items-center text-base lg:text-[18px] mt-1 mx-auto lg:mx-0">
                        <IoMailOutline className="inline-block mr-2 w-5 h-5" />
                        namdnp@dbvi.com.vn</a>

                    <div className="border-t border-gray-400 my-4 w-4/5 max-w-full lg:px-4 mx-auto lg:mx-0 " />
                    <div className="text-base lg:text-[18px] mb-4">
                        Kết nối với chúng tôi:
                    </div>
                    <div>
                        <BsFacebook className="inline-block mr-2 w-6 h-6" />
                        <FaYoutube className="inline-block mr-2 w-6 h-6" />
                        <FaInstagramSquare className="inline-block mr-2 w-6 h-6" />
                        <SiLinkedin className="inline-block mr-2 w-6 h-6" />
                    </div>

                </div>
                <div className=" flex-1 flex-col justify-center text-base sm:text-[12px] lg:text-[15px] mt-8 hidden sm:hidden md:hidden lg:flex ">
                    <div className="ml-[50px] lg:ml-[85px] leading-10">
                        <a className=" text-xl lg:text-[18px] font-bold mb-5">
                            Sản Phẩm
                        </a> <br />
                        <a>
                            Bảo Hiểm Ô Tô
                        </a> <br />
                        <a>
                            Bảo Hiểm Xe Máy
                        </a> <br />
                        <a>
                            Bảo Hiểm Tai Nạn 24/24
                        </a> <br />
                        <a>
                            Bảo Hiểm Tài Sản Kỹ Thuật
                        </a> <br />
                        <a>
                            Bảo Hiểm Sức Khỏe Toàn Diện
                        </a> <br />
                        <a>
                            Bảo Hiểm Trách Nhiệm Sản Phẩm
                        </a>

                    </div>

                </div>
                <div className="flex-0.3 flex-col justify-end text-base sm:text-sm lg:text-[18px] mt-8 hidden sm:hidden md:hidden lg:flex ">
                    <div className=" leading-10">
                        <a className="text-xl lg:text-[18px] font-bold">
                            Về DBV
                        </a> <br />
                        <a>
                            Tin Tức
                        </a> <br />
                        <a>
                            Mạng Lưới Dịch Vụ
                        </a>
                    </div>
                    <div className="flex-1 flex items-center justify-end mr-20 mt-20 text-[#00854A] text-3xl lg:text-[25px] font-bold">
                        <FaPhoneAlt className="mr-2" />
                        <> 0933001009</>
                    </div>

                </div>

            </div>
            <div className="text-base sm:text-sm lg:text-[20px] font-semibold flex items-center text-center mb-3">
                Copyright © 2025 <span className=" text-[#00854A] ml-1"> DBV Đông Nam Bộ</span> . All rights reserved.
            </div>

        </div>
    );
}

export default Footer;