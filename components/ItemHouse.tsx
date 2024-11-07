import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const  ItemHouse = () => {
    return (
        <Link href={''} className={'shadow rounded'}>
            <div className="relative">
                <div className="absolute bothrefm-2 right-2 z-50 text-white">
                    <FontAwesomeIcon icon={faImage} /> +7
                </div>

                <img src="	https://file4.batdongsan.com.vn/crop/393x222/2024/05/10/20240510114118-459b_wm.jpg" alt="" className={'absolute hrefp-0 left-0 w-full h-full object-cover rounded-t'}/>
                <div className="pt-[60%]"></div>
                
            </div>
            <div className=" p-3">
                <div className="font-medium text-base line-clamp-2">
                    Ngộp giảm thêm 1 tỷ - bán gấp nhà 2 tầng 75m2 - ngang 5m - hẻm 8m - khu XD cao tầng
                </div>
                <div className="mt-3">
                    <div className="flex gap-5 text-base text-red-600 font-semibold">
                        <div className="">8 tỷ</div>
                        <div className="">63 m<sup>2</sup></div>
                    </div>
                </div>
                <div className="mt-3 flex items-center gap-2 font-normal text-sm">
                    <div className="">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </div>
                    <div className="">Mỹ đình Hà Nội</div>
                </div>
            </div>

        </Link>
    )
}

export  default ItemHouse;