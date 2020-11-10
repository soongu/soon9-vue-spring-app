import Vue from "vue";
import LoginPage from '@/views/LoginPage';

describe('LoginPage.vue', () => {
  //it(name, fn, timeout=5ms) : 단위 테스트 별명
  it('정확한 화면내용을 렌더링해야한다.', () => {
    const Constructor = Vue.extend(LoginPage); //Vue의 하위클래스 로그인페이지 생성
    const vm = new Constructor().$mount(); //$mount로 페이지 렌더링

    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('TaskAgile');
  });
});
