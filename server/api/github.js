import axios from 'axios'
const runTime = useRuntimeConfig()
const token = runTime.GITHUB_TOKEN

export default defineEventHandler(async (event) => {

    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/Shin-gema/repos',
        Headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })
    console.log(data)
    return data
})
