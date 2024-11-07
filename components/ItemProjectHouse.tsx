import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const  ItemProjectHouse = () => {
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
                <div className="px-2 py-1 bg-emerald-100 text-emerald-500 inline-block text-xs rounded-lg font-bold">
                    Đang mở bán
                </div>
                <div className="mt-2">
                    <div className="text-xl font-medium">Eahrefn Park</div>
                </div>
                <div className="font-medium">2,1 ha</div>
                <div className="font-normal">Nam Từ Liên Hà Nội</div>
               
            </div>

        </Link>
    )
}
export  default  ItemProjectHouse;