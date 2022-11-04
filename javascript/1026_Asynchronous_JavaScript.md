# 동기와 비동기

- JS는 single thread
  - 근데 어떻게 비동기 처리를 할 수 있나.
    - JavaScript Engine의 Call Stack
    - Web API
    - Task Queue
    - Event Loop

- 비동기 처리 동작 방식
  - 브라우저 환경
    1. 모든 작업은 Call Stack 으로 들어간 후 처리된다. (LIFO)
    2. 오래 걸리는 작업이 들어오면 Web API로 보내 별도로 처리하도록 한다.
    3. Web API에서 처리가 끝난 작업은 Call Stack으로 바로 가지 못하고, Task Queue(FIFO)에 순서대로 들어간다.
    4. Event Loop가 Call Stack이 비어있는 것을 체크하고, Calll Stack이 빈다면 Task Queue에서 FIFO로 Call Stack으로 보낸다.

---
# Axios
- 시작
  - node : npm 설치
  - browser : cdn

- python의 request와 유사
  ```javascript
  axios.get('요청할 URL')
    .then(성공 콜백 함수)
    .catch(실패 콜백 함수)
  ```

---
# 콜백함수
- 그냥 *다른 함수의 인자*로 전달되는 함수
- 동기/ 비동기 상관없이 사용
- 비동기 작업이 완료된 후 실행할 작업을 명시 : 비동기 콜백(Asynchronous Callback)

- 왜 써?
  - 명시적 호출이 아닌 특정한 조건 혹은 행동에 의해 호출 되도록 가능.
    - 예: 요청이 들어오면, 이벤트가 발생하면, 데이터를 받아오면...
  - 비동기 처리를 *순차적*으로 동작할 수 있게 한다.
  - 그래서 비동기 처리를 위해서는 콜백 함수 반드시 필요.

- Callback Hell
  - Pyramid of doom
  - 연쇄적 비동기 작업을 순차적으로 동작할 때.
  - 콜백 너무 깊이 들어가면 가독성이 떨어지고, 유지보수가 어려워진다.

---
# 프로미스 Promise
- Callback Hell 문제를 해결! 비동기 처리를 위한 객체
- *작업 완료 시 실행* 약속 ➡ 순서 보장
- 비동기 작업의 완료, 실패를 나타내는 객체
- Axios Library
  `axios.get(catImageSearchURL).then(...).catch(...)`
  - *Promise* 객체`axios.get(catImageSearchURL)`.메서드`.then(...)`

## then & catch
- *then*
  - 요청 작업이 성공하면 callback 실행
  - 이전 작업의 성공 결과를 인자로 전달받음
  - _Chaining_ 가능. callback 깊이가 깊어지지 않음.
    - axios로 처리한 비동기 로직이 promise 객체를 반환해주므로 계속 then _chaining_ 작성 가능.
    - return 이 있어야함.
  - 일반 표기법
    ```javascript
    axios.get('요청 url')
      .then((성공 시 수행할 1번 콜백 result1) => {
        ...
        return result2
      })
      .then((1번 콜백 성공 시 2번 콜백 result2) => {
        ...
        return result3
      })
      .then((2번 콜백 성공 시 3번 콜백 result3) => {
        ...
      })
      ...
      .catch(실패 시 콜백 error)
    ```

- *catch*
  - then()이 하나라도 실패하면 callback 실행
  - 이전 작업의 실패 객체를 인자로 전달받음
  - 상황에 따라서 중간에 섞어도 된다.

- *권장 표기법*
  - 추가 데이터 받기 용이하도록.
  ```javascript
  btn.addEventListener('click', function() {
    axios({
      <!-- 키 값은 정해진대로 써야한다! -->
      method: 'get',    
      url: catImageSearchURL,
      params: {
        title: 'aaa',
      }
    })
      .then()
      .then()
      .catch()
  })
  ```
  > 키 값을 정해진 것을 써야한다. 공식 문서 참조.
  > - [axios req config](https://axios-http.com/kr/docs/req_config)