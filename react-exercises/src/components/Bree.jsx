import {useState} from "react";
import Info from "./Info.jsx";
import Addition from "./Addition.jsx";

const Bree = () => {

    const [name, setName] = useState("bree");
    const [course, setCourse] = useState("cs");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleCourse(e) {
        setCourse(e.target.value);
        console.log(course);
    }

    return (
        <div>

            <Addition />

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

          <Info course={"Computer Science"} name={name}/>
        </div>
    );
};

export default Bree;