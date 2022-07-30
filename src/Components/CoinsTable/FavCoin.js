import { Button } from "react-bootstrap";
import { useState } from "react";

const FavCoin = () => {
    const [toggle, setToggle] = useState(false)

    //toggle fav icon
    const onToggleHandler = () =>{
        setToggle(!toggle);
    }

    return ( 
        <Button variant="light"
                onClick={onToggleHandler}>
            <img src={ toggle ? require('../../icon/red.png') : require('../../icon/heart.png')} 
                alt="heart icon" 
            />
        </Button>
     );
}
 
export default FavCoin;