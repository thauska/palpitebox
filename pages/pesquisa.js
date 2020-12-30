import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div>
            <h1 className="text-center font-bold my-4 text-3xl">Críticas e sugestões</h1>
            <p className="text-center">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type="text" className="p-4 my-2 block shadow bg-blue-100 rounded" />
            </div>
        </div>
    )
}

export default Pesquisa