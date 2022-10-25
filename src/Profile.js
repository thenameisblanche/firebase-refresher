import { useEffect, useState } from "react"
import { useAuth, upload } from "./firebase-config"

export default function Profile() {
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [photoURL, setPhotoURL] = useState("https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=")
    const currentUser = useAuth()

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }


    }

    function handleClick() {
        upload(photo, currentUser, setLoading)
    }
    useEffect(() => {
        // if (currentUser && currentUser.photoURL) { OR WE CAN DO
        if (currentUser?.photoURL) {
            // PhotoUrL is atually null
            setPhotoURL(currentUser.photoURL)
        }
    }, [currentUser])


    return (

        <div>
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>upload</button>
            <img src={photoURL} alt="avatar" style={{ verticalAlign: 'middle', width: '80px', height: '80px', borderRadius: '50%', borderColor: 'gray', borderStyle: 'outset' }} />
        </div>
    )
}
