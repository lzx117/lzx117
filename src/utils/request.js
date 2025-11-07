// src/utils/request.js
import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import config from '@/config'

// 创建 Axios 实例
const service = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
  withCredentials: config.api.withCredentials,
  headers: config.api.headers,
})

// 当前加载实例
let loadingInstance = null

// ===== 请求拦截器 =====
service.interceptors.request.use(
  (requestConfig) => {
    // 开发环境打印请求信息
    if (config.debug.enabled) {
      console.log('📤 发起请求:', {
        url: requestConfig.url,
        method: requestConfig.method,
        params: requestConfig.params,
        data: requestConfig.data,
      })
    }

    // 显示Loading（可选）
    if (requestConfig.loading !== false) {
      loadingInstance = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    }

    // 添加Token（如果有）
    const token = localStorage.getItem('token')
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`
    }

    return requestConfig
  },
  (error) => {
    // 请求错误处理
    console.error('❌ 请求错误:', error)
    return Promise.reject(error)
  },
)

// ===== 响应拦截器 =====
service.interceptors.response.use(
  (response) => {
    // 关闭Loading
    if (loadingInstance) {
      loadingInstance.close()
      loadingInstance = null
    }

    // 开发环境打印响应信息
    if (config.debug.enabled) {
      console.log('📥 响应数据:', {
        url: response.config.url,
        data: response.data,
      })
    }

    const { code, data, message } = response.data

    // 根据后端返回的code判断
    if (code === 200 || code === 0) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message || '请求失败')
      return Promise.reject(new Error(message || '请求失败'))
    }
  },
  (error) => {
    // 关闭Loading
    if (loadingInstance) {
      loadingInstance.close()
      loadingInstance = null
    }

    // HTTP错误处理
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 400:
          ElMessage.error(data.message || '请求参数错误')
          break
        case 401:
          ElMessage.error('未授权，请重新登录')
          // 可以跳转到登录页
          // router.push('/login')
          break
        case 403:
          ElMessage.error('拒绝访问')
          break
        case 404:
          ElMessage.error('请求的资源不存在')
          break
        case 500:
          ElMessage.error('服务器错误')
          break
        default:
          ElMessage.error(data.message || `请求失败 (${status})`)
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      ElMessage.error('网络错误，请检查网络连接')
    } else {
      // 其他错误
      ElMessage.error(error.message || '请求失败')
    }

    console.error('❌ 响应错误:', error)
    return Promise.reject(error)
  },
)

export default service
