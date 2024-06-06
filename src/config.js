import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Obtener la ruta del directorio del archivo actual
const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDir = dirname(currentFilePath);

// Retroceder un nivel (salir de 'src')
const rootDir = join(currentDir, '..');

// Ruta al archivo .env según la lógica deseada
const envFilePath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const absolutePath = join(rootDir, envFilePath);

dotenv.config({ path: absolutePath });

export default {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
    },
    mqtt: {
        host: process.env.MQTT_HOST || 'localhost',
        user: process.env.MQTT_USER || 'user',
        password: process.env.MQTT_PASS || 'user',
        topic: process.env.MQTT_TOPIC || 'topic',
    },
};