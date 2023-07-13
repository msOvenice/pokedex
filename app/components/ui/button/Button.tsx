import { FC } from 'react'
import style from './Button.module.scss'
import Column from '@/app/components/ui/grid/Column'
import { IconType } from 'react-icons'

interface IButton {
  Icon: IconType
  onClick: () => void
  size: number
}

const Button: FC<IButton> = ({ Icon, onClick, size }) => {
  return (
    <Column isCenter={false} size={1}>
        <button className={style.button} onClick={onClick}>
            <Icon color='#5f5f5f' size={size} />
        </button>
    </Column>
  )
}

export default Button