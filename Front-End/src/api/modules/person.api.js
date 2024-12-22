import publicClient from "../client/public.client.js";

const personEndpoints = {
    detail: ({personId}) => `person/${personId}`,
    medias: ({personId}) => `medias/${personId}/medias`
}


const personApi = {
    details: async({personId}) => {
        try{
            const response = await publicClient.get(personEndpoints.detail({
                personId}));
            return {response};
        }catch(error){return{error:error};}
    },
    medias: async({personId}) => {
        try{
            const response = await publicClient.get(personEndpoints.medias({
                personId}));
            return {response};
        }catch(error){return{error:error};}
    }
}