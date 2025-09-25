/**
 * Функция возвращает два элемента div
 */
import S from './Schedules.module.css'


export function Schedules(props) {
    return(
        <>
        <div className={S.title_schel}>
            Карта Германии
        </div>
        <div className={S.text_schel}>Расписания</div>
        </>
    )
}