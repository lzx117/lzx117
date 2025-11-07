<template>
  <section class="skills-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">技能展示</h2>
        <p class="section-subtitle">Skills & Expertise</p>
      </div>

      <!-- 技能分类标签 -->
      <div class="skills-tabs">
        <div
          v-for="category in categories"
          :key="category.id"
          class="tab-item"
          :class="{ active: activeCategory === category.id }"
          @click="activeCategory = category.id"
        >
          <el-icon class="tab-icon">
            <component :is="category.icon" />
          </el-icon>
          <span class="tab-text">{{ category.name }}</span>
        </div>
      </div>

      <!-- 技能内容区域 -->
      <div class="skills-content">
        <!-- 左侧特色卡片 -->
        <div class="featured-card">
          <div class="card-image">
            <img :src="currentSkills.featured.image" :alt="currentSkills.featured.title" />
            <div class="image-overlay">
              <el-button
                type="primary"
                circle
                size="large"
                @click="openImageDialog(currentSkills.featured.image)"
              >
                <el-icon><ZoomIn /></el-icon>
              </el-button>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ currentSkills.featured.title }}</h3>
            <p class="card-description">{{ currentSkills.featured.description }}</p>
            <div class="card-tags">
              <el-tag
                v-for="tag in currentSkills.featured.tags"
                :key="tag"
                type="info"
                effect="plain"
                size="small"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </div>

        <!-- 右侧技能网格 -->
        <div class="skills-grid">
          <div
            v-for="skill in currentSkills.items"
            :key="skill.id"
            class="skill-card"
            @click="openSkillDialog(skill)"
          >
            <div class="skill-icon">
              <img :src="skill.icon" :alt="skill.name" />
            </div>
            <h4 class="skill-name">{{ skill.name }}</h4>
            <p class="skill-description">{{ skill.description }}</p>
            <div class="skill-level">
              <span class="level-label">熟练度</span>
              <el-progress
                :percentage="skill.level"
                :stroke-width="6"
                :show-text="false"
                :color="progressColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片查看弹窗 -->
    <el-dialog
      v-model="imageDialogVisible"
      width="80%"
      :show-close="true"
      :close-on-click-modal="true"
      class="image-dialog"
    >
      <img :src="currentImage" class="dialog-image" />
    </el-dialog>

    <!-- 技能详情弹窗 -->
    <el-dialog
      v-model="skillDialogVisible"
      width="600px"
      :title="currentSkill?.name"
      class="skill-dialog"
    >
      <div v-if="currentSkill" class="skill-detail">
        <div class="detail-icon">
          <img :src="currentSkill.icon" :alt="currentSkill.name" />
        </div>
        <p class="detail-description">{{ currentSkill.fullDescription }}</p>
        <div class="detail-level">
          <span class="level-label">熟练度：{{ currentSkill.level }}%</span>
          <el-progress :percentage="currentSkill.level" :stroke-width="8" :color="progressColor" />
        </div>
        <div class="detail-projects">
          <h4>相关项目经验</h4>
          <ul>
            <li v-for="(project, index) in currentSkill.projects" :key="index">
              {{ project }}
            </li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Monitor,
  DocumentCopy,
  Connection,
  DataAnalysis,
  Setting,
  Star,
  ZoomIn,
} from '@element-plus/icons-vue'

// 导入图片资源
import techStackImg from '@/assets/images/skills/tech-stack.png'
import academicImg from '@/assets/images/skills/academic.png'
import webDevImg from '@/assets/images/skills/web-dev.png'
import aiAgentImg from '@/assets/images/skills/ai-agent.png'
import opsImg from '@/assets/images/skills/ops.png'
import otherImg from '@/assets/images/skills/other.png'

