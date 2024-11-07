import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {filterType} from "@/components/type";

const FilterHouse = ({className}:filterType) => {
    return (
        <>
            <button type={'button'}
                    className={`flex items-center border border-white  p-2 rounded  w-full ${className}`}
                    id="dropdownLT" data-dropdown-toggle="dropdownL">
                <div className="">Lọc thêm</div>
                <div className="ml-auto">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </button>

            <div id="dropdownL"
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
        </>
    )
}

export default FilterHouse;