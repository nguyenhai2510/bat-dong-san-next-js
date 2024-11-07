import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faPaperPlane, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#f2f2f2] px-60 py-10 text-gray-600">
            <div className="flex justify-between pb-10 border-b-2 items-center">
                <div className="w-[40%]">
                    <div className="">
                        <img
                            src="https://staticfile.batdongsan.com.vn/images/logo/standard/black/logo_gray-5.svg"
                            className="w-[220px]"
                            alt="Logo"
                        />
                    </div>
                    <div className="mt-5">
                        <div className="flex gap-3 items-start">
                            <div className="text-xl">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="">
                                Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mt-3">
                            <div className="text-xl">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </div>
                            <div className="text-base">123456789</div>
                        </div>
                    </div>
                </div>
                <div className="font-medium flex flex-col gap-4">
                    <Link href={''} className="">Nhà bán</Link>
                    <Link href={''} className="">Nhà Cho thuê</Link>
                    <Link href={''} className="">Dự án</Link>
                </div>
                <div className="w-[30%]">
                    <div className="uppercase">ĐĂNG KÝ NHẬN TIN</div>
                    <div className="mt-3">
                        <form>
                            <div className="px-3 flex bg-white rounded-lg">

                                <input
                                    type="text"
                                    placeholder="Nhập email của bạn"
                                    className="border-0 flex-grow"
                                />
                                <button
                                    type="submit"
                                    className=" text-red-600 text-xl rounded ml-2 px-2"><FontAwesomeIcon icon={faPaperPlane} /></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="flex justify-end pt-10 ">
                <div className="flex text-2xl gap-8">
                    <Link href="#" className="">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link href="#" className="">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                    <Link href="#" className="">
                        <FontAwesomeIcon icon={faTiktok} />
                    </Link>
                    <Link href="#" className="">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
