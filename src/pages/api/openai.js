import { OpenAIApi, Configuration } from "openai";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.message,
      temperature: 0.9,
      max_tokens: 4000,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    console.log("*PASSED*");

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log("*FAILED*");
    console.error(error);
    res.status(500).send(error);
  }
}
