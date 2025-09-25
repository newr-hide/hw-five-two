/**
 * Функция возвращает два компонента Schedules, TvProgramm
 */
import { Schedules } from '../Schedules/Schedules'
import { TvProgramm } from '../TvProgramm/TvProgramm'
import S from './SectionTwo.module.css'


export function SectionTwo() {
    return(
        <div className={S.section_two}>
        <Schedules/>
        <TvProgramm/>
        </div>
    )
}