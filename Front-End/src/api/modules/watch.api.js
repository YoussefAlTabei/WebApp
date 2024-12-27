import privateClient from "../client/private.client.js";

const watchEndpoints = {
    list: "user/watch",
    add: "user/watch",
    remove: ({watchId}) => `user/watch/${watchId}`
};

const watchApi = {
    getList: async({}) => {
        try{
            const response = await privateClient.get(watchEndpoints.list);
            return {response};
        }catch(error){return{error:error};}
    },
    add: async({
                   mediaId,
                   mediaType,
                   mediaTitle,
                   mediaPoster,
                   mediaRate
               }) => {
        try{
            const response = await privateClient.post(watchEndpoints.add,
                {
                    mediaId,
                    mediaType,
                    mediaTitle,
                    mediaPoster,
                    mediaRate
                });
            return {response};
        }catch(error){return{error:error};}
    },
    remove: async({watchId}) => {
        try{
            const response = await privateClient.delete(watchEndpoints.remove({
                watchId
            }));
            return {response};
        }catch(error){return{error:error};}
    },

}
export default watchApi;