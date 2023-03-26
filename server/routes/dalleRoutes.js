import express  from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config();


// this returns whole obj of express
// const app=express()


// this returns obj.Router of express aka mini app 
const router=express.Router();

const configuration=new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(configuration.apiKey);
const openai= new OpenAIApi(configuration);
// console.log(openai)
router.get('/',(req,res)=>{
    res.send("Get from POST_ROUTE");
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    console.log(image)
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;

