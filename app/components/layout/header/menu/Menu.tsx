import { FC } from 'react'
import styles from './Menu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'
import Column from '@/app/components/ui/grid/Column'

const Menu: FC = () => {
    return (
        <Column size={10} isCenter={true}>
        <div className={styles.menu}>
            <nav>
                <ul>
                    {menu.map(item => (
                        <MenuItem key={item.link} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
        </Column>
    )
}

export default Menu