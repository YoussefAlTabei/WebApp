import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const userEndpoints = {
    signin: "user/signin",
    signup: "user/signup",
    getInfo: "user/info",
    getFavorites: "user/favorites",
    addFavorites: "user/favorites",
    getWatchlist: "user/watchlist",
    addWatchlist: "user/watchlist"
}

const userApi = {
    signin: async ({username, password}) => {
        try {
            const response = await publicClient.post(
                userEndpoints.signin,
                {username, password}
            );
            return {response};
        } catch (error) {return {error: error};}
    },
    signup: async ({username, password, confirmPassword, displayName}) => {
        try {
            const response = await publicClient.post(
                userEndpoints.signup,
                {username, password, confirmPassword,displayName}
            );
            return {response};

        } catch (error) {return {error: error};}
    },
    getInfo: async ({}) => {
        try {
            const response = await privateClient().get(userEndpoints.getInfo);
            return {response};
        } catch (error) {return {error: error};}
    }
}
export default userApi