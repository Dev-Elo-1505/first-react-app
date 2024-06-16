export const ExpenseTracker = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" id="description" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input type="number" id="amount" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category" className="form-control">
            <option value=" "></option>
            <option value="utilities">Utilities</option>
            <option value="electricity">Electricity</option>
            <option value="entertainment">Entertainment</option>
          </select>
         
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};
