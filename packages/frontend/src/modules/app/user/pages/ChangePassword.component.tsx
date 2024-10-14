import { Button, Overlay2, OverlaysProvider } from '@blueprintjs/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginInput } from '~modules/app/auth/pages/auth.styles';
import Input from '~shared/components/Input/Input.component';
import { PasswordValidation } from '~shared/validation/validation';
import { useAuthStore } from '~store/auth.store';
import {
	FormStyles,
	OverlayStyles,
} from '~shared/components/todoCreate/todoCreate.styles';

interface FormType {
	password: string;
}

interface Props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isOpen: boolean;
}

const ChangePassword: React.FunctionComponent<Props> = ({
	setIsOpen,
	isOpen,
}) => {
	const changePass = useAuthStore((state) => state.changePassword);
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<FormType>();

	const onSubmit = (data: FormType) => {
		changePass(data), alert('Password was changed'), reset();
	};

	return (
		<OverlaysProvider>
			<Overlay2
				isOpen={isOpen}
				onClose={() => setIsOpen((prev) => !prev)}
				className={OverlayStyles}
			>
				<form onSubmit={handleSubmit(onSubmit)} className={FormStyles}>
					<h1>Change password</h1>
					<div className="input">
						<Input
							className={loginInput}
							register={register}
							fieldName="password"
							fieldType="password"
							label="Enter your password"
							validationRules={PasswordValidation}
							errors={errors.password}
						/>
						<Button type="submit" text="submit" intent="primary" />
					</div>
					<div></div>
				</form>
			</Overlay2>
		</OverlaysProvider>
	);
};

export default ChangePassword;
