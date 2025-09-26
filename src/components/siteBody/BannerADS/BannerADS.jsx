/**
 * Функция возвращает ссылку Баннер для рекламы
 */
import S from './BannerADS.module.css'


export function BannerADS() {
    return(
        <>
          <a className={S.banner} href="#"><img className={S.banner_img} src="#" alt="Здесь могла быть Ваша реклама" /></a>
        </>
    )
}