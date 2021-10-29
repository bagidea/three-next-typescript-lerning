import { useEffect } from "react"
import { Demo } from "../contextDemo/demo"

/*if(typeof window == "object") {
    window.addEventListener('load', () => {
        new Demo()
    })
}*/

export default () => {
    useEffect(() => {
        new Demo()
    }, [])

    return (
        <>
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                }
            `}</style>

            <canvas id="next-three-context" />
        </>
    )
}