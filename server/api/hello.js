import axios from "axios";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const instance = axios.create({
        baseURL: "https://api.github.com",
        headers: {
            "Authorization": `Bearer ${config.token}`,
            "Accept": "application/vnd.github+json",
            "Accept-Encoding": "Identify"
        },
    });

    const response =
        await instance.get("/user/repos");
    return response.data;
});