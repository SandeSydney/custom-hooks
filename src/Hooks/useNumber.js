import { useEffect, useState } from "react"


function useNumber(operation) {
    const [num, setNum] = useState(0)

    // useEffect for rendering
    useEffect(() => {
        let intval = setInterval(() => {
            setNum(num+(operation))
        }, 1000);

        return () => {
            clearInterval(intval)
        }
    }, [num])

    return num
}
export default useNumber