import React, {useState} from 'react';
import s from './Filter.module.css'
import FlightCardContainer from '../FlightCard/FlightsCardContainer';

const Filter = (props) => {
    
    let new_result = props.result
    let aviacompanies = []
    
    const [price_up, setPriceUp] = useState(true)
    const [price_down, setPriceDown] = useState(false)
    const [duration, setDuration] = useState(false)
    const [transfer, setTransfer] = useState(false);
    const [no_transfer, setNoTransfer] = useState(false);
    const [min_price, setMinPrice] = useState(21049);
    const [max_price, setMaxPrice] = useState(149335);
    const [av, setAv] = useState('');
   
    
    const sortResult = () => {

        new_result = props.result
        if (price_up) {
            new_result.sort((prev, next) => prev.flight.price.total.amount - next.flight.price.total.amount)
        } else if (price_down) {
            new_result.sort((prev, next) => next.flight.price.total.amount - prev.flight.price.total.amount)
        } else if (duration) {
            new_result.sort((prev, next) => prev.flight.legs[0].duration - next.flight.legs[0].duration)
        }
        
        if (transfer) {
            new_result = new_result.filter((flight) => {return flight.flight.legs[0].segments.length === 2})
            return new_result
        } else if (no_transfer && !transfer) {
            new_result = new_result.filter((flight) => {return flight.flight.legs[0].segments.length === 1})
            console.log('hi', new_result)
            return new_result
        }
        console.log(no_transfer)
        return new_result
    }

    const showCompanies = () => {
        switch (av) {
            case 'Air France':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Air France'
                })
                break;
            case 'LOT Polish Airlines':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'LOT Polish Airlines'
                })
                break;
            case 'Air Baltic Corporation A/S':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Air Baltic Corporation A/S'
                })
                break;
            case 'KLM':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'KLM'
                })
                break;
            case 'Brussels Airlines':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Brussels Airlines'
                })
                break;
            case 'TURK HAVA YOLLARI A.O.':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'TURK HAVA YOLLARI A.O.'
                })
                break;
            case 'Аэрофлот - российские авиалинии':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Аэрофлот - российские авиалинии'
                })
                break;
            case 'Alitalia Societa Aerea Italiana':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Alitalia Societa Aerea Italiana'
                })
                break;
            case 'Finnair Oyj':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Finnair Oyj'
                })
                break;
            case 'Pegasus Hava Tasimaciligi A.S.':
                new_result = new_result.filter((flight) => {
                    return flight.flight.carrier.caption === 'Pegasus Hava Tasimaciligi A.S.'
                })
                break;

            default:
                break;
        }
        
        return new_result
    }

    for (let index = 0; index < new_result.length; index++) {
        if (aviacompanies.includes(new_result[index].flight.carrier.caption)) {
            continue
        } else {
            aviacompanies.push(new_result[index].flight.carrier.caption)
        }
    }

    let avia_names = aviacompanies.map((av) => (
        <label><input type="checkbox" name="filter" id={av} onClick={() => setAv(av)}/> - {av}</label>
    ))

    const checkMinPrice = () => {
        new_result =  new_result.filter((flight) => {
            return +flight.flight.price.total.amount >= min_price
        })
    }
    
    const checkMaxPrice = () => {
        new_result = new_result.filter((flight) => {
            return +flight.flight.price.total.amount <= max_price
        })
    }

    checkMinPrice()
    checkMaxPrice()
    showCompanies()

    return (
        <>
        <form onChange={() => sortResult()}  className={s.filters}>
        <div>
            
            <div className={s.radios}>
                <p>Сортировать</p>
                <label><input type="radio" name="sort" id="up"  onFocus={() => setPriceUp(true)} onBlur={() => setPriceUp(false)}/> - по возрастанию цены</label>
                <label><input type="radio" name="sort" id="down" onFocus={() => setPriceDown(true)} onBlur={() => setPriceDown(false)}/> - по убыванию цены</label>
                <label><input type="radio" name="sort" id="duration" onFocus={() => setDuration(true)} onBlur={() => setDuration(false)}/> - по времени в пути</label>
            </div>
            
            <div className={s.checkbox}>
                <p>Фильтровать</p>
                <label><input type="checkbox" name="filter" value='transfer' onClick={() => setTransfer(!transfer ? !transfer : transfer)}/> - 1 пересадка</label>
                <label><input type="checkbox" name="filter" value='no_transfer' onChange={() => setNoTransfer(!no_transfer ? !no_transfer : no_transfer)}/> - без пересадок</label>
            </div>
            <div className={s.price}>
                <p>Цена</p>
                <label>От <input type="number" name="from" id="min_price" value={min_price} onChange={(e) => {setMinPrice(e.target.value); }} onFocus={() => setMinPrice('')} /></label>
                <label>До <input type="number" name="to" id="max_price" value={max_price} onChange={(e) => {setMaxPrice(e.target.value); }} onFocus={() => setMaxPrice('')} /></label>
            </div>
            
            <div className={s.avia}>
                <p>Авиакомпании</p>
                {avia_names}
            </div>
        </div>
        </form>
        <FlightCardContainer data={new_result}/>
        </>
        
    )
}

export default Filter