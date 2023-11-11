export const CallGPT = async ({ prompt }) => {
  const messages = [
    {
      /*사진 */

      role: "system",
      content: `## INFO ##
      you can add images to the reply by URL, Write the image in JSON field 
      Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
    },
    {
      /*역할설정 */
      role: "system",
      content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    },
    {
      role: "user",
      content: `1. [title] : Think of the diary title after understanding the [events] at the bottom.
      2. [evaluates] :Describe how I felt in relation to my diary.
      3. [image] : Create an image by making the contents so far into one keyword .
     4. [goals] : Please set a goal according to your diary.
     5. [self]: Please recommend me a self-development plan that I need to do in the future.
     6. [solution]: Tell me how you solved the contents of the diary.
     7. [book]: Please recommend the title of the book and the author's name so that I can build up my education according to the contents of the diary.
     8. [song]: Please recommend a singer's name and song that I can listen to while looking at the diary that I saved.
     9. [support]: Please say something comforting and supporting me according to the diary.
        
        /*변수설정 */

        Translate into Korean and Use the output in the following JSON format:
        { 
          title: here is [title],
          thumbnail: here is [image],
          emotional: here is [evaluates],
          future_goals: here is [goals], 
          self_improvement_recommendation: here is [self], 
          solution_others: here is [solution], 
          book_recommendation: here is [book],
          song_recommendation: here is [song],
          consolation_and_support: here is [support],

        }
        
        [events]:`,
    },
    {
      role: "user",
      content: `
          """
          ${prompt}
          """`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(">>responseData", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};
