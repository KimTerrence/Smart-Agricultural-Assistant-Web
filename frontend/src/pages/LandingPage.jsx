import { useState } from "react"
import Container from "../components/Container"
import Login from "../components/Login";


export default function LandingPage(){

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return(
        <Container>
        <div className="h-screen w-full px-20 pt-8 relative">
            <div className="w-full flex justify-between items-center absolute left-0 px-20">
                <p className="text-3xl font-bold">Smart Agricultural Assistant</p>
                <div className="flex items-center gap-10">
                    <a href="">Home</a>
                    <a href="">Docs</a>
                    <a href="">About</a>
                    <a href="">Download</a>
                    <button className="px-10 py-3 bg-green-400 rounded-sm font-bold"  onClick={() => setIsLoginOpen(true)}>Login</button>
                </div>
                
            </div>
            <div className="w-full h-full flex items-center justify-between px-10">
                <div>
                <p className="text-7xl font-bold">
                    "Masaganang Ani 
                    <br />
                     Masaganang Buhay"
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga quam vero maxime! Alias impedit qui, <br /> earum laborum quisquam a nesciunt perferendis ullam nam! Cumque in blanditiis expedita eius officia.</p>
                </div>      
                <div className="flex flex-col gap-5">
                    <div className="size-120 bg-green-100 flex items-center justify-center rounded-md border-1 border-green-400">
                        <p className="text-xl">Upload/Drag Image</p>
                    </div>
                    <button className="px-10 py-5 bg-green-400 rounded-sm font-bold">Identify</button>
                </div>
            </div>
        </div>
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Container>
    )
}