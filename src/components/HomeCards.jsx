import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";


const HomeCards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('https://b9-a10-server-site-project.vercel.app/home-tour')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    if (cards.length === 0) {
        return <Loading></Loading>
    } else {
        return (
            <div className="grid z-0 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-10 gap-y-8">
                {
                    cards.map(card => <Card
                        key={card._id}
                        card={card}
                    ></Card>)
                }
            </div>
        );
    }


};

export default HomeCards;