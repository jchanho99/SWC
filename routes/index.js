require('dotenv').config();
const { OpenAI } = require('openai')
var express = require('express');
var path = require('path');
var router = express.Router();

const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/select_explanation', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'explanation.html'));
});

router.get('/chat', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'chat.html'));
});

router.get('/chat2', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'chat2.html'));
});

router.post('/ask', async (req, res) => {
    const message = req.body.prompt;
    if (!message) {
      return res.status(400).json({ error: 'Invalid input: message is required' });
    }

    console.log("post in")
    console.log("사람 질문:", message)
    try {
      const response = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0125:personal::9UpIdgir',
      messages: [{ role: 'user', content: message }],
      });
  
      // 모델의 응답에서 답변 가져오기
      const answer = response.choices[0].message.content;
      console.log('ChatGPT 답변:', answer);
      
      res.json({ 'response': answer }); // 이 부분을 http://localhost:8000/ask로 넘어가게 수정
    }
    catch (error) {
		  console.log(error)
      res.status(500).json({ 'error': 'Failed to get response from ChatGPT API' });
    }
});

module.exports = router;
