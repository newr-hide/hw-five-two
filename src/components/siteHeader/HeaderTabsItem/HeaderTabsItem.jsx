/**
 * Функция возвращаяет ссылку с текстом
 */
import S from './HeaderTabsItem.module.css'


export function HeaderTabsItem({href, text}) {
    return(
        <a  href={href} className={S.tabsItem}>{text}</a>
    )
}