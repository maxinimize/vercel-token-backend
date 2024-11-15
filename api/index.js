const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// 获取tokens的路由
app.get('/api/tokens', (req, res) => {
  try {
    const token1 = process.env.TOKEN_1;
    const token2 = process.env.TOKEN_2;
    
    if (!token1 || !token2) {
      return res.status(500).json({ error: '未找到 tokens' });
    }
    
    res.json({
      token1,
      token2
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Vercel 需要导出这个处理程序
module.exports = app; 