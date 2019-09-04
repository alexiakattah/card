import React from 'react'

import '../Card/card.css'

const Board = props => {
    const { card } = props
    return (
        <div>
            <div className="comprou">
                <p id="data">{card.data}</p>
                <p id="valor">{card.revenue.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
                <p id="local">{card.storeName}</p>
            </div>
            <div className="comprou-produto">
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card.produtos.map((produto, key) => (
                                <tr key={key}>
                                    <td width="70%">{produto.productName}</td>
                                    <td width="30%">{produto.productPrice.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Board