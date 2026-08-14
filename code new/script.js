// ===== 等待 DOM 加载 =====
document.addEventListener('DOMContentLoaded', function () {
    // ---- 暗色主题切换 ----
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // 检查本地存储中的主题偏好
    const savedTheme = localStorage.getItem('moeflux-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ 亮色';
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️ 亮色' : '🌙 暗色';
        localStorage.setItem('moeflux-theme', isDark ? 'dark' : 'light');
        // 触发 toast 提示
        showToast(isDark ? '🌙 已切换至暗色模式' : '☀️ 已切换至亮色模式');
    });

    // ---- 加入社区按钮 ----
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.addEventListener('click', function () {
        showToast('🎉 欢迎加入 moeflux！一起共建纯净社区');
    });

    // ---- 探索社区按钮 ----
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            showToast('🔍 探索更多二次元 & 科技话题');
        });
    }

    // ---- 加入讨论按钮 (hero 中的第二个) ----
    const discordBtn = document.getElementById('discordBtn');
    if (discordBtn) {
        discordBtn.addEventListener('click', function () {
            showToast('💬 讨论区即将开放，敬请期待！');
        });
    }

    // ---- Toast 显示函数 ----
    let toastTimer = null;
    const toastEl = document.getElementById('toast');

    function showToast(message) {
        // 如果 toast 被隐藏，先移除 hidden 类
        toastEl.classList.remove('hidden');
        // 设置文字
        toastEl.textContent = message;
        // 添加 show 类实现动画
        toastEl.classList.add('show');
        // 清除之前的定时器
        if (toastTimer) {
            clearTimeout(toastTimer);
        }
        // 3.5 秒后隐藏
        toastTimer = setTimeout(() => {
            toastEl.classList.remove('show');
            // 动画结束后隐藏元素（以防遮挡点击）
            setTimeout(() => {
                toastEl.classList.add('hidden');
            }, 400);
        }, 3500);
    }

    // ---- 可选：任何导航链接点击弹出提示（演示交互） ----
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止跳转，仅演示
            const text = this.textContent.trim();
            showToast(`📂 您点击了「${text}」板块 (演示)`);
        });
    });

    // ---- 页脚链接演示 ----
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const text = this.textContent.trim();
            showToast(`🔗 即将跳转至「${text}」页面 (演示)`);
        });
    });

    // ---- 社交图标演示 ----
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();
            const label = this.getAttribute('aria-label') || '社交';
            showToast(`🌐 访问 ${label} 页面 (演示)`);
        });
    });
});