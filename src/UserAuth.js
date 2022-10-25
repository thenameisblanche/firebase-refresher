import { logout, login, signup, useAuth } from "./firebase-config"
import { useRef, useState } from "react"
import Profile from "./Profile";

export default function UserAuth() {

    const [loading, setLoading] = useState(false)
    const currentUser = useAuth();

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSignUp() {
        setLoading(true)
        try {
            await signup(emailRef.current.value, passwordRef.current.value)

        } catch (error) {
            alert(error)
        }
        setLoading(false)
    }
    async function handleLogin() {
        setLoading(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value)

        } catch (error) {
            alert(error)
        }
        setLoading(false)
    }

    async function handleLogout() {
        setLoading(true)
        try {
            await logout()
        } catch (error) {
            alert(error)
        }
        setLoading(false)
    }



    return (
        <div>
            <div>Currently logged in as: {currentUser?.email} </div>
            {
                !currentUser &&
                <>

                    <input ref={emailRef} type="text" placeholder="email" />
                    <input ref={passwordRef} type="text" placeholder="password" />
                    <button disabled={loading} onClick={handleSignUp}>Sign Up</button>
                    <button disabled={loading} onClick={handleLogin}>Log In</button>
                </>
            }


            {currentUser != null && <>
                <Profile />
                <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
            </>}
        </div>
    )
}
