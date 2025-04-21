import { useState } from "react";
export default function Faq() {
    const [showCard, setShowCard] = useState(1);
    const QueAns = [1, 2, 3]
    return (
        <div className="flex p-20 h-auto text-custom_5 bg-custom_1">
            <div className="w-[30%] m-10">
                <div className="text-6xl">
                    Everything you need to know
                </div>
                <div className="text-lg my-4">
                    If you have any questions, please do not hesitate to reach to our support team.
                </div>
                <button className="bg-custom_5 text-custom_1 rounded-full px-3 py-2 text-lg my-4 hover:bg-custom_4">
                    Contact us
                </button>
            </div>
            <div className="w-[70%] ">
                {QueAns.map((item, index) => (
                    <div>
                        <div key={index} className={`m-4 bg-custom_3 text-white rounded-xl shadow-md cursor-pointer transition-all duration-500 overflow-hidden ${showCard == index ? "hover:h-auto" : " h-[60px]"} `} onClick={() => { setShowCard(index) }}>
                            <div className="text-xl px-6 py-4 font-medium">
                                What is Tavily Search API?
                            </div>
                            <div className=" text-md px-6 py-4">
                                Tavily Search API is a specialized search engine designed for Large Language Models (LLMs) and AI agents. It provides real-time, accurate, and unbiased information, enabling AI applications to retrieve and process data efficiently. Tavily is built with AI developers in mind, simplifying the process of integrating dynamic web information into AI-driven solutions.
                            </div>
                        </div>
                    </div>
                ))}
                {/* <QueAns key={1}/>
                <QueAns key={2}/>
                <QueAns key={3}/> */}
            </div>
        </div>
    )
}