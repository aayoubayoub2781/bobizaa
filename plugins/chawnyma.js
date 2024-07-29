import _0x23915c from "node-fetch";
let handler = async (_0x12fe9b, {
  conn: _0x2db223,
  args: _0x4fdf19,
  usedPrefix: _0x5014f9,
  text: _0x2100ef,
  command: _0x495cb4
}) => {
  if (!_0x2100ef) {
    return _0x12fe9b.reply("هذا الامر خاص بالسؤال . يمكنك ان تسأل الذكاء الاصطناعي\nمثال:\n\n *.chatgpt* hello");
  }
  await _0x12fe9b.reply(wait);
  try {
    const _0x2b03c3 = await fetchCompletion(_0x2100ef);
    await _0x12fe9b.reply(_0x2b03c3);
  } catch (_0x56a618) {
    await _0x12fe9b.reply("error");
  }
};
handler.help = ["chatgpt"];
handler.tags = ["ai"];
handler.command = /^(chatgpt)$/i;
export default handler;
async function fetchCompletion(_0x319f1a) {
  try {
    const _0x522b6a = "https://api.chatanywhere.com.cn/v1/chat/completions";
    const _0x4ac43a = await _0x23915c(_0x522b6a, {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: _0x319f1a
        }]
      })
    });
    const _0x1aa5bf = await _0x4ac43a.json();
    return _0x1aa5bf.choices[0].message.content;
  } catch (_0x5ccb58) {
    throw _0x5ccb58;
  }
}
