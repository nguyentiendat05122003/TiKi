import axiosClient from '~/services';
import { FormValuesRegister, ParamsLogin, ResponseValue } from '~/types/auth';

const userApi = {
    async registerUser(data: FormValuesRegister, options = {}) {
        const response = await axiosClient.post('auth/local/register', data, options);
        return response;
    },
    async loginUser(data: ParamsLogin, options = {}): Promise<ResponseValue> {
        return await axiosClient.post('auth/local', data, options);
    },
};
export default userApi;
