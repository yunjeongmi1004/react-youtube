# REACT YOUTUBE PROJECT


## 프로젝트 소개

- React.js를 학습하며 만들어본 Youtube Page

<br>

## 1. 개발 환경

- React, Jsx, Styled-Components, Recoil, Props, State, Custom Hooks

<br>

## 2. 기술 구성

### React, Styled-Component

- React
    - 정의 : 기존 페이지 단위로 개발되던 웹을, 컴포넌트 단위로 개발할 수 있게 해주는 라이브러리
    - 필요성 : 브라우저 렌더링 효율성,  개발 편의성(컴포넌트화를 통해 추후 유지보수와 재사용성을 고려)
    - 장점 : 재사용성이 높음 / 테스트성이 좋음 
    - 단점 : 잘게 쪼개지기 때문에 비즈니스 로직을 이해하기 어려움 (코드의 전체 흐름)

- FSD
    - 정의 : Component의 상위 하위 개념을 폴더 구조로 표현하여 비즈니스 로직을 한눈에 보게 해주는 디자인 패턴
        - Layer > Slice > Segment 
        - Layer : 프로젝트의 계층 단위 (App / Page / Widget / Entity)
        - Slice :  Layer 내에 존재하는 기능 단위
        - Segment : Slice를 구성하는 요소 (ui, style, asset, model, utill, constant 등)
    - 필요성 : 응집도의 장점인 재사용성, 테스트성을 가져가면서 폴더 구조를 통해 비즈니스 로직까지 챙기는 것
    - 장점 : 이식 시키기도 쉽고. 유지보수도 쉬움 
    - 단점 : 아직 정립이 제대로 안된 부분도 있음

- Styled-Component
    - 정의 : CSS in JS
    - 필요성 : 기존 css의 sellector라는 것은 페이지 단위로 동작하는 개념, 컴포넌트 단위로 개발하는 요즘 웹에서는 응집도에 어긋나는 기능
    - 장점 : 사용성 측면에선 CSS in JS가 좋음
    - 단점 : 성능측면에선 CSS in CSS가 좋음
    
### Recoil

- 정의 : React를 만든 Meta에서 React 전용으로 만든 것(Global State 중 한가지 방법)
- 필요성 : 전역 변수의 편의성을 그대로 가지고 언제든지 접근할 수 있으며, 어디서든 쉽게 가져올 수 있음
- 장점 : useState로 처리했을 때 문제점인 props 지옥을 처리 
- 단점 : 전역 변수가 가지는 단점과 동일한 단점을 가짐 (프로젝트가 켜질 때 만들어지고, 프로젝트가 종료될 때 없어짐)
    - 어디까지나 전역변수 기반이기 때문에, 꼭 필요할 때만 써야 함
