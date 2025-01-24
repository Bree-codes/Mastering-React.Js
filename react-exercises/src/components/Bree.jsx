import {useState} from "react";

const Bree = () => {

    const [name, setName] = useState("bree");
    const [course, setCourse] = useState("cs");


    function handleName(e) {
        setName(e.target.value);
        console.log(e);
    }

    function handleCourse(e) {
        setCourse(e.target.value);
        console.log(course);
    }

    return (
        <div>
            <h2>Student Information</h2>
            <form>
                <div>
                    <label htmlFor={"name"}>Name</label>
                    <input type={"name"} id={"name"} value={name} onChange={(e) =>handleName(e)}/>
                </div>

                <div>
                    <label htmlFor={"course"}>Course</label>
                    <input type={"course"} id={"course"} value={course} onChange={(e) =>handleCourse(e)}/>
                </div>

            </form>
        </div>
    );
};

export default Bree;