import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faImage} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ItemProduct = () => {
    return (
        <Link href={''} className={'w-full shadow rounded relative'}>
            <div className="absolute hrefp-1 left-1 bg-red-700 text-white px-3 text-xs rounded-xl font-bold z-10">VIP
            </div>
            <div className="relative h-[250px] flex">

                <div className="w-[65%] h-full">
                    <img src="https://file4.batdongsan.com.vn/crop/562x284/2024/06/30/20240630151321-031c_wm.jpg" alt=""
                         className={'w-full h-full object-cover rounded-t'}/>
                </div>
                <div className="w-[35%] h-full ">
                    <div className="h-[50%]">
                        <img
                            src="	https://file4.batdongsan.com.vn/crop/283x141/2024/06/30/20240630151321-1a6a_wm.jpg"
                            alt="" className={'w-full h-full object-cover'}/>
                    </div>
                    <div className="h-[50%] flex">
                        <img src="https://file4.batdongsan.com.vn/crop/140x140/2024/06/30/20240630151321-2622_wm.jpg"
                             alt="" className={'w-[50%] object-cover h-full'}/>
                        <img src="https://file4.batdongsan.com.vn/crop/140x140/2024/06/30/20240630151321-f101_wm.jpg"
                             className={'w-[50%] object-cover h-full'} alt=""/>
                    </div>
                </div>
                <div className="absolute bothrefm-2 right-2 z-50 text-white">
                    <FontAwesomeIcon icon={faImage}/> +7
                </div>

            </div>
            <div className="bg-white p-5">
                <div className="uppercase text-sm font-medium text-[#2C2C2C]"> CHÍNH CHỦ BÁN CĂN GÓC CITY GATE QUẬN 8
                    A2-08-03 VIEW HỒ BƠI VÀ A2-17-10 GIÁ 2,3 TỶ CĂN 3PN 2,580TY
                </div>

                <div className="mt-3 flex gap-4 text-sm">
                    <div className="text-red-600  font-medium">
                        <span>2.3 tỷ</span>
                        <span className={'ml-2'}>73,29m <sup>2</sup></span>
                    </div>
                    <div className="text-gray-600">31,38tr/m <sup>2</sup></div>
                    <div className="text-gray-600">
                        <FontAwesomeIcon icon={faBed}/> 9
                    </div>
                    <div className="text-gray-600">
                        <FontAwesomeIcon icon={faBath}/> 2
                    </div>
                </div>
                <div className="line-clamp-2">
                    <div
                        className="re__section-body re__detail-content js__section-body js__pr-description js__tracking">
                        Mua nhà tặng tiền hoàn thiện. Chỉ có 200 căn đầu tiên áp dụng chiết khấu lên tới 25%. Liên hệ
                        ngay.<br/><br/>Phân khu Cọ Xanh.<br/>Liền kề 62.5m² (5mx12.5m) ~ 7,x tỷ.<br/>Liền kề 65m²
                        (5mx13m) ~ 7.X tỷ.<br/>Liền kề 75m² (5mx15m)~ 9,x tỷ.<br/>Liền kề 80m² (5mx16m)~ 10,x tỷ.<br/>Liền
                        kề góc 125m² ~ 16.X tỷ.<br/><br/>Phân khu San Hô.<br/><br/>Shophouse góc 102m² (6mx17m) ~ 18.X
                        tỷ.<br/>Shophouse góc 104m² ~ 16.X tỷ.<br/>Shophouse góc 152m² ~ 29,x tỷ.<br/>Shophouse góc 90m²
                        ~ 14,x tỷ.<br/><br/>Phân khu Đảo Dừa.<br/>Song lập 136m² ~ 22.X tỷ.<br/>Tứ lập 120m² ~ 15,x
                        tỷ.<br/>Liền kề 70m² ~ 9.X tỷ.<br/><br/>Chính sách bán hàng siêu hấp dẫn:<br/>- Hỗ trợ lãi suất
                        0% trong 36 tháng.<br/>- Thanh hrefán sớm CK 18% + CK dòng tiền 11%.<br/>- Hỗ trợ tiền hoàn thiện
                        nội thất 7% (có điều kiện áp dụng cho 200 căn).<br/><br/>Liên hệ tư vấn và xem nhà miễn
                        phí <span className="hidden-mobile hidden-phone m-cover js__btn-tracking"
                                 data-kyc-name="Trần Văn Minh"
                                  data-kyc-avatar="" kyc-tracking-id="lead-phone-ldp"
                                  tracking-label="loc=Sale-Listing Details-body,prid=40249222">0983 839 ***</span>
                    </div>
                </div>
            </div>


        </Link>
    )
}

export default ItemProduct;