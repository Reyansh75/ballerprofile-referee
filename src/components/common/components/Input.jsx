import PropTypes from 'prop-types';
import React from 'react';
import { Input as AntInput } from 'antd';

const Input = ({ disabled, id, placeholder, type, value, onChange, onBlur, isSubmitting, isValidating, isLoading }) => (
  <AntInput
    disabled={disabled || isLoading || isValidating || isSubmitting}
    id={id}
    placeholder={placeholder}
    type={type}
    onChange={({ target }) => onChange(target.value, id)}
    onBlur={({ target }) => onBlur(target.value, id)}
    value={value}
  />
);

Input.defaultProps = {
  disabled: false,
  value: undefined,
  type: 'text',
  isSubmitting: false,
  isLoading: false,
  isValidating: false,
};

Input.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  isValidating: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Input;
