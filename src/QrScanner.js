import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QrScanner() {
    const [data, setData] = useState('No result');

    return (

        <div>
            <QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }

                if (!!error) {
                    console.info(error);
                }
            }}
                style={{ width: '100%' }}
            />
            <p>{data}</p>0

        </div >

    )
}
