<template>
  <div class="not-found-page">
    <AppHeader />

    <div class="error-container">
      <!-- 404 图标 -->
      <div class="error-icon">
        <el-icon :size="120" color="#667eea">
          <WarningFilled />
        </el-icon>
      </div>

      <!-- 错误标题 -->
      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">页面未找到</h2>

      <!-- 错误描述 -->
      <p class="error-description">抱歉，你访问的页面不存在或已被移除 😢</p>

      <!-- 建议提示 -->
      <div class="suggestions">
        <p class="suggestion-title">你可以尝试：</p>
        <ul class="suggestion-list">
          <li>检查URL地址是否正确</li>
          <li>返回首页重新开始</li>
          <li>查看我的项目展示</li>
        </ul>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <el-button type="primary" size="large" @click="goHome">
          <el-icon class="mr-2">
            <HomeFilled />
          </el-icon>
          返回首页
        </el-button>

        <el-button type="default" size="large" @click="goProjects">
          <el-icon class="mr-2">
            <Folder />
          </el-icon>
          浏览项目
        </el-button>

        <el-button type="default" size="large" @click="goBack">
          <el-icon class="mr-2">
            <Back />
          </el-icon>
          返回上一页
        </el-button>
      </div>

      <!-- 装饰元素 -->
      <div class="decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { WarningFilled, HomeFilled, Folder, Back } from '@element-plus/icons-vue'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'

const router = useRouter()

// 返回首页
const goHome = () => {
  router.push('/')
}

// 前往项目页
const goProjects = () => {
  router.push('/projects')
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
}

.error-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

/* 错误图标 */
.error-icon {
  animation: bounce 2s infinite;
  margin-bottom: 20px;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 错误标题 */
.error-title {
  font-size: 120px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 10px 0;
  line-height: 1;
}

.error-subtitle {
  font-size: 32px;
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.error-description {
  font-size: 18px;
  color: #5a6c7d;
  margin-bottom: 40px;
  text-align: center;
}

/* 建议提示 */
.suggestions {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  max-width: 500px;
  width: 100%;
}

.suggestion-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
}

.suggestion-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.suggestion-list li {
  font-size: 16px;
  color: #5a6c7d;
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
}

.suggestion-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
  font-size: 18px;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.action-buttons .el-button {
  transition: all 0.3s ease;
}

.action-buttons .el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.mr-2 {
  margin-right: 8px;
}

/* 装饰元素 */
.decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 15%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.1);
  }
}

/* 确保内容在装饰元素之上 */
.error-icon,
.error-title,
.error-subtitle,
.error-description,
.suggestions,
.action-buttons {
  position: relative;
  z-index: 1;
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .error-title {
    font-size: 100px;
  }

  .error-subtitle {
    font-size: 28px;
  }

  .suggestions {
    padding: 25px;
  }
}

/* 响应式设计 - 移动端 */
@media (max-width: 768px) {
  .error-container {
    padding: 40px 20px;
  }

  .error-icon :deep(.el-icon) {
    font-size: 80px !important;
  }

  .error-title {
    font-size: 80px;
  }

  .error-subtitle {
    font-size: 24px;
  }

  .error-description {
    font-size: 16px;
  }

  .suggestions {
    padding: 20px;
  }

  .suggestion-title {
    font-size: 16px;
  }

  .suggestion-list li {
    font-size: 14px;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }

  .action-buttons .el-button {
    width: 100%;
  }

  .circle-1,
  .circle-2,
  .circle-3 {
    display: none;
  }
}
</style>
