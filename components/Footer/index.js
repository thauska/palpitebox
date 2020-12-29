import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className="bg-gray-700 p-4 text-center text-white">
            <div className="container mx-auto">
                Projeto desenvolvido por: {' '}
                <a className="hover:underline" href="https://thayanacmamore.dev">
                    Thayana Mamoré |
                </a>
                {' '}
                <a className="hover:underline" href="https://linkedin.com/in/thayanacmamore">
                    LinkedIn |
                </a>
                {' '}
                <a className="hover:underline" href="https://github.com/thauska">
                    Github
                </a>
                <div className="mt-3">
                    <img className="inline p-4" src="/images/logo_semana_fsm.png" />
                    <img className="inline p-4" src="/images/logo_devpleno.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer