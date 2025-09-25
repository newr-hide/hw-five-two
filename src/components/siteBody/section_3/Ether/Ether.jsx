/**
 * Функция возвращает Блок Эфир состоящий из наименования, иконки, текста и канала
 */
import S from './Ether.module.css'


export function Ether(props) {
    const etherTV = [
        {label: 'https://img.icons8.com/?size=100&id=60450&format=png&color=228BE6', text: 'Управление как искуство', canal: 'Успех'},
        {label: 'https://img.icons8.com/?size=100&id=60450&format=png&color=228BE6', text: 'Ночь. Мир в это время', canal: 'Earch TV'},
        {label: 'https://img.icons8.com/?size=100&id=60450&format=png&color=228BE6', text: 'Music', canal: 'ТнТ Music'}]
    return(
        <div>
        <h3 className={S.title_section_three}>Эфир</h3>
            {etherTV.map((item, index) => (
                <div className={S.section_group} key={index}>
                <img className={S.img} src={item.label} alt='label'/>
                <div className={S.text} >{item.text}</div>
                <div className={S.canal}>{item.canal}</div>
                </div>
            ))}
        </div>
    )
}