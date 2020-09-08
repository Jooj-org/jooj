document.addEventListener('DOMContentLoaded', function() { //Evento DOM
    document.querySelector('#laranja').addEventListener('click', function() { //Evento de clique no botão do laranja
        chrome.tabs.executeScript(null, {
            file: "src/laranja.js" //Chama arquivo que altera o fundo
          });
    });
    document.querySelector('#normal').addEventListener('click', function() { //Evento de clique no botão Normal
        chrome.tabs.executeScript(null, { //Chama arquivo que poe o fundo branco
            file: "src/normal.js"
          });
    });
});