// src/api/contact.js
import request from '@/utils/request'

/**
 * 联系表单相关API接口
 */

// 提交留言表单
export function submitContactForm(data) {
  return request({
    url: '/contact/submit',
    method: 'post',
    data,
  })
}

// 订阅邮件通知
export function subscribeEmail(email) {
  return request({
    url: '/contact/subscribe',
    method: 'post',
    data: { email },
  })
}
