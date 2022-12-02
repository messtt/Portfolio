import axios from 'axios';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    console.log(config.token)
    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/messtt/repos',
        headers: {
            Authorization: `Bearer ${config.token}`,
            "content-type": "application/json" ,
            'Accept-Encoding': 'identity'
        },
    })
    return (data);
})
