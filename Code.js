function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate();
}

function include(nombreArchivo) {
  return HtmlService.createHtmlOutputFromFile(nombreArchivo).getContent();
}

function myFunction() {
  
}
