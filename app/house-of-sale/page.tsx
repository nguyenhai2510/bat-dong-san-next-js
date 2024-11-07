"use client"
import {faArrowsRotate, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import KindOfHouse from "../../components/KindOfHouse";
import AcreageHouse from "../../components/AcreageHouse";
import PriceHouse from "../../components/priceHouse";
import FilterHouse from "../../components/FilterHouse";
import ItemProduct from "../../components/ItemProduct";
import Pagition from "../../components/Pagition";
import {usePathname} from "next/navigation";
import Link from "next/link";

const HouseOfSale = () => {
    const location = usePathname();
    return (
        <div>
            <div className="flex bg-white shadow py-2 items-center sticky top-[60px] z-40">
                <div className="flex px-5 font-bold  ">
                    <Link href={'/house-of-sale'}
                          className={`px-3 py-1  rounded-l w-[100px] text-center ${location.includes('nha-ban') ? 'text-white bg-gray-600' : 'border border-r-0'}`}>Bán</Link>
                    <Link href={'/house-for-rent'}
                          className={`px-3 py-1  rounded-r w-[100px] text-center ${location.includes('nha-cho-thue') ? 'text-white bg-gray-600' : 'border border-l-0'}`}>Cho thuê</Link>
                </div>
                <div className="border rounded bg-gray-100 flex w-[300px] items-center p-2 h-[35px]">
                    <div className=""><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                    <input type="text" className={' bg-transparent flex-grow border-0'}
                           placeholder={'Tìm kiếm khu vực hà nội...'}/>
                </div>

                <div className="flex-grow ms-1">
                    <div className="grid grid-cols-4  gap-1 ">

                        <div className=""><KindOfHouse className={'w-full'}/></div>

                        <div className="">
                            <AcreageHouse className={'w-full text-gray-600 border border-gray-200 '}/>
                        </div>
                        <div className="">
                            <PriceHouse className={'w-full text-gray-600 border border-gray-200 '}/>
                        </div>
                        <div className="">
                            <FilterHouse className={'w-full text-gray-600 border border-gray-200'}/>
                        </div>
                    </div>

                </div>
                <div className="px-2 cursor-pointer">
                    <div className="font-medium"><FontAwesomeIcon icon={faArrowsRotate}/> Đặt lại</div>
                </div>
            </div>
            <div className="my-5 px-72">
                <div className="text-sm">
                    <span className={'text-gray-600'}>Bán</span>/Tất cả BĐS trên toàn quốc
                </div>
                <div className="mt-5 text-2xl font-bold">Mua bán nhà đất trên toàn quốc</div>

                <div className="mt-5 flex ">
                    <div className="w-[80%]">
                        {
                            [...Array(10)].map((item, index) => (
                                <div className={'mb-10'} key={index}>
                                    <ItemProduct/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex-grow">
                        <div className="p-2">
                            <div className={'p-3 border rounded'}>
                                <div className="font-semibold text-sm">Lọc theo khoảng giá</div>
                                <div className="flex flex-col font-normal text-gray-600 mt-5 gap-2">
                                    <div className="">1 - 2 tỷ</div>
                                    <div className="">2 - 3 tỷ</div>
                                    <div className="">3 - 5 tỷ</div>
                                    <div className="">5 - 7 tỷ</div>
                                    <div className="">7 - 10 tỷ</div>
                                </div>


                            </div>
                            <div className={'p-3 border rounded mt-5'}>
                                <div className="font-semibold text-sm">Lọc theo diện tích</div>
                                <div className="flex flex-col font-normal text-gray-600 mt-5 gap-2">
                                    <div className="">Dưới 30 m²</div>
                                    <div className="">50 - 80 m²</div>
                                    <div className="">80 - 100 m²</div>
                                    <div className="">100 - 150 m²</div>
                                    <div className="">150 - 200 m²</div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="">
                    <Pagition/>

                </div>
            </div>
        </div>

    )

}
export default HouseOfSale;