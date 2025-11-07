import { createRouter, createWebHistory } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/HomePage.vue'),
    meta: {
      title: '首页',
      description: '展示个人技能、项目和荣誉',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects/ProjectsPage.vue'),
    meta: {
      title: '项目展示',
      description: '浏览所有项目作品',
    },
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: () => import('@/views/Projects/ProjectDetail.vue'),
    meta: {
      title: (route) => {
        const projectsStore = useProjectsStore()
        const project = projectsStore.getProjectById(route.params.id)
        return project ? `${project.title} - 项目详情` : '项目详情'
      },
      requiresAuth: false, // 示例：是否需要登录
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/AboutPage.vue'),
    meta: {
      title: '关于我',
      description: '了解我的背景和经历',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact/ContactPage.vue'),
    meta: {
      title: '联系方式',
      description: '与我取得联系',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// 全局前置守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  // 获取标题
  let title = to.meta.title

  // 如果是函数，执行它
  if (typeof title === 'function') {
    try {
      title = title(to)
    } catch (error) {
      console.error('标题函数执行失败:', error)
      title = '罗子翔个人网站'
    }
  }

  // 设置完整标题
  document.title = title ? `${title} - 罗子翔个人网站` : '罗子翔个人网站'

  // 设置meta description（SEO优化）
  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.content = to.meta.description
  }

  next()
})

// 路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
})

export default router
