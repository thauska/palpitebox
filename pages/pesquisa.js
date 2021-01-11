import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: ''
    })

    const save = async () => {

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

    const onChange = event => {
        console.log(event.target.value)

        const value = event.target.value
        const key = event.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
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
                <input type="text" className="p-4 my-2 block shadow bg-blue-100 rounded" placeholder="Nome" onChange={onChange} name="Nome" value={form.Nome} />
                <label className="font-bold">E-mail:</label>
                <input type="text" className="p-4 my-2 block shadow bg-blue-100 rounded" placeholder="E-mail" onChange={onChange} name="Email" value={form.Email} />
                <label className="font-bold">Whatsapp:</label>
                <input type="text" className="p-4 my-2 block shadow bg-blue-100 rounded" placeholder="Whatsapp" onChange={onChange} name="Whatsapp" value={form.Whatsapp} />
                <button className="bg-blue-400 px-12 py-4 font-bold rounded-xl hover:bg-blue-500" onClick={save}>Salvar</button>

                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default Pesquisa