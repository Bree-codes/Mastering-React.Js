// eslint-disable-next-line react/prop-types
const StudentInfo = ({std}) => {

    return (
        <div className={"student-information"}>
            <h1>Student Information</h1>

            <span className={"name"}>{std.name}</span>
            <span className={"reg"}>{std.reg}</span>
            <span className={"course"}>{std.course}</span>
        </div>
    );
};

export default StudentInfo;