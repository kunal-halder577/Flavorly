import { useNavigate } from "react-router-dom"
import "../assets/blob-haikei.svg"
import BlobSvg from "./BlobSvg"
import Button from "./Button"

export default function HeroSection() {
    const navigate = useNavigate();
    
    return (
        <section className="relative w-full bg-white">
            <div className="svg absolute -z-10 right-0">
                <BlobSvg />
            </div>
            <div className="heroImage absolute top-24 right-52">
                <img src="../../Layer 0.png" alt="heroImage" height={425} width={525}/>
            </div>
            <section className="w-[52vw] border absolute left-[0.75rem] top-55 flex flex-col gap-4">
                <div className="taglines flex gap-0.5 flex-col">
                    <h1 className="text-[3.25rem] font-playfair font-semibold">Fresh Recipes for a Healthier You</h1>
                    <p className="text-2xl font-[350] font-poppins">Browse hundreds of tested recipes for quick dinners, sweet treats, and everything in between</p>
                </div>
                <Button 
                    classname="max-w-[10px] text-white px-3 py-1 "
                    onClick={() => navigate('/search')}
                >
                    Browse recipes
                </Button>
            </section>
        </section>
    )
}
