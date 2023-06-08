import { useEffect, useState } from "react"

const useClassesData = () =>{
    const [classes, setClasses] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`populerclass.json`)
        .then(res => res.json())
        .then(data => {
            setClasses(data);
            setLoading(false);
        })
    },[])

    return [classes, loading];
}

export default useClassesData;