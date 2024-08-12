import paho.mqtt.client as mqtt
import json

# Configurações do MQTT
broker_address = "broker.hivemq.com"
port = 1883
topic = "seu/topico"

# Dados a serem enviados (pode ser qualquer estrutura de dados serializável, como um dicionário)
dados = {
    "temperatura": 25,
    "umidade": 60
}

# Função de callback quando a conexão ao broker MQTT é estabelecida
def on_connect(client, userdata, flags, rc):
    print("Conectado ao MQTT Broker com código de resultado: " + str(rc))

    # Publica os dados no tópico ao se conectar
    client.publish(topic, json.dumps(dados))

# Configuração do cliente MQTT
client = mqtt.Client()
client.on_connect = on_connect

# Conecta-se ao broker MQTT
client.connect(broker_address, port, 120)

# Inicia o loop de execução
client.loop_start()

# Aguarda um curto período para garantir que a conexão seja estabelecida antes de enviar os dados
client.loop_start()

# Encerra a conexão após alguns segundos
client.loop_stop()
client.disconnect()
