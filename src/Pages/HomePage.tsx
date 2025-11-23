import Header from "../Components/Header";
import Logo from "../assets/logo_1751201096793.svg"
import Insurance1 from "../assets/pic/craiyon_151636_A_realistic_photo_insurance.png"
import Insurance2 from "../assets/pic/fotor-ai-20251122151142.jpg"
import { Button } from 'antd';

function HomePage() {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <Header />
            <div className="w-[1370px] h-screen bg-yellow-600 flex-1 flex-col justify-center ">
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

            </div>

        </div>

    );
}

export default HomePage;