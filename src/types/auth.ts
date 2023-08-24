/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormValuesRegister {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface FormValuesLogin {
    email: string;
    password: string;
}
export interface ParamsLogin {
    identifier: string;
    password: string;
}
export interface ResponseValue {
    jwt: string;
    user: any;
}
