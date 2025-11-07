<template>
  <div class="contact-page">
    <AppHeader />

    <!-- Hero 区域 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate-fadeInUp">联系我</h1>
        <p class="hero-subtitle animate-fadeInUp delay-1">
          <span class="typing-text">{{ typingText }}</span>
          <span class="cursor">|</span>
        </p>
        <div class="hero-decoration"></div>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 联系方式卡片组 -->
      <div class="contact-cards">
        <!-- 邮箱卡片 -->
        <div class="contact-card animate-fadeInUp delay-2">
          <div class="card-icon email-icon">
            <el-icon :size="40"><Message /></el-icon>
          </div>
          <h3>电子邮箱</h3>
          <p class="contact-value">1109889081@qq.com</p>
          <el-button type="primary" class="action-btn" @click="copyEmail">
            <el-icon><CopyDocument /></el-icon>
            {{ copied ? '已复制！' : '复制邮箱' }}
          </el-button>
        </div>

        <!-- GitHub 卡片 -->
        <div class="contact-card animate-fadeInUp delay-3">
          <div class="card-icon github-icon">
            <el-icon :size="40"><Link /></el-icon>
          </div>
          <h3>GitHub</h3>
          <p class="contact-value">@lzx117</p>
          <el-button type="primary" class="action-btn" @click="openGithub">
            <el-icon><Position /></el-icon>
            访问主页
          </el-button>
        </div>

        <!-- 微信卡片 -->
        <div class="contact-card animate-fadeInUp delay-4">
          <div class="card-icon wechat-icon">
            <el-icon :size="40"><ChatDotRound /></el-icon>
          </div>
          <h3>微信</h3>
          <p class="contact-value">扫码添加</p>
          <el-button type="primary" class="action-btn" @click="showQRCode">
            <el-icon><View /></el-icon>
            查看二维码
          </el-button>
        </div>
      </div>

      <!-- 留言板 -->
      <div class="message-board animate-fadeInUp delay-5">
        <div class="board-header">
          <h2>✉️ 留言板</h2>
          <p>有任何想法或建议？欢迎给我留言！</p>
        </div>
        <el-form
          :model="messageForm"
          :rules="formRules"
          ref="messageFormRef"
          class="message-form"
          label-position="top"
        >
          <el-form-item label="您的姓名" prop="name">
            <el-input
              v-model="messageForm.name"
              placeholder="请输入您的姓名"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>

          <el-form-item label="您的邮箱" prop="email">
            <el-input
              v-model="messageForm.email"
              placeholder="请输入您的邮箱地址"
              :prefix-icon="Message"
              size="large"
            />
          </el-form-item>

          <el-form-item label="留言内容" prop="content">
            <el-input
              v-model="messageForm.content"
              type="textarea"
              :rows="6"
              placeholder="请输入您想说的话..."
              maxlength="500"
              show-word-limit
            />
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="submit-btn"
              @click="submitMessage"
              :loading="submitting"
            >
              <el-icon><Promotion /></el-icon>
              发送留言
            </el-button>
            <el-button size="large" @click="resetForm"> 重置 </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 微信二维码对话框 -->
    <el-dialog v-model="qrCodeVisible" title="微信二维码" width="400px" align-center>
      <div class="qrcode-container">
        <!-- 🔧 需要修改的地方：替换为你的微信二维码图片 -->
        <img
          src="@/assets/images/contact/wechat-qrcode.png"
          alt="微信二维码"
          class="qrcode-image"
        />
        <p class="qrcode-tip">使用微信扫描上方二维码添加好友</p>
      </div>
    </el-dialog>

    <!-- 成功提示对话框 -->
    <el-dialog v-model="successVisible" width="400px" align-center :show-close="false">
      <div class="success-animation">
        <div class="success-icon">
          <el-icon :size="80" color="#67C23A"><SuccessFilled /></el-icon>
        </div>
        <h3>留言发送成功！</h3>
        <p>感谢您的留言，我会尽快回复！</p>
        <el-button type="primary" @click="successVisible = false"> 确定 </el-button>
      </div>
    </el-dialog>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import {
  Message,
  Link,
  ChatDotRound,
  CopyDocument,
  Position,
  View,
  User,
  Promotion,
  SuccessFilled,
} from '@element-plus/icons-vue'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'

// 打字机效果
const typingText = ref('')
const fullText = "Let's Connect!"
let typingIndex = 0

const typeWriter = () => {
  if (typingIndex < fullText.length) {
    typingText.value += fullText.charAt(typingIndex)
    typingIndex++
    setTimeout(typeWriter, 100)
  }
}

onMounted(() => {
  setTimeout(typeWriter, 500)
})

