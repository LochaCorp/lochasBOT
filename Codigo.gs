/**function probar() {
 **console.log('Fila del usuario encontrado: ' + obtenerFilaPorUsuarioYPlataformaYAmbiente('Gonzalo', 'IBM', 'QA'));
}**/

function onAddToSpace(event) {
  console.info(event);
  var message = 'Hola 😈,';
  if (event.space.type === 'DM') {
    message += ' ' + event.user.displayName + '!' + ' ' + '¿En que puedo ayudarte?';
  } else {
    message += ' gracias por agregarme al espacio ' + event.space.displayName;
  }
  message += ', para mas info ingresa el siguiente comando /helpLochasBot'
  console.log('LochasBot added in ', event.space.name);
  return { text: message };
}

function onRemoveFromSpace(event) {
  console.info(event);
  var message = 'Puedes utilizar los comandos en DM y Espacios.';
  console.log('LochasBot removed from ', event.space.name);
  return { text: message };
}

function onMessage(event) {
  if (event.message.slashCommand) {
    switch (event.message.slashCommand.commandId) {
      case 1: // /help.D.Bot
        return {"text": "Hola, activaste el comando de ayuda... Entonces te comento que soy un BOT solo de almacenamiento y consulta datos de pruebas en ambientes pre-productivos, no se edita, no se modifica , ni se  actualiza ningún dato transversal al banco. \nEsta automatización³n es para poder controlar de mejor manera las credenciales de ejecutivos de pruebas. \nPara poder usar estas automatizaciones solo necesitaras los comandos de activación³n!.  \nPuedes usar el siguiente comando: /listComLochasBot para obtener todos los comandos disponibles. \nNo olvides que los comandos se deben iniciar con un â€œ/â€œ.\nEspero que la información³n sea de utilidad. \nEncontraras comandos para consultar, informar actualizaciones de algún dato, podrás agregar nuevos datos al repositorio; \nTambién hay comandos para obtener urls, documentaciones o información sobre algún tema en especifico. \nNo olvides usar el comando correcto! "}

      case 2:  // /editPassEje.D.Bot /actualizar pass ejecutivo
        return informarEjecutivo(event); 
    
      case 3: // /UrlsQa.D.Bot
        return{"text": "Hola, comparto URL's en ambiente de certificación QA) de BCI que te podrían ayudar:\n \nPARA LOGS Y MONITOREO:\nhttp://logscertificacion/bases/bases_cert \nPARA SDM:\nhttp://sdm.bci.cl/CAisd/pdmweb.exe \nPARA BCI-WEB:\nhttp://bcicert/personas/ \nhttp://bcicert/empresas/ \nhttp://bcicert/empresarios/ \nhttp://bcicert/cl/bci/aplicaciones/seguridad/autenticacion/vista/loginBancaPrivada.jsf \nhttp://bcicert/nova/ \nhttps://intranetcert.bci.cl/Bcinet/login.html \nhttp://bcicert/portal/ \nhttp://bcicert/everest/ \nPARA SOPORTE OCTANE:\nhttps://tsoftsoportebci.atlassian.net/servicedesk/customer/portals \nPARA CATALOGO SERVICIOS:\nhttp://161.131.247.91/CatalogoServicios/ \nhttp://bcicert/personas/ServidoresCertificacion.htm \nPARA MAIL-LATINIA:\nhttp://bcicert/mail/ \nhttp://161.131.141.240:8010/contracts/auth/login.jsp \nPARA JIIRA:\nhttps://bcibank.atlassian.net/jira/dashboards/ \nPARA BITBUCKET:\nhttps://bitbucket.org/bancocreditoeinversiones/"}

      case 4: // /conEje.D.Bot /Consultar ejecutivo *PENDIENTE FUNCIONALIDAD*
       return consultarEjecutivo(event);

      case 5: // /listComLochasBot *listado de comandos en LochasBot
      return{"text": "Hola, estos son los comandos disponibles:\n \n1.-/listComLochasBot-->Listado de Comandos Disponibles. \n2.-/conEje-->Consultar Ejecutivos. \n3.-/editPassEje-->Informar Nueva Pass Ejecutivo.. \n4.-/getDatabases-->Listado de servicio (IP,BD,etc...). \n5.-/helpLochasBot-->Comando de información básica.. \n6.-/jimmyfcp-->Listado de Comandos Disponibles. \n7.-/linksLochasBot-->Listado de URLÂ´s Disponibles. \n8.-/lochasBotFrases-->Frase filosófica random."}

      case 6: // /jimmyfcp
      return{"text": "Hola, comparto URL's en ambiente de Integración(IC)) de BCI que te podrían ayudar:\n \nPARA LOGS Y MONITOREO:\nhttp://logscertificacion/bases/bases_cert \nPARA SDM:\nhttp://sdm.bci.cl/CAisd/pdmweb.exe \nPARA BCI-WEB:\nhttp://bcidesa/personas/ \nhttp://bcicert/empresas/ \nhttp://bcicert/empresarios/ \nhttp://bcidesa/cl/bci/aplicaciones/seguridad/autenticacion/vista/loginBancaPrivada.jsf \nhttp://bcidesa/nova/ \nhttps://intranetdesa.bci.cl/Bcinet/login.html \nhttp://bcicert/portal/ \nhttp://bcidesa/everest/ \nPARA SOPORTE OCTANE:\nhttps://tsoftsoportebci.atlassian.net/servicedesk/customer/portals \nPARA CATALOGO SERVICIOS:\nhttp://161.131.247.91/CatalogoServicios/ \nhttp://bcidesa/personas/ServidoresCertificacion.htm \nPARA MAIL-LATINIA:\nhttp://bcidesa/mail/ \nhttp://161.131.141.240:8010/contracts/auth/login.jsp \nPARA JIIRA:\nhttps://bcibank.atlassian.net/jira/dashboards/ \nPARA BITBUCKET:\nhttps://bitbucket.org/bancocreditoeinversiones/"}

      case 7: // /getsDatabases
      return {
        "text": "Los links de bases de datos son: \nDESA: http://bcicert.bci.cl/personas/Bases_Desarrollos.html\nQA: http://logscertificacion/bases/bases_cert \nLas IP de IBM: \nIC IP - 161.131.254.12 \nQA IP - 161.131.254.10 "
      }
      case 8: //LochasBotFrases
      return{"text": "Donald Rumsfeld dijo: Hay hechos desconocidos que desconocemos , También sabemos que hay hechos desconocidos conocidos; es decir, sabemos que hay algunas cosas que no sabemos.\n Pero hay también hechos desconocidos que desconocemos, aquéllos que no sabemos que no sabemos" 
          }
    }
  }
  else {
    return {
      "cardsV2": [{
        "cardId": "LochasBot-BCI-QANova",
        "card": {
          "header": {
            "title": "Consultor claves de ejecutivos",
            "subtitle": "Actualizar pass del ejecutivo",
            "imageUrl": "https://ciberprotector.com/wp-content/uploads/2019/05/contrasen%CC%83as-seguras.png",
            "imageType": "CIRCLE"
          },
          "sections": [
            {
              "widgets": [
                {
                  "buttonList": {
                    "buttons": [
                      {
                        "text": "Consultar Ejecutivo",
                        "onClick": {
                          "action": {
                            "function": "consultarEjecutivo",
                            "interaction": "OPEN_DIALOG"
                          }
                        }
                      },
                      {
                        "text": "Informar Ejecutivo",
                        "onClick": {
                          "action": {
                            "function": "informarEjecutivo",
                            "interaction": "OPEN_DIALOG"
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }]

    };
  }
  console.log(event);
}

function agregarEjecutivo(usuario, clave, plataforma, ambiente) {
    const file = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1SqWu8Iv-xC_93_0DRL3aNbhiqaMEta2wKdw7UNj8DGA/edit') // URL DEL ARCHIVO

    SpreadsheetApp.setActiveSpreadsheet(file); // UTILIZA EL ARCHIVO BUSCADO

    let sheet = file.getSheetByName('Ejecutivos'); // OBTIENE HOJA MEDIANTE NOMBRE

    sheet.appendRow([usuario, clave, plataforma, ambiente]); // INSERTA NUEVA FILA CON VALORES POR CADA COLUMNA A1, B1, C1, etc

    let dataRange = sheet.getDataRange();

    var lastRowInserted = dataRange.getLastRow(); // OBTIENE ULTIMA FILA INGRESADA

    console.log('Se ingreso el usuario ' + usuario + ' en la fila ' + lastRowInserted);
}

function actualizarEjecutivo(usuario, clave, plataforma, ambiente) {
    const file = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1SqWu8Iv-xC_93_0DRL3aNbhiqaMEta2wKdw7UNj8DGA/edit') // URL DEL ARCHIVO

    SpreadsheetApp.setActiveSpreadsheet(file); // UTILIZA EL ARCHIVO BUSCADO

    let sheet = file.getSheetByName('Ejecutivos'); // OBTIENE HOJA MEDIANTE NOMBRE

    let dataRange = sheet.getDataRange();
    
    let selectedRow = obtenerFilaPorUsuarioYPlataformaYAmbiente(usuario, plataforma, ambiente);

    let password = dataRange.getCell(selectedRow, 2);
    let platform = dataRange.getCell(selectedRow, 3);
    let ambient = dataRange.getCell(selectedRow, 4);

    password.setValue(clave);
    platform.setValue(plataforma);
    ambient.setValue(ambiente);

    console.log('Se actualizo el usuario ' + usuario + ' en la fila ' + selectedRow);
}

function obtenerFilaPorUsuarioYPlataformaYAmbiente(usuario, plataforma, ambiente) {
    let userRowFounded = 0; // NO DEFINIDO

    const file = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1SqWu8Iv-xC_93_0DRL3aNbhiqaMEta2wKdw7UNj8DGA/edit') // URL DEL ARCHIVO

    SpreadsheetApp.setActiveSpreadsheet(file); // UTILIZA EL ARCHIVO BUSCADO

    let sheet = file.getSheetByName('Ejecutivos'); // OBTIENE HOJA MEDIANTE NOMBRE

    let dataRange = sheet.getDataRange();

    let lastRow = dataRange.getLastRow();

    for(let i = 2; i <= lastRow; i++) {
      let userCellValue = dataRange.getCell(i, 1).getValue(); // SACAR FILA POR FILA PARA COLUMNA
      let platformCellValue = dataRange.getCell(i, 3).getValue();
      let ambientCellValue = dataRange.getCell(i, 4).getValue();

      console.log('Usuario Iterado: ' + userCellValue + ' Valor Buscado: '+ usuario + ' Plataforma Iterado: ' + platformCellValue + ' Valor Buscado: ' + plataforma + ' Ambiente Iterado: ' + ambientCellValue + ' Valor Buscado: '+ ambiente);

      if(userCellValue == usuario && platformCellValue == plataforma && ambientCellValue == ambiente) {
        userRowFounded = i; // FILA ITERANDOSE
      }
    }

    return userRowFounded;
}

function validarExistenciaUsuario(usuario, plataforma, ambiente) {
  let selectedRow = obtenerFilaPorUsuarioYPlataformaYAmbiente(usuario, plataforma, ambiente);
  
  return selectedRow != 0;
}

function informarEjecutivo(event) {
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "Informar Contraseña Ejecutivo",
                "widgets": [
                  {
                    "textInput": {
                      "label": "Nombre Ejecutivo",
                      "type": "SINGLE_LINE",
                      "name": "nomEjecutivo",
                      "placeholderText": "Ingrese un nombre de ejecutivo"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Contraseña",
                      "type": "SINGLE_LINE",
                      "name": "passEjecutivo",
                      "placeholderText": "Ingrese una contraseña del ejecutivo"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Plataforma",
                      "type": "SINGLE_LINE",
                      "name": "plataformaEjecutivo",
                      "placeholderText": "Ingrese plaraforma del ejecutivo, ejemplo: IBM"
                    }
                  },
                  
                  {
                    "selectionInput": {
                      "type": "CHECKBOX",
                      "label": "Ambiente",
                      "name": "ambEjecutivo",
                      "items": [
                        {
                          "text": "Integración (IC)",
                          "value": "IC",
                          "selected": false
                        },
                        {
                          "text": "Certificación (QA)",
                          "value": "QA",
                          "selected": false
                        }
                      ]
                    }
                  }, 
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Informar",
                          "onClick": {
                            "action": {
                              "function": "openSequentialDialog"
                            }
                          }
                        },
                        {
                          "text": "Salir",
                          "onClick": {
                            "action": {
                              "function": "openSequentialDialog2"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  };
}

function openSequentialDialog(nomEjecutivo, passEjecutivo, plataformaEjecutivo) {
  let existsUser = validarExistenciaUsuario(nomEjecutivo, 'IBM', 'QA');

  if(existsUser) {
    actualizarEjecutivo(nomEjecutivo, passEjecutivo, 'IBM', 'QA');
  } else {
    agregarEjecutivo(nomEjecutivo, passEjecutivo, 'IBM', 'QA');
  }
}

function onCardClick(event) {

  if (event.common.invokedFunction === "informarEjecutivo") {
    return informarEjecutivo(event);
  }

  if (event.common.invokedFunction === "consultarEjecutivo") {
    return consultarEjecutivo(event);
  }

  if (event.common.invokedFunction === "openSequentialDialog") {
    const nomEje = fetchFormValue(event, "nomEjecutivo");
    const passEje = fetchFormValue(event, "passEjecutivo");
    const ambEje = fetchFormValue(event, "ambEjecutivo");
    return openSequentialDialog(nomEje, passEje,ambEje);
  }

  if (event.common.invokedFunction === "receiveDialog") {
    const parameters = event.common.parameters;
    parameters["contactType"] = fetchFormValue(event, "contactType");
    parameters["notes"] = fetchFormValue(event, "notes");
    return receiveDialog(parameters);
  }
}

function fetchFormValue(event, widgetName) {
  const widget = event.common.formInputs[widgetName];
  if (widget) {
    return widget[""]["stringInputs"]["value"][0];
  }
}

function consultarEjecutivo(event) {
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "Consultar Ejecutivo",
                "widgets": [
                  {
                    "textInput": {
                      "label": "Nombre A Consultar Ejecutivo",
                      "type": "SINGLE_LINE",
                      "name": "nomEjecutivo",
                      "placeholderText": "Ingrese un nombre de ejecutivo"
                    }
                  },
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Consultar",
                          "onClick": {
                            "action": {
                              "function": "openSequentialDialog"
                            }
                          }
                        },
                        {
                          "text": "Salir",
                          "onClick": {
                            "action": {
                              "function": "openSequentialDialog2"
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  };
}

function openSequentialDialog2(nomEjecutivo, passEjecutivo,ambEjecutivo) {
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "Ingresar nueva pass",
                "widgets": [
                  {
                    "textInput": {
                      "label": "Notes",
                      "type": "MULTIPLE_LINE",
                      "name": "notes"
                    }
                  },
                  {
                    "selectionInput": {
                      "type": "RADIO_BUTTON",
                      "label": "Selecciona el Ambiente.",
                      "name": "ambEje",
                      "items": [
                        {
                          "text": "Certificación QA",
                          "value": "QA",
                          "selected": false
                        },
                        {
                          "text": "Integración IC",
                          "value": "IC",
                          "selected": false
                        }
                      ]
                    }
                  },
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Actualizar Pass",
                          "onClick": {
                            "action": {
                              "function": "receiveDialog",
                              "parameters": [
                                {
                                  "key": "Ejecutivo",
                                  "value": nomEjecutivo
                                },
                                {
                                  "key": "Pass",
                                  "value": passEjecutivo
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    "horizontalAlignment": "END"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  };
}

function receiveDialog(parameters) {

  // Checks to make sure the user entered a name
  // in a dialog. If no name value detected, returns
  // an error message.
  if (!parameters.nomEjecutivo) {
    return {
      "actionResponse": {
        "type": "DIALOG",
        "dialogAction": {
          "actionStatus": {
            "statusCode": "INVALID_ARGUMENT",
            "userFacingMessage": "Ingresa un ejecutivo correcto"
          }
        }
      }
    };

    // Otherwise the Chat app indicates that it received
    // form data from the dialog. Any value other than "OK"
    // gets returned as an error. "OK" is interpreted as
    // code 200, and the dialog closes.
  } else {
    return {
      "actionResponse": {
        "type": "DIALOG",
        "dialogAction": {
          "actionStatus": {
            "statusCode": "OK",
            "userFacingMessage": "Pass Actualizada. " + JSON.stringify(parameters)
          }
        }
      }
    };
  }
}
