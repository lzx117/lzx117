<template>
  <footer class="app-footer">
    <!-- 主页脚内容 -->
    <div class="footer-content">
      <div class="footer-container">
        <!-- 导航菜单（与Header保持一致） -->
        <nav class="footer-nav">
          <router-link to="/">首页</router-link>
          <router-link to="/projects">项目细节</router-link>
          <router-link to="/about">关于我</router-link>
          <router-link to="/contact">联系方式</router-link>
        </nav>

        <!-- 分隔线 -->
        <div class="footer-divider"></div>

        <!-- 底部备案信息 -->
        <div class="footer-bottom">
          <p class="copyright">© 2024-2025 lzx Articler. All Rights Reserved.</p>
          <p class="icp-info">粤ICP备XXXXXXXX号-1 | 粤公网安备 XXXXXXXXXXXXX号</p>
        </div>
      </div>

      <!-- 回到顶部按钮 -->
      <el-button
        class="back-to-top"
        :icon="ArrowUp"
        circle
        @click="scrollToTop"
        v-show="showBackToTop"
      />
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from '@element-plus/icons-vue'

// 显示回到顶部按钮的状态
const showBackToTop = ref(false)

// 监听滚动事件
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-footer {
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #c4d0e3 100%);
  color: #ffffff;
  margin-top: 4rem;
}

/* 主页脚内容 */
.footer-content {
  padding: 3rem 2rem 2rem;
  position: relative;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* 导航菜单（与Header样式保持一致） */
.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-nav a {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 5px;
}

/* 悬停下划线效果（与Header一致） */
.footer-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #000000;
  transition: width 0.3s ease;
}

.footer-nav a:hover {
  color: #000000;
}

.footer-nav a:hover::after {
  width: 100%;
}

/* 分隔线 */
.footer-divider {
  max-width: 1400px;
  margin: 2rem auto;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

/* 底部备案信息 */
.footer-bottom {
  text-align: center;
  padding-top: 1rem;
}

.copyright {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5rem;
}

.icp-info {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 999;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: #ffffff;
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .footer-nav {
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-nav a {
    font-size: 0.95rem;
  }

  .back-to-top {
    right: 1rem;
    bottom: 1rem;
    width: 45px;
    height: 45px;
  }

  .footer-content {
    padding: 2rem 1.5rem 1.5rem;
  }
}
</style>
