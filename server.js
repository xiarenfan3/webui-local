const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname));
app.listen(port, () => {
  console.log(`WebUI 已启动：http://localhost:${port}`);
});
