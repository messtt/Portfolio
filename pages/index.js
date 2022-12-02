require('dotenv').config();
const axios = require('axios')

let tocken = process.env.GITHUB_TOKEN

async function main (params){
    const {data} = await axios({
        method: 'get',
        url: 'https://api.github.com/users/antonin-11/repos',
        headeres: {
            Authorization: 'Bearer ${tocken',
            "Content-Type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })

    console.log(data)
}

main();
