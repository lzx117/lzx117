<template>
  <section class="projects-section">
    <div class="container">
      <!-- 标题区 -->
      <div class="section-header">
        <h2 class="section-title">项目展示</h2>
        <router-link to="/projects" class="view-more">
          查看全部
          <el-icon><ArrowRight /></el-icon>
        </router-link>
      </div>

      <!-- 项目列表 -->
      <div class="projects-list">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="project-card"
          :class="{ reverse: index % 2 === 1 }"
        >
          <!-- 项目图片 -->
          <div class="project-image">
            <img :src="project.coverImage" :alt="project.title" />
            <div class="image-overlay"></div>
          </div>

          <!-- 项目信息 -->
          <div class="project-info">
            <div class="project-meta">
              <span class="project-category">{{ project.displayCategory }}</span>
              <span class="project-year">
                <el-icon><Calendar /></el-icon>
                {{ project.year }}
              </span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-description">{{ project.description }}</p>

            <!-- 技术栈标签 -->
            <div class="tech-tags">
              <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <!-- 项目亮点 -->
            <div class="project-highlights">
              <div v-for="(highlight, idx) in project.highlights" :key="idx" class="highlight-item">
                <el-icon class="highlight-icon"><StarFilled /></el-icon>
                <span>{{ highlight }}</span>
              </div>
            </div>

            <!-- 查看详情按钮 -->
            <router-link :to="`/projects/${project.id}`" class="detail-link">
              查看详情
              <el-icon><ArrowRight /></el-icon>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Calendar, ArrowRight, StarFilled } from '@element-plus/icons-vue'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()

// 从store获取首页展示的项目
const featuredProjects = computed(() => projectsStore.featuredProjects)
</script>

<style scoped>
/* 保持原有样式不变 */
</style>

<style scoped>
.projects-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c4d0e3 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 标题区 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.view-more {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.view-more:hover {
  color: #764ba2;
  transform: translateX(5px);
}

/* 项目列表 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* 项目卡片 */
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
}

/* 反向布局（图片在右） */
.project-card.reverse {
  grid-template-columns: 1fr 1fr;
}

.project-card.reverse .project-image {
  order: 2;
}

.project-card.reverse .project-info {
  order: 1;
}

/* 项目图片 */
.project-image {
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}

.project-card:hover .project-image img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  opacity: 0;
  transition: opacity 0.4s;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

/* 项目信息 */
.project-info {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.project-category {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
}

.project-year {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #7f8c8d;
  font-size: 14px;
}

.project-title {
  font-size: 26px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
  line-height: 1.4;
}

.project-description {
  font-size: 15px;
  line-height: 1.8;
  color: #5a6c7d;
  margin-bottom: 20px;
  text-align: justify;
}

/* 技术栈标签 */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.tech-tag {
  padding: 6px 14px;
  background: #f0f2f5;
  color: #667eea;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #e4e7eb;
  transition: all 0.3s;
}

.tech-tag:hover {
  background: #667eea;
  color: #fff;
  border-color: #667eea;
}

/* 项目亮点 */
.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #5a6c7d;
}

.highlight-icon {
  color: #f39c12;
  font-size: 16px;
}

/* 查看详情按钮 */
.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  align-self: flex-start;
  transition: all 0.3s;
}

.detail-link:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .projects-section {
    padding: 60px 0;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .projects-list {
    gap: 40px;
  }

  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .project-card.reverse .project-image,
  .project-card.reverse .project-info {
    order: initial;
  }

  .project-image {
    min-height: 260px;
  }

  .project-info {
    padding: 30px 20px;
  }

  .project-title {
    font-size: 22px;
  }

  .project-description {
    font-size: 14px;
  }
}
</style>
