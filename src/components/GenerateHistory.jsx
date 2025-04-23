import { QRCodeSVG } from 'qrcode.react'; 
import { GENERATE_DATA } from '../constants';

export const GenerateHistory= () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    console.log(data);

    return(
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG value={text} size={50} />
                </p>
            ))}
        </div>
    );
}