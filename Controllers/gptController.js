const {Configuration, OpenAIApi} = require('openai')
const axios = require('axios')
const configuration = new Configuration({
    apiKey: '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',
})

const openai = new OpenAIApi(configuration);



exports.get_response = async (req, res, next) => {
    let data = await axios.post('https://api.openai.com/v1/completions',
    {
        "model": 'text-davinci-003',
        "prompt": 'Say this is a text',
        "max_tokens": 7,
        "temperature": 0
    },{
    headers:{
        'Authorization': 'Bearer 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',
        'Content-Type':'application/json'

    }
    })
    // let data = await openai.createCompletion({
    //     model: 'text-davinci-003',
    //     prompt: 'Say this is a text',
    //     max_tokens: 7,
    //     temperature: 0
    res.json(data)
}

