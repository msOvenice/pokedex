import { FC } from "react"
import spinner from './spinner.svg'

const Loader: FC = () => {
    return (
        <img src={spinner.src} alt='loader'  width={200} height={200} />
    )
}

export default Loader