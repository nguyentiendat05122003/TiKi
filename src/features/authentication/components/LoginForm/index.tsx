import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import classNames from 'classnames/bind';
import { useSnackbar } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '~/components/FormControl/inputFiled';
import style from '~/features/authentication/authentication.module.scss';
import { useAppDispatch } from '~/hooks';
import { fetchLoginUser } from '~/slices/userSlice';
import { FormValuesLogin } from '~/types/auth';
const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
    })
    .required();
interface LoginFormProps {
    onClickCloseLogin: () => void;
}
export default function LoginForm({ onClickCloseLogin }: LoginFormProps) {
    const cx = classNames.bind(style);
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();
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
        try {
            const payload = {
                identifier: data.email,
                password: data.password,
            };
            const resultAction = await dispatch(fetchLoginUser(payload));
            const originalPromiseResult = unwrapResult(resultAction);
            if (originalPromiseResult) {
                enqueueSnackbar('Đăng ký thành công', {
                    autoHideDuration: 2000,
                    variant: 'success',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                });
                if (!onClickCloseLogin) return;
                onClickCloseLogin();
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            enqueueSnackbar(error, {
                autoHideDuration: 2000,
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
            });
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
