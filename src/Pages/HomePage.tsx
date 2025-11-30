import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from "../assets/logo_1751201096793.svg"
import Insurance1 from "../assets/pic/craiyon_151636_A_realistic_photo_insurance.png"
import Insurance2 from "../assets/pic/fotor-ai-20251122151142.jpg"
import ImgCar from "../assets/pic/craiyon_191412_Ultra_realistic_photograph_of_a_metallic_deep_blue_luxury_sedan_driving_at_high_speed_on_a_coastal_c.png"
import { Button } from 'antd';
import { PiTruck } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { TbTruck } from "react-icons/tb";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { PiVanLight } from "react-icons/pi";
import { PiCarProfileLight } from "react-icons/pi";

function HomePage() {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <Header />
            <div className="w-[1370px] h-screen bg-gray-100 flex-1 flex-col justify-center ">
                <div className="w-full h-[668px] bg-gray-100 flex-1 flex">
                    <div className="flex-1 flex-col justify-center items-center" >
                        <img src={Logo} alt="Logo" className=" mt-15 mb-5" />
                        <div className="text-[65px] font-bold bai-jamjuree-font">
                            Bảo vệ tương lai
                            <br /> từ hôm nay
                        </div>
                        <div className="text-[23px] bai-jamjuree-font">
                            Chúng tôi cung cấp các giải pháp bảo hiểm vượt trội <br />
                            giúp bảo vệ tương lai của bạn một cách hoàn hảo nhất
                        </div>
                        <div className="mt-20">
                            <Button size="large" style={{ backgroundColor: "#00854A", color: "#fff", width: 240, height: 70, borderRadius: 15 }}>
                                <a className="text-[26px] font-bold font-mono" href="">
                                    Liên hệ </a>
                            </Button>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="mr-69">
                            <img src={Insurance2} alt="Insurance" className=" h-[500px] w-[400px] rounded-t-4xl rounded-bl-4xl mt-9 " />
                        </div>
                        <img src={Insurance1} alt="Insurance" className=" h-[400px] w-[400px] rounded-full mt-80 absolute top-0 left-4/5 transform -translate-x-1/2 -translate-y-1/4 z-10 outline-gray-100 outline-25" />
                    </div>


                </div>
                <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center" >
                    <a className="text-[23px] bai-jamjuree-font text-center">
                        DBV Đông Nam Bộ – đơn vị trực thuộc Tập đoàn Bảo hiểm DBV,
                        <br /> cung cấp giải pháp bảo hiểm toàn diện với dịch vụ nhanh chóng,
                        <br /> minh bạch và ứng dụng công nghệ số hiện đại.
                    </a>
                </div>
                <div className="w-full h-[633px] bg-gray-100 flex-1 flex">
                    <div className="flex-1 flex justify-center items-center w-full h-full">
                        <img src={ImgCar} alt="Car" className="h-8/10 w-9/10 rounded-br-[300px] rounded-bl-[80px] rounded-tl-[250px] transform scale-x-[-1] opacity-65 " />
                    </div>
                    <div className="flex-1 flex flex-col leading-[50px] mt-30 items-center">
                        <a className=" text-[38px] font-bold text-center leading-[100px] mb-5">
                            Sứ mệnh
                        </a>
                        <a className="text-[24px] leading-15 font-semibold text-center">
                            Đồng hành và bảo vệ khách hàng bằng
                            những giải pháp <br />thiết thực,
                            tin cậy và luôn sẵn sàng mọi lúc, mọi nơi.
                        </a>
                    </div>
                </div>

                <div className="w-full h-[858px] bg-gray-100 flex-col justify-center items-center">
                    <div className="text-[36px] font-bold text-[#00854A] flex justify-center items-center ">
                        Bảo Hiểm Ô Tô
                    </div>
                    <div className="grid grid-cols-3 gap-5 pt-10 pb-10">
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <PiCarProfileLight className="w-[88px] h-[88px]" />
                            <a className="">
                                Xe con 5 chổ
                            </a>
                        </div>
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <PiVanLight className="w-[88px] h-[88px]" />
                            <a className="">
                                Xe du lịch
                            </a>
                        </div>
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <LiaTruckPickupSolid className="w-[88px] h-[88px]" />
                            <a className="">
                                Bán tải
                            </a>
                        </div>
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <TbTruck className="w-[88px] h-[88px]" />
                            <a className="">
                                Xe tải dưới 3 tấn
                            </a>
                        </div>
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <BsTruck className="w-[88px] h-[88px]" />
                            <a className="">
                                Xe tải 3-8 tấn
                            </a>
                        </div>
                        <div className="w-[440px] h-[303px] bg-white rounded-4xl flex flex-col justify-center items-center">
                            <PiTruck className="w-[88px] h-[88px] " />
                            <a className="">
                                Xe tải 8-15 tấn
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>

    );
}

export default HomePage;