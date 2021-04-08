import Beans from "./meal/Beans";
import Beef from "./meal/Beef";
import Cheese from "./meal/Cheese";

const Tortilla = () => {
    return (
        <ul>
            <Beef />
            <Beans />
            <Cheese />
        </ul>
    )
}

export default Tortilla;