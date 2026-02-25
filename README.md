# TruckLog AI 얼리버드 모집 랜딩

이 저장소는 TruckLog AI의 얼리버드 모집용 랜딩 페이지입니다.

- 이 페이지는 신청/전환 목적의 랜딩이며, 실제 AI 생성 기능은 본 서비스 앱에서 동작합니다.
- 신청 폼은 EmailJS 연동으로 문의/신청 정보를 전송합니다.

## 로컬 실행

사전 요구사항: Node.js 24.x (`.nvmrc` 참고)

1. 의존성 설치  
   `npm install`
2. 환경변수 파일 준비  
   `.env.example`를 복사해 `.env.local` 생성 후 EmailJS 값을 채웁니다.
3. 개발 서버 실행  
   `npm run dev`
4. 프로덕션 빌드  
   `npm run build`
