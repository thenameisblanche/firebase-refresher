// import { QRCodeCanvas } from "qrcode.react"
// import { useState } from "react"

import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

// export default function QrCode() {

//     const [url, setUrl] = useState("")
//     const downloadQRCode = (e) => {
//         e.preventDefault()
//         setUrl("")
//     }
//     const qrCodeEncoder = (e) => {
//         setUrl(e.target.value)
//     }

//     const qrCode = () => {
//         <QRCodeCanvas id="qrCode" value={url} size={300} bgColor={"#00ff00"}
//             level={"H"} />
//     }
//     return (
//         <>
//             <div className="qrcode-container">
//                 <div>QR CODE HERE</div>
//                 <div>{qrCode}</div>
//                 <div className="input-group">
//                     <form onSubmit={downloadQRCode}>
//                         <label>Enter URL</label>
//                         <input type="text" value="" placeholder="http://url" onChange={qrCodeEncoder} />
//                     </form>
//                     <button type="submit" disabled={!url}>Download</button>
//                 </div>
//             </div>
//         </>
//     )
// }\



export default function QrCode() {
    return (
        <>
            <div>
                <form>
                    <QRCodeCanvas value="Hi" />
                    <button type="submit">Download</button>

                </form>

            </div>
        </>
    )
}
