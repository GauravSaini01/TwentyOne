import { useNavigate } from "react-router-dom";
import Appbar from "./Appbar"
import { useInView } from "./useInView";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Home() {
    const { ref, isInView } = useInView(0.2);
    const navigate = useNavigate()

    return (
        <div className="h-screen text-custom_5 bg-white bg-gradient-to-t from-custom_1 to-white">
            <div className="flex justify-center p-10">
                <Appbar />
            </div>
            <div className="px-10  z-10 flex h-[50%] items-center ">
                <div ref={ref} className={`w-[60%] ml-10 cursor-default ${isInView ? "motion-preset-focus" : ""}`}>
                    <div className="flex">
                        <div className=" text-custom_2 text-6xl flex gap-4">
                            AI
                        </div>
                        <div className="text-6xl flex gap-4">
                            -Powered Meeting Notes
                        </div>
                    </div>
                    <div className="text-xl my-4 ">
                        Upload your meeting recordings and get accurate, speaker-labeled transcripts with smart summaries — in seconds.
                    </div>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-custom_5 px-6 py-3 text-lg text-white hover:bg-custom_4"
                        onClick={() => navigate("/main")}>
                        Get Started →
                    </HoverBorderGradient>
                </div>
                <div>
                </div>
            </div>
            <div className="flex justify-center text-9xl z-10 mt-16 font-bold drop-shadow-2xl">
                <div className="flex justify-center text-custom_3  ">
                    Twenty
                </div>
                <div className="flex justify-center text-white">
                    ONE
                </div>
            </div>
        </div>
    )
}