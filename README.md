# ☕ CAFFE-TARDE

### 📦 프로젝트 구조 개요
```
.
├── public/                  # 정적 리소스 (이미지, 아이콘 등)
│   └── images/              # 각종 이미지 에셋
│
├── src/
│   ├── data/                # 메뉴, 공지사항, FAQ 등 목업 데이터
│   ├── features/            # 페이지별 UI/로직 분리 (도메인 단위 구성)
│   │   ├── home/            # 홈 화면 관련 기능
│   │   ├── menu/            # 메뉴 상세 페이지 기능
│   │   └── notice/          # 공지사항 목록 및 상세 기능
│   ├── lib/                 # 유틸 함수 및 포맷 관련 함수
│   ├── pages/               # Next.js 페이지 라우트
│   │   ├── brand/           # 브랜드 소개 관련 페이지
│   │   ├── customer/        # 고객 지원/문의 페이지
│   │   ├── faq/             # 자주 묻는 질문
│   │   ├── info/            # 회사 소개 (비전/품질)
│   │   ├── membership/      # 멤버십 안내
│   │   └── menu/            # 메뉴 리스트 및 상세
│   ├── shared/
│   │   ├── components/      # 공통 UI 컴포넌트
│   │   └── types/           # TypeScript 인터페이스 정의
│   ├── store/               # 전역 상태 관리 (예: Zustand 등)
│   └── styles/              # 전역 CSS (Tailwind + 커스텀)
│
├── .config files            # ESLint, Prettier, PostCSS, TypeScript 설정
├── package.json             # 프로젝트 메타 및 의존성 정의
└── README.md                # 프로젝트 개요 및 설명
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
- [x] 메인 배너
- [x] 이달의 베스트 메뉴
- [ ] 매장 찾기
- [x] 멤버십 안내
- [ ] 인스타그램 피드 연동
