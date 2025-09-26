/**
 * Функция возвращает Блок Элементов - ссылка, изображение, ткстовое поле, и группу элементов текстовое поле
 */
import S from './Weather.module.css'

const Weather = () => {
    return(
        <>
            <h3 className={S.weather_title}>Погода</h3>
            <a href='#' className={S.weather}>
                <img src='https://img.icons8.com/?size=100&id=9249&format=png&color=228BE6' className={S.img__weather}/>
                <div className={S.text_weather}>+12°</div>
                <div className={S.weather_text_o}>
                    <div className={S.weather_text2}>Утром +5</div> 
                    <div className={S.weather_text2}>Днем +15</div>
                </div>
            </a>
        </>
    )
}
export default Weather