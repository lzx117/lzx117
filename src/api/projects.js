// src/api/projects.js
import request from '@/utils/request'

/**
 * 项目相关API接口
 */

// 获取项目列表
export function getProjectList(params) {
  return request({
    url: '/projects',
    method: 'get',
    params,
  })
}

// 根据ID获取项目详情
export function getProjectDetail(id) {
  return request({
    url: `/projects/${id}`,
    method: 'get',
  })
}

// 获取项目的Markdown内容
export function getProjectMarkdown(id) {
  return request({
    url: `/projects/${id}/markdown`,
    method: 'get',
  })
}

// 下载项目PDF
export function downloadProjectPDF(id) {
  return request({
    url: `/projects/${id}/pdf`,
    method: 'get',
    responseType: 'blob', // 下载文件
  })
}
