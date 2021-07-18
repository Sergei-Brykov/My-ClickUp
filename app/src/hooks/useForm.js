import { useState, useEffect, useCallback } from "react";
import { isEqual } from "../helpers/isEqual";

function useForm({
  initial,
  clearError = () => {},
  validate,
  onSubmit: submit,
  clearAfterValidation = false,
}) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [disabledForm, setIsDisabledForm] = useState(true);

  const onChange = useCallback(
    (name) => (e) => {
      clearError();
      setErrors({});
      setValues((prev) => ({ ...prev, [name]: e.target.value }));
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
        if (clearAfterValidation) {
          setValues(initial);
        }
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
    forceClear,
    // CUSTOM SUBMIT, IF YOU NEED ADD VALUES FIST ARG IS SUBMIT VALUE.
    onSubmit,
    disabledForm,
  };
}

export default useForm;
