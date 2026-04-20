import * as z from 'zod';

const loginValidationSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export type LoginFormValues = z.infer<typeof loginValidationSchema>;

export const validateLogin = (values: LoginFormValues) => {
  const result = loginValidationSchema.safeParse(values);
  if (result.success) {
    return {};
  } else {
    const errors: Partial<Record<keyof LoginFormValues, string>> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof LoginFormValues;
      errors[field] = issue.message;
    }
    return errors;
  }
};
