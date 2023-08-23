import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
// import { unwrapResult } from '@reduxjs/toolkit';
import classNames from 'classnames/bind';
// import { useSnackbar } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import style from '~/features/authentication/authentication.module.scss';
import { FormValuesRegister } from '~/types/auth';
import InputField from '~/components/FormControl/inputFiled';
const schema = yup
    .object({
        username: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
    })
    .required();
export default function RegisterForm() {
    const cx = classNames.bind(style);
    // const dispatch = useDispatch();
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValuesRegister>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<FormValuesRegister> = async (data, e) => {
        e?.preventDefault();
        try {
            data = { ...data, username: data.email };
            console.log(data);
            // const resultAction = await dispatch(fetchPostUser(data));
            // const originalPromiseResult = unwrapResult(resultAction);
            // if (originalPromiseResult) {
            //     enqueueSnackbar('Đăng ký thành công', {
            //         autoHideDuration: 3000,
            //         variant: 'success',
            //         anchorOrigin: { vertical: 'top', horizontal: 'right' },
            //     });
            //     reset();
            //     if (!onClick) return;
            //     onClick();
            // }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            // enqueueSnackbar(error, {
            //     autoHideDuration: 3000,
            //     variant: 'error',
            //     anchorOrigin: { vertical: 'top', horizontal: 'right' },
            // });
        }
    };
    return (
        <div>
            <Box component="form" sx={{ mt: 1 }}>
                <InputField errors={errors} control={control} name="username" label="User Name" />
                <InputField errors={errors} control={control} name="email" label="Email Address" />
                <InputField control={control} errors={errors} name="password" label="Password" password />
                <InputField
                    control={control}
                    errors={errors}
                    name="confirmPassword"
                    label="Confirm Password"
                    password
                />
                <button onClick={handleSubmit(onSubmit)} className={cx('btn-signUp')}>
                    Đăng ký
                </button>
            </Box>
        </div>
    );
}
