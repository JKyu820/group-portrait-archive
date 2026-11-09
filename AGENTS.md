# 群像纪念册 Agent 指南

开始前阅读 [README](README.md)、[项目结构与修改指南](docs/项目结构与修改指南.md) 和 [协作指南](CONTRIBUTING.md)。先确认当前分支和工作区改动，再按任务范围工作。说明功能时，指出实际入口、相关文件、可调整的值、预期画面和验证方式。

## 复现基线

- Node.js 版本见 `.node-version`，用 `npm ci` 读取锁文件。运行 `npm run dev -- --port 3218`，打开 `http://127.0.0.1:3218/`。
- 当前版本展示第六组 28 位成员，含 23 张 WebP 画像和 5 张占位 SVG。桌面四排，窄屏五排，合影中的卡片只展示形象。编号和查找名称用于搜索与资料面板。
- 用 [桌面 1440 × 900](docs/screenshots/desktop.png) 和 [手机 390 × 844](docs/screenshots/mobile.png) 比对构图，先等人物图片全部加载。不同系统的字体回退可能带来轻微文字差异。
- 项目开箱可运行。仓库只收录获准公开的展示素材。成员原图、对照表、联系方式、凭据和本地生成目录应保留在仓库外。

## 找到改动入口

| 任务 | 先看 |
| --- | --- |
| 改人物名称、编号映射、资料或图片 | `data/members.ts` |
| 改人物顺序、行间距或前后关系 | `data/portrait-layout.ts` |
| 改搜索、选中、滚动定位或资料面板 | `components/portrait-hall.tsx` |
| 改舞台比例、人物尺寸、颜色、点击轮廓或响应式 | `app/globals.css` |
| 改画面主题、页面元信息或背景 | `app/layout.tsx`、`components/portrait-hall.tsx`、`public/assets/backgrounds/` |
| 改复现和验收流程 | `playwright.config.ts`、`tests/portrait-hall.spec.ts`、`.github/workflows/verify.yml` |

人物编号从名单数组位置派生，保持 001–028 的编号和人物对应。只改合影站位时调整两套排布里的槽位顺序。替换图片时保持独立文件和稳定 ID，并检查比例、留白和实际点击位置。涉及正式数据、上传或部署时，以维护者确认的任务范围为准。

## 提交前验证

运行 `npm run typecheck`、`npm run build` 和 [浏览器测试](README.md#浏览器测试)。视觉改动补充桌面和手机截图，验证前后排脸部能点、搜索能定位、窄屏无横向溢出。资料改动同时检查完整资料和简版资料。通过任务分支和 PR 交付，交由维护者评审后合并。
