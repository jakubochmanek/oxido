const fs = require("fs");
const axios = require("axios");
const config = require("./config");

// Funkcja do odczytu pliku z artykułem
function readArticleFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("Treść artykułu wczytana poprawnie.");
    return content;
  } catch (error) {
    console.error("Błąd przy odczycie pliku:", error);
    return null;
  }
}

// Wczytywanie treść artykułu z pliku
const articleContent = readArticleFile("oxido-article.txt");

// Funkcja do przetworzenia artykułu przez API OpenAI
async function processArticleWithOpenAI(articleContent) {
  const apiKey = config.openaiApiKey;
  const url = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      url,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              'Przekształć poniższy tekst artykułu na kod HTML. Użyj odpowiednich tagów HTML do strukturyzacji treści, dodaj miejsca na grafiki z użyciem tagów <img src="image_placeholder.jpg"> i alt z dokładnym opisem grafiki, oraz umieść podpisy pod grafikami.',
          },
          {
            role: "user",
            content: articleContent,
          },
        ],
        max_tokens: 2000,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const htmlContent = response.data.choices[0].message.content; // Zmiana odczytu odpowiedzi
    console.log("Kod HTML wygenerowany przez OpenAI:");
    console.log(htmlContent);

    return htmlContent;
  } catch (error) {
    console.error("Błąd przy komunikacji z API OpenAI:", error);
  }
}

// Przetwarzanie treści artykułu
if (articleContent) {
  processArticleWithOpenAI(articleContent).then((htmlContent) => {
    if (htmlContent) {
      // Zapisywanie wygenerowanego HTML do pliku
      fs.writeFileSync("artykul.html", htmlContent);
      console.log("Kod HTML zapisany jako artykul.html");
    }
  });
}
