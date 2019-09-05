import React from 'react';

const Boad = (props) => {
    const listboard = props.data.products.map((compra) => {
        return (
            <tr key={compra.name}>
                <td>{compra.name}</td>
                <td className="text-right">R$ {compra.price}</td>
            </tr>
        );
    })
    return (
        <div className="timeline-board">
            <table className="timeline-list">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th className="text-right">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listboard}
                </tbody>
            </table>
        </div>
    );
}

export default Boad