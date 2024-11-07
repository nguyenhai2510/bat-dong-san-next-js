'use client';

import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faArrowRight, faArrowsRotate, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import ItemHouse from "../components/ItemHouse";
import ItemProjectHouse from "../components/ItemProjectHouse";
import Link from "next/link";


const animatedComponents = makeAnimated();

function Home() {
    const [valueName, setValueName] = useState<number>(0)

    const nameHome = [
        {
            name: 'Nhà bán',
            code: 'nha-ban'
        },
        {
            name: 'Nhà cho thuê',
            code: 'nha-cho-thue'
        },
        {
            name: 'Dự án',
            code: 'du-an'
        }
    ]

    const options = [
        {value: 'chocolate', label: 'Căn hộ trung cư'},
        {value: 'strawberry', label: 'Chưng cư mini'},
        {value: 'vanilla', label: 'Nhà riêng'}
    ]
    return (
        <div>

            <div className={'home relative h-[560px] w-full bg-amber-400 '}>
                <div className="absolute w-[80%] top-[20px] left-[50%] -translate-x-1/2 z-40">
                    <div className=" p-3">
                        <div className="flex items-center gap-1">
                            {
                                nameHome.map((item, index) => (
                                    <div key={index}
                                         onClick={() => setValueName(index)}
                                         className={` text-gray-500 text-base font-medium px-2 py-1 rounded-t hover:bg-black hover:bg-opacity-60 cursor-pointer hover:text-white ${index === valueName ? 'bg-black bg-opacity-60  text-white' : 'bg-white'}`}>{item.name}</div>
                                ))
                            }


                        </div>
                        <div className="w-full bg-black bg-opacity-60 p-4 rounded-b">
                            <div className="flex items-center gap-2 bg-white  rounded-lg px-2 py-2">
                                <div className="">
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={[]}
                                        isMulti
                                        placeholder={'Loại nhà...'}
                                        options={options} className={`w-[450px]`}
                                        inputId="custom-select-input-id1"
                                        instanceId="custom-select-instance-id1"/>
                                </div>
                                <div className="flex-grow ">
                                    <div className="flex w-full">
                                        <input type="text" placeholder={'Tìm kiếm ...'}
                                               className={'focus-visible:outline-0 flex-grow border-0 '}/>
                                        <div
                                            className="flex gap-1 bg-red-700 items-center ml-3 text-white py-1 px-3 rounded-lg font-medium">
                                            <div>
                                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                            </div>
                                            <div>Tìm kiếm</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex p-2 items-center gap-3">
                                <div className="flex-grow">
                                    <div className="grid grid-cols-4 gap-1">
                                        <div
                                            className="border border-white text-white rounded flex items-center px-2">Hà
                                            Nội
                                        </div>
                                        <div className="">
                                            <button type={'button'}
                                                    className={`flex text-white items-center border border-white  p-2 rounded  w-full`}
                                                    id="dropdownNavbarLinkH" data-dropdown-toggle="dropdownNavbarH">
                                                <div className="">Mức giá</div>
                                                <div className="ml-auto">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </button>

                                            <div id="dropdownNavbarH"
                                                 className="z-10 text-black  hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] dark:bg-gray-700 dark:divide-gray-600">
                                                <div className='p-2'>
                                                    <div className="flex items-center justify-between">
                                                        <input type="number"
                                                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                                                               placeholder={'Từ'}/>
                                                        <div className="">
                                                            <FontAwesomeIcon icon={faArrowRight}/>
                                                        </div>
                                                        <input type="number"
                                                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                                                               placeholder={'Đến'}/>

                                                    </div>
                                                    <div className="mt-5">
                                                        <div
                                                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                                                            cả mức
                                                            giá
                                                        </div>
                                                        <div
                                                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                                                            cả mức
                                                            giá
                                                        </div>
                                                        <div
                                                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                                                            cả mức
                                                            giá
                                                        </div>


                                                    </div>

                                                </div>

                                            </div>
                                        </div>


                                        <div className="">
                                            <button type={'button'}
                                                    className={`flex text-white items-center border border-white  p-2 rounded  w-full `}
                                                    id="dropdownDTTH" data-dropdown-toggle="dropdownDTH">
                                                <div className="">Diện tích</div>
                                                <div className="ml-auto">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </button>

                                            <div id="dropdownDTH"
                                                 className="z-10 text-black  hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] dark:bg-gray-700 dark:divide-gray-600">
                                                <div className='p-2'>
                                                    <div className="flex items-center justify-between">
                                                        <input type="number"
                                                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                                                               placeholder={'Từ'}/>
                                                        <div className="">
                                                            <FontAwesomeIcon icon={faArrowRight}/>
                                                        </div>
                                                        <input type="number"
                                                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                                                               placeholder={'Đến'}/>

                                                    </div>
                                                    <div className="mt-5">
                                                        <div
                                                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                                                            cả diện tích
                                                        </div>

                                                        <div
                                                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                                                            cả mức
                                                            giá
                                                        </div>


                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="">
                                            <button type={'button'}
                                                    className={`flex items-center border border-white text-white p-2 rounded  w-full`}
                                                    id="dropdownLTH" data-dropdown-toggle="dropdownLH">
                                                <div className="">Lọc thêm</div>
                                                <div className="ml-auto">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </button>

                                            <div id="dropdownLH"
                                                 className="z-10  hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] dark:bg-gray-700 dark:divide-gray-600">
                                                <div className='p-2'>
                                                    <div className="text-gray-800">
                                                        <div className="text-black font-bold">Số phòng ngủ</div>
                                                        <div className="flex gap-2 flex-wrap font-normal mt-3 ">
                                                            <div
                                                                className="size-[30px] rounded-full bg-gray-200 flex justify-center items-center ">1
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-800 mt-3">
                                                        <div className="text-black font-bold">Hướng nhà</div>
                                                        <div className="flex gap-2 flex-wrap font-normal mt-3 ">
                                                            <div
                                                                className="rounded-full bg-gray-200 flex justify-center items-center px-3 py-1">Đông
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="ml-auto text-white ">
                                    <FontAwesomeIcon icon={faArrowsRotate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper autoplay={
                    {
                        delay: 3000,
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
            </div>

            <div className="px-60 mt-8">
                <div className="">
                    <div className="text-3xl font-medium">Bất động sản dành cho bạn</div>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-4 gap-10">
                        {
                            [...Array(8)].map((_, item) => (
                                <ItemHouse key={item}/>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className="px-60 mt-16">
                <div className="flex items-center justify-between">
                    <div className="text-3xl font-medium">Dự án bất động sản nổi bật</div>
                    <div className="text-sm text-red-600">
                        <Link href={''}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
                <div className="mt-5">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper h-full w-full"
                    >
                        {[...Array(8)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <ItemProjectHouse/>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </div>
            
            <div className="px-60 mt-16">
                <div className="w-full h-[200px]">
                    <img src="https://tpc.googlesyndication.com/simgad/5980769775489832006" className={'object-cover w-full h-full'} alt=""/>
                </div>
                <div className="mt-14">
                    <div className={'grid grid-cols-4 gap-16'}>
                        <div className="text-center">
                            <div className="text-center flex justify-center">
                                <img src="	https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                                     alt="" className={'h-[100px] w-[130px] object-contain'}/>
                            </div>

                            <div className="mt-5 font-medium text-xl">Bất động sản bán</div>
                            <div className="mt-5 text-sm font-normal">
                                Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao
                                lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán
                                nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình
                                BĐS khác.
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-center flex justify-center">
                                <img src="	https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                                     alt="" className={'h-[100px] w-[130px] object-contain'}/>
                            </div>

                            <div className="mt-5 font-medium text-xl">Bất động sản bán</div>
                            <div className="mt-5 text-sm font-normal">
                                Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao
                                lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán
                                nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình
                                BĐS khác.
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-center flex justify-center">
                                <img src="	https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                                     alt="" className={'h-[100px] w-[130px] object-contain'}/>
                            </div>

                            <div className="mt-5 font-medium text-xl">Bất động sản bán</div>
                            <div className="mt-5 text-sm font-normal">
                                Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao
                                lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán
                                nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình
                                BĐS khác.
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-center flex justify-center">
                                <img src="	https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                                     alt="" className={'h-[100px] w-[130px] object-contain'}/>
                            </div>

                            <div className="mt-5 font-medium text-xl">Bất động sản bán</div>
                            <div className="mt-5 text-sm font-normal">
                                Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao
                                lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán
                                nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình
                                BĐS khác.
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;