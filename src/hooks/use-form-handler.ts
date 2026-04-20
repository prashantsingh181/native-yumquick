import { useState } from 'react';

type FormValues = object;
type FormErrors<TValues extends FormValues> = Partial<
  Record<keyof TValues, string>
>;
type FormTouched<TValues extends FormValues> = Partial<
  Record<keyof TValues, boolean>
>;

type FormHandlerProps<TValues extends FormValues> = {
  initialValues: TValues;
  validate?: (values: TValues) => FormErrors<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
};

type FormHandlerReturn<TValues extends FormValues> = {
  values: TValues;
  errors: FormErrors<TValues>;
  displayErrors: FormErrors<TValues>;
  touchedFields: FormTouched<TValues>;
  hasTriedSubmit: boolean;
  isSubmitting: boolean;
  handleChange: <K extends keyof TValues>(
    key: K,
  ) => (value: TValues[K]) => void;
  handleBlur: <K extends keyof TValues>(key: K) => () => void;
  setFieldValue: <K extends keyof TValues>(key: K, value: TValues[K]) => void;
  setFieldError: <K extends keyof TValues>(key: K, error: string) => void;
  resetForm: () => void;
  handleSubmit: () => Promise<void>;
};

export const useFormHandler = <T extends FormValues>({
  initialValues,
  validate,
  onSubmit,
}: FormHandlerProps<T>): FormHandlerReturn<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>(
    validate ? validate(initialValues) : {},
  );
  const [touchedFields, setTouchedFields] = useState<FormTouched<T>>({});
  const [hasTriedSubmit, setHasTriedSubmit] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const displayErrors = Object.keys(errors).reduce<FormErrors<T>>(
    (acc, key) => {
      if (touchedFields[key as keyof T] || hasTriedSubmit) {
        acc[key as keyof T] = errors[key as keyof T];
      }
      return acc;
    },
    {},
  );

  const handleChange =
    <K extends keyof T>(key: K) =>
    (value: T[K]) => {
      const newValues = { ...values, [key]: value };
      const newErrors = validate ? validate(newValues) : {};
      setValues(newValues);
      setErrors(newErrors);
    };

  const handleBlur =
    <K extends keyof T>(key: K) =>
    () => {
      setTouchedFields(prev => ({ ...prev, [key]: true }));
    };

  const setFieldValue = <K extends keyof T>(key: K, value: T[K]) => {
    const newValues = { ...values, [key]: value };
    const newErrors = validate ? validate(newValues) : {};
    setValues(newValues);
    setErrors(newErrors);
  };

  const setFieldError = <K extends keyof T>(key: K, error: string) => {
    setErrors(prev => ({ ...prev, [key]: error }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouchedFields({});
    setHasTriedSubmit(false);
    setIsSubmitting(false);
  };

  const handleSubmit = async () => {
    setHasTriedSubmit(true);
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    displayErrors,
    touchedFields,
    hasTriedSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    resetForm,
    handleSubmit,
  };
};
