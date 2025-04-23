import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned]= useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        console.log(prevData);
        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify(...prevData, [result[0].rawValue])
        );
    }

    console.log('Переменная', scanned)

    return(
        <div className={s.container}>
            <Scanner 
                allowMultiple={false}
                onScan={scanHandler} 
                components={{
                    audio: false,
                    finder: false,}}
                styles={{container: {width: 200}}}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    );
};