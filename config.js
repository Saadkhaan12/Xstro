import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

const config = {
  SESSION_ID: process.env.SESSION_ID || 'XSTRO_02_80_44',
  SUDO: process.env.SUDO || '923176991036',
  BOT_INFO: process.env.BOT_INFO || 'SWATI-TEACH',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
  VERSION: '1.4.0',
};

export { config };
export default config;
