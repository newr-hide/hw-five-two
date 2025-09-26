/**
 * Функция возвращает компоненты Weather, Visited
 */
import { Visited } from '../Visited/Visited'
import Weather from '../Weather/Weather'
import S from './ColumnWeatherVisited.module.css'


export function ColumnWeatherVisited() {
    return(
        <div className={S.column}>
            <Weather/>
            <Visited/>
        </div>
    )
}