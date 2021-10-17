import { useEffect, useState } from "react"

const useMenuitems = () => {
    const [items,setItems] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahad98723/code-api-json-onion-restaurant/main/onion.json')
        .then(res => res.json())
        .then(data => setItems(data))
        
    },[])
    return [items]
}

export default useMenuitems