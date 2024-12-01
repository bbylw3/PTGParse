# NodeHub - TGParse节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [TGParse](https://github.com/Surfboardv2ray/TGParse) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- PornHub 风格的设计
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 多种协议格式支持
- 🕒 每6小时自动更新节点

## 支持的协议格式

- Vmess 订阅
- Vless 订阅
- Hysteria 订阅
- Hysteria2 订阅
- Trojan 订阅
- Shadowsocks 订阅
- Socks 订阅
- 综合订阅

## 功能特点

- 多线程解析：高效提取 Telegram 频道节点
- 多协议支持：覆盖主流代理协议
- 定时更新：自动从 TG 频道更新
- 分类管理：按协议类型分类
- 一键复制：便捷的链接复制功能
- 实时反馈：复制操作的视觉反馈

## 快速部署

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 项目依赖

本项目是完全独立的单文件应用，不依赖任何外部库和框架，仅需要：

- Cloudflare Workers 环境
- 支持现代 CSS 特性的浏览器

## 致谢

- 节点来源：[TGParse](https://github.com/Surfboardv2ray/TGParse)
- Telegram 频道：[@surfboardv2ray](https://t.me/surfboardv2ray)

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。

## 许可证

MIT License