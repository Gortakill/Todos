import { css } from '@emotion/css';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { THEME } from '~shared/styles/constants';

interface Props {
	label: string;
	className: string;
	register: UseFormRegister<any>;
	validationRules?: {
		required: string;
		minLength?: {
			value: number;
			message: string;
		};
		maxLength?: {
			value: number;
			message: string;
		};
		pattern?: {
			value: RegExp;
			message: string;
		};
	};
	fieldName: string;
	fieldType: string;
	errors?: FieldError;
	placeHolder?: string;
	value?: string;
}

const Input: React.FunctionComponent<Props> = ({
	label,
	placeHolder,
	className,
	register,
	validationRules,
	fieldName,
	fieldType,
	errors,
	value,
}) => {
	return (
		<section>
			<label htmlFor={fieldName}>{label}</label>
			<div
				className={css`
					margin-bottom: ${THEME.spacing.small};
				`}
			>
				<input
					type={fieldType}
					id={fieldName}
					className={className}
					placeholder={placeHolder}
					{...register(fieldName, validationRules)}
					value={value}
				/>
				{errors?.message && (
					<p
						className={css`
							font-size: ${THEME.fonts.size.small};
							color: ${THEME.colors.error};
						`}
					>
						{errors.message as string}
					</p>
				)}
			</div>
		</section>
	);
};

export default Input;
