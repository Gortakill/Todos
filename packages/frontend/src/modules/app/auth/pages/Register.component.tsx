import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthStyles, loginInput, LoginMain } from './auth.styles';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '~store/auth.store';
import { ROUTER_KEYS } from '~shared/keys';
import AuthNav from '~shared/components/authNav/AuthNav.component';
import Input from '~shared/components/Input/Input.component';
import {
	EmailValidation,
	NameValidation,
	PasswordValidation,
} from '~shared/validation/validation';
import Layout from '~shared/components/layout/Layout.component';
import { Card, Elevation } from '@blueprintjs/core';

interface FormType {
	email: string;
	name: string;
	password: string;
}

const RegisterComponent: React.FunctionComponent = () => {
	const regitesrUser = useAuthStore((state) => state.registerUser);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormType>();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		regitesrUser(data);
		navigate(ROUTER_KEYS.AUTHENTICATE_PAGE);
	};

	return (
		<Layout>
			<main className={LoginMain}>
				<Card className={AuthStyles} elevation={Elevation.TWO}>
					<h1>Sign up</h1>
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
							fieldName="name"
							fieldType="text"
							label="Enter your name"
							validationRules={NameValidation}
							errors={errors.name}
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

export default RegisterComponent;
