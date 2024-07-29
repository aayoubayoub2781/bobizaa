import _0x5ace96 from "node-fetch";
let handler = async (_0x599a06, {
  text: _0x12c12c,
  usedPrefix: _0x5a6526,
  command: _0x29091f
}) => {
  if (!_0x12c12c) {
    throw "مثال :\n.gemini ما هو الاسلام ?";
  }
  await _0x599a06.reply("جاري البحث...");
  let _0x599801 = await _0x5ace96("https://aemt.me/gemini?text=" + _0x12c12c);
  let _0x5dee32 = await _0x599801.json();
  let _0x10f96c = ("" + _0x5dee32.result).trim();
  const _0x258b6e = {
    title: "Gemini Ai",
    body: wm,
    thumbnailUrl: "https://telegra.ph/file/41d94a398196d36958834.jpg",
    sourceUrl: "https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K",
    mediaType: 1,
    renderLargerThumbnail: true
  };
  const _0x48ae82 = {
    externalAdReply: _0x258b6e
  };
  const _0x32ca61 = {
    text: _0x10f96c,
    contextInfo: _0x48ae82
  };
  conn.sendMessage(_0x599a06.chat, _0x32ca61);
};
handler.help = ["gemini"];
handler.tags = ["ai"];
handler.command = /^(gemini)$/i;
export default handler;
