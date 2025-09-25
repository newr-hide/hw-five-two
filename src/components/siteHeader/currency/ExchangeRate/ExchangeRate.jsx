import CurrencyEx from '../CurrencyEx/CurrencyEx'

import S from './ExchangeRate.module.css'


export function ExchangeRate(props) {
    const currencys = [{currency: 'USD', text: 'USD MOEX'},
        {currency: 'EUR', text: 'EUR MOEX'},
        {currency: 'KGS', text: 'KGS MOEX'}]    
    return(
        <div className={S.exchangeRate}>
             {currencys.map((item, index) =>  <CurrencyEx key={index} {...item}/>)}
        </div>
    )
}