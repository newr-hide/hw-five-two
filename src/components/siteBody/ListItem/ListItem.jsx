/**
 * Функция возвращает ссылку для навигационной панели сайта
 */
import S from './ListItem.module.css'


export function ListItem({link, text}) {
    return(
        <a className={S.listItem} href={link}>{text}</a>
    )
}