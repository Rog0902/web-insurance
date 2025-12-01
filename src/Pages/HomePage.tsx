// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import Logo from "../assets/logo_1751201096793.svg";
// import Insurance1 from "../assets/pic/craiyon_151636_A_realistic_photo_insurance.png";
// import Insurance2 from "../assets/pic/fotor-ai-20251122151142.jpg";
// import ImgCar from "../assets/pic/craiyon_191412_Ultra_realistic_photograph_of_a_metallic_deep_blue_luxury_sedan_driving_at_high_speed_on_a_coastal_c.png";
// import { Button } from 'antd';
// import { PiTruck, PiVanLight, PiCarProfileLight } from "react-icons/pi";
// import { BsTruck } from "react-icons/bs";
// import { TbTruck } from "react-icons/tb";
// import { LiaTruckPickupSolid } from "react-icons/lia";

// function HomePage() {
//     return (
//         <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
//             <Header />

//             {/* Container chính (responsive) */}
//             <div className="w-full max-w-[1370px] mx-auto px-4 flex-1 flex flex-col">

//                 {/* HERO SECTION */}
//                 <div className="w-full min-h-[550px] flex flex-col lg:flex-row mt-10">

//                     {/* Text */}
//                     <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
//                         <img src={Logo} alt="Logo" className="mb-5 max-w-[220px] w-full" />

//                         <h1 className="font-bold bai-jamjuree-font 
//                             text-4xl sm:text-5xl lg:text-[65px] leading-tight">
//                             Bảo vệ tương lai <br /> từ hôm nay
//                         </h1>

//                         <p className="text-base sm:text-lg lg:text-[23px] mt-4">
//                             Chúng tôi cung cấp các giải pháp bảo hiểm vượt trội <br />
//                             giúp bảo vệ tương lai của bạn một cách hoàn hảo nhất
//                         </p>

//                         <div className="mt-3">
//                             <Button size="large"
//                                 style={{
//                                     backgroundColor: "#00854A",
//                                     color: "#fff",
//                                     width: 240,
//                                     height: 70,
//                                     borderRadius: 15
//                                 }}>
//                                 <span className="text-xl font-bold font-mono">Liên hệ</span>
//                             </Button>
//                         </div>
//                     </div>

//                     {/* Hình hero bên phải */}
//                     <div className="flex-1 relative hidden lg:flex justify-center items-center">
//                         <div>
//                             <img src={Insurance2}
//                                 alt="Insurance"
//                                 className="rounded-t-4xl rounded-bl-4xl w-[350px] h-[450px] object-cover"
//                             />
//                         </div>

//                         <img
//                             src={Insurance1}
//                             alt="Insurance"
//                             className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full object-cover shadow-xl"
//                         />
//                     </div>
//                 </div>

//                 {/* GIỚI THIỆU */}
//                 <div className="w-full min-h-[200px] flex justify-center items-center text-center mt-5">
//                     <p className="text-lg sm:text-xl lg:text-[23px] leading-relaxed px-4">
//                         DBV Đông Nam Bộ – đơn vị trực thuộc Tập đoàn Bảo hiểm DBV,
//                         <br /> cung cấp giải pháp bảo hiểm toàn diện với dịch vụ nhanh chóng,
//                         <br /> minh bạch và ứng dụng công nghệ số hiện đại.
//                     </p>
//                 </div>

//                 {/* SỨ MỆNH */}
//                 <div className="w-full flex flex-col lg:flex-row mt-20">
//                     <div className="flex-1 flex justify-center items-center p-4">
//                         <img
//                             src={ImgCar}
//                             alt="Car"
//                             className="w-full max-w-[600px] rounded-br-[300px] rounded-bl-[80px] rounded-tl-[250px] opacity-65 object-cover"
//                         />
//                     </div>

//                     <div className="flex-1 flex flex-col text-center items-center justify-center p-6">
//                         <h2 className="text-3xl lg:text-[38px] font-bold mb-5 leading-snug">
//                             Sứ mệnh
//                         </h2>

//                         <p className="text-lg lg:text-[24px] font-semibold leading-relaxed">
//                             Đồng hành và bảo vệ khách hàng bằng những giải pháp
//                             <br /> thiết thực, tin cậy và luôn sẵn sàng mọi lúc, mọi nơi.
//                         </p>
//                     </div>
//                 </div>

//                 {/* BẢO HIỂM Ô TÔ */}
//                 <div className="w-full mt-20">
//                     <h3 className="text-[30px] sm:text-[36px] font-bold text-[#00854A] text-center">
//                         Bảo Hiểm Ô Tô
//                     </h3>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

