// 安全头
const securityHeaders = {
    'Content-Type': 'text/html;charset=UTF-8',
    'Cache-Control': 'public, max-age=3600',
    'Content-Security-Policy': "default-src 'self' raw.githubusercontent.com; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
};

// 订阅源配置
const SUBSCRIPTION_URLS = {
    mixed: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/splitted/mixed',
    vless: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/splitted/vless',
    vmess: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/splitted/vmess',
    hysteria: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/python/hysteria',
    hysteria2: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/python/hysteria2',
    trojan: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/splitted/trojan',
    shadowsocks: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/splitted/ss',
    socks: 'https://raw.githubusercontent.com/Surfboardv2ray/TGParse/main/python/socks'
};

// HTML 内容
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - TGParse节点导航</title>
    <style>
        :root {
            --primary-color: #ff9000;
            --secondary-color: #000000;
            --background-color: #0f0f0f;
            --card-background: #1b1b1b;
            --text-color: #ffffff;
            --text-secondary: #cccccc;
            --shadow: 0 4px 6px rgba(0,0,0,0.3);
            --max-width: 1100px;
            --spacing: 20px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            padding: var(--spacing);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            width: 100%;
        }

        header {
            text-align: center;
            padding: 25px 15px;
            margin-bottom: var(--spacing);
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 2.8em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1 span:first-child {
            color: white;
        }

        h1 span:last-child {
            color: var(--primary-color);
            background: var(--primary-color);
            padding: 0 10px;
            border-radius: 5px;
            color: black;
        }

        .project-intro {
            margin-bottom: var(--spacing);
            padding: 20px;
            background: var(--card-background);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-intro h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5em;
            display: inline-block;
            background: var(--secondary-color);
            padding: 5px 15px;
            border-radius: 3px;
        }

        .subscription-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: var(--spacing);
        }

        .card {
            background: var(--card-background);
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #222;
        }

        .card:hover {
            transform: translateY(-3px);
            border-color: var(--primary-color);
        }

        .button {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 3px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9em;
            text-transform: uppercase;
        }

        .button:hover {
            background-color: #ffa31a;
            transform: translateY(-2px);
        }

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .feature-item {
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            text-align: center;
            border: 1px solid #222;
        }

        .feature-item h4 {
            color: var(--primary-color);
            margin-bottom: 8px;
            font-size: 1.1em;
        }

        .update-info {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-links {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .project-links a {
            padding: 10px 20px;
            background: var(--secondary-color);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 3px;
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
        }

        .project-links a:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        footer p {
            color: #666;
            font-size: 0.9em;
        }

        footer a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #ffa31a;
        }

        footer span {
            color: #444;
            margin: 0 8px;
        }

        @media (max-width: 768px) {
            .features {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><span>Node</span><span>Hub</span></h1>
            <p>TGParse节点导航服务</p>
        </header>

        <main>
            <div class="project-intro">
                <h2>关于 TGParse</h2>
                <p>TGParse 是一个强大的多线程解析器，从 Telegram 频道中提取各类代理配置。支持 Vmess、Vless、Reality、Trojan、ShadowSocks、Hysteria(1&2)、Tuic、Juicity、Naive、Nekoray 和 Socks(4-5) 等多种协议。</p>
                
                <div class="features">
                    <div class="feature-item">
                        <h4>多协议支持</h4>
                        <p>支持主流代理协议</p>
                    </div>
                    <div class="feature-item">
                        <h4>自动更新</h4>
                        <p>定时从TG频道更新</p>
                    </div>
                    <div class="feature-item">
                        <h4>分类管理</h4>
                        <p>按协议类型分类</p>
                    </div>
                </div>

                <div class="update-info">
                    <p>⚡️ 所有节点每6小时自动更新一次</p>
                    <p>🔍 当前收录了超过1000个活跃节点</p>
                </div>

                <div class="project-links">
                    <a href="https://github.com/Surfboardv2ray/TGParse" target="_blank">GitHub 仓库</a>
                    <a href="https://t.me/surfboardv2ray" target="_blank">Telegram 频道</a>
                </div>
            </div>

            <section class="subscription-list">
                <div class="card">
                    <h3>综合订阅</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.mixed}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Vless</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.vless}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Vmess</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.vmess}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Hysteria</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.hysteria}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Hysteria2</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.hysteria2}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Trojan</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.trojan}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Shadowsocks</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.shadowsocks}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Socks</h3>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.socks}', this)">复制链接</button>
                </div>
            </section>
        </main>

        <footer>
            <p>数据来源：<a href="https://github.com/Surfboardv2ray/TGParse" target="_blank">TGParse</a><span>|</span><a href="https://t.me/surfboardv2ray" target="_blank">Telegram频道</a></p>
        </footer>
    </div>

    <script>
        function copyToClipboard(text, button) {
            navigator.clipboard.writeText(text).then(() => {
                button.classList.add('copy-tooltip', 'show');
                setTimeout(() => {
                    button.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
    </script>
</body>
</html>`;

// 请求处理
async function handleRequest(request) {
    return new Response(HTML_CONTENT, {
        headers: securityHeaders
    });
}

// 事件监听器
addEventListener('fetch', event => {
    event.respondWith(
        handleRequest(event.request).catch(err => {
            return new Response('服务暂时不可用', { status: 500 })
        })
    );
});