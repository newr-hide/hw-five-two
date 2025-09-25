/**
 * Функция представляет собой контейнер для содержания сайта и возвращает компоненты Header, ContentBody
 */
import { ContentBody } from '../siteBody/ContentBody/ContentBody'
import { Header } from '../siteHeader/Header'
import S from './Container.module.css'


export function Container() {
    return(
        <div className={S.container}>
            <Header/>
            <ContentBody/>
        </div>
    )
}