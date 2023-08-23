import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormValuesRegister } from '~/types/auth';
import { IconButton } from '@mui/material';

interface InputFieldProps {
    name: string;
    label: string;
    password?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: any;
}
export default function InputField({ name, label, password, control, errors }: InputFieldProps) {
    // const labelFontSize = '1.5rem';
    // const theme = createTheme({
    //     components: {
    //         MuiInputLabel: {
    //             styleOverrides: {
    //                 root: {
    //                     fontSize: labelFontSize,
    //                 },
    //             },
    //         },
    //         MuiOutlinedInput: {
    //             styleOverrides: {
    //                 root: {
    //                     fontSize: labelFontSize,
    //                 },
    //             },
    //         },
    //         MuiFormHelperText: {
    //             styleOverrides: {
    //                 root: {
    //                     fontSize: '1.2rem', // Change the font size to your desired value
    //                 },
    //             },
    //         },
    //     },
    // });
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = (e: MouseEvent) => {
        e.stopPropagation();
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event: MouseEvent) => {
        event.preventDefault();
    };
    return (
        <>
            {password ? (
                <>
                    <Controller
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormControl
                                // name={name}
                                {...field}
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                error={!!errors[name]}
                            >
                                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                                <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    name={name}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label={label}
                                />
                                {!!errors[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
                            </FormControl>
                        )}
                    />
                </>
            ) : (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            margin="normal"
                            {...field}
                            fullWidth
                            label={label}
                            name={name}
                            variant="outlined"
                            // inputProps={{
                            //     style: { fontSize: 15 },
                            // }}
                            // InputLabelProps={{
                            //     style: {
                            //         fontSize: 15,
                            //     },
                            // }}
                            error={!!errors[name]}
                            helperText={errors[name]?.message}
                        />
                    )}
                />
            )}
        </>
    );
}
