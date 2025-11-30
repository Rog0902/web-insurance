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
        <div className="w-full bg-gray-100 flex flex-col items-center-safe text-[#000000] not-last-of-type:barlow-font">
            <div className=" w-[1370px] flex mb-10">
                <div className=" flex-1 flex-col mt-3">
                    <img src={LogoFooter} alt="DBV Đông Nam Bộ Logo" className="w-90" /> <br />
                    <a className="text-[23px] font-semibold">
                        DBV ĐÔNG NAM BỘ
                    </a> <br />

                    <a className="flex items-center text-[18px] mt-2">
                        <HiOutlineLocationMarker className="inline-block mr-2 w-5 h-5" />
                        Xuân Lộc, Đồng Nai</a>
                    <a className="flex items-center text-[18px] mt-2">
                        <IoMailOutline className="inline-block mr-2 w-5 h-5" />
                        namdnp@dbvi.com.vn</a>

                    <div className="border-t border-gray-400 my-4" />
                    <div className="text-[18px] mb-4">
                        Kết nối với chúng tôi:
                    </div>
                    <div>
                        <BsFacebook className="inline-block mr-2 w-6 h-6" />
                        <FaYoutube className="inline-block mr-2 w-6 h-6" />
                        <FaInstagramSquare className="inline-block mr-2 w-6 h-6" />
                        <SiLinkedin className="inline-block mr-2 w-6 h-6" />
                    </div>

                </div>
                <div className=" flex-1 flex-col justify-center text-[15px] mt-8">
                    <div className="ml-60 leading-10">
                        <a className=" text-[18px]  font-bold mb-5">
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
                <div className="flex-0.3 flex-col justify-end text-[15px] mt-8">
                    <div className=" leading-10">
                        <a className="text-[18px] font-bold">
                            Về DBV
                        </a> <br />
                        <a>
                            Tin Tức
                        </a> <br />
                        <a>
                            Mạng Lưới Dịch Vụ
                        </a>
                    </div>
                    <div className="flex-1 flex items-center justify-end mr-20 mt-20 text-[#00854A] text-[25px] font-bold">
                        <FaPhoneAlt className="mr-2" />
                        <> 0933001009</>
                    </div>

                </div>

            </div>
            <div className="text-[20px] font-semibold flex items-center">
                Copyright © 2025 <div className=" text-[#00854A] ml-1"> DBV Đông Nam Bộ</div> . All rights reserved.
            </div>

        </div>
    );
}

export default Footer;