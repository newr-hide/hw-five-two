import S from './Visited.module.css'


export function Visited() {
    const dataVisited = [{title: 'Недвижимость', text: 'о сталинках'},
        {title: 'Маркет', text: 'Люстры и светильники'}, 
        {title: 'Авто.ру', text: 'Все о Нивах'}
    ]
    return(
        <>
            <h3 className={S.title_visited}>Посещаемое</h3>
            {dataVisited.map((item, index) => (
                    <div className={S.visited_text_g} key={index}>
                        <div className={S.visited_text_title}>{item.title}</div>
                        <div className={S.visited_text}>- {item.text}</div>
                    </div>
                ))}
        </>
    )
}