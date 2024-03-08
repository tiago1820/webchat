
export const ChatCard = () => {
    return (
        <>
            <div className="flex items-center justify-center py-2 group cursor-pointer">
            <div className="w-[20%]">
                <img
                    className="h-14 w-14 rounded-full"
                    src="https://cdn.pixabay.com/photo/2016/03/04/19/07/gecko-1236523_1280.jpg" alt="" />
            </div>
            <div className="pl-5 w-[80%]">
                <div className="flex justify-between items-center">
                    <p className="text-lg">username</p>
                    <p className="text-sm">timestamp</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>message...</p>
                    <div className="flex space-x-1 items-center">
                        <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full">5</p>
                    </div>
                </div>

            </div>

        </div>

        {/* FAKE */}
        <div className="flex items-center justify-center py-2 group cursor-pointer">
            <div className="w-[20%]">
                <img
                    className="h-14 w-14 rounded-full"
                    src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg" alt="" />
            </div>
            <div className="pl-5 w-[80%]">
                <div className="flex justify-between items-center">
                    <p className="text-lg">username</p>
                    <p className="text-sm">timestamp</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>message...</p>
                    <div className="flex space-x-1 items-center">
                        <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full">1</p>
                    </div>
                </div>

            </div>

        </div>

        <div className="flex items-center justify-center py-2 group cursor-pointer">
            <div className="w-[20%]">
                <img
                    className="h-14 w-14 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/02/05/16/41/monkey-3132624_1280.jpg" alt="" />
            </div>
            <div className="pl-5 w-[80%]">
                <div className="flex justify-between items-center">
                    <p className="text-lg">username</p>
                    <p className="text-sm">timestamp</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>message...</p>
                    <div className="flex space-x-1 items-center">
                        <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full">3</p>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}