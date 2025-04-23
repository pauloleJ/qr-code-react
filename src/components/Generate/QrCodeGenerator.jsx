import { QRCodeSVG } from 'qrcode.react'; 
import { useState } from 'react';
import s from './QrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );
        
        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    console.log('result: ', result)

    return(
        <div className={s.container}>
            <input 
                type="text" 
                value={value} 
                placeholder='Введите текст...'
                onChange={onChangeHandler} 
                className={s.input} 
            />
            <button 
                type="button" 
                className={s.button} 
                onClick={onClickHandler}>Сгенерировать</button>
            {result !== '' && (
                <div className={s.qrWrapper}>
                <QRCodeSVG value={result}/>
                </div>
            )}
        </div>
    )
}
