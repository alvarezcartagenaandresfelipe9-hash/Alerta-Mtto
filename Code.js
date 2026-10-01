function doGet() {
  const template = HtmlService.createTemplateFromFile('index');

  template.appConfig = {
    NOMBRE: 'MaqTrack',
    DESCRIPCION: 'Control de máquinas',
    VERSION: '1.0.0'
  };

  return template.evaluate();
}

function include(nombreArchivo) {
  return HtmlService.createHtmlOutputFromFile(nombreArchivo).getContent();
}

function myFunction() {
  
}
