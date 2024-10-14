import React from 'react';
import { AuthStyles, loginInput, LoginMain } from './auth.styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '~store/auth.store';
import { ROUTER_KEYS } from '~shared/keys';
import AuthNav from '~shared/components/authNav/AuthNav.component';
import Input from '~shared/components/Input/Input.component';
import {
	EmailValidation,
	PasswordValidation,
} from '~shared/validation/validation';
import { Card, Elevation } from '@blueprintjs/core';
import Layout from '~shared/components/layout/Layout.component';

interface FormType {
	email: string;
	password: string;
}

const LoginComponent: React.FunctionComponent = () => {
	const loginUser = useAuthStore((state) => state.loginUser);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormType>();
	const navigate = useNavigate();

	const onSubmit = (data: FormType) => {
		loginUser(data);
		navigate(ROUTER_KEYS.MAIN_PAGE);
	};

	return (
		<Layout>
			<main className={LoginMain}>
				<Card className={AuthStyles} elevation={Elevation.TWO}>
					<h1>Sign in</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							className={loginInput}
							register={register}
							fieldName="email"
							fieldType="text"
							label="Enter your email"
							validationRules={EmailValidation}
							errors={errors.email}
						/>
						<Input
							className={loginInput}
							register={register}
							fieldName="password"
							fieldType="password"
							label="Enter your password"
							validationRules={PasswordValidation}
							errors={errors.password}
						/>
						<AuthNav text="submit" />
					</form>
				</Card>
			</main>
		</Layout>
	);
};

export default LoginComponent;
