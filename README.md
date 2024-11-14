# OpenAI HTML Generator

Projekt do przekształcania artykułów tekstowych w kod HTML z pomocą OpenAI API.

## Funkcje

- Przetwarza artykuł tekstowy z pliku `oxido-article.txt` na HTML z odpowiednimi tagami (`<h1>`, `<h2>`, `<p>`).
- Generuje tagi `<img>` dla miejsc, gdzie można dodać ilustracje, z opisem w `alt`.
- Zapisuje wygenerowany HTML w pliku `artykul.html`.
- Używa promptu z pliku `prompt.txt` do generowania kodu HTML.

## Instalacja

1. Zainstaluj [Node.js](https://nodejs.org/) (jeśli jeszcze go nie masz). Node.js zawiera npm, który jest menedżerem pakietów.
   
2. Zainstaluj zależności:
```bash
   npm install axios
```
   
3. Skonfiguruj swój klucz API OpenAI:  

   Utwórz plik `config.js` w głównym katalogu projektu i dodaj następującą zawartość:

```javascript
module.exports = {
    openaiApiKey: 'YOUR_API_KEY'
};
```  
Uwaga: Plik config.js nie został przesłany do repozytorium z powodów bezpieczeństwa, dlatego należy utworzyć go samodzielnie.

## Jak uruchomić?

1. Uruchom aplikację:

```bash
node app.js
```
2. Program wczyta artykuł z pliku oxido-article.txt, przekaże go do OpenAI z odpowiednim promptem, a następnie zapisze wygenerowany kod HTML do pliku artykul.html.
3. Możesz otworzyć plik podglad.html, aby zobaczyć wynik.  
Alternatywnie, możesz ręcznie dodać wygenerowaną treść HTML do sekcji <body> w pliku szablon.html.


## Struktura
app.js – główny plik aplikacji.  
config.js – plik z kluczem API OpenAI.  
oxido-article.txt – plik zawierający artykuł do przekształcenia.  
prompt.txt – plik zawierający prompt do generowania HTML.  
artykul.html – plik z wygenerowanym HTML.  
.gitignore – pliki, które są ignorowane przez Git (np. config.js).  
