const Form = () => {
    return (
        <form action="">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input id="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input type="number" id="age" className="form-control" />
            </div>
        </form>
    );
};

export default Form;
