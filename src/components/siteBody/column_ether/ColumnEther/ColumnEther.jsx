import { Ether } from '../Ether/Ether'
import S from './ColumnEther.module.css'


export function ColumnEther(props) {
    return(
        <div className={S.columnEther}>
          <Ether/>
        </div>
    )
}