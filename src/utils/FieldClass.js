export default class Field {
  constructor(name, labelText, type, formik) {
    // defining name and label text as passed in as params
    this.name = name;
    this.labelText = labelText;
    this.type = type;
    // passing in "formik" to access methods
    this.handleChange = formik.handleChange;
    // if there is an error with this field, then error case is displayed with the message
    this.errorCase = formik.errors[this.name] && formik.errors[this.name];
  }
}
