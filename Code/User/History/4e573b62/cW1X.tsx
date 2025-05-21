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
                <label htmlFor="" className="form-label"></label>
                <input type="number" className="form-control" />
            </div>
        </form>
    );
};

export default Form;
