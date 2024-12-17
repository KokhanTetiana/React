function Team() {
    const employees = [
        {
            name: "John Doe",
            position: "CEO",
            image: "/images/image1.jpg",
            description: "John is the visionary leader who drives the company towards success.",
            link: "#"
        },
        {
            name: "Jane Smith",
            position: "CTO",
            image: "/images/image1.jpg",
            description: "Jane is in charge of technology and innovation in the company.",
            link: "#"
        },
        {
            name: "Sam Johnson",
            position: "Marketing Director",
            image: "/images/image1.jpg",
            description: "Sam leads marketing strategies to help the company grow.",
            link: "#"
        }
    ];

    return (
        <div className="row">
            {employees.map((employee, index) => (
                <div className="col s12 m4" key={index}>
                    <div className="card">
                        <div className="card-image">
                            <img src={employee.image} alt={employee.name} />
                            <span className="card-title">{employee.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{employee.position}</p>
                            <p>{employee.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Team;