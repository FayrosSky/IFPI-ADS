#Instalação e uso de pacores externos com pip
#Python possui um gerenciador de pacotes chamado pip que permite instalar e gerenciar pacotes externos. Pacotes de módulos organizados para resolver problemas específicos.


#Instalando um pacote com pip
#Para instalar um pacote, basta usar o comando pip install nome_do_pacote. Por exemplo, para instalar o pacote requests que permite fazer requisições HTTP, use: pip install requests

#Nota: certifique-se que o Python está instalado corretamente e configurado em seu PATH para que pip funcione.

#Usando pacotes instalados
#Após a instalação, você pode importar o pacote normalmente:

import requests
response = requests.get("https://api.github.com")
print(response.status_code) #saída: 200