/**
 * Функция возвращает блок с новостью содержащий в себе ссылку, иконку и текст
 */
import S from './NewsItem.module.css'


export function NewsItem({link, icon, text}) {
    
    return(
        <div className={S.newsItem}>
            <a href={link} className={S.newsLink}>
                <img src={icon} className={S.newsIcon}/>
                <div className={S.newsText}>{text}</div>
            </a>

        </div>
    )
}