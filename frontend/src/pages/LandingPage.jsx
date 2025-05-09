import Container from "../components/container"


export default function LandingPage(){
    return(
        <Container>
        <div className="h-screen w-full px-20 pt-8">
            <div className="w-full flex justify-between items-center">
                <p className="text-3xl font-bold">Smart Agriculural Assistant</p>
                <button className="px-10 py-3 bg-green-400 rounded-sm font-bold">Login</button>
            </div>
            <div className="w-full h-full flex items-center justify-between px-10">
                <div>
                <p className="text-7xl">
                    Masaganang Ani 
                    <br />
                     Masaganang Buhay
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
        </Container>
    )
}