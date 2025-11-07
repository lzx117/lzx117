// src/composables/usePageTitle.js
import { watch, onUnmounted, isRef } from 'vue'

/**
 * 动态设置页面标题的组合式函数
 * @param {String|Function|Ref|ComputedRef} title - 标题
 * @param {Object} options - 配置选项
 * @returns {Function} - 手动更新标题的函数
 */
export function usePageTitle(title, options = {}) {
  const {
    suffix = ' - 罗子翔个人网站',
    prefix = '',
    separator = ' - ',
    restore = true,
    observeChanges = true,
  } = options

  const originalTitle = document.title
  let stopWatch = null

  // 格式化标题
  const formatTitle = (rawTitle) => {
    if (!rawTitle) return originalTitle

    let formattedTitle = String(rawTitle)

    // 添加前缀
    if (prefix) {
      formattedTitle = `${prefix}${separator}${formattedTitle}`
    }

    // 添加后缀
    if (suffix) {
      formattedTitle = `${formattedTitle}${suffix}`
    }

    return formattedTitle
  }

  // 设置标题
  const setTitle = (newTitle) => {
    const titleText = typeof newTitle === 'function' ? newTitle() : newTitle
    document.title = formatTitle(titleText)
  }

  // 根据类型处理标题
  if (isRef(title)) {
    // 响应式引用
    if (observeChanges) {
      stopWatch = watch(title, setTitle, { immediate: true })
    } else {
      setTitle(title.value)
    }
  } else if (typeof title === 'function') {
    // 函数
    if (observeChanges) {
      stopWatch = watch(title, setTitle, { immediate: true })
    } else {
      setTitle(title())
    }
  } else {
    // 普通字符串
    setTitle(title)
  }

  // 组件卸载时恢复原标题
  if (restore) {
    onUnmounted(() => {
      if (stopWatch) stopWatch()
      document.title = originalTitle
    })
  }

  // 返回手动更新函数
  return (newTitle) => {
    if (newTitle !== undefined) {
      setTitle(newTitle)
    }
  }
}
