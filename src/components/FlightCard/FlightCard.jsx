import React from 'react';
import s from './FlightCard.module.css'


const FlightCard = (props) => {
    let duration = props.duration
    let duration_back = props.duration_back
    return <div className={s.flight_card}>
        <div className={s.card_header}>
            <h2 className="company_name">
                {props.company_name}
            </h2>
            <div className={s.price}>
                <h2>
                    {props.price}
                </h2>
                <p>Стоимость для одного взрослого пассажира</p>
            </div>
            
        </div>
        <div className={s.forward_flight}>
            <h3>{props.departureCity}, {props.departureAirport} <b>({props.departureAirportUid})</b> - {props.arrivalAirport} <b>({props.arrivalAirportUid})</b></h3>
            <hr />
            <div className={s.time}>
                <div><h3>{props.departureDate.slice(11, 16)}</h3><p>{props.departureDate.slice(8, 10)} авг. вт</p></div>
                <div><img src="http://www.eduportal44.ru/Sharya/detsad2/SiteAssets/SitePages/КЦ%20Контакты/rejimrabota.jpg" alt="1" /><h3>{Math.floor(duration / 60)} часов {props.duration % 60} минут</h3></div>
                <div><p>{props.arrivalDate.slice(8, 10)} авг. вт</p><h3>{props.arrivalDate.slice(11, 16)}</h3></div>
            </div>
            <div className={s.transfer}>
                <p class={s.line}><span>1 пересадка</span></p>
            </div>
            <h3>Рейс выполняет: {props.company_name} </h3>
        </div>
        <div className={s.back_flight}>
        <h3> {props.departureAirport_back} <b>({props.departureAirportUid_back})</b> - {props.arrivalCity_back}, {props.arrivalAirport_back} <b>({props.arrivalAirportUid_back})</b></h3>
            <hr />
            <div className={s.time}>
                <div><h3>{props.departureDate_back.slice(11, 16)}</h3><p>{props.departureDate_back.slice(8, 10)} авг. вт</p></div>
                <div><img src="http://www.eduportal44.ru/Sharya/detsad2/SiteAssets/SitePages/КЦ%20Контакты/rejimrabota.jpg" alt="1" /><h3>{Math.floor(duration_back / 60)} часов {duration_back % 60} минут</h3></div>
                <div><p>{props.arrivalDate_back.slice(8, 10)} авг. вт</p><h3>20:40</h3></div>
            </div>
            <div className={s.transfer}>
                <p class={s.line}><span>1 пересадка</span></p>
            </div>
            <h3>Рейс выполняет: {props.company_name}</h3>
        </div>
        <a href="#" className={s.pick_flight}>
            ВЫБРАТЬ
        </a>
    </div>
}

export default FlightCard