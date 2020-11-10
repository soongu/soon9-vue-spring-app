# Set up Vue.js command line
`$ npm install -g @vue/cli`    

![vue setting](src/main/resources/static/img/vue-setting.png)

- 실행
```shell script
$ cd front-end
$ npm run serve
```

- 테스트 실행
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    //이 부분 추가
    "test": "npm run test:unit && npm run test:e2e",

    "lint": "vue-cli-service lint"
  },
```

- 프론트 서버 포트 변경
  - front-end디렉토리 하위에 vue.config.js 파일 생성후
```js
module.exports = {
  devServer : {
    port: 3000
  }
}
```