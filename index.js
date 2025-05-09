/*
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████──────────██████████████──████████████████────████████████────────────────────────────██████──██████████████──██████████████──██████─────────
─██░░██──────────██░░░░░░░░░░██──██░░░░░░░░░░░░██────██░░░░░░░░████──────────────────────────██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██─────────
─██░░██──────────██░░██████░░██──██░░████████░░██────██░░████░░░░██──────────────────────────██░░██──██░░██████░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██────██░░██────██░░██──██░░██──────────────────────────██░░██──██░░██──██░░██──██░░██──────────██░░██─────────
─██░░██──────────██░░██──██░░██──██░░████████░░██────██░░██──██░░██──██████████████──────────██░░██──██░░██──██░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░░░░░░░░░░░██────██░░██──██░░██──██░░░░░░░░░░██──────────██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██████░░████────██░░██──██░░██──██████████████──██████──██░░██──██░░██──██░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██──██░░██──────██░░██──██░░██──────────────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██─────────
─██░░██████████──██░░██████░░██──██░░██──██░░██████──██░░████░░░░██──────────────────██░░██████░░██──██░░██████░░██──██░░██████████──██░░██████████─
─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██░░░░░░██──██░░░░░░░░████──────────────────██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██─
─██████████████──██████████████──██████──██████████──████████████────────────────────██████████████──██████████████──██████████████──██████████████─
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
made by lord joel
contact owner +2557114595078
*/

import dotenv from 'dotenv'; dotenv.config();

import { makeWASocket, Browsers, fetchLatestBaileysVersion, DisconnectReason, useMultiFileAuthState, getContentType } from '@whiskeysockets/baileys'; import { Handler, Callupdate, GroupUpdate } from './joelXjames/joelXtec/joel.js'; import express from 'express'; import pino from 'pino'; import fs from 'fs'; import { File } from 'megajs'; import NodeCache from 'node-cache'; import path from 'path'; import chalk from 'chalk'; import moment from 'moment-timezone'; import axios from 'axios'; import config from './config.cjs'; import pkg from './lib/autoreact.cjs';

const { emojis, doReact } = pkg; const prefix = process.env.PREFIX || config.PREFIX; const sessionName = "session"; const app = express(); const orange = chalk.bold.hex("#FFA500"); const lime = chalk.bold.hex("#32CD32"); let useQR = false; let initialConnection = true; const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({ timestamp: () => ,"time":"${new Date().toJSON()}" }); const logger = MAIN_LOGGER.child({}); logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const __filename = new URL(import.meta.url).pathname; const __dirname = path.dirname(__filename);

const sessionDir = path.join(__dirname, 'session'); const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) { fs.mkdirSync(sessionDir, { recursive: true }); }

