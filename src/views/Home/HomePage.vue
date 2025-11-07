<template>
  <div class="home-page">
    <AppHeader />
    <HeroSection />
    <AwardsSection />
    <SkillsSection />
    <projects-section />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/Header/AppHeader.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import AwardsSection from '@/components/Home/AwardsSection.vue'
import SkillsSection from '@/components/Home/SkillsSection.vue'
import ProjectsSection from '@/components/Home/ProjectsSection.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'

import { onMounted } from 'vue'
import config from '@/config'
// import api from '@/api'

// 测试环境变量
onMounted(() => {
  console.log('=== 环境配置测试 ===')
  console.log('应用标题:', config.app.title)
  console.log('API地址:', config.api.baseURL)
  console.log('当前环境:', config.env.mode)
  console.log('是否开发环境:', config.env.isDev)
  console.log('调试模式:', config.debug.enabled)

  // 测试API请求（Mock示例）
  // api.projects.getProjectList().then(res => {
  //   console.log('项目列表:', res)
  // })
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #fff;
}
</style>
