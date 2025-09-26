/**
 * Компонент возвращает внутренние компоненты HeaderTabsItem, DateTime, ExchangeRate, NewsList
 */
import { DateTime } from '../DateTime/DateTime'
import { HeaderTabsItem } from '../HeaderTabsItem'
import { NewsList } from '../NewsList/NewsList'
import { ExchangeRate } from '../currency/ExchangeRate/ExchangeRate'


import S from './Header.module.css'


export function Header() {
       const tabs = [{href:'#', text:'Сейчас в СМИ'},
                    {href:'##', text:'В Германии'},
                    {href:'#@@', text:'Рекомендуем'}] 

        
          
    return(
        <>
        <div className='header'>
            {tabs.map((item, index) =>{
                            return(
                                <HeaderTabsItem key={index} {...item}/>
                            )
                        })}
                
            <DateTime />
        </div>
            <NewsList/>
            <ExchangeRate/>
        </>
    )
}