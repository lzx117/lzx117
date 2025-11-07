// src/api/index.js
/**
 * API统一导出文件
 */

import * as projects from './projects'
import * as contact from './contact'

export default {
  projects,
  contact,
}

// 也可以单独导出
export { projects, contact }
