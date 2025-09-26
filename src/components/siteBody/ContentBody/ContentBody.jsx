/**
 * Функция возвращает компоненты Naw, InputForm, BannerADS, SectionSite
 */
import { BannerADS } from '../BannerADS/BannerADS'
import { InputForm } from '../InputForm/InputForm'
import { Nav } from '../Nav/Nav'
import { SectionSite } from '../SectionSite/SectionSite'

import S from './ContentBody.module.css'


export function ContentBody() {
    return(
        <>
            <Nav/>
            <InputForm/>
            <BannerADS/>
            <SectionSite/>
        </>
    )
}