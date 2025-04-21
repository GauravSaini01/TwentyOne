import { useState } from "react";

export default function QueAns() {
    const [showCard, setShowCard] = useState(false);

    return (
        <div className={`m-4 bg-custom_3 text-white rounded-xl shadow-md cursor-pointer transition-all duration-500 overflow-hidden ${showCard==false ? " h-[60px]" : "hover:h-auto"} `} onClick={() => {setShowCard(!showCard)}}>
            <div className="text-xl px-6 py-4 font-medium">
                What is Tavily Search API?
            </div>
            <div className=" text-md px-6 py-4">
                Tavily Search API is a specialized search engine designed for Large Language Models (LLMs) and AI agents. It provides real-time, accurate, and unbiased information, enabling AI applications to retrieve and process data efficiently. Tavily is built with AI developers in mind, simplifying the process of integrating dynamic web information into AI-driven solutions.
            </div>
            
        </div>

    )
}