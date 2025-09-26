import S from './TvProgramm.module.css'


export function TvProgramm() {
    const tvProgramm = [{time: '02:30', title: 'ТНТ.Best', producer: 'TнТ International'},
        {time: '02:50', title: 'Джинглики', producer: 'Карусель'},
        {time: '03:30', title: 'Наедине со всеми', producer: 'Первый'}]
    return(
        <>
            <div className={S.title_tv}>Телепрограмма</div>
            {tvProgramm.map((item, index) => (
                <div className={S.tv_g} key={index}>
                <div className={S.tv_time}>{item.time}</div>
                <div className={S.tv_text}>{item.title}</div>
                <div className={S.tv_prod}>{item.producer}</div>
                </div>
            ))}
        </>
    )
}