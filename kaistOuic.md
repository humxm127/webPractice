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
``` html
 <head>
   <link rel="stylesheet" href="본인의 css 파일경로/jquery.bxslider.css"> /* 슬라이더 스타일시트 */
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> /* 최신버전 확인하기 */
   <script src="/path/to/jquery.bxslider.min.js"></script> /* bxSlider 본체 */
</head>
```
