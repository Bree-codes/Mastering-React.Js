// eslint-disable-next-line react/prop-types
import {useEffect} from "react";

const Info = ({name,course}) => {

    useEffect(() => {
        const method = () => {
            console.log("Meeen");
        }

        method();
    }, [name, course]);

    return (
        <div>
            <h1>{name}</h1>
            <h1>{course}</h1>
        </div>
    );
};

export default Info;