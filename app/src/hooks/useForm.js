import { useState, useEffect, useCallback } from "react";
import { isEqual } from "../helpers/isEqual";

function useForm({ initial, validate, onSubmit: submit }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [disabledForm, setIsDisabledForm] = useState(true);

  const customChange = useCallback((name, value) => {
    setErrors({});
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onChange = useCallback(
    (name) => (e) => {
      customChange(name, e.target.value);
    },
    []
  );

  useEffect(() => {
    setIsDisabledForm(isEqual(initial, values));
  }, [values]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (disabledForm) return;

      const errors = validate(values);

      if (Object.keys(errors).length) {
        setIsDisabledForm(true);
        setErrors(errors);
        return;
      }

      submit(values);
    },
    [values, disabledForm]
  );

  const forceClear = useCallback(() => setValues(initial), []);

  return {
    values,
    errors,
    onChange,
    customChange,
    forceClear,
    // CUSTOM SUBMIT, IF YOU NEED ADD VALUES FIST ARG IS SUBMIT VALUE.
    onSubmit,
    disabledForm,
  };
}

export default useForm;
