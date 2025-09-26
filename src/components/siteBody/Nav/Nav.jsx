/**
 * Функция возвращает элементы навигационной панели сайта
 */
import { ListItem } from '../ListItem/ListItem'
import S from './Nav.module.css'


export function Nav() {
    const contentItem = [{link: '#', text: 'Видео'},
        {link: '#', text: 'Картинки'},
        {link: '#', text: 'Новости'},
        {link: '#', text: 'Карты'},
        {link: '#', text: 'Маркет'},
        {link: '#', text: 'Переводчик'},
        {link: '#', text: 'Эфир'},
        {link: '#', text: 'ещё'},]
    return(
        <div>
            <ul className={S.nav_list}>
                {contentItem.map((item, index) => <li className="list__item">{<ListItem key={index} {...item} />}</li>)}
                
                
            </ul>
         
        </div>
    )
}