const express = require('express');
const app = express();
const port = 3000;

// bodyParser 미들웨어 사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 이미지, 퍼블릭
app.use(express.static('public'));

// mainPage 폴더를 '/mainPage' 경로로 서빙
app.use('/mainPage', express.static('mainPage'));

// feed 폴더를 '/feed' 경로로 서빙
app.use('/feed', express.static('feed'));


// 메인 페이지 라우팅
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mainPage/index.html'); // 메인 페이지 파일 경로
});

// 피드 페이지 라우팅
app.get('/feed', (req, res) => {
  res.sendFile(__dirname + '/feed/index.html'); // 피드 페이지 파일 경로
});

// 로그인 요청 처리
app.post('/login', (req, res) => {
  const { id, password } = req.body;
  if (id === "OYR2024" && password === "1234") {
    res.redirect('/'); // 메인 페이지로 리다이렉트
  } else {
    res.status(401).send('Error: Invalid ID or Password'); // 오류 메시지 응답
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