// 导入技能图标
import vueIcon from '@/assets/images/skills/icons/vue.png'
import phpIcon from '@/assets/images/skills/icons/php.png'
import mysqlIcon from '@/assets/images/skills/icons/mysql.png'
import linuxIcon from '@/assets/images/skills/icons/linux.png'
import pythonIcon from '@/assets/images/skills/icons/python.png'
import matlabIcon from '@/assets/images/skills/icons/matlab.png'
import statisticsIcon from '@/assets/images/skills/icons/statistics.png'
import algorithmIcon from '@/assets/images/skills/icons/algorithm.png'
import html5Icon from '@/assets/images/skills/icons/html5.png'
import javascriptIcon from '@/assets/images/skills/icons/javascript.png'
import elementPlusIcon from '@/assets/images/skills/icons/element-plus.png'
import viteIcon from '@/assets/images/skills/icons/vite.png'
import langchainIcon from '@/assets/images/skills/icons/langchain.png'
import promptIcon from '@/assets/images/skills/icons/prompt.png'
import ragIcon from '@/assets/images/skills/icons/rag.png'
import agentIcon from '@/assets/images/skills/icons/agent.png'
import nginxIcon from '@/assets/images/skills/icons/nginx.png'
import dockerIcon from '@/assets/images/skills/icons/docker.png'
import shellIcon from '@/assets/images/skills/icons/shell.png'
import monitorIcon from '@/assets/images/skills/icons/monitor.png'
import gitIcon from '@/assets/images/skills/icons/git.png'
import documentIcon from '@/assets/images/skills/icons/document.png'
import artIcon from '@/assets/images/skills/icons/art.png'
import projectIcon from '@/assets/images/skills/icons/project.png'

// 分类数据
const categories = [
  { id: 'tech', name: '技术栈', icon: Monitor },
  { id: 'academic', name: '后端开发', icon: DocumentCopy },
  { id: 'web', name: 'Web开发', icon: Connection },
  { id: 'ai', name: 'AI-Agent开发', icon: DataAnalysis },
  { id: 'ops', name: '网络运维', icon: Setting },
  { id: 'other', name: '其他技能', icon: Star },
]

// 当前激活分类
const activeCategory = ref('tech')

// 渐变色配置
const progressColor = [
  { color: '#667eea', percentage: 0 },
  { color: '#764ba2', percentage: 100 },
]

