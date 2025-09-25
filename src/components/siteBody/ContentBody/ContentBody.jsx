/**
 * Функция возвращает компоненты Naw, InputForm, BannerADS, SectionSite
 */
import { BannerADS } from '../BannerADS/BannerADS'
import { InputForm } from '../InputForm/InputForm'
import { Naw } from '../Naw/Naw'
import { SectionSite } from '../SectionSite/SectionSite'

import S from './ContentBody.module.css'


export function ContentBody(props) {
    return(
        <>
        <Naw/>
        <InputForm/>
        <BannerADS/>
        <SectionSite/>
        </>
    )
}