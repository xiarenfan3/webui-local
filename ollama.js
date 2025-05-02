const chatDiv = document.getElementById('chat');
const inputBox = document.getElementById('inputBox');

inputBox.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const prompt = inputBox.value.trim();
    if (!prompt) return;
    appendMessage(prompt, 'user');
    inputBox.value = '';
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'ifioravanti/openchat-3.5-0106-laser',
        prompt: prompt,
        stream: false
      })
    });
    const data = await res.json();
    appendMessage(data.response, 'ai');
  }
});

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'msg ' + sender;
  div.textContent = sender === 'user' ? `你：${text}` : `AI：${text}`;
  chatDiv.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}
