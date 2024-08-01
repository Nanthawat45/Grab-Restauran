const getLocalAccessToke = ()=> {
    const user = getUser();
    return user?.accessToken;
};

const setUser= (user) => {
    localStorage.setItem("user",JSON.stringify(user))
};

const getUser = ()=> {
    return JSON.parse(localStorage.getItem("user"));
};

const removeUser = () => {
    localStorage.removeUser("user");
};
const TokenService = {
    getLocalAccessToke,
    setUser,
    getUser,
    removeUser,
};

export default TokenService;