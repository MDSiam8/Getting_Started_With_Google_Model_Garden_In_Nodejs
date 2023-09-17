const {
  sendRequest,
  writeResponseLocally,
} = require("../utils/google-foundation-models");
const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "hophacks23-399208",
  modelId: "chat-bison@001",
  instances: [
    {
      context:
        "Pretend that you are a chat assistant here to help student find courses based on their interest. Tell me how many great offerings Johns Hopkins University has amongst their 1000+ courses and ask me to list my interests. Make it quirky and subtly list examples of fun ideas if they need inspiration like 'Gamestop and Toilet Paper' or 'the history of poisons'. When you list the course, rephrase the course description to be long and make it sound fun. If the course does not exist among what you've seen in the examples, say sorry and apologize.",
      examples: [
        {
          input: {
            author: "user",
            content:
              "'What is the common good'? How do individuals consider this idea, this question, and how are societies led, or misled, by its pursuit? Together, we will explore sources from a range of perspectives: What does Aristotle’s theory of the common good teach us? Or the Federalist Papers, the design of Baltimore’s public transportation system, meritocracy in higher education, the perniciousness of pandemics, proliferation of nuclear weapons, restorative justice, or intimate love? Drawing from film, journal articles, literature, and other sources—authors/creators include Rachel Carson, James Baldwin, Bong Joon-ho, Jhumpa Lahiri, Michael Sandel, and more—this First-Year Seminar is as much about how we ask and interrogate challenging, timeless questions as it is about the answers themselves. Engaging our material and each other, we will work together to hone the habits of scholarly inquiry essential to this practice: reading, writing, talking. The seminar will culminate in a final, collaborative research project that seeks to map, and manifest, versions of the common good.",
          },
          output: {
            author: "bot",
            content: "AS.001.100 - FYS: What is the Common Good?",
          },
        },
      ],
      messages: [
        // {
        //   content:
        //     "Hello! Welcome to Johns Hopkins University! We have over 1000 courses to choose from, so I'm sure we can find something that interests you. What are you interested in learning about?",
        //   author: "bot",
        // },
        {
            author: "user",
            content: "Hello, I am interested in philosphical questions like the common good and whatnot. Do you have any course recommendations?"
        }
      ],
    },
    // {content: "Hello, I am interested in philosophical questions like the common good and whatnot. Do you have any course recommendations?"}
  ],
  parameters: { temperature: 0.2, maxOutputTokens: 256, topP: 0.8, topK: 40 },
};
sendRequest(params)
  .then((response) => {
    console.log(response);
    writeResponseLocally(params, response);
  })
  .catch((error) => {
    console.error(error);
  });
