import { AuthLayout } from '@/components/layout/auth-layout';
import { Input } from '@/components/ui/input';
import { useFormHandler } from '@/hooks/use-form-handler';
import { TouchableOpacity, View } from 'react-native';
import { validateLogin } from './login.validation';
import { Text } from '@react-navigation/elements';
import { styles } from './login.styles';
import { Link } from '@react-navigation/native';
import { ROUTES } from '@/enums/routes';
import { useAuth } from '@/context/auth-context';

export const LoginScreen = () => {
  const { setUser } = useAuth();
  const { values, displayErrors, handleChange, handleBlur, handleSubmit } = useFormHandler({
    initialValues: { name: '', email: '', password: '' },
    validate: validateLogin,
    onSubmit: values => {
      setUser(values);
    },
  });

  return (
    <AuthLayout heading="Login">
      <View>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.inputFieldsContainer}>
          <Input
            label="Name"
            placeholder="Enter your name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={displayErrors.name}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={displayErrors.email}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={displayErrors.password}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.loginBtn}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Link screen={ROUTES.SIGNUP}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
};
