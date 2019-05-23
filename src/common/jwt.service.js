const ID_TOKEN_KEY = "token";

export const getToken = () => {
    if(window.localStorage.getItem(ID_TOKEN_KEY) != null){
        if(Object.keys(window.localStorage.getItem(ID_TOKEN_KEY)).length > 0){
            return window.localStorage.getItem(ID_TOKEN_KEY);
        }
    }
    return null;
};

export const isAuthenticated = () => {
    if(window.localStorage.getItem(ID_TOKEN_KEY) != null){
        if(Object.keys(window.localStorage.getItem(ID_TOKEN_KEY)).length > 0){
            return true;
        }
    }
    return false;
};

export const saveToken = token => {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
    window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, isAuthenticated, saveToken, destroyToken };
