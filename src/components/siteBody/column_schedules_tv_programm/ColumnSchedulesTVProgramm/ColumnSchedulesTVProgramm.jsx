/**
 * Функция возвращает два компонента Schedules, TvProgramm
 */
import { Schedules } from '../Schedules/Schedules'
import { TvProgramm } from '../TvProgramm/TvProgramm'
import S from './ColumnSchedulesTVProgramm.module.css'


export function ColumnSchedulesTVProgramm() {
    return(
        <div className={S.column_schedules}>
            <Schedules/>
            <TvProgramm/>
        </div>
    )
}