# TwidyTools

**TwidyTools** adalah aplikasi web modern untuk konversi dokumen dan gambar, sepenuhnya gratis tanpa batasan premium, dan dengan fokus pada privasi pengguna.

## 🎯 Fitur Utama
- ✅ Konversi PDF ↔ MS Office (Word, Excel, PowerPoint)
- ✅ Konversi PDF ↔ Gambar (JPG, PNG)
- ✅ Utilitas: Merge PDF, Split PDF, Compress PDF
- ✅ 100% Gratis tanpa premium
- ✅ Tanpa login/register - Stateless
- ✅ Keamanan maksimal - file dihapus setelah download

## 🏗️ Tech Stack
- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Shadcn/UI, Framer Motion
- **Backend:** Node.js + Express.js
- **File Processing:** LibreOffice, ImageMagick, pdf-lib
- **Deployment:** Vercel (Frontend), Railway (Backend)

## 📁 Project Structure
```
twidytools/
├── frontend/                    # Next.js Application
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   ├── tools/              # Tool pages
│   │   │   ├── pdf-to-image/
│   │   │   ├── image-to-pdf/
│   │   │   ├── merge-pdf/
│   │   │   └── ...
│   │   └── api/                # Client-side API calls
│   ├── components/
│   │   ├── ToolCard.tsx        # Reusable tool card component
│   │   ├── FileUpload.tsx      # Drag-and-drop upload
│   │   ├── ProgressBar.tsx     # Progress animation
│   │   └── ...
│   ├── styles/                 # Global styles
│   ├── utils/                  # Helper functions
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities & constants
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.ts
│
├── backend/                     # Node.js/Express API Server
│   ├── src/
│   │   ├── index.ts            # Entry point
│   │   ├── routes/
│   │   │   ├── pdf.ts          # PDF conversion routes
│   │   │   ├── image.ts        # Image conversion routes
│   │   │   ├── office.ts       # Office document routes
│   │   │   └── index.ts        # Route aggregator
│   │   ├── controllers/
│   │   │   ├── pdfController.ts
│   │   │   ├── imageController.ts
│   │   │   └── officeController.ts
│   │   ├── services/
│   │   │   ├── pdfService.ts   # PDF processing logic
│   │   │   ├── imageService.ts # Image processing logic
│   │   │   ├── fileService.ts  # File cleanup & management
│   │   │   └── conversionService.ts
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   ├── cors.ts
│   │   │   └── fileUpload.ts
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── constants.ts
│   │   │   └── validators.ts
│   │   └── types/
│   │       └── index.ts        # TypeScript types
│   │
│   ├── dist/                   # Compiled output
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── .gitignore
├── docker-compose.yml          # Full stack orchestration
└── README.md
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:3000
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
# Server runs on http://localhost:5000
```

## 📝 Development Guidelines
- Use TypeScript for type safety
- Follow ESLint rules defined in each directory
- Test before committing
- All user files are temporary and auto-deleted

## 📄 License
MIT - Open Source

---

**Built with ❤️ for document conversion lovers**
