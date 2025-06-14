
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

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : JOEL XMD
   * @author : LORD_JOEL
   * @youtube : https://www.youtube.com/@joeljamestech255
   * @infoription : joel Md ,A Multi-functional whatsapp user bot.
   * @version 10 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By joel tech info.
   * © 2025 joel md ✭ ⛥.
   * plugin date : 11/1/2025
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/







import config from '../../config.cjs';
import fetch from 'node-fetch';

const chatbotCommand = async (m, Matrix) => {
    const text = m.message?.conversation || m.message?.extendedTextMessage?.text || null;
    const senderId = m.key.remoteJid;
    const senderName = m.pushName || `User ${senderId}`;
    const ownerNumber = `${config.OWNER_NUMBER}@s.whatsapp.net`;

    const isChatbotEnabled = config.CHAT_BOT ?? true;
    const chatbotMode = config.CHAT_BOT_MODE ?? 'public';
    const privateUsers = new Set(config.PRIVATE_USERS || []);

    if (!isChatbotEnabled) return;
    if (senderId === ownerNumber) return;
    if (senderId.endsWith('@g.us') || senderId === 'status@broadcast' || senderId.includes('@newsletter')) return;
    if (chatbotMode === 'private' && !privateUsers.has(senderId)) return;
    if (!text) return;

    try {
        const response = await fetch(`https://api.paxsenix.biz.id/ai/gemini-realtime?text=${encodeURIComponent(text)}&session_id=ZXlKaklqb2lZMTg0T0RKall6TTNNek13TVdFNE1qazNJaXdpY2lJNkluSmZNbU01TUdGa05ETmtNVFF3WmpNNU5pSXNJbU5vSWpvaWNtTmZZVE16TURWaE1qTmpNR1ExTnpObFl5Sjk`);
        if (!response.ok) return;

        let answer = (await response.json()).message || 'Oops! I couldn’t quite catch that 😅. Can you try again?';

        // Identity and branding replacements
        answer = answer
            .replace(/I am a large language model, trained by Google\.?/gi, "I am Joel XMD bot, trained by Lord Joel.")
            .replace(/by Google/gi, "by Lord Joel")
            .replace(/large language model/gi, "Joel XMD bot")
            .replace(/\bGemini\b/gi, "Joel AI")
            .replace(/\bI'm Gemini\b/gi, "I'm Joel AI")
            .replace(/Yes, I am Gemini\./gi, "I'm Joel XMD bot developed by Lord Joel.")
            .replace(/I do not have an owner or a phone number/gi, "Here are my owner WhatsApp phonephone numbers: \njoeljamestech +255714595878, \njoeljamestech2 +255781144539, \njoeljamestech3 +255767570963");

        await Matrix.sendMessage(senderId, {
            text: `${answer}`,
            contextInfo: {
                externalAdReply: {
                    title: 'JOEL XMD AI',
                    body: 'Chat with joel assistant anytime',
                    thumbnailUrl: "https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/thumbnail.jpg",
                    sourceUrl: "https://github.com/joeljamestech/JOEL-XMD",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error('Joel AI error:', err.message);
        // Silent fail - do not send message to user
    }
};

export default chatbotCommand;