async function downloadSessionData() { console.log("Debugging SESSION_ID:", config.SESSION_ID);

if (!config.SESSION_ID) {
    console.error('Please add your session to SESSION_ID env !!');
    return false;
}

const sessdata = config.SESSION_ID.split("JOEL-XMD~")[1];
if (!sessdata || !sessdata.includes("#")) {
    console.error('Invalid SESSION_ID format! It must contain both file ID and decryption key.');
    return false;
}

const [fileID, decryptKey] = sessdata.split("#");
try {
    console.log("Downloading Session...");
    const file = File.fromURL(`https://mega.nz/file/${fileID}#${decryptKey}`);
    const data = await new Promise((resolve, reject) => {
        file.download((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
    await fs.promises.writeFile(credsPath, data);
    console.log("Session Successfully Loaded !!");
    return true;
} catch (error) {
    console.error('Failed to download session data:', error);
    return false;
}

}

async function getStartingMessageData() { try { const response = await axios.get('https://joel-xmd-starting-message-apis.vercel.app/'); return response.data; } catch (error) { console.error('Error fetching starting message data:', error); return null; } }

async function start() { try { const { state, saveCreds } = await useMultiFileAuthState(sessionDir); const { version, isLatest } = await fetchLatestBaileysVersion(); console.log(joel md using WA v${version.join('.')}, isLatest: ${isLatest});

const Matrix = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: useQR,
        browser: ["ʝσєℓ χ∂", "safari", "3.3"],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id);
                return msg?.message || undefined;
            }
            return { conversation: "joel md whatsapp user bot" };
        }
    });

    Matrix.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                start();
            }
        } else if (connection === 'open') {
            if (initialConnection) {
                console.log(chalk.green("✔️  ᴊᴏᴇʟ-xᴍᴅ ɪs ɴᴏᴡ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴘᴏᴡᴇʀᴇᴅ ᴜᴘ"));

                const startingMessageData = await getStartingMessageData();
                if (startingMessageData) {
                    const { title, bot_name, creator, thumbnail, image, channel_link, channel_jid, caption } = startingMessageData;
                    const messagePayload = {
                        image: { url: image },
                        caption: caption || title,
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: channel_jid,
                                newsletterName: bot_name,
                                serverMessageId: -1,
                            },
                            externalAdReply: {
                                title: bot_name,
                                body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ",
                                thumbnailUrl: thumbnail,
                                sourceUrl: channel_link,
                                mediaType: 1,
                                renderLargerThumbnail: false,
                            },
                        },
                    };
                    await Matrix.sendMessage(Matrix.user.id, messagePayload);
                }
                initialConnection = false;
            } else {
                console.log(chalk.blue("♻️ Connection reestablished after restart."));
            }
        }
    });

    Matrix.ev.on('creds.update', saveCreds);

    Matrix.ev.on("messages.upsert", async (chatUpdate) => {
        try {
            await Handler(chatUpdate, Matrix, logger);

            const mek = chatUpdate.messages?.[0];
            if (!mek || !mek.message) return;

            if (!mek.key.fromMe && config.AUTO_REACT) {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                await doReact(emoji, mek, Matrix);
            }

            const contentType = getContentType(mek.message);
            mek.message = contentType === 'ephemeralMessage'
                ? mek.message.ephemeralMessage.message
                : mek.message;

            if (mek.key.remoteJid === 'status@broadcast' && config.AUTO_STATUS_REACT === "true") {
                const selfJid = await Matrix.decodeJid(Matrix.user.id);
                const emojiList = ['❤️','💸','😇','🍂','💥','💯','🔥','💫','💎','💗','🤍','🖤','👀','🙌','🙆','🚩','🥰','💐','😎','🤎','✅','🫀','🧡','😁','😄','🌸','🕊️','🌷','⛅','🌟','🗿','🇵🇰','💜','💙','🌝','💚'];
                const statusEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
                await Matrix.sendMessage(mek.key.remoteJid, {
                    react: { text: statusEmoji, key: mek.key }
                }, {
                    statusJidList: [mek.key.participant, selfJid]
                });
                console.log(`Auto-reacted to a status with: ${statusEmoji}`);
            }
        } catch (err) {
            console.error("Error in messages.upsert handler:", err);
        }
    });

    Matrix.ev.on("call", async (json) => await Callupdate(json, Matrix));
    Matrix.ev.on("group-participants.update", async (msg) => await GroupUpdate(Matrix, msg));

    Matrix.public = config.MODE === "public";

} catch (error) {
    console.error('Critical Error in start():', error);
    process.exit(1);
}

}

async function init() { if (fs.existsSync(credsPath)) { console.log("🔒 Session file found, proceeding without QR code."); await start(); } else { const sessionDownloaded = await downloadSessionData(); if (sessionDownloaded) { console.log("🔒 Session downloaded, starting bot."); await start(); } else { console.log("No session found or downloaded, QR code will be printed for authentication."); useQR = true; await start(); } } }

init();

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'mydata', 'index.html')); });

app.get('/info', (req, res) => { res.sendFile(path.join(__dirname, 'mydata', 'info.html')); });

app.get('/support', (req, res) => { res.sendFile(path.join(__dirname, 'mydata', 'support.html')); });

app.get('/about', (req, res) => { res.sendFile(path.join(__dirname, 'mydata', 'about.html')); });

app.listen(PORT, () => { console.log(Server is running on port ${PORT}); });

