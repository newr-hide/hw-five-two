/**
 * Функция возвращает компоненты SectionOne, SectionTwo, SectionThree
 */
import { ColumnWeatherVisited } from '../column_weather_visited/ColumnWeatherVisited/ColumnWeatherVisited'
import { ColumnSchedulesTVProgramm } from '../column_schedules_tv_programm/ColumnSchedulesTVProgramm/ColumnSchedulesTVProgramm'
import S from './SectionSite.module.css'
import { ColumnEther } from '../column_ether/ColumnEther/ColumnEther'

export function SectionSite() {
    return(
        <section className={S.section_site}>
            <ColumnWeatherVisited/>
            <ColumnSchedulesTVProgramm/>
            <ColumnEther/>
        </section>
    )
}