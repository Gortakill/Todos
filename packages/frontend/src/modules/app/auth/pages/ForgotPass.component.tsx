import { css } from '@emotion/css';
import React from 'react';
import { AuthStyles, loginInput, LoginMain } from './auth.styles';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '~store/auth.store';
import AuthNav from '~shared/components/authNav/AuthNav.component';
import Input from '~shared/components/Input/Input.component';
import { EmailValidation } from '~shared/validation/validation';
import { Card, Elevation } from '@blueprintjs/core';
import Layout from '~shared/components/layout/Layout.component';

interface FormType {
	email: string;
}

const ForgotPass: React.FunctionComponent = () => {
	const forgotPassword = useAuthStore((state) => state.forgotPassword);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormType>();

	const onSubmit = (data: FormType) => {
		forgotPassword(data),
			reset(),
			alert('Mail with link for changing password was send');
	};

	return (
		<Layout>
			<main className={LoginMain}>
				<Card className={AuthStyles} elevation={Elevation.TWO}>
					<h1>Forgot Password</h1>
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
						<AuthNav text="submit" />
					</form>
				</Card>
			</main>
		</Layout>
	);
};

export default ForgotPass;
