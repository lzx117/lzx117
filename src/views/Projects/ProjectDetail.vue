<template>
  <div class="project-detail-page">
    <AppHeader />

    <!-- 面包屑导航 -->
    <div class="breadcrumb-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/projects' }">项目细节</el-breadcrumb-item>
        <el-breadcrumb-item>{{ projectData?.title || '加载中...' }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- Loading 加载状态 -->
    <div v-if="loading" class="loading-container">
      <el-icon class="is-loading" :size="50">
        <Loading />
      </el-icon>
      <p>加载中...</p>
    </div>

    <!-- 主内容区 -->
    <div v-else-if="projectData" class="content-wrapper">
      <!-- 图片轮播区 -->
      <div class="carousel-section">
        <el-carousel :height="carouselHeight" indicator-position="outside" arrow="always">
          <el-carousel-item v-for="(image, index) in projectData.images" :key="index">
            <el-image
              :src="image"
              :alt="`${projectData.title} 截图 ${index + 1}`"
              fit="contain"
              :preview-src-list="projectData.images"
              :initial-index="index"
              class="carousel-image"
            />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 项目基本信息卡片 -->
      <div class="info-card">
        <h1 class="project-title">{{ projectData.title }}</h1>

        <div class="project-meta">
          <el-tag type="primary" size="large">{{ projectData.category }}</el-tag>
          <el-tag type="info" size="large">{{ projectData.year }}</el-tag>
        </div>

        <div class="tech-stack">
          <span class="label">技术栈：</span>
          <el-tag
            v-for="tech in projectData.technologies"
            :key="tech"
            size="small"
            class="tech-tag"
          >
            {{ tech }}
          </el-tag>
        </div>

        <div v-if="projectData.award" class="award-info">
          <el-icon color="#f59e0b">
            <Trophy />
          </el-icon>
          <span>{{ projectData.award }}</span>
        </div>
      </div>

      <!-- Markdown 内容渲染区 -->
      <div class="markdown-section">
        <div class="markdown-body" v-html="htmlContent"></div>
      </div>

      <!-- PDF 下载区 -->
      <div class="download-section">
        <h3>📄 项目文档</h3>
        <el-button
          type="primary"
          size="large"
          class="download-btn"
          @click="handleDownload"
          :loading="downloading"
          :disabled="!projectData.pdfUrl || projectData.pdfUrl === '无'"
        >
          <el-icon>
            <Download />
          </el-icon>
          下载项目完整文档 (PDF)
        </el-button>
        <p class="download-tip">* PDF下载功能将在后端开发完成后启用</p>
      </div>
    </div>

    <!-- 项目不存在提示 -->
    <div v-else class="error-container">
      <el-empty description="项目不存在">
        <el-button type="primary" @click="router.push('/projects')">返回项目列表</el-button>
      </el-empty>
    </div>

    <!-- 返回顶部按钮 -->
    <el-backtop :right="40" :bottom="40">
      <div class="backtop-button">
        <el-icon :size="20">
          <Top />
        </el-icon>
      </div>
    </el-backtop>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { ElMessage } from 'element-plus'
import { Loading, Download, Trophy, Top } from '@element-plus/icons-vue'
import { useProjectsStore } from '@/stores/projects'
import { usePageTitle } from '@/composables/usePageTitle'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'

const route = useRoute()
const router = useRouter()
const projectsStore = useProjectsStore()

// 状态管理
const loading = ref(true)
const downloading = ref(false)
const htmlContent = ref('')
const projectData = ref(null)

const currentProject = computed(() => projectsStore.getProjectById(route.params.id))

// 动态设置标题
usePageTitle(
  computed(() => {
    if (!currentProject.value) return '加载中...'
    return `${currentProject.value.title} - 项目详情`
  }),
)

// 响应式轮播图高度
const carouselHeight = computed(() => {
  if (window.innerWidth > 1024) return '500px'
  if (window.innerWidth > 768) return '400px'
  return '300px'
})

// 配置 marked 和代码高亮
marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true,
})

// 加载项目数据和Markdown内容
const loadProjectData = async () => {
  try {
    loading.value = true

    // 从store获取项目数据
    const projectId = route.params.id
    const project = projectsStore.getProjectById(projectId)

    if (!project) {
      ElMessage.error('项目不存在！')
      projectData.value = null
      return
    }

    projectData.value = project

    // 加载Markdown文件
    const response = await fetch(project.markdownPath)

    if (!response.ok) {
      throw new Error('Markdown文件加载失败')
    }

    const markdownText = await response.text()
    htmlContent.value = marked(markdownText)

    // 模拟网络延迟
    await new Promise((resolve) => setTimeout(resolve, 500))
  } catch (error) {
    console.error('加载项目详情失败：', error)
    ElMessage.error('加载项目详情失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// PDF下载功能（占位）
const handleDownload = () => {
  ElMessage.info('PDF下载功能将在后端开发完成后启用')
}

// 组件挂载时加载数据
onMounted(() => {
  loadProjectData()
})
</script>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 面包屑导航 */
.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 80px;
  background: white;
}

/* Loading 加载状态 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #667eea;
}

.loading-container p {
  margin-top: 20px;
  font-size: 16px;
}

/* 主内容区 */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px 60px;
}

/* 图片轮播区 */
.carousel-section {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

:deep(.el-carousel__indicator--horizontal) {
  padding: 12px 8px;
}

:deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #667eea;
}

/* 项目信息卡片 */
.info-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.project-title {
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.tech-stack {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.tech-stack .label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 16px;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.award-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
  font-size: 16px;
  color: #92400e;
  font-weight: 500;
}

/* Markdown 内容区 */
.markdown-section {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

/* 引入 GitHub Markdown 样式 */
@import 'github-markdown-css/github-markdown.css';

.markdown-body {
  font-size: 16px;
  line-height: 1.8;
  color: #2c3e50;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.markdown-body a {
  color: #667eea;
  text-decoration: none;
}

.markdown-body a:hover {
  color: #764ba2;
  text-decoration: underline;
}

.markdown-body code {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 4px;
  color: #667eea;
  font-size: 14px;
}

.markdown-body pre {
  background: #f5f7fa;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
}

.markdown-body pre code {
  background: none;
  padding: 0;
  color: inherit;
}

/* PDF 下载区 */
.download-section {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.download-section h3 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 24px;
}

.download-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  font-size: 16px;
  padding: 14px 32px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.download-tip {
  margin-top: 16px;
  font-size: 14px;
  color: #909399;
}

/* 错误提示区 */
.error-container {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 返回顶部按钮 */
.backtop-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.backtop-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .breadcrumb-container,
  .content-wrapper {
    padding-left: 40px;
    padding-right: 40px;
  }

  .carousel-section,
  .info-card,
  .markdown-section,
  .download-section {
    padding: 30px;
  }

  .project-title {
    font-size: 28px;
  }
}

/* 响应式设计 - 移动端 */
@media (max-width: 768px) {
  .breadcrumb-container,
  .content-wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }

  .carousel-section,
  .info-card,
  .markdown-section,
  .download-section {
    padding: 20px;
  }

  .project-title {
    font-size: 24px;
  }

  .project-meta {
    flex-direction: column;
    gap: 8px;
  }

  .tech-stack {
    font-size: 14px;
  }

  .download-btn {
    width: 100%;
  }

  :deep(.el-backtop) {
    right: 20px !important;
    bottom: 20px !important;
  }
}
</style>
