import { useState, useEffect } from "react";
import './ProgressBar.css';

export const ProgressBar = (index, activeIndex, duration) => {
    const isActive = index = activeIndex;
    const [progress, setProgress] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1
                }
                clearInterval(intervalId)
                return prev
            })
        }, duration / 120)
    }, [duration, activeIndex]);

    useEffect(() => {
        setProgress(0)
    }, [activeIndex])
    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div
                className={`${isActive ? "progress-bar" : ""}`}
                style={{ width: `${progress}%` }}
            >

            </div>
        </div>
    )
}