# 서비스 이름 & 서비스 소개

- **서비스 이름**

  당뻔(당당한 뻔개\_뻔개는 뻔뻔한 번개)

- **서비스 소개**

  웹 서비스 당뻔은, 공동체 내 구성원들의 네트워킹(번개) 솔루션입니다.<br/>
  공동체 내 구성원들이 제대로 네트워킹을 하지 못하는 이유는 직접 나서 모임을 만들 용기가 없고 모임 진행 상황이 공동체 내에 원활히 공유되지 않으며 분산된 매체에서 네트워킹 정보가 돌아다니기 때문입니다.<br/>
  따라서, 당뻔은 익명 네트워킹 방식을 이용해 모임 개설 실패에 대한 부담을 낮추고 실시간으로 네트워킹 준비 상황을 구성원들에게 전달하는 동시에 떠돌아 다니는 공동체의 네트워킹 정보를 한 곳으로 정리합니다.<br/>
  우리의 모임을 더 당당하고, 뻔뻔하게 당뻔.

<br />
<br />

# 개발 담당 부분

<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/jynam17">
              <img src="https://github.com/jynam17.png" width="100">
              <br />
              <b>남주영</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/Tekiter">
              <img src="https://github.com/Tekiter.png" width="100">
              <br />
              <b>박건영</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/joohaem">
              <img src="https://github.com/joohaem.png" width="100">
              <br />
              <b>이주함</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            쭈일<br/>
            Create Page/Post 구현<br/>
        </td>
        <td>
            커삐<br/>
            초기세팅<br/>
            Cards/Layout/Get 구현<br/>
        </td>
        <td>
            쭈삼<br/>
            Header/Nav/Loading 구현<br/>
            README 작성<br/>
        </td>
    </tr>
</table>

<br />
<br />

# 기술스택 및 사용 라이브러리

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "date-fns": "^2.26.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "6",
    "react-scripts": "4.0.3",
    "recoil": "^0.5.2",
    "styled-reset": "^4.3.4",
    "styled-components": "^5.3.3",
    "web-vitals": "^1.0.1"
  },
```

# 코드 컨벤션

### Commit Convention

종류: 내용 포맷으로 메시지 작성

- feat: 새로운 기능 추가
- fix: 버그 수정
- refactor: 리팩터링
- docs: 설명 문서 변경
- perf: 성능 개선
- test: 테스트코드 추가
- chore: 프로젝트 설정 등 변경

<br />

### 네이밍 컨벤션

- 폴더와 파일은 카멜 케이스를 사용한다.
- 예외적으로 리액트 컴포넌트를 정의한 파일과 폴더는 파스칼 케이스를 사용한다.
- 변수와 함수 이름은 카멜 케이스를 사용한다.
- 클래스와 인터페이스는 카멜 케이스를 사용한다.

<br />

### 함수 구문

특별한 이유가 없는 한 함수 선언식을 사용한다.

```javascript
function Component() {
  function handleClick() {
    // etc...
  }

  return <button onClick={handleClick}></button>;
}
```

바로 대입해야 하는 람다 함수는 () => {} 구문을 사용한다.

```javascript
function Component() {
  const [value, setValue] = useState("");

  return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

#### 컴포넌트 프롭 ?

- 프롭들은 단일 props 변수로 받는다.
- 프롭들 각각을 사용할 땐 구조분해 할당을 사용한다.
- 받을 프롭이 없을 땐 변수를 받지 않는다.

```javascript
function Component(props) {
  const { to, from, value, onClick } = props;

  /// etc...
}

function ComponentWithNoProps() {
  /// etc...
}
```

<br />

### 반응형

반응형 코드들이 온갖 컴포넌트에 산재해 있으면 안 된다. 반응형 코드들은 Layout 컴포넌트에만 있어야 한다.

<br />

### CSS

px 단위는 사용하지 않는다. (em, rem 단위 권장)
미디어 쿼리는 직접 작성하지 않고, styles/responsive 모듈의 displaySize() 함수를 사용한다.
색상은 styles/colors 모듈의 colors 안의 상수를 활용한다.

<br />

### Branch Strategy

기능별로 각자 브랜치를 생성해 작업 후, 풀 리퀘스트를 생성해 메인에 머지한다.

<br />
<br />

# 브랜치 전략

- **feature**

  기능을 개발하는 브랜치

`feature` 보조 브랜치를 주로 사용하여 각각의 기능들은 구현함

- master : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치
