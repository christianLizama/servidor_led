import mqtt from 'mqtt';
import config from '../config.js';

// Conexión al broker MQTT
const client = mqtt.connect(`mqtt://${config.mqtt.host}`, { username: config.mqtt.user, password: config.mqtt.password });

// Función para enviar un mensaje MQTT al ESP32
export const sendMessageToESP32 = (message) => {
    // Publicación de un mensaje en el topic deseado
    const topic = config.mqtt.topic;
    // Convertir el mensaje a JSON
    const messageString = JSON.stringify(message);
    client.publish(topic, messageString);
    console.log(`Mensaje enviado al ESP32 en el topic ${topic}: ${message}`);
};
