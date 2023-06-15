import React, { useEffect, useState } from 'react';
import { opinions } from '../../Data'
import './Testimonials.css'
import { useLocation } from 'react-router-dom';

function Testimonial() {

    const [data, setData] = useState(opinions);

    const [currentData, setCurrentData] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let player = [];

        if (path === '/messi') {
            player = data[0];
        } else if (path === '/ronaldo') {
            player = data[1];
        } else if (path === '/neymar') {
            player = data[2];
        }
        setCurrentData(player)
    }, [data, location])
    return (
        <>
            <h1 className='title'>Opinions of journalists</h1>
            <div className='cards_container'>

                {
                    currentData?.map((jugador) => (
                        <div className="header_card" key={jugador.id}>
                            <div className='title_card'>
                                <img src={jugador.img} alt={jugador.periodista} />
                                <h3>{jugador.periodista}</h3>
                            </div>
                            <p>{jugador.opinion}</p>
                        </div>
                    ))
                }

            </div>
        </>

    )
}
export default Testimonial;
