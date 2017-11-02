import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Input = props => (
  <fieldset className="form-group">
    <label>{`${props.label}: `}</label>
    <input  className="form-control"
      value={props.input.value}
      onChange={ e => props.input.onChange(e.target.value) }
    />
  </fieldset>
)

class Signin extends React.Component {

  handleFormSubmit = ({ email, password }) => {

    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field name="email" label="Email" component={Input} type="email" />
        <Field name="password" label="Password" component={Input} type="password" />
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
