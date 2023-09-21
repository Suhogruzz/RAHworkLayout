import { useState } from "react";
import Products from "./Products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const Store = () => {
    const productsList = Products;
    const [icon, setIcon] = useState("view_list")

    const onSwitch = () => {
        setIcon(icon === "view_list" ? "view_module" : "view_list");
    };

    return (
        <main>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {icon === "view_list" 
                ?<CardsView cards={productsList} />
                :<ListView items={productsList} />
            }
        </main>
    );
};

export default Store