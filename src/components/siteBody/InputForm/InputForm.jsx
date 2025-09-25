/**
 * Функция возвращает форму с лого ввиде ссылки, инпута, описания и кнопки
 */
import S from './InputForm.module.css'


export function InputForm(props) {
    return(
        <form className={S.formInput}>
        <a className={S.logo} href='#'><img src='https://img.icons8.com/?size=100&id=1349&format=png&color=000000'/></a>
        <div className={S.inputSpan}>
            <input className={S.input}></input>
            <div className={S.span}>Найдется все Например<a className={S.linkSpan} href='#'>Фаза луны сегодня</a></div>
        </div>
        <button className={S.btn}>Найти</button>
        </form>
    )
}