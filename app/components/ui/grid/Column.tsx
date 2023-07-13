import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

const Column: FC<PropsWithChildren<{ size: number, isCenter: boolean }>> = ({
    size,
    children,
    isCenter = true
}) => {
    return <div 
        style={{
            gridColumn: `span ${size} / span ${size}`
        }}
        className={cn('h-full flex items-center', {
            'justify-center': isCenter
        })}
    >{children}</div>
}

export default Column