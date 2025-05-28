# ☕ CAFFE-TARDE

### 📦 프로젝트 구조 개요

```
CAFFE-TARDE/
├── public/                  # 정적 파일
│   └── images/              # 메인 배너, 메뉴 등 이미지 리소스
│
├── src/
│   ├── data/                # 목업 데이터 (메뉴, 공지사항 등)
│
│   ├── features/            # 페이지별 주요 섹션 기능
│   │   ├── home/            # 홈 화면 전용 섹션 (MainBanner, CTA 등)
│   │   ├── menu/            # 메뉴 목록 및 상세 기능
│   │   └── notice/          # 공지사항 리스트 및 상세 페이지
│
│   ├── lib/                 # 날짜 포맷 등 유틸 함수
│
│   ├── pages/               # Next.js 라우팅 파일
│   │   ├── index.tsx        # 메인 페이지 진입점
│   │   ├── brand/           # 브랜드 소개 (비전, 품질 등)
│   │   ├── membership/      # 멤버십 안내
│   │   ├── menu/            # 메뉴 카테고리별 페이지
│   │   └── customer/faq     # 고객센터 - 자주 묻는 질문 등
│
│   ├── shared/
│   │   ├── components/      # 페이지 공통 컴포넌트 (Header, Footer 등)
│   │   └── types/           # TypeScript 타입 정의
│
│   ├── store/               # 전역 상태 관리 (Zustand 등)
│
│   └── styles/              # Tailwind 설정 및 전역 스타일
│       └── globals.css
│
├── next.config.ts           # Next.js 설정
├── postcss.config.mjs       # PostCSS 설정
├── prettier.config.js       # Prettier 설정
├── eslint.config.mjs        # ESLint 설정
├── tsconfig.json            # TypeScript 설정
├── package.json
├── package-lock.json
└── README.md                # 프로젝트 설명 문서

```

### 기술 스택

- **Next.js 15**
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI**
- **도메인 중심 기능 설계 구조**  
   기능과 책임에 따라 디렉토리를 명확히 분리하여 유지보수성과 재사용성을 높였습니다.

  - `features/`: 페이지(도메인) 단위로 관련 UI 및 로직을 구성합니다.  
     예: 홈 섹션(`home/`), 메뉴 페이지(`menu/`), 공지사항(`notice/`) 등

  - `shared/components/`: 여러 페이지에서 재사용되는 공통 레이아웃 및 기능 컴포넌트가 위치합니다.  
    예: Header, Footer 등

  - `shared/components/ui/`: 버튼, 탭, 아코디언 등 **작고 재사용 가능한 UI 컴포넌트** 모음입니다.  
    `shadcn/ui` 기반 컴포넌트를 활용해 일관된 스타일과 사용성을 유지하고 있습니다.

### 작업 중인 섹션

메인

- [x] 헤더 / 푸터
- [x] 메인 배너
- [x] 이달의 베스트 메뉴
- [x] 멤버십 안내
- [ ] 인스타그램 피드 연동

소개

- [x] 비전
- [x] 품질

메뉴

- [x] 메뉴 메인 페이지
- [x] 음료
- [x] 디저트

멤버십

- [x] 멤버십 안내

- [x] 공지사항
- [x] 이벤트안내
- [ ] 사회 공헌 활동

고객지원

- [x] 자주 묻는 질문
- [ ] 매장 찾기

다국어

- [ ] 다국어 처리