// 技能数据（按分类）
const skillsData = {
  tech: {
    featured: {
      title: '全栈开发能力',
      description:
        '精通前后端开发技术栈，具备完整的项目开发经验。从需求分析到部署上线，能够独立完成中小型Web应用的开发工作。',
      image: techStackImg,
      tags: ['Vue.js', 'PHP', 'MySQL', 'Linux'],
    },
    items: [
      {
        id: 1,
        name: 'Vue.js 3',
        description: '熟练使用Composition API',
        icon: vueIcon,
        level: 90,
        fullDescription:
          '深入掌握Vue 3核心特性，包括Composition API、响应式系统、组件化开发等。能够使用Vite构建现代化的前端应用，熟悉Element Plus等UI框架的使用。',
        projects: ['个人网站开发', '企业管理系统', '数据可视化平台'],
      },
      {
        id: 2,
        name: 'PHP',
        description: '后端接口开发',
        icon: phpIcon,
        level: 85,
        fullDescription:
          '熟练使用原生PHP进行后端开发，掌握RESTful API设计规范，能够编写高效、安全的后端代码。',
        projects: ['用户认证系统', '内容管理系统', '数据接口服务'],
      },
      {
        id: 3,
        name: 'MySQL',
        description: '数据库设计与优化',
        icon: mysqlIcon,
        level: 80,
        fullDescription: '掌握MySQL数据库设计、SQL优化、索引优化等技能，能够设计高效的数据库架构。',
        projects: ['电商数据库设计', '日志分析系统', '用户行为分析'],
      },
      {
        id: 4,
        name: 'Linux',
        description: '服务器运维',
        icon: linuxIcon,
        level: 75,
        fullDescription:
          '熟悉Linux系统管理，包括系统配置、服务部署、日常维护等，能够使用Shell脚本自动化运维任务。',
        projects: ['服务器环境搭建', '自动化部署脚本', '监控告警系统'],
      },
    ],
  },
  academic: {
    featured: {
      title: '数学建模能力',
      description: '获得全国大学生数学建模竞赛国家二等奖，擅长使用Python进行数据分析和算法实现。',
      image: academicImg,
      tags: ['Python', 'MATLAB', '数据分析', '算法设计'],
    },
    items: [
      {
        id: 1,
        name: 'Python',
        description: '数据分析与建模',
        icon: pythonIcon,
        level: 90,
        fullDescription:
          '精通Python编程，熟练使用NumPy、Pandas、Matplotlib等数据分析库，能够完成复杂的数据处理和可视化任务。',
        projects: ['数学建模竞赛', '数据分析报告', '机器学习模型'],
      },
      {
        id: 2,
        name: '数据分析',
        description: '数学计算与仿真',
        icon: matlabIcon,
        level: 85,
        fullDescription:
          '熟练使用Nnmpy进行数学计算、算法仿真和数据可视化，掌握优化算法和数值分析方法。',
        projects: ['NumPY', 'Pandas', 'Matplotlib'],
      },
      {
        id: 3,
        name: '统计分析',
        description: '数据挖掘与预测',
        icon: statisticsIcon,
        level: 80,
        fullDescription: '掌握统计学基础理论和数据挖掘技术，能够进行数据清洗、特征工程和预测建模。',
        projects: ['销售预测模型', '用户行为分析', '风险评估系统'],
      },
      {
        id: 4,
        name: '算法设计',
        description: '问题建模与求解',
        icon: algorithmIcon,
        level: 85,
        fullDescription:
          '具备良好的算法设计能力，能够将实际问题抽象为数学模型并设计高效的求解算法。',
        projects: ['路径规划算法', '资源分配优化', '调度问题求解'],
      },
    ],
  },
  web: {
    featured: {
      title: 'Web全栈开发',
      description: '掌握现代Web开发技术栈，能够独立完成前后端分离项目的开发与部署。',
      image: webDevImg,
      tags: ['响应式设计', 'RESTful API', '前后端分离', '性能优化'],
    },
    items: [
      {
        id: 1,
        name: 'HTML5/CSS3',
        description: '现代化页面布局',
        icon: html5Icon,
        level: 90,
        fullDescription: '精通HTML5语义化标签和CSS3高级特性，能够实现复杂的响应式布局和动画效果。',
        projects: ['响应式官网', '移动端H5页面', 'CSS动画特效'],
      },
      {
        id: 2,
        name: 'JavaScript',
        description: 'ES6+现代特性',
        icon: javascriptIcon,
        level: 88,
        fullDescription:
          '深入理解JavaScript核心概念，熟练使用ES6+新特性，掌握异步编程和模块化开发。',
        projects: ['交互式应用', '数据可视化', '工具库开发'],
      },
      {
        id: 3,
        name: 'Element Plus',
        description: 'Vue3 UI框架',
        icon: elementPlusIcon,
        level: 85,
        fullDescription: '熟练使用Element Plus组件库，能够快速开发美观的管理后台和数据展示页面。',
        projects: ['管理后台', '数据大屏', '表单系统'],
      },
      {
        id: 4,
        name: 'Vite',
        description: '现代化构建工具',
        icon: viteIcon,
        level: 80,
        fullDescription: '熟悉Vite构建工具的使用和配置，能够优化项目构建性能和开发体验。',
        projects: ['项目脚手架', '构建优化', '插件开发'],
      },
    ],
  },
  ai: {
    featured: {
      title: 'AI-Agent开发',
      description: '探索人工智能应用开发，结合大语言模型构建智能化应用系统。',
      image: aiAgentImg,
      tags: ['LangChain', 'Prompt Engineering', 'RAG', 'Agent框架'],
    },
    items: [
      {
        id: 1,
        name: 'LangChain',
        description: 'LLM应用开发框架',
        icon: langchainIcon,
        level: 75,
        fullDescription: '掌握LangChain框架的使用，能够开发基于大语言模型的智能应用和Agent系统。',
        projects: ['智能问答系统', '文档分析助手', '代码生成工具'],
      },
      {
        id: 2,
        name: 'Prompt工程',
        description: '提示词设计与优化',
        icon: promptIcon,
        level: 80,
        fullDescription: '深入理解Prompt工程原理，能够设计高效的提示词模板，优化模型输出质量。',
        projects: ['提示词模板库', '角色扮演系统', '任务分解框架'],
      },
      {
        id: 3,
        name: 'RAG技术',
        description: '检索增强生成',
        icon: ragIcon,
        level: 70,
        fullDescription: '了解RAG技术原理，能够构建基于知识库的智能检索和生成系统。',
        projects: ['知识库问答', '文档检索系统', '智能推荐'],
      },
      {
        id: 4,
        name: 'Agent框架',
        description: '智能体系统设计',
        icon: agentIcon,
        level: 72,
        fullDescription: '探索Agent架构设计，能够构建具备规划、执行和反思能力的智能体系统。',
        projects: ['任务自动化Agent', '多Agent协作', '工具调用系统'],
      },
    ],
  },
  ops: {
    featured: {
      title: '网络运维能力',
      description: '具备服务器管理、网络配置和系统监控的实践经验。',
      image: opsImg,
      tags: ['Linux', 'Nginx', 'Docker', '自动化运维'],
    },
    items: [
      {
        id: 1,
        name: 'Nginx',
        description: 'Web服务器配置',
        icon: nginxIcon,
        level: 78,
        fullDescription: '熟练配置Nginx服务器，包括反向代理、负载均衡、SSL证书部署等。',
        projects: ['网站部署', '负载均衡配置', 'HTTPS部署'],
      },
      {
        id: 2,
        name: 'Docker',
        description: '容器化部署',
        icon: dockerIcon,
        level: 75,
        fullDescription: '掌握Docker容器技术，能够编写Dockerfile和docker-compose配置文件。',
        projects: ['应用容器化', '开发环境搭建', '微服务部署'],
      },
      {
        id: 3,
        name: 'Shell脚本',
        description: '自动化运维',
        icon: shellIcon,
        level: 80,
        fullDescription: '熟练编写Shell脚本，能够自动化日常运维任务，提高工作效率。',
        projects: ['备份脚本', '监控告警', '日志分析'],
      },
      {
        id: 4,
        name: '系统监控',
        description: '性能监控与优化',
        icon: monitorIcon,
        level: 70,
        fullDescription: '了解系统监控工具的使用，能够进行性能分析和故障排查。',
        projects: ['监控系统搭建', '性能调优', '故障诊断'],
      },
    ],
  },
  other: {
    featured: {
      title: '综合能力',
      description: '除技术能力外，还具备团队协作、项目管理和艺术审美等综合素质。',
      image: otherImg,
      tags: ['Git', '团队协作', '文档编写', '艺术创作'],
    },
    items: [
      {
        id: 1,
        name: 'Git',
        description: '版本控制',
        icon: gitIcon,
        level: 85,
        fullDescription: '熟练使用Git进行版本控制，掌握分支管理、代码合并和协作开发流程。',
        projects: ['开源项目贡献', '团队协作开发', '代码审查'],
      },
      {
        id: 2,
        name: '文档编写',
        description: '技术文档与博客',
        icon: documentIcon,
        level: 82,
        fullDescription: '具备良好的技术文档编写能力，能够清晰表达技术方案和使用说明。',
        projects: ['技术博客', 'API文档', '项目说明书'],
      },
      {
        id: 3,
        name: '书法艺术',
        description: '书画协会副会长',
        icon: artIcon,
        level: 88,
        fullDescription: '担任校书画协会副会长，具备深厚的书法功底和艺术审美能力。',
        projects: ['书法作品创作', '社团活动组织', '艺术展览策划'],
      },
      {
        id: 4,
        name: '项目管理',
        description: '需求分析与规划',
        icon: projectIcon,
        level: 75,
        fullDescription: '具备基本的项目管理能力，能够进行需求分析、任务分解和进度把控。',
        projects: ['项目规划', '团队协作', '进度管理'],
      },
    ],
  },
}

