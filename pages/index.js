import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/get-promo', fetcher)

    //return(<pre>{JSON.stringify(data)}</pre>)

    return (
        <div>
            <PageTitle title="Seja bem vindo" />
            <div className="my-12 text-center">
                <p className="my-12">
                O Churrasco do Beré sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
                </p>
                <div>
                    <Link href="/pesquisa">
                        <a className="bg-blue-400 px-12 py-4 font-bold rounded-xl hover:bg-blue-500">
                            Dar opinião ou sugestão
                        </a>
                    </Link>
                </div>
                <div className="mt-4">
                    {!data && <p>Carregando...</p>}
                    {!error && data && data.showCoupon &&
                        <p className="my-12">
                            {data.message}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Index