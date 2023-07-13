import { FC } from "react";
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Row from "../../ui/grid/Row";

const Header: FC = () => {
    return (
        <header className='mx-auto max-w-7xl z-50'>
            <Row>
                <Logo />
                <Menu />
            </Row>
        </header>
    )
}

export default Header