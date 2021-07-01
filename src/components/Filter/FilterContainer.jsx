import React from 'react';
import Filter from './Filter';

const FilterContainer = (props) => {

    let result = JSON.parse(JSON.stringify(props.data.result.flights))
    result.sort((prev, next) => prev.flight.legs[0].duration - next.flight.legs[0].duration)

    return (
        <Filter  result={result} />
    )
}

export default FilterContainer