//                         {[
//                             { icon: <PiCarProfileLight className="w-[88px] h-[88px]" />, label: "Xe con 5 chổ" },
//                             { icon: <PiVanLight className="w-[88px] h-[88px]" />, label: "Xe du lịch" },
//                             { icon: <LiaTruckPickupSolid className="w-[88px] h-[88px]" />, label: "Bán tải" },
//                             { icon: <TbTruck className="w-[88px] h-[88px]" />, label: "Xe tải dưới 3 tấn" },
//                             { icon: <BsTruck className="w-[88px] h-[88px]" />, label: "Xe tải 3-8 tấn" },
//                             { icon: <PiTruck className="w-[88px] h-[88px]" />, label: "Xe tải 8-15 tấn" }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="w-full h-[280px] bg-white rounded-4xl flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition"
//                             >
//                                 {item.icon}
//                                 <p className="text-lg mt-4">{item.label}</p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>

//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default HomePage;



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
            <div className="w-full max-w-[1370px] mx-auto h-auto px-4 bg-gray-100 flex-1 flex-col justify-center mb-10 ">
                <div className="w-full min-h-[500px] bg-gray-100 flex-1 flex flex-col lg:flex-row">
                    <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:justify-start">
                        <img src={Logo} alt="Logo" className=" mt-15 mb-5" />
                        <div className="text-3xl sm:text-5xl lg:text-[65px] font-bold bai-jamjuree-font">
                            Bảo vệ tương lai
                            <br /> từ hôm nay
                        </div>
                        <div className="text-base sm:text-lg lg:text-[23px] bai-jamjuree-font">
                            Chúng tôi cung cấp các giải pháp bảo hiểm vượt trội <br />
                            giúp bảo vệ tương lai của bạn một cách hoàn hảo nhất
                        </div>
                        <div className="mt-15">
                            <Button size="large" style={{ backgroundColor: "#00854A", color: "#fff", width: 240, height: 70, borderRadius: 15 }}>
                                <span className="text-xl lg:text-[26px] font-bold font-mono">
                                    Liên hệ </span>
                            </Button>
                        </div>

                    </div>
                    <div className="relative w-full max-w-[600px] h-auto hidden md:block lg:flex">
                        <img src={Insurance2} alt="Insurance" className="mr-69 w-full max-w-[400px] h-full max-h-[500px] rounded-t-4xl rounded-bl-4xl absolute top-0" />

                        <img src={Insurance1} alt="Insurance" className="  w-full max-w-[400px] h-auto rounded-full mt-55 absolute top-0 left-4/5 transform -translate-x-1/2 -translate-y-1/4 z-10 outline-gray-100 outline-25" />
                    </div>


                </div>
                <div className="w-full min-h-[200px] flex justify-center items-center text-center mt-10" >
                    <a className="text-lg sm:text-xl lg:text-[23px] bai-jamjuree-font leading-relaxed px-2">
                        DBV Đông Nam Bộ – đơn vị trực thuộc Tập đoàn Bảo hiểm DBV,
                        <br /> cung cấp giải pháp bảo hiểm toàn diện với dịch vụ nhanh chóng,
                        <br /> minh bạch và ứng dụng công nghệ số hiện đại.
                    </a>
                </div>
                <div className="w-full flex flex-col lg:flex-row mt-20">
                    <div className="flex-1 flex justify-center items-center p-4">
                        <img
                            src={ImgCar}
                            alt="Car"
                            className="w-full max-w-[600px] rounded-br-[300px] rounded-bl-[80px] rounded-tl-[250px] transform scale-x-[-1] opacity-65 object-cover"
                        />
                    </div>

                    <div className="flex-1 flex flex-col text-center items-center justify-center p-6">
                        <h2 className="text-3xl lg:text-[38px] font-bold mb-5 leading-snug">
                            Sứ mệnh
                        </h2>

                        <p className="text-lg lg:text-[24px] font-semibold leading-relaxed">
                            Đồng hành và bảo vệ khách hàng bằng những giải pháp
                            <br /> thiết thực, tin cậy và luôn sẵn sàng mọi lúc, mọi nơi.
                        </p>
                    </div>
                </div>

                <div className="w-full mt-20">
                    <h3 className="text-[30px] sm:text-[36px] font-bold text-[#00854A] text-center">
                        Bảo Hiểm Ô Tô
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                        {[
                            { icon: <PiCarProfileLight className="w-[88px] h-[88px]" />, label: "Xe con 5 chổ" },
                            { icon: <PiVanLight className="w-[88px] h-[88px]" />, label: "Xe du lịch" },
                            { icon: <LiaTruckPickupSolid className="w-[88px] h-[88px]" />, label: "Bán tải" },
                            { icon: <TbTruck className="w-[88px] h-[88px]" />, label: "Xe tải dưới 3 tấn" },
                            { icon: <BsTruck className="w-[88px] h-[88px]" />, label: "Xe tải 3-8 tấn" },
                            { icon: <PiTruck className="w-[88px] h-[88px]" />, label: "Xe tải 8-15 tấn" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-full h-[280px] bg-white rounded-4xl flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition"
                            >
                                {item.icon}
                                <p className="text-lg mt-4">{item.label}</p>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
            <Footer />
        </div>

    );
}

export default HomePage;