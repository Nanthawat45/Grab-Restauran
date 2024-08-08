import api from "./api";
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_AUTH_API;

const register = (username, email, password) => {
    api.post(API_URL + "/signup",{username, email, password });
};

const login = async (username, password) =>{
    const response = await api.post(API_URL + "signin", {username, password});
    if(response.data.accessToken){
        localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
        localStorage.setItem("user",JSON.stringify(response)
        );
    }
    return response;
}

const AuthService = {
    register, login
};

export default AuthService