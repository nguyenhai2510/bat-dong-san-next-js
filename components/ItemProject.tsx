import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const ItemProject = () => {
    return (
        <div className={'shadow p-2'}>
            <div className="flex items-center justify-between">
                <div className="relative w-[30%]">
                    <img src="	https://file4.batdongsan.com.vn/crop/240x180/2024/06/27/20240627151653-c624_wm.jpg"
                         className={'w-full  object-cover h-[200px]'} alt=""/>
                    <div className="flex">
                        <img
                            src="	https://file4.batdongsan.com.vn/crop/240x180/2024/06/27/20240627151433-11dc_wm.jpg"
                            alt="" className={'w-1/2 h-[80px] object-cover'}/>
                        <img
                            src="	https://file4.batdongsan.com.vn/crop/240x180/2024/06/27/20240627151433-11dc_wm.jpg"
                            alt="" className={'w-1/2 h-[80px] object-cover'}/>
                    </div>
                    <div className="absolute bottom-2 right-2 z-50 text-white">
                        <FontAwesomeIcon icon={faImage}/> +7
                    </div>
                </div>
                <div className="w-[68%]">
                    <div className="text-xs font-bold bg-violet-100 text-violet-600 inline-block px-2 rounded py-2">Đã
                        bàn giao
                    </div>
                    <div className="mt-2 font-semibold text-base">The Lenged Residence</div>
                    <div className="mt-2 line-clamp-1 text-sm">Đường Trần Quang Khải, Phường Hoàng Văn Thụ, Quận Hồng
                        Bàng, Hải Phòng.
                    </div>
                    <div className="mt-2 line-clamp-3 font-normal text-sm">The Legend Residence (hay BRG Legend - Hilton Hải Phòng)  là dự án căn hộ cao cấp tiêu chuẩn 5 sao quốc tế của chủ đầu tư tập đoàn BRG, nằm tại số 14 Trần Quang Khải, phường Hoàng Văn Thụ, quận Hồng Bàng, thành phố Hải Phòng. BRG Legend Trần Quang Khải thuộc tổ hợp dự án Hilton Hải Phòng gồm 2 tòa tháp The Legend và khách sạn Hilton danh tiếng. </div>
                    <div className="flex items-center mt-5 gap-5">
                        <img src="	https://file4.batdongsan.com.vn/2016/06/10/0I4XNtd4/20160610153959-255e.jpg"  className={'w-[32px] object-contain'} alt=""/>
                        <div className="text-sm">Tập đoàn</div>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default ItemProject