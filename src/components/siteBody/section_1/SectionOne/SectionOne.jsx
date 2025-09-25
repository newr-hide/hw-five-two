/**
 * Функция возвращает компоненты Weather, Visited
 */
import { Visited } from '../Visited/Visited'
import Weather from '../Weather/Weather'
import S from './SectionOne.module.css'


export function SectionOne() {
    return(
        <div className={S.section_one}>
        <Weather/>
        <Visited/>
        </div>
    )
}