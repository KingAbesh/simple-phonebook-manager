import React from 'react';

const Form = ({
  onChange,
  value,
  text,
  onSubmit,
  type,
  onChange1,
  value1,
  text1
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Input text={text} value={value} onChange={onChange} />
        <br />
        <Input text={text1} value={value1} onChange={onChange1} />
      </div>
      <div>
        <button type={type}>add</button>
      </div>
    </form>
  );
};

const Input = props => {
  return (
    <div>
      {props.text}: <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Form;
