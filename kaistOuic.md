# Prac01. "KAIST OUIC"

---

**[KAIST OUIC](/ouic/ouic.html)**
![KAIST OUIC](/mainVisual/prac01_img.jpg)
```markdown
SITE URL : http://ouic.kaist.ac.kr
```

---

## Comment

### 1. bxSlider : 무료 이미지 슬라이드 API
기본 골격에 간단히 클래스명과 이미지만 넣어도 구현이 가능하여 사용자가 많고, 적용사례가 다양한 제이쿼리 무료 이미지 슬라이더 플러그인
* 화면전환 속도나 방향, 요소디자인(버튼 등..)에  대한 커스터마이징 가능
* 모바일/웹 모두에서 마우스와 터치에 반응 : **반응형**에 최적화 
* 소스가 간결하고 가벼우나 기능이 제한적

#### 1-1. bxSlider 설치방법
1. [bxSlider](http://bxslider.com/) 홈페이지에서 *install* 또는 *Click here to install* 버튼 클릭  
![bxSlider_click](/comment/prac01/comment01.jpg)

2. install 페이지에서 *Download jquery.bxslider.zip here* 클릭해서 플러그인 파일 내려받기  
![bxSlider_download](/comment/prac01/comment02.jpg)

3. 내려받은 파일의 압축을 풀어 사용중인 프로젝트 폴더로 파일 이동시키기 : 'css/images/js' 파일 분리해서 각각의 폴더로 이동  

#### 1-2. bxSlider 기본 골격
1. `<head></head>`태그 안에 슬라이더 실행에 필요한 외부 파일 불러오기  
```html
 <head>
   <link rel="stylesheet" href="본인의 css 파일경로/jquery.bxslider.css"> /* 슬라이더 스타일시트 */
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> /* 최신버전 확인하기 */
   <script src="/path/to/jquery.bxslider.min.js"></script> /* bxSlider 본체 */
</head>
```
2. HTML파일에 'slide' 골격잡기(id명 또는 class명 지정해주기)  
```html
  <body>
    <div class="slideArea">
      <ul class="slider">
        <li>I am a slide01.</li>
        <li>I am a slide02.</li>
      </ul>
    </div>
  </body>
```
3. script파일에 'slide'코드 넣어주기  
```javascript
  <script>
    $(document).ready(function(){
      $('.slider').bxslider({
        옵션을 줘야한다면 여기에 추가
      });
    });
  </script>
```

#### 1-3. bxSlider 옵션(주로 사용한 옵션 위주)
| Name | Default(기본값) | Description |
|------|-----------------|-------------|
| mode | horizontal,vertical,fade | 슬라이드 이동방향 설정 |
| speed | 500 | 슬라이드 전환 시 속도 설정 |
| pause | 4000 | 자동재생 중 슬라이드별로 멈추는 시간 |
| slideMargin | 0 | 슬라이드 사이의 마진 값 |
| pager | true | 슬라이드 개수만큼 하단에 동그라미들 생성(다른 모양으로 디자인 변경 가능) |
| pagerType | full,short | full:기본형(슬라이드 개수만큼 동그라미 생성) / short:숫자(현재슬라이드 번호/전체 슬라이드 개수) |
| controls | true | next/prev 컨트롤 버튼 생성 |
| nextText | Next | next버튼에 다른 텍스트를 넣어줄 때 |
| prevText | Prev | prev버튼에 다른 텍스트를 넣어줄 때 |
| nextSlider | null | next버튼에 다른 요소(ex.아이콘)를 넣어줄 때 |
| prevSldier | null | prev버튼에 다른 요소(ex.아이콘)를 넣어줄 때 |
| autoControls | false | true로 설정할 경우, **start/stop 아이콘 생성** |
| auto | false | true로 설정할 경우, **슬라이드 자동재생** |
| minSlides | 1 | 보여지는 슬라이드 개수의 최소값 |
| maxSlides | 1 | 보여지는 슬라이드 개수의 최대값 |
| moveSlides | 0 | 슬라이드 한번 당 넘어갈 슬라이드 개수(최소값<슬라이드개수<최대값) |
| slideWidth | 0 | 각 슬라이드의 가로폭 |