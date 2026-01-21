# Documentation Enhancement Todo List

Choose which items to implement by checking them off. Each item is independent and can be implemented separately.

## Privacy Policy Updates (`privacy-policy.html`)

- [ ] **Rate Limiting Details** - Add rate limiting details (10 requests/minute, authenticated vs anonymous users) to Section 1.1 or new subsection
- [ ] **Input Length Limits** - Add input length limits (500 chars app, 1000 chars backend) to Section 1.2 or new subsection
- [ ] **Output Specifications** - Add output specifications (exactly 5 emoji options, JSON format) to Section 2
- [x] **Content Filtering Categories** - Add specific content filtering categories (4 harm categories: Harassment, Hate Speech, Sexually Explicit, Dangerous Content) to Section 3.2
- [ ] **Authentication Information** - Add authentication information (optional, authenticated vs anonymous rate limits) to Section 3.2
- [ ] **AI Model Specification** - Update Google Gemini AI reference to specify Gemini Flash model (gemini-flash-latest) in Section 3.2
- [ ] **Data Processing Location** - Add data processing location details (Google's global infrastructure) to Section 6 or 10

## Terms of Service Updates (`terms-of-service.html`)

- [ ] **Output Details** - Update Section 2 to specify exactly 5 emoji options instead of "multiple"
- [ ] **Input Limits** - Update Section 3.3 to specify exact input limits (500 chars app, 1000 chars backend)
- [ ] **Rate Limit Numbers** - Add specific rate limit numbers (10 req/min, 429 error details) to Section 11
- [ ] **History Storage Limit** - Add history storage limit (100 items max) to Section 11 or new subsection
- [ ] **Timeout Information** - Add timeout information (30s API, 60s function) to Section 8
- [ ] **AI Model Specification** - Update Section 3 to specify Gemini Flash model (gemini-flash-latest)

## Support Page Updates (`support.html`)

- [ ] **FAQ: Rate Limits** - Add FAQ "What are the rate limits?" with answer about 10 req/min and authenticated vs anonymous
- [ ] **FAQ: Input Limits** - Add FAQ "What are the input length limits?" with answer about 500/1000 char limits
- [ ] **FAQ: Emoji Count** - Add FAQ "How many emoji options do I get per request?" with answer about exactly 5 options
- [x] **FAQ: Timeout** - Add FAQ "What happens if my request times out?" with answer about 30s/60s timeouts
- [ ] **FAQ: AI Model** - Add FAQ "What AI model does Emojify Text use?" with answer about Gemini Flash
- [ ] **Update: Internet Connection FAQ** - Update existing "Why do I need an internet connection?" FAQ with technical details about Firebase and server-side processing
- [x] **Update: Content Blocked FAQ** - Update existing "Why was my content blocked?" FAQ to add timeout information
- [ ] **FAQ: History Limit** - Add FAQ "What is the history storage limit?" with answer about 100 items max
- [ ] **FAQ: Authentication** - Add FAQ "Do I need to create an account?" with answer about optional authentication
- [ ] **Update: Reporting Issues** - Update "Reporting Issues" section to add error messages and authentication status to information request list

## Technical Specifications Reference

When implementing, use these verified values from the codebase:

- **Rate Limit**: 10 requests/minute per user (from `index.ts` line 562)
- **Input Limits**: 500 chars client (from `GenerateView.swift` line 22), 1000 chars backend (from `index.ts` line 86)
- **Output**: Exactly 5 options (from `index.ts` line 932)
- **History Limit**: 100 items (from `HistoryManager.swift` line 16)
- **Timeouts**: 30s API (from `index.ts` line 185), 60s function (from `index.ts` line 186)
- **AI Model**: gemini-flash-latest (from `index.ts` line 742)
- **Authentication**: Optional (from `index.ts` line 667)

