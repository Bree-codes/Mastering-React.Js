import  {useEffect} from 'react';

const Addition = () => {
    let num = 0;


    useEffect(() => {}, []);


    function handleAdd() {
        ++num;
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Addition;