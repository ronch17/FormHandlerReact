/**
 * Child
 * @param {*} props
 * @returns
 */
const MyForm = (props) => {
  const { inputs } = props;

  const onSubmitCallback = (event) => {
    // check validation

    // SUCCESS! - PASS DATA TO PARENT
    props.onSubmitHandler(event.target);
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitCallback}>
      {inputs.map((input, index) => {
        return (
          <div key={index}>
            <label>{input.label}</label>
            <input type={input.type} name={input.name} />
            <div>{input.error}</div>
          </div>
        );
      })}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MyForm;
