import React, { useState, useEffect } from 'react'

function UseEffectFetch() {
    const [ulkeler, SetUlkeler] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all").
            then((res) => res.json()).then((data) => SetUlkeler(data));

    }, [])
    //console.log(ulkeler)
    return (
        <div className="text-center mt-5">
            <h1 className="bg-warning"> COUNTRY INFORMATION</h1>

            {

                ulkeler.map((ulke) => {
                    const { id, name, capital, flag } = ulke
                    return (
                        <div key={name}>
                            <img src={flag} alt="" width="50%" />
                            <div className="" >
                                <h4>{name}</h4>
                                <h4>{capital}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffectFetch