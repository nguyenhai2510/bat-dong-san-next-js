"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import KindOfHouse from "../../components/KindOfHouse";
import AcreageHouse from "../../components/AcreageHouse";
import PriceHouse from "../../components/priceHouse";
import FilterHouse from "../../components/FilterHouse";
import ItemProject from "../../components/ItemProject";
import Pagition from "../../components/Pagition";
import Link from "next/link";

const Project = () => {
    return (
        <div>
            <div className="home h-[400px] relative">
                <Swiper autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false
                    }

                } pagination={true} modules={[Pagination, Autoplay]} className="mySwiper h-full w-full">

                    {
                        [1, 2, 3, 4, 5].map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href={''} className="block h-full w-full">
                                    <img src="https://file4.batdongsan.com.vn/2022/11/04/20221104114341-ffbb_wm.jpg"
                                         className={'object-cover w-full h-full'} alt=""/>
                                </Link>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
                <div className="absolute z-10 bottom-10 left-24">
                    <div className="">
                        <div
                            className="text-xs font-medium bg-emerald-100 text-emerald-500 px-2 py-2 inline-block rounded">Đang
                            mở bán
                        </div>
                        <div className="mt-2 text-white font-bold text-4xl">The Legend Residence</div>
                        <div className="text-white font-medium mt-1">P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải Phòng.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white shadow py-2 items-center sticky top-[60px] z-40 px-40">

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
                <div className="mt-3 text-2xl font-bold">Dự án toàn quốc</div>
                <div className="mt-5">
                    {
                        [...Array(8)].map((_, index) => (
                            <div key={index} className={'mb-10'}>
                                <ItemProject/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="my-5">
                <Pagition/>
            </div>


        </div>
    )
}
export default Project