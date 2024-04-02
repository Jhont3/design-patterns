import { useThemeContext } from "../../context/ThemeContext";
import Products from "../Products";
import './Panel.css'

 const Panel = () => {
    const [ darkMode ] = useThemeContext();

    return (
        <div className={`panel-${darkMode ? "dark" : "light"}`}>
            <Products />
        </div>
    )
}

export default Panel;