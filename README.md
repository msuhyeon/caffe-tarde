# ☕ CAFFE-TARDE

### 디렉토리 구조

```
CAFFE-TARDE/
├── public/               # 정적 파일
│ └── images/            # 메인 배너 등 이미지 리소스
├── src/
│   ├── components/            # 재사용 가능한 UI 컴포넌트
│ ├── features/          # 페이지별 섹션 기능 컴포넌트
│ │ ├── home/           # 홈화면 전용 섹션 (MainBanner 등)
│ │ ├── drinks/         # 음료 관련 기능
│ │ └── news/           # 공지사항, 이벤트 관련
│ ├── lib/               # 유틸 함수 및 공통 로직
│ ├── pages/             # Next.js 라우팅
│ │ ├── index.tsx       # 메인 페이지 진입점
│ │ └── api/            # API 라우트 (선택적 사용)
│ ├── shared/
│ │ └── components/     # 재사용 가능한 컴포넌트
│ │ └── ui/             # 버튼, 캐러셀 등 공통 UI 컴포넌트
│ ├── store/             # Zustand 등 전역 상태 관리
│ └── styles/            # 전역 스타일, Tailwind 설정 등
├── README.md
├── next.config.js        # Next.js 설정
├── postcss.config.mjs    # Tailwind 설정
├── tsconfig.json         # TypeScript 설정
```

### 기술 스택

- **Next.js 13+**
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI**
- **도메인 중심 기능 설계 구조** (features, shared/components/ui 등으로 명확히 분리)
  - `features/`: 페이지별 기능은
  - `shared/components/ui/`: 공통 UI는

### 작업 중인 섹션 (홈)

- [x] 헤더 / 푸터
- [ ] 메인 배너
- [ ] 이달의 베스트 메뉴
- [ ] 시즌 한정 메뉴
- [ ] 매장 찾기
- [ ] 멤버십 안내
- [ ] 인스타그램 피드 연동
