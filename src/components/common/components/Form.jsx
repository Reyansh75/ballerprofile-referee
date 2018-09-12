import PropTypes from 'prop-types';
import React from 'react';
import { get, isEmpty, keys } from 'lodash';

class Form extends React.Component {
  getFieldProps = (id, options = {}) => {
    const { initialValues, isSubmitting, values } = this.props;
    const { errors, validating } = this.state;

    return {
      error: get(errors, id, ''),
      id,
      isSubmitting,
      isValidating: validating[id],
      onBlur: (value, fieldId) => {
        if (options.onBlur) {
          options.onBlur(value, fieldId);
        }
        this.handleOnBlur(value, fieldId);
      },
      onChange: this.handleOnChange,
      value: get(values, id, get(initialValues, id)),
    };
  }

  handleOnBlur = (value, id) => {
    const { initialValues, values, updateField } = this.props;
    const { validating } = this.state;

    updateField(id, value, this.formId);

    if (this.validations[id]) {
      this.setState({
        validating: {
          ...validating,
          [id]: true,
        },
      }, () => (value !== (initialValues[id] || '') ? this.validations[id](value, values) : Promise.resolve())
        .then((error) => {
          const { errors, validating: newValidating } = this.state;

          this.setState({
            errors: {
              ...errors,
              [id]: error,
            },
            validating: {
              ...newValidating,
              [id]: false,
            },
          });
        }));
    }
  }

  handleOnChange = (value, id) => {
    const { updateField } = this.props;

    updateField(id, value, this.formId);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { values } = this.props;

    return Promise.all(keys(this.validations).map(key => Promise.all([key, this.validations[key](get(values, key), values)])))
      .then((results) => {
        let hasError = false;
        const errors = {};

        results.forEach(([key, message]) => {
          errors[key] = message;

          if (!isEmpty(message)) {
            hasError = true;
          }
        });

        this.setState({ errors });

        if (hasError) {
          setTimeout(() => document.querySelector('.sn-js-has-error').focus(), 100);
        }

        return !hasError;
      });
  }
}

Form.defaultProps = {
  initialValues: {},
};

Form.propTypes = {
  initialValues: PropTypes.shape({}),
  updateField: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Form;
