import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
            ...prevResource, 
            next: data.next,
            result: data.results.redcue((ass, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                ? acc : [...acc, cur];
            }, prevResource.result),
        }));
    } catch (err) {}
};