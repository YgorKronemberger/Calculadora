function calcular(tipo, valor){

        if(tipo === 'acao'){

          switch (valor){ 
            case 'c':
              document.getElementById('resultado').value = null
            break
            
            case '.':
              document.getElementById('resultado').value += '.'
            break
           
            case '+':
            case '-':
            case '*':
            case '/':

            document.getElementById('resultado').value += valor
            break
            case '=':
               var val_campo = document.getElementById('resultado').value

               document.getElementById('resultado').value = eval(val_campo)

            break
            

          }

        }else if(tipo === 'valor'){


        var valorPress = document.getElementById('resultado').value += valor


        }



      }


      function Pressiona(evt){

       evt = window.event
       var chave = evt.keyCode
       var carc = ""

       
       switch(chave){

      //-----------Ações------------\\

        case 43:
            carc = '+'
        break
        case 45:
          carc = '-'
        break
        case 42:
          carc = '*'
        break
        case 47:
          carc = '/'
        break 
        case 46:
          carc = '.'
        break
        case 8:

        var qtdCarc = document.getElementById('resultado').value
        var qtdCarc = document.getElementById('resultado').value = qtdCarc.replace(qtdCarc.substr(qtdCarc.length - 1), "")

        break

        case 44:
          document.getElementById('resultado').value = null
        break
      //---------valores----------\\

        case 48:
          carc = 0
        break
        case 49:
          carc = 1
        break
        case 50:
          carc = 2
        break
        case 51:
          carc = 3
        break
        case 52:
          carc = 4
        break
        case 53:
          carc = 5
        break
        case 54:
          carc = 6
        break
        case 55:
          carc = 7
        break
        case 56:
          carc = 8
        break
        case 57:
          carc = 9
        break
        case 13:
           document.getElementById('resultado').value = eval(document.getElementById('resultado').value)
        break


       }


         document.getElementById('resultado').value += carc

        }


      
