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