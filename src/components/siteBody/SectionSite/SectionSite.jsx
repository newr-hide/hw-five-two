/**
 * Функция возвращает компоненты SectionOne, SectionTwo, SectionThree
 */
import { SectionOne } from '../section_1/SectionOne/SectionOne'
import { SectionThree } from '../section_3/SectionThree/SectionThree'
import { SectionTwo } from '../section_2/SectionTwo/SectionTwo'
import S from './SectionSite.module.css'


export function SectionSite(props) {
    return(
        <section className={S.section_site}>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
        </section>
    )
}