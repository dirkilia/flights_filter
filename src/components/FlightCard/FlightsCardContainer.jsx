import React from 'react';
import FlightCard from './FlightCard';


const FlightCardContainer = (props) => {
    
    let flights;

              flights = props.data.map((fl) => (
                <FlightCard company_name={fl.flight.carrier.caption} 
                            price={fl.flight.price.total.amount}
                            departureCity={fl.flight.legs[0].segments[0].departureCity.caption}
                            departureAirport={fl.flight.legs[0].segments[0].departureAirport.caption}
                            departureAirportUid={fl.flight.legs[0].segments[0].departureAirport.uid}
                            duration={fl.flight.legs[0].duration}
                            arrivalAirport={fl.flight.legs[0].segments[0].arrivalAirport.caption}
                            arrivalAirportUid={fl.flight.legs[0].segments[0].arrivalAirport.uid}
                            departureDate={fl.flight.legs[0].segments[0].departureDate}
                            arrivalDate={fl.flight.legs[0].segments[0].arrivalDate}
                            departureAirport_back={fl.flight.legs[1].segments[0].departureAirport.caption}
                            departureAirportUid_back={fl.flight.legs[1].segments[0].departureAirport.uid}
                            duration_back={fl.flight.legs[1].duration}
                            arrivalCity_back={fl.flight.legs[1].segments[0].arrivalCity.caption}
                            arrivalAirport_back={fl.flight.legs[1].segments[0].arrivalAirport.caption}
                            arrivalAirportUid_back={fl.flight.legs[1].segments[0].arrivalAirport.uid}
                            departureDate_back={fl.flight.legs[1].segments[0].departureDate}
                            arrivalDate_back={fl.flight.legs[1].segments[0].arrivalDate}
                            
                            />
              ));


    return (
        flights
    )

}

export default FlightCardContainer