// 邮箱复制功能
const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('1109889081@qq.com')
    copied.value = true
    ElMessage.success('邮箱地址已复制到剪贴板！')
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('复制失败：', error)
    ElMessage.error('复制失败，请手动复制')
  }
}

// GitHub 跳转
const openGithub = () => {
  window.open('https://github.com/lzx117/', '_blank')
}

// 微信二维码
const qrCodeVisible = ref(false)
const showQRCode = () => {
  qrCodeVisible.value = true
}

// 留言表单
const messageFormRef = ref(null)
const messageForm = reactive({
  name: '',
  email: '',
  content: '',
})

// 表单验证规则
const formRules = {
  name: [
    { required: true, message: '请输入您的姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '姓名长度在 2 到 20 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  content: [
    { required: true, message: '请输入留言内容', trigger: 'blur' },
    { min: 10, max: 500, message: '留言长度在 10 到 500 个字符', trigger: 'blur' },
  ],
}

// 提交状态
const submitting = ref(false)
const successVisible = ref(false)

// 提交留言
const submitMessage = async () => {
  if (!messageFormRef.value) return

  try {
    // 验证表单
    await messageFormRef.value.validate()

    submitting.value = true

    // TODO: 后端开发后，替换为真实的API调用
    // const response = await fetch('/api/messages', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(messageForm)
    // })

    // 模拟网络请求
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 显示成功动画
    successVisible.value = true

    // 重置表单
    resetForm()
  } catch (error) {
    if (error !== false) {
      ElMessage.error('留言发送失败，请稍后重试')
    }
  } finally {
    submitting.value = false
  }
}

// 重置表单
const resetForm = () => {
  if (messageFormRef.value) {
    messageFormRef.value.resetFields()
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #f5f7fa;
}

/* Hero 区域 */
.hero-section {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 28px;
  opacity: 0.95;
  letter-spacing: 1px;
  font-family: 'Courier New', monospace;
}

.typing-text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* 动画效果 */
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out;
}

.delay-1 {
  animation-delay: 0.2s;
  animation-fill-mode: both;
}
.delay-2 {
  animation-delay: 0.4s;
  animation-fill-mode: both;
}
.delay-3 {
  animation-delay: 0.6s;
  animation-fill-mode: both;
}
.delay-4 {
  animation-delay: 0.8s;
  animation-fill-mode: both;
}
.delay-5 {
  animation-delay: 1s;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 主内容区 */
.content-wrapper {
  max-width: 1200px;
  margin: -60px auto 60px;
  padding: 0 80px;
}

/* 联系方式卡片组 */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.contact-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
}

.contact-card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.email-icon {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  color: #667eea;
}

.github-icon {
  background: linear-gradient(135deg, #24292e15 0%, #24292e15 100%);
  color: #24292e;
}

.wechat-icon {
  background: linear-gradient(135deg, #07c16015 0%, #07c16015 100%);
  color: #07c160;
}

.contact-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.contact-card h3 {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 16px;
  font-weight: 600;
}

.contact-value {
  font-size: 16px;
  color: #5a6c7d;
  margin-bottom: 24px;
  font-family: 'Courier New', monospace;
}

.action-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 12px 32px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 留言板 */
.message-board {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  transition: all 0.3s ease;
}

.message-board:hover {
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.board-header {
  text-align: center;
  margin-bottom: 40px;
}

.board-header h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 12px;
}

.board-header p {
  font-size: 16px;
  color: #909399;
}

.message-form {
  max-width: 600px;
  margin: 0 auto;
}

:deep(.el-form-item__label) {
  font-weight: 600;
  color: #2c3e50;
  font-size: 15px;
}

:deep(.el-input__inner) {
  border-radius: 8px;
}

:deep(.el-textarea__inner) {
  border-radius: 8px;
  font-family: inherit;
}

.submit-btn {
  width: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

/* 二维码对话框 */
.qrcode-container {
  text-align: center;
  padding: 20px;
}

.qrcode-image {
  width: 250px;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.qrcode-tip {
  font-size: 14px;
  color: #909399;
}

/* 成功动画 */
.success-animation {
  text-align: center;
  padding: 40px 20px;
}

.success-icon {
  margin-bottom: 24px;
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.success-animation h3 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 16px;
}

.success-animation p {
  font-size: 16px;
  color: #909399;
  margin-bottom: 32px;
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 40px;
  }

  .contact-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 22px;
  }
}

/* 响应式设计 - 移动端 */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 20px;
  }

  .hero-section {
    height: 300px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .contact-card {
    padding: 30px;
  }

  .message-board {
    padding: 24px;
  }

  .submit-btn {
    width: 100%;
    margin-bottom: 12px;
  }

  .qrcode-image {
    width: 200px;
    height: 200px;
  }
}
</style>
