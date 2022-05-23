/* eslint-disable react/require-default-props */
import { useRef, useEffect, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

/**
 * This input component supports many <input> types, including:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 *
 * Don't use it with the type `submit` or `reset`; otherwise, bugs will occur.
 */

interface Props {
  name: string;
  type?:
    | 'text'
    | 'number'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'password'
    | 'time'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week';
  label?: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

function Input({ name, type, label, value, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>

      <input
        type={type || 'text'}
        id={fieldName}
        ref={inputRef}
        className={`form-control ${error ? 'border border-danger' : ''}`}
        defaultValue={defaultInputValue}
        {...rest}
      />

      {error && <span className="text-danger">{error}</span>}
    </div>
  );
}

export default Input;
