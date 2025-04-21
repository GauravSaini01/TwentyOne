import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()
    const sidebarList = ["New Meeting", "Previous Meeting", "Summary", "Ask TwentyOne", "Help"];
    return (
        <div className="w-[15%] bg-custom_5 h-screen text-lg text-white">
            <div className="text-3xl flex m-6 cursor-pointer" onClick={()=> navigate("/")}>
                <div className="text-custom_3 font-bold">Twenty</div>
                <div className="text-white font-bold">ONE</div>
            </div>
            <div className="gap-6 flex flex-col justify-center p-6 ">
                {sidebarList.map((item, index) => (
                    <div key={index} className="cursor-pointer hover:text-custom_2">{item}</div>
                ))}
            </div>
        </div>
    )
}