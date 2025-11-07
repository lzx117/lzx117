<template>
  <div class="projects-page">
    <AppHeader />

    <!-- 页面标题区域 -->
    <section class="page-header">
      <div class="header-content">
        <h1 class="page-title">项目展示</h1>
        <p class="page-subtitle">探索我的技术成长之路，见证每一个项目的诞生</p>
      </div>
    </section>

    <!-- 项目筛选区域 -->
    <section class="filter-section">
      <div class="filter-container">
        <el-button :type="activeFilter === 'all' ? 'primary' : ''" @click="handleFilter('all')">
          全部项目
        </el-button>
        <el-button
          :type="activeFilter === 'modeling' ? 'primary' : ''"
          @click="handleFilter('modeling')"
        >
          数学建模
        </el-button>
        <el-button :type="activeFilter === 'web' ? 'primary' : ''" @click="handleFilter('web')">
          Web开发
        </el-button>
      </div>
    </section>

    <!-- 项目列表区域 -->
    <section class="projects-section">
      <div class="projects-container">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <!-- 项目图片 -->
          <div class="project-image">
            <img :src="project.coverImage" :alt="project.title" />
            <div class="project-tag">{{ project.category }}</div>
            <div class="project-year">{{ project.year }}</div>
          </div>

          <!-- 项目信息 -->
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.shortDescription }}</p>

            <!-- 技术栈标签 -->
            <div class="tech-tags">
              <span v-for="(tech, index) in project.technologies" :key="index" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <!-- 项目亮点 -->
            <div class="project-highlights">
              <div
                v-for="(highlight, index) in project.highlights"
                :key="index"
                class="highlight-item"
              >
                <el-icon class="highlight-icon"><Star /></el-icon>
                <span>{{ highlight }}</span>
              </div>
            </div>

            <!-- 查看详情按钮 -->
            <el-button type="primary" class="detail-button" @click="goToDetail(project.id)">
              查看详情
              <el-icon class="ml-2"><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Star, ArrowRight } from '@element-plus/icons-vue'
import { useProjectsStore } from '@/stores/projects'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'

const router = useRouter()
const projectsStore = useProjectsStore()

// 从store获取数据
const activeFilter = computed(() => projectsStore.activeFilter)
const filteredProjects = computed(() => projectsStore.filteredProjects)

// 筛选项目
const handleFilter = (filter) => {
  projectsStore.setFilter(filter)
}

// 跳转到详情页
const goToDetail = (projectId) => {
  router.push(`/projects/${projectId}`)
}
</script>

<style scoped>
/* 保持原有样式不变 */
</style>

<style scoped>
.projects-page {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 页面标题区域 */
.page-header {
  background: linear-gradient(135deg, #f5f7fa);
  color: #000000;
  padding: 4rem 2rem 3rem;
  text-align: center;
  /* 字体设置为仿宋 */
  font-family:
    'SimSun', '宋体', 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
}

/* 筛选区域 */
.filter-section {
  padding: 0 2rem 2rem;
  background: #f5f7fa;
}

.filter-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* 项目列表区域 */
.projects-section {
  padding: 2rem 2rem 4rem;
  background: #f5f7fa;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

/* 项目卡片 */
.project-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* 项目图片 */
.project-image {
  position: relative;
  width: 400px;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8ecf5 0%, #d4dce9 100%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.project-year {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* 项目信息 */
.project-info {
  padding: 2rem 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.project-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #5a6c7d;
  margin: 0;
}

/* 技术栈标签 */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-tag {
  background: #e8ecf5;
  color: #667eea;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* 项目亮点 */
.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #5a6c7d;
}

.highlight-icon {
  color: #fbbf24;
  font-size: 1.2rem;
}

/* 查看详情按钮 */
.detail-button {
  align-self: flex-start;
  margin-top: auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 25px;
}

.detail-button:hover {
  background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);
  transform: translateX(5px);
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-image {
    width: 100%;
    height: 250px;
    min-height: 250px;
  }

  .project-info {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .filter-container {
    flex-direction: column;
  }

  .projects-container {
    gap: 2rem;
  }

  .project-card {
    border-radius: 12px;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.95rem;
  }
}
</style>
