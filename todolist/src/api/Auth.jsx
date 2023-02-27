import { axiosAPI } from "./Client";

export const sendForSignupFunction = async (body) => {
    try {
        const res = await axiosAPI.post("/auth/signup", body);
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
}