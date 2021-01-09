import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {

    const save = async () => {
        const form = {
            Nome: 'aaa',
            Email: 'bbb',
            Whatsapp: 'ccc'
        }

        try{
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
    
            const data = await response.json()
            console.log(data)
        } catch (err) {
            
        }

    }

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
                <button className="bg-blue-400 px-12 py-4 font-bold rounded-xl hover:bg-blue-500" onClick={save}>Salvar</button>
            </div>
        </div>
    )
}

export default Pesquisa