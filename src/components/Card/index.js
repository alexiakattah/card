import React from 'react';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import Money from '../../assets/money.svg'
import Place from '../../assets/place.svg'
import Check from '../../assets/check.svg'
import { Container } from './styles';
import { loadLists } from '../../services/api';
import './card.scss'

const apis = loadLists();

export default function Card({data}) {
  return (
    <Container>

      <section className="timeline">
        <div className="container">
          <div className="timeline-item">
            <img className="timeline-img" src={Check} alt="" />
            <div className="timeline-content js--fadeInLeft">
              <ul className="timeline-header">
                <li>
                  <img className="timeline-icon" src={Calendar} alt="" />
                
                  {apis.map(api => <span key={api.timestamp} data={api} />)}
                  {console.log(data)}
                </li>
                <li>
                  <img className="timeline-icon" src={Clock} alt="" />
                  <span>13:57</span>
                </li>
                <li>
                  <img className="timeline-icon" src={Place} alt="" />
                  <span>Pátio Savassi</span>

                </li>
                <li>
                  <img className="timeline-icon" src={Money} alt="" />
                  <span>R$250,00</span>
                </li>
              </ul>
              <div className="timeline-table">
                <table>
                  <tr>
                    <td className="timeline-td">Produto</td>
                    <td className="timeline-td">Preço</td>
                  </tr>
                  <tr>
                    <td>Produto</td>
                    <td>Preço</td>
                  </tr>
                  <tr>
                    <td>Produto</td>
                    <td>Preço</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Container>
  );
}
