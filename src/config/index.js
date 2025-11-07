// src/config/index.js

// 辅助函数：字符串转布尔值
const toBool = (value) => {
  return value === 'true' || value === true
}

// 辅助函数：字符串转数字
const toNumber = (value, defaultValue = 0) => {
  const num = Number(value)
  return isNaN(num) ? defaultValue : num
}

const config = {
  // ===== 应用基本信息 =====
  app: {
    name: import.meta.env.VITE_APP_NAME || '罗子翔个人网站',
    title: import.meta.env.VITE_APP_TITLE || '罗子翔个人网站',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    description: import.meta.env.VITE_APP_DESCRIPTION || '个人技能展示与项目作品集',
  },

  // ===== API配置 =====
  api: {
    // API基础路径
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    // 请求超时时间（毫秒）
    timeout: toNumber(import.meta.env.VITE_API_TIMEOUT, 10000),
    // 是否携带Cookie
    withCredentials: true,
    // 请求头配置
    headers: {
      'Content-Type': 'application/json',
    },
  },

  // ===== 上传配置 =====
  upload: {
    // 最大文件大小（字节）
    maxSize: toNumber(import.meta.env.VITE_UPLOAD_SIZE, 10) * 1024 * 1024,
    // 允许的文件类型
    accept: ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx'],
    // 允许的MIME类型
    acceptMime: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  },

  // ===== 调试配置 =====
  debug: {
    // 是否开启调试模式
    enabled: toBool(import.meta.env.VITE_ENABLE_DEBUG),
    // 日志级别
    logLevel: import.meta.env.DEV ? 'debug' : 'error',
  },

  // ===== 功能开关 =====
  features: {
    // 是否启用Mock数据
    enableMock: toBool(import.meta.env.VITE_ENABLE_MOCK),
    // 是否启用统计分析（生产环境自动启用）
    enableAnalytics: import.meta.env.PROD,
  },

  // ===== 作者信息 =====
  author: {
    name: import.meta.env.VITE_AUTHOR_NAME || '罗子翔',
    email: import.meta.env.VITE_AUTHOR_EMAIL || '',
    github: import.meta.env.VITE_AUTHOR_GITHUB || '',
  },

  // ===== 网站元数据 =====
  site: {
    keywords: import.meta.env.VITE_SITE_KEYWORDS || 'Vue3,个人网站,项目展示',
    description: import.meta.env.VITE_SITE_DESCRIPTION || '',
    icp: import.meta.env.VITE_SITE_ICP || '',
  },

  // ===== 环境信息 =====
  env: {
    // 当前模式
    mode: import.meta.env.MODE,
    // 是否开发环境
    isDev: import.meta.env.DEV,
    // 是否生产环境
    isProd: import.meta.env.PROD,
    // 基础路径
    baseUrl: import.meta.env.BASE_URL,
  },
}

// 开发环境打印配置信息
if (import.meta.env.DEV) {
  console.log('📦 应用配置:', config)
}

export default config
