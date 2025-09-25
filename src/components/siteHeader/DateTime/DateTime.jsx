/**
 * Функция возвращает тег time  содержащий дату, месяц, день, часы и минуты
 */
import S from './DateTime.module.css'


export function DateTime(props) {
    const days = [0, "Понедельник", "Вторник",
        "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

    const months = ['января', 'февраля', 'марта',
        'апреля', 'мая', 'июня', 'июля',
            'августа', 'сентября', 'октября',
            'ноября', 'декабря'] 
    return(
        <time className={S.time}> {new Date().getDate()} {months[new Date().getMonth()]} {days[new Date().getDay()]} {new Date().getHours()} {new Date().getMinutes()}</time>
    )
}