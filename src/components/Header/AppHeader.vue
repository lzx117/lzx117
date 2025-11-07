<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo区域 - 改为图片 -->
      <div class="logo">
        <img src="@/assets/images/hero/logo.png" alt="Articler Logo" class="logo-image" />
      </div>

      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <el-menu
          mode="horizontal"
          :ellipsis="false"
          background-color="transparent"
          text-color="#333"
          active-text-color="#409EFF"
          router
          :default-active="route.path"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/projects">项目细节</el-menu-item>
          <el-menu-item index="/about">关于我</el-menu-item>
          <el-menu-item index="/contact">联系方式</el-menu-item>
        </el-menu>
      </nav>

      <!-- 右侧操作区 -->
      <div class="header-actions">
        <el-button icon="Search" circle class="search-btn" />
        <el-button class="control-btn" type="warning">控制台</el-button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.app-header {
  background: linear-gradient(180deg, #e8e4f3 0%, #f5f5ff 100%);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ✨ 修改后的LOGO样式 */
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-image {
  height: 45px; /* 调整LOGO高度 */
  width: auto; /* 宽度自适应 */
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05); /* 鼠标悬停时轻微放大 */
}

/* 如果你想限制最大宽度，取消下面的注释 */
/*
.logo-image {
  max-width: 200px;
  height: 45px;
}
*/

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
}

.nav-menu :deep(.el-menu) {
  border-bottom: none;
}

.nav-menu :deep(.el-menu-item) {
  font-size: 1rem;
  padding: 0 1.5rem;
  height: 50px;
  line-height: 50px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-btn {
  background: transparent;
  border: none;
}

.control-btn {
  background: #ffe8d6;
  border: none;
  color: #333;
  padding: 0.5rem 1.5rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .logo-image {
    height: 35px; /* 移动端稍微小一点 */
  }
}
</style>
