import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Input = ({ normalize, disabled, id, label, type, value, onChange, onBlur, isSubmitting, isValidating, isLoading, className }) => (
  <input
  className={cn("form-control sn-input", className)}
    disabled={disabled || isLoading || isValidating || isSubmitting}
    id={id}
    placeholder={label}
    type={type}
    onChange={({ target }) => onChange(target.value, id)}
    onBlur={({ target }) => onBlur(target.value, id)}
    value={normalize(value)}
  />
);

Input.defaultProps = {
  disabled: false,
  value: undefined,
  type: 'text',
  isSubmitting: false,
  isLoading: false,
  isValidating: false,
  normalize: value => value || '',
};

Input.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  isValidating: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isLoading: PropTypes.bool,
  normalize: PropTypes.func,
};

export default Input;
