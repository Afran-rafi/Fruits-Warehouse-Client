import { useEffect, useState } from "react"

const useItems = () => {

    const [Items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://serene-temple-04971.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [Items, setItems];
}

export default useItems;