import { AuthLayout } from '@/components/layout/auth-layout';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/enums/routes';
import { useFormHandler } from '@/hooks/use-form-handler';
import { Link } from '@react-navigation/native';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './signup.styles';
import { useAuth } from '@/context/auth-context';

export const SignupScreen = () => {
  const { setUser } = useAuth();
  const { values, displayErrors, handleBlur, handleChange, handleSubmit } =
    useFormHandler({
      initialValues: { name: '', email: '', password: '', mobile: '' },
      onSubmit: values => {
        setUser(values);
      },
    });
  return (
    <AuthLayout heading="New Account">
      <View>
        <KeyboardAvoidingView style={styles.inputFieldsContainer}>
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
          <Input
            label="Mobile Number"
            placeholder="Enter your mobile number"
            value={values.mobile}
            onChangeText={handleChange('mobile')}
            onBlur={handleBlur('mobile')}
            keyboardType="numeric"
            error={displayErrors.mobile}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.signupBtn}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Link screen={ROUTES.LOGIN}>
            <Text style={styles.loginLink}>Log In</Text>
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
};
