
import {mount} from '@vue/test-utils';
import RegisterPage from '@/views/RegisterPage';

describe('RegisterPage.vue', () => {

  let wrapper;
  let fieldUsername;
  let fieldEmailAddress;
  let fieldPassword;
  let buttonSubmit;

  beforeEach(() => {
    wrapper = mount(RegisterPage);
    fieldUsername = wrapper.find('#username');
    fieldEmailAddress = wrapper.find('#emailAddress');
    fieldPassword = wrapper.find('#password');
    buttonSubmit = wrapper.find('form button[type="submit"]');
  });

  it('회원가입 폼 요소 검증', () => {

    expect(wrapper.find('.logo').attributes().src)
      .toEqual('/static/images/logo.png');

    expect(wrapper.find('.tagline').text())
      .toEqual('Open source task management tool');

    expect(fieldUsername.element.value).toEqual('');
    expect(fieldEmailAddress.element.value).toEqual('');
    expect(fieldPassword.element.value).toEqual('');
    expect(buttonSubmit.text())
      .toEqual('Create account');
  });

  it('데이터 모델의 초기값을 검증해야 한다',  () => {
    expect(wrapper.vm.form.username).toEqual('');
    expect(wrapper.vm.form.emailAddress).toEqual('');
    expect(wrapper.vm.form.password).toEqual('');
  });

  it('폼 입력값과 데이터모델의 바인딩을 검증', () => {
    const username = 'nako';
    const emailAddress = 'nako@gmail.com';
    const password = '1234abcdef!';

    wrapper.vm.form.username = username;
    wrapper.vm.form.emailAddress = emailAddress;
    wrapper.vm.form.password = password;

    expect(fieldUsername.element.value).toEqual(username);
    expect(fieldEmailAddress.element.value).toEqual(emailAddress);
    expect(fieldPassword.element.value).toEqual(password);
  });

  it('서브밋 핸들러의 존재여부 검증', function () {
    const stub = jest.fn();
    wrapper.setMethods({submitForm: stub});
    buttonSubmit.trigger('submit');
    expect(stub).toBeCalled();
  });
});
