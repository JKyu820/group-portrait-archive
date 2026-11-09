# 协作指南

欢迎参与群像纪念册。设计、排布、体验测试和代码都可以通过 [Issues](https://github.com/fushuyiliu/group-portrait-archive/issues) 协作。

## 领任务

先查看是否已有同类 Issue，在对应任务下留言说明准备做什么。新问题请写清当前效果、想达到的效果和验收方式。验收反馈可以附屏幕尺寸、浏览器、操作步骤和截图，截图里请只使用测试数据。

## 开分支和提交 PR

1. 在 GitHub 点击 **Fork**，把项目复制到自己的账号，再克隆自己的副本。已有上游写权限的维护者可以在上游开任务分支。
2. 把上游仓库设为 `upstream`，每个任务从最新 `upstream/main` 建独立分支。

   ```bash
   git remote add upstream https://github.com/fushuyiliu/group-portrait-archive.git
   git fetch upstream
   git switch -c fix/mobile-search upstream/main
   ```

   上游地址只需设置一次。分支名按任务改，例如 `fix/mobile-search`、`feat/portrait-layout`、`docs/preview-guide`。
3. 按 [项目说明](README.md) 运行并验证，提交改动，推到自己的副本。

   ```bash
   git push -u origin fix/mobile-search
   ```

4. 向上游 `main` 发 PR。填写变更、验证结果和对应 Issue，有视觉改动时附桌面和手机前后对比。维护者批准后由维护者合并。外部贡献者的首轮自动检查可能需要维护者先批准运行。

## 维护者验收

- 确认改动只覆盖 Issue 范围，检查代码、文档、截图和真实点击行为。
- 确认 `Prototype verification` 通过，处理评审意见，再用 **Squash and merge** 合并。更新 PR 后应复查新的提交。
- `main` 是可运行的验收基线。主分支要求通过 PR、至少一名有写权限的评审者批准及自动检查通过。维护者提交自己的 PR 时由另一名有写权限的维护者评审。
- 正式成员的上传权限、上线范围和素材使用由项目负责人确认。公开仓库只收录获准公开的展示素材。
