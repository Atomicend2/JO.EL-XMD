/*import config from '../../config.cjs'; // Ensure this matches your project setup

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "docugcbug") {
    const start = new Date().getTime();
    await m.React('🤖'); // React with a loading icon
    const end = new Date().getTime();
    const responseTime = (end - start).toFixed(2);

    // Updated text style with JOEL-XMD branding and response rate
    const responseText = `only premium users can use this command please update your status`;
p
    await m.React('🔏'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: responseText,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴊᴏᴇʟ xᴅ ᴠ⁷",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴊᴏᴇʟ xᴍᴅ ᴘʀᴇɴɪᴜᴍ ᴜsᴇʀs",
            body: "¢ℓι¢к нєяє тσ υρgяα∂є уσυя ѕтαтυѕ",
            thumbnailUrl: '', // Add thumbnail URL if required
            sourceUrl: 'wa.me 255714595078', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default ping;
*/

import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "settings") {
    await m.React('💮'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xtime = moment.tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xdate = moment.tz("Tanzania/Dodoma").format("DD/MM/YYYY");
    const time2 = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `
  YOUR NAME: *${pushName}*
  TIME: *${realTime}*
  TIME WISHE: *${pushwish}*
  SUDO_NUMBER: *${config.SUDO_NUMBER}*
  OWNER_NUMBER: *${config.OWNER_NUMBER}*
  OWNER_NAME : *${config.OWNER_NAME}*
  AUTO_REACT: *${config.AUTO_REACT}*
  ALWAYS_ONLINE: *${config.ALWAYS_ONLINE}*
  AUTO_RECORDING: *${config.AUTO_RECORDING}*
  AUTO_READ: *${config.AUTO_READ}*
  AUTO_TYPING: *${config.AUTO_TYPING}*
  AUTO_REPLY_STATUS: *${config.AUTO_REPLY_STATUS}*
  AUTOLIKE_STATUS: *${config.AUTOLIKE_STATUS}*
  AUTO_STATUS_SEEN: *${config.AUTO_STATUS_SEEN}*
  PREFIX: *${prefix}*
  MODE: *${mode}*`;

    await m.React('☄️'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            body: "```joel xmd bot settings```",
            thumbnailUrl: '', // Add thumbnail URL if required
            sourceUrl: 'https://github.com/joeljamestech2/JOEL-XMD', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;


// will you  clone my repo till when ? use your codes bro
