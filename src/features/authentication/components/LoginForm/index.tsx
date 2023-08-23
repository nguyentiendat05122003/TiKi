import { Box } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '~/components/FormControl/inputFiled';
import { FormValuesLogin } from '~/types/auth';
import style from '~/features/authentication/authentication.module.scss';
// import { fetchLoginUser } from '~/reducers/userReducer';
// import { unwrapResult } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
    })
    .required();
export default function LoginForm() {
    const cx = classNames.bind(style);
    //const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesLogin>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<FormValuesLogin> = async (data, e) => {
        e?.preventDefault();
        console.log(data);
        try {
            // const payload = {
            //     identifier: data.email,
            //     password: data.password,
            // };
            // const resultAction = await dispatch(fetchLoginUser(payload));
            // const originalPromiseResult = unwrapResult(resultAction);
            // if (originalPromiseResult) {
            //     if (!onClick) return;
            //     onClick();
            // }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Box component="form" sx={{ mt: 1 }}>
            <InputField errors={errors} control={control} name="email" label="Email Address" />
            <InputField control={control} errors={errors} name="password" label="Password" password />
            <button onClick={handleSubmit(onSubmit)} className={cx('btn-submit')}>
                Đăng nhập
            </button>
        </Box>
    );
}
