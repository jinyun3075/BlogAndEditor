# 블로그(Editor)
![image](https://user-images.githubusercontent.com/64072136/152099226-7e8fe76f-3668-45dd-bcaf-377cf2cdd4e3.png)
![image](https://user-images.githubusercontent.com/64072136/152096570-2a659369-1904-4bb4-96a0-b6a6d7db272b.png)
![image](https://user-images.githubusercontent.com/64072136/152099370-a8a8b741-9fc8-4c89-9747-99d53e7c8685.png)


## 사용환경
- vscode: 1.63.2
- node: 16.13.1
- MongoDB: 5.0.5
- bootstrap: 5.1.3
## 사용방법
1. git clone ~~ . 깃을 받아옵니다.
2. 클론 폴더로 이동
3. 터미널에 'npm instal bcrypt express cors dotenv mongoose multer body-parser path fs' 입력
4. 터미널 'npm start' 입력해서 서버 실행 후 view 폴더에 index 페이지 실행

## api 명세
- /post/api (get) : 모든 게시글 불러오기
- /post/api/:id (get) : 한가지 게시글 불러오기
- /post/api/ (post) : 게시글 만들기
- /post/api/:id (put) : 게시글 수정
- /post/api/:id (delete) : 게시글 삭제
- /img/:img (get) : 사진 보기
- /img/upload (post) : 이미지 1개 업로드
- /img/uploads (post) : 이미지 1~4개 업로드

## 구조
![image](https://user-images.githubusercontent.com/64072136/150458702-97c9d5e1-1d2f-4247-a3a3-34b15e887ff6.png)

## 기능
- 게시판 CRUD
- Editor
- 이미지

## 에러
- 게시글 생성및 수정 시 이미지 api 통신 후 페이지 자동 새로고침 - (임시해결)
- 이미지 업로드시 폴더 발견 못하는 문제 - fs를 이용해서 폴더가 없을경우 자동생성(해결)
- toast editor 실행 error - npm으로 다운받고 cdn 까지 사용하면 중복으로인해? 실행이 안된다. (toast 사용안함)
