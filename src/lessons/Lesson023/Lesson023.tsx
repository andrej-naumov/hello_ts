import {useState} from 'react';
import SubmitButton from "components/SubmitButton/SubmitButton";
import InputLoginField from 'components/InputLoginField/InputLoginField';

function Lesson023() {

    const [inputValue, setInputValue] = useState<string>("");

    const onChangeInput = (event:any) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return <div>
        <InputLoginField inputType="text" placeholder="placeholder"  value={inputValue} onChange={onChangeInput}/>
        <SubmitButton value={'submit'} onClick={()=>{}}></SubmitButton>
    </div>;
}

export default Lesson023;