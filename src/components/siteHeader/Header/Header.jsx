/**
 * Компонент возвращает внутренние компоненты HeaderTabsItem, DateTime, ExchangeRate, NewsItem
 */
import { DateTime } from '../DateTime/DateTime'
import { HeaderTabsItem } from '../HeaderTabsItem'
import { NewsItem } from '../NewsItem/NewsItem'
import { ExchangeRate } from '../currency/ExchangeRate/ExchangeRate'


import S from './Header.module.css'


export function Header() {
       const tabs = [{href:'#', text:'Сейчас в СМИ'},
                    {href:'##', text:'В Германии'},
                    {href:'#@@', text:'Рекомендуем'}] 

        const news = [{link:'#',
                    icon:'//avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
                    text:'Петербургская фабрика обуви «Скороход» будет ликвидирована'},
                    {link:'#',
                    icon:'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1227-1540315405629-square/logo-square',
                    text:'«Ъ»: Коллекторы в среднем прощают должникам 40 процентов долга'},
                    {link:'#',
                    icon:'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
                    text:'ФНС начала уведомлять россиян об уплате налога на доходы по вкладам за 2024 год'},
                    {link:'#',
                    icon:'https://avatars.dzeninfra.ru/get-ynews-logo/271828/12694-1732693425289-square/logo-square',
                    text:'Сенатор Епифанова призвала ввести финансовый паспорт для граждан России'},
                    {link:'#',
                    icon:'https://avatars.dzeninfra.ru/get-ynews-logo/271828/1048-1697109461569-square/logo-square',
                    text:'Показатели угольной отрасли могут оказаться на многолетних минимумах'}
                ]
            
          
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
        {news.map((item, index) => <NewsItem key={index} {...item}/>)}
       <ExchangeRate/>
        
        </>
    )
}