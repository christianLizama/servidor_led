import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });

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