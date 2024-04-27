import { useEffect, useState } from "react";


const HomeCards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home-tour')
            .then(res => res.json())
            .then(data =>setCards(data))
    },[])
    return (
        <div>
            <p>hello</p>
            {cards.length}
        </div>
    );
};

export default HomeCards;