// 当前技能数据
const currentSkills = computed(() => skillsData[activeCategory.value])

// 图片弹窗相关
const imageDialogVisible = ref(false)
const currentImage = ref('')

const openImageDialog = (image) => {
  currentImage.value = image
  imageDialogVisible.value = true
}

// 技能详情弹窗相关
const skillDialogVisible = ref(false)
const currentSkill = ref(null)

const openSkillDialog = (skill) => {
  currentSkill.value = skill
  skillDialogVisible.value = true
}
</script>

<style scoped>
.skills-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 标题区域 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  font-weight: 300;
  letter-spacing: 2px;
}

/* 分类标签 */
.skills-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
}

.tab-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.tab-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.tab-icon {
  font-size: 18px;
}

.tab-text {
  font-size: 15px;
  font-weight: 500;
}

/* 内容区域 */
.skills-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 30px;
}

/* 左侧特色卡片 */
.featured-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: fit-content;
  position: sticky;
  top: 100px;
}

.featured-card:hover {
  transform: translateY(-5px);
}

.card-image {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-image:hover .image-overlay {
  opacity: 1;
}

.card-content {
  padding: 25px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.card-description {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 右侧技能网格 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.skill-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
}

.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.skill-description {
  font-size: 13px;
  color: #999;
  margin-bottom: 15px;
  min-height: 40px;
}

.skill-level {
  margin-top: auto;
}

.level-label {
  font-size: 12px;
  color: #666;
  display: block;
  margin-bottom: 8px;
}

/* 弹窗样式 */
:deep(.image-dialog) {
  border-radius: 15px;
  overflow: hidden;
}

:deep(.image-dialog .el-dialog__header) {
  display: none;
}

:deep(.image-dialog .el-dialog__body) {
  padding: 0;
}

.dialog-image {
  width: 100%;
  display: block;
}

:deep(.skill-dialog .el-dialog__header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

:deep(.skill-dialog .el-dialog__title) {
  color: white;
  font-size: 20px;
  font-weight: 600;
}

:deep(.skill-dialog .el-dialog__headerbtn .el-dialog__close) {
  color: white;
}

.skill-detail {
  padding: 10px 0;
}

.detail-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.detail-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.detail-description {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
}

.detail-level {
  margin-bottom: 25px;
}

.detail-level .level-label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}

.detail-projects h4 {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
}

.detail-projects ul {
  list-style: none;
  padding: 0;
}

.detail-projects li {
  font-size: 14px;
  color: #666;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.detail-projects li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .skills-content {
    grid-template-columns: 1fr;
  }

  .featured-card {
    position: relative;
    top: 0;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .skills-tabs {
    gap: 10px;
  }

  .tab-item {
    padding: 10px 18px;
    font-size: 14px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 200px;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 20px;
  }

  :deep(.el-dialog) {
    width: 95% !important;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }

  .skills-tabs {
    justify-content: flex-start;
  }

  .tab-item {
    padding: 8px 15px;
  }

  .tab-icon {
    font-size: 16px;
  }

  .tab-text {
    font-size: 13px;
  }

  .skill-card {
    padding: 20px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .skill-name {
    font-size: 16px;
  }

  .skill-description {
    font-size: 12px;
    min-height: auto;
  }
}
</style>
