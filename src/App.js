// import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";
import MyForm from "./components/MyForm";
import SimpleInput from "./components/SimpleInput";

/**
 * Parent
 * @returns
 */
function App() {
  const myFormOnSubmit = (values) => {
    let fname = values.fname.value;
    let lname = values.lname.value;
    console.log(fname, lname);
  };

  const myFormOnErros = (erros) => {
    console.log("error");
  };

  return (
    <div className="app">
      <MyForm
        onSubmitHandler={myFormOnSubmit}
        onErrorsHanlder={myFormOnErros}
        inputs={[
          { label: "First Name ", type: "text", name: "fname" },
          { label: "Last Name ", type: "text", name: "lname" },
          { label: "Email ", type: "email", name: "email" },
        ]}
      />

      <SimpleInput />

      <BasicForm />
    </div>
  );
}

export default App;
