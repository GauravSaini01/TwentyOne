import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import DownloadAndCopyPdf from "../components/PDF";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { FileUpload } from "../components/FileUpload";
import axios from 'axios'
import Sidebar from "../components/Sidebar";

const transcript: string = `# Project Documentation

## ✨ Features

- Easy to write using Markdown
- Converts to styled PDF
- No text overlap
- Proper spacing, bullets, code blocks, and headings

## 🔧 Installation

1. Install dependencies using npm or yarn
2. Write your content in **Markdown**
3. Press "Download PDF"

## 💻 Code Example

\`\`\`ts
const greet = (name: string): string => {
  return \`Hello, \${name}!\`;
};
\`\`\`

## 📌 Notes

> This is a blockquote. Use it for important notes or quotes.

Thanks for using our Markdown to PDF converter!`

type ChatType = { "identity": string, "text": string }
export default function MainPage() {
    const [selectedTab, setSelectedTab] = useState<'Summary' | 'Ask'>('Ask');
    const [userMessage, setUserMessage] = useState<string>("")
    const [allMessages, setAllMessages] = useState<ChatType[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);  // Ref for the end of the messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [allMessages]);
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAllMessages((prevMessages) => [...prevMessages, { "identity": "user", "text": userMessage }]);

        axios.post('http://localhost:8000/chat', {
            message: userMessage
        }).then((response) => {
            console.log(response.data);
            setAllMessages((prevMessages) => [...prevMessages, ({ "identity": "assistant", "text": response.data.message })]);
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    };
    const messages = [];
    return (
        <div className="bg-custom_1">
            <div className="flex">
                <Sidebar/>
                <div className=" w-[85%] overflow-y-auto h-screen ">
                    <div className="flex w-full">
                        <div className="w-[70%] h-[600px] p-5">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=uLrReyH5cu0"
                                controls
                                playing
                                loop
                                muted
                                className="rounded-2xl overflow-hidden"
                                width="100%"
                                height="100%"
                            />
                            {/* <FileUpload/> */}
                        </div>
                        <div className="w-[30%] bg-custom_5 h-[562px] rounded-2xl my-5 mr-2">
                            <div className="flex justify-between p-4 text-white">
                                <div className="text-2xl">Transcript</div>
                                <DownloadAndCopyPdf text={transcript} />
                            </div>

                            <div className="mx-4 my-1">
                                <input className="bg-white w-full py-1 px-3 rounded-lg outline-none" type="text" />
                            </div>
                            <div className="text-white h-[430px] overflow-y-auto p-4 my-2 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae illum dignissimos cupiditate, soluta eaque. Accusamus laboriosam perspiciatis quibusdam aperiam ipsa est consequuntur dolore, voluptatum qui sed exercitationem. Sapiente, repellendus.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus saepe praesentium ab numquam distinctio inventore aliquam enim autem repellendus, quod perferendis quam. Dolores asperiores eos distinctio ratione, sint non!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae illum dignissimos cupiditate, soluta eaque. Accusamus laboriosam perspiciatis quibusdam aperiam ipsa est consequuntur dolore, voluptatum qui sed exercitationem. Sapiente, repellendus.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus saepe praesentium ab numquam distinctio inventore aliquam enim autem repellendus, quod perferendis quam. Dolores asperiores eos distinctio ratione, sint non!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae illum dignissimos cupiditate, soluta eaque. Accusamus laboriosam perspiciatis quibusdam aperiam ipsa est consequuntur dolore, voluptatum qui sed exercitationem. Sapiente, repellendus.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus saepe praesentium ab numquam distinctio inventore aliquam enim autem repellendus, quod perferendis quam. Dolores asperiores eos distinctio ratione, sint non!

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 mx-8 text-xl">
                            <div className={`cursor-pointer text-black ${selectedTab == 'Summary' ? "border-b-2 border-custom_5" : ""}`} onClick={() => setSelectedTab('Summary')}>Summary</div>
                            <div className={`cursor-pointer ${selectedTab == 'Ask' ? "border-b-2 border-custom_5" : ""}`} onClick={() => setSelectedTab('Ask')}>Ask</div>
                        </div>
                        {selectedTab == 'Summary' ?
                            <div className="bg-custom_5 h-[650px] my-5 mx-6 rounded-2xl">
                                <div className=" overflow-auto">
                                    <div className="p-4 bg-customBg flex justify-end gap-4 rounded-2xl">
                                        <DownloadAndCopyPdf text={transcript} />
                                    </div>
                                    <div className="text-white m-6">{transcript}</div>
                                </div>
                            </div> :
                            <div className="bg-custom_5 h-[650px] my-5 mx-6 rounded-2xl ">
                                <div className="h-[85%] w-full overflow-auto">
                                    {allMessages.map((item, index) => (
                                        <div key={index}>
                                            {item.identity === 'user' ? (
                                                <div className="flex justify-end m-6">
                                                    <div className="chat chat-sender">
                                                        <div className="bg-white text-customBg p-3 m-2 max-w-[800px] rounded-2xl">
                                                            {item.text}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex justify-start m-6">
                                                    <div className="bg-customBg text-white p-3 max-w-[800px] rounded-2xl">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            )}
                                            <div ref={messagesEndRef} />
                                        </div>

                                    ))}


                                </div>
                                <div className="w-full h-[15%] py-6 px-12">
                                    {/* <input className="w-full rounded-full p-6 h-12 text-lg outline-none " type="text" /> */}
                                    <PlaceholdersAndVanishInput
                                        placeholders={placeholders}
                                        onChange={handleChange}
                                        onSubmit={onSubmit}
                                    />
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}