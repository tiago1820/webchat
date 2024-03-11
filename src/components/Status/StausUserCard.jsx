import { useNavigate } from "react-router-dom"

export const StausUserCard = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/status/{userId}`);
    }

    return (
        <div onClick={handleNavigate} className="flex items-center p-3 cursor-pointer">
            <div>
                <img className="h-7 w-7 lg:w-10 lg:h-10 rounded-full" src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg" alt="" />
            </div>
            <div className="ml-2 text-white">
                <p>Luana Martina</p>
            </div>
        </div>
    )
}
