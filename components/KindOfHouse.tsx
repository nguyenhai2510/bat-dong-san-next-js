import Select from "react-select";
import makeAnimated from "react-select/animated";
import {houseType} from "@/components/type";

const animatedComponents = makeAnimated();
const KindOfHouse = ({className}:houseType) => {


    const options = [
        {value: 'chocolate', label: 'Căn hộ trung cư'},
        {value: 'strawberry', label: 'Chưng cư mini'},
        {value: 'vanilla', label: 'Nhà riêng'}
    ]
    return (

            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[]}
                isMulti
                placeholder={'Loại nhà...'}
                options={options} className={`${className}`}
                inputId="custom-select-input-id"
                instanceId="custom-select-instance-id"/>


    )

}
export  default  KindOfHouse;