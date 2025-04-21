export default function Appbar() {
    return (
        <div className="flex w-full py-[12px] px-8 bg-custom_5 text-white justify-between rounded-full item-center shadow-xl">
            <div className="text-3xl flex">
                <div className="text-custom_2 font-bold">Twenty</div>
                <div className="text-white font-bold">ONE</div>
            </div>
            <div className="flex text-lg gap-8 cursor-pointer items-center">
                <div className="text-xl hover:text-custom_3">Signin</div>
                <div className="text-xl hover:text-custom_3 ">Signup</div>
            </div>
        </div>
    )
}