// src/stores/projects.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 导入项目图片资源
import PROJECT_1_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_1_1.png'
import PROJECT_1_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_1_2.png'
import PROJECT_1_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_1_3.png'

import PROJECT_2_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_2_1.png'
import PROJECT_2_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_2_2.png'
import PROJECT_2_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_2_3.png'

import PROJECT_3_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_3_1.png'
import PROJECT_3_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_3_2.png'
import PROJECT_3_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_3_3.png'

import PROJECT_4_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_4_1.png'
import PROJECT_4_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_4_2.png'
import PROJECT_4_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_4_3.png'

import PROJECT_5_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_5_1.png'
import PROJECT_5_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_5_2.png'
import PROJECT_5_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_5_3.png'

import PROJECT_6_1 from '@/assets/images/projects/PLACEHOLDER_PROJECT_6_1.png'
import PROJECT_6_2 from '@/assets/images/projects/PLACEHOLDER_PROJECT_6_2.png'
import PROJECT_6_3 from '@/assets/images/projects/PLACEHOLDER_PROJECT_6_3.png'

export const useProjectsStore = defineStore('projects', () => {
  // ============ 状态（State） ============

  // 所有项目的完整数据
  const allProjects = ref([
    {
      id: '1',
      title: 'AI辅助跳远成绩智能检测系统',
      category: '数学建模',
      displayCategory: '人工智能', // 首页展示用
      year: '2025',
      description:
        '基于Kinect人体姿态估计技术，开发AI辅助立定跳远成绩检测系统。通过33个关键节点追踪，建立重心估算模型与运动轨迹分析算法，实现起跳/落地时刻的自动识别。结合体质数据与姿态特征，构建集成学习预测模型，为运动员提供个性化训练建议。',
      shortDescription:
        '基于计算机视觉和深度学习的跳远成绩智能检测系统，通过图像识别技术自动测量跳远距离，提高裁判效率和准确性。项目获得2025年数学建模E题国家二等奖。',
      coverImage: PROJECT_1_1, // 封面图（用于列表页）
      images: [PROJECT_1_1, PROJECT_1_2, PROJECT_1_3], // 轮播图（用于详情页）
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Flask'],
      techStack: ['Python', 'Kinect', 'XGBoost', '随机森林', 'SHAP分析'], // 首页展示用
      highlights: [
        '成绩预测RMSE仅0.057米，准确率95%+',
        '集成学习模型R²达0.924',
        '实时姿态识别延迟<100ms',
      ],
      award: '2025年数学建模E题国家二等奖',
      markdownPath: '/markdown/1、2025E基于重心估算与集成学习的跳远解析及预测模型.md',
      pdfUrl: '/files/2025E基于重心估算与集成学习的跳远解析及预测模型.pdf',
      featured: true, // 是否在首页展示
    },
    {
      id: '2',
      title: 'Vue 3响应式个人网站系统',
      category: 'Web开发',
      displayCategory: '全栈开发',
      year: '2024-2025',
      description:
        '基于Vue 3 Composition API开发的现代化个人网站系统，采用前后端分离架构，展示个人技能、项目经历、获奖荣誉等内容。项目采用紫蓝渐变配色方案，注重用户体验与视觉设计，实现了完整的响应式布局,适配PC端、平板和移动端多种设备。',
      shortDescription:
        '基于Vue 3 Composition API开发的现代化个人网站系统，采用前后端分离架构，展示个人技能、项目经历、获奖荣誉等内容。项目采用紫蓝渐变配色方案，注重用户体验和视觉设计，实现了完整的响应式布局，适配PC端、平板和移动端多种设备。',
      coverImage: PROJECT_2_1,
      images: [PROJECT_2_1, PROJECT_2_2, PROJECT_2_3],
      technologies: ['Vue 3', 'Element Plus', 'Pinia', 'PHP', 'MySQL'],
      techStack: ['Vue 3', 'Element Plus', 'Pinia', 'PHP', 'MySQL'],
      highlights: [
        '采用Vue 3 Composition API + <script setup>',
        '响应式适配3种屏幕尺寸',
        '模块化组件设计，易维护扩展',
      ],
      award: null,
      markdownPath: '/markdown/2、个人网站.md',
      pdfUrl: '无',
      featured: true,
    },
    {
      id: '3',
      title: '智能交通信号灯优化系统',
      category: '数学建模',
      displayCategory: '数学建模',
      year: '2024',
      description:
        '针对小镇旅游景区周边交通拥堵问题，设计了基于车流量检测的智能交通信号配时优化系统。通过K-means聚类算法将一天划分为4个时段，并结合实时车流量数据动态调整13个交叉路口的红绿灯配时方案，在保障通行效率的同时最大化车流平均速度。',
      shortDescription:
        '基于排队论和仿真技术的智能交通信号灯优化系统，通过建立数学模型优化交通流量，减少车辆等待时间。项目获得2024年数学建模E题省级二等奖。',
      coverImage: PROJECT_3_1,
      images: [PROJECT_3_1, PROJECT_3_2, PROJECT_3_3],
      technologies: ['MATLAB', 'Simulink', 'Python', 'AnyLogic'],
      techStack: ['Python', 'K-means聚类', '熵权法', 'TOPSIS', '数值优化'],
      highlights: ['车流通行率提升26%', '平均车速提升55%（18→28 km/h）', '平均等待时间降低40%'],
      award: '2024年数学建模E题省级二等奖',
      markdownPath: '/markdown/3、2024E基于车流量下信号灯优化模型的交通流量管控.md',
      pdfUrl: '/files/2024E基于车流量下信号灯优化模型的交通流量管控.pdf',
      featured: true,
    },
    {
      id: '4',
      title: '黄河水沙监测数据分析系统',
      category: '数学建模',
      displayCategory: '数学建模',
      year: '2023',
      description:
        '基于Python开发的黄河水沙监测数据分析系统，采用时间序列分析、回归分析等方法，对黄河水沙变化趋势进行深入研究。',
      shortDescription:
        '基于Python开发的黄河水沙监测数据分析系统，采用时间序列分析、回归分析等方法，对黄河水沙变化趋势进行深入研究。',
      coverImage: PROJECT_4_1,
      images: [PROJECT_4_1, PROJECT_4_2, PROJECT_4_3],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Scikit-learn'],
      techStack: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Scikit-learn'],
      highlights: [
        '采用ARIMA模型进行时间序列预测',
        '实现多维度数据可视化分析',
        '提出水沙关系优化方案',
      ],
      award: null,
      markdownPath: '/markdown/4、2023E基于最小二乘法分段拟合的黄河水沙监测数据分析.md',
      pdfUrl: '/files/2023E基于最小二乘法分段拟合的黄河水沙监测数据分析.pdf',
      featured: false,
    },
    {
      id: '5',
      title: '气象卫星信息报文传输最优方案研究',
      category: '数学建模',
      displayCategory: '数学建模',
      year: '2022',
      description:
        '基于图论和运筹学的气象卫星信息报文传输优化研究，通过建立数学模型优化传输路径，提高信息传输效率。',
      shortDescription:
        '基于图论和运筹学的气象卫星信息报文传输优化研究，通过建立数学模型优化传输路径，提高信息传输效率。',
      coverImage: PROJECT_5_1,
      images: [PROJECT_5_1, PROJECT_5_2, PROJECT_5_3],
      technologies: ['MATLAB', 'Lingo', 'Python', 'NetworkX'],
      techStack: ['MATLAB', 'Lingo', 'Python', 'NetworkX'],
      highlights: ['建立最短路径模型', '考虑多种约束条件', '提出分层传输策略'],
      award: null,
      markdownPath: '/markdown/5、2022D气象卫星信息报文传输最优方案研究.md',
      pdfUrl: '/files/2022D气象卫星信息报文传输最优方案研究.pdf',
      featured: false,
    },
    {
      id: '6',
      title: '圈养湖羊的空间利用率优化研究',
      category: '数学建模',
      displayCategory: '数学建模',
      year: '2023',
      description:
        '基于空间优化理论的圈养湖羊空间利用率研究，通过建立数学模型优化羊圈布局，提高空间利用效率和动物福利。',
      shortDescription:
        '基于空间优化理论的圈养湖羊空间利用率研究，通过建立数学模型优化羊圈布局，提高空间利用效率和动物福利。',
      coverImage: PROJECT_6_1,
      images: [PROJECT_6_1, PROJECT_6_2, PROJECT_6_3],
      technologies: ['MATLAB', 'Python', 'Lingo', 'AutoCAD'],
      techStack: ['MATLAB', 'Python', 'Lingo', 'AutoCAD'],
      highlights: ['建立空间优化模型', '考虑动物行为特征', '提出分区管理方案'],
      award: null,
      markdownPath: '/markdown/6、2023D基于动态规划模型下圈养湖羊的最优空间利用率.md',
      pdfUrl: '/files/2023D基于动态规划模型下圈养湖羊的最优空间利用率.md',
      featured: false,
    },
  ])

  // 当前筛选条件
  const activeFilter = ref('all')

  // ============ 计算属性（Getters） ============

  // 首页展示的项目（标记为featured的项目）
  const featuredProjects = computed(() => {
    return allProjects.value.filter((project) => project.featured)
  })

  // 根据筛选条件过滤的项目列表
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
      return allProjects.value
    } else if (activeFilter.value === 'modeling') {
      return allProjects.value.filter((p) => p.category === '数学建模')
    } else if (activeFilter.value === 'web') {
      return allProjects.value.filter((p) => p.category === 'Web开发')
    }
    return allProjects.value
  })

  // 根据ID获取单个项目
  const getProjectById = computed(() => {
    return (id) => allProjects.value.find((project) => project.id === id)
  })

  // ============ 方法（Actions） ============

  // 设置筛选条件
  const setFilter = (filter) => {
    activeFilter.value = filter
  }

  // 重置筛选条件
  const resetFilter = () => {
    activeFilter.value = 'all'
  }

  return {
    // 状态
    allProjects,
    activeFilter,
    // 计算属性
    featuredProjects,
    filteredProjects,
    getProjectById,
    // 方法
    setFilter,
    resetFilter,
  }
})
