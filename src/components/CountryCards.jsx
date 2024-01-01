/* eslint-disable react/prop-types */

import  './CountryCards.css'

const CountryCards = ({name, flags}) => {
  return (
    <div className='card'>
            <img src={flags.png} alt={`Country flag ${flags.alt}`} height={100} width={100} />
        <p>{name.common}</p>
    </div>
  )
}

export default CountryCards