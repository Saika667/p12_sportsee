import { useEffect, useState } from "react"

const useDynamicFile = () => {
    const [api, setApi] = useState(null)

    const env = import.meta.env.VITE_DATA_ENV

    useEffect(() => {
        if (env === "mock") {
            import('../api/mock')
                .then(mod => {
                    setApi(mod)
                })
        } else if (env === "api") {
            import('../api/api')
            .then(mod => {
                setApi(mod)
            })
        }
    }, [env])

    return { api }
}

export default useDynamicFile