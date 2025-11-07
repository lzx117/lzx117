<template>
  <div class="about-page">
    <AppHeader />

    <!-- Hero 区域 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate-fadeInUp">关于我</h1>
        <p class="hero-subtitle animate-fadeInUp delay-1">Hello, I'm 罗子翔</p>
        <div class="hero-decoration"></div>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 基本信息卡片 -->
      <div class="info-card animate-fadeInUp delay-2">
        <div class="card-header">
          <h2>👤 基本信息</h2>
        </div>
        <div class="card-body">
          <div class="info-grid">
            <div class="info-item">
              <span class="label">姓名</span>
              <span class="value">罗子翔</span>
            </div>
            <div class="info-item">
              <span class="label">学校</span>
              <span class="value">深圳职业技术大学</span>
            </div>
            <div class="info-item">
              <span class="label">专业</span>
              <span class="value">计算机网络技术</span>
            </div>
            <div class="info-item">
              <span class="label">年级</span>
              <span class="value">2023级</span>
            </div>
            <div class="info-item">
              <span class="label">政治面貌</span>
              <span class="value">共青团员</span>
            </div>
            <div class="info-item">
              <span class="label">年龄</span>
              <span class="value">21岁</span>
            </div>
          </div>

          <div class="intro-section">
            <h3>个人简介</h3>
            <p class="intro-text">
              深圳职业技术大学计算机网络技术专业学生，年级前三，擅长Python开发与前端技术。获全国数学建模二等奖，兼具技术能力、团队协作与组织管理经验。曾担任深圳职业技术大学书画协会副会长，负责活动策划与现场管理，协调组织30余场活动，任期内协会获评四星级社团。
            </p>
          </div>

          <div class="tags-section">
            <el-tag type="success" size="large">GPA: 3.65/4.0</el-tag>
            <el-tag type="primary" size="large">校级二等奖学金 × 3</el-tag>
            <el-tag type="warning" size="large">校级三等奖学金 × 2</el-tag>
            <el-tag type="danger" size="large">书画协会副会长</el-tag>
          </div>
        </div>
      </div>

      <!-- 兴趣爱好卡片组 -->
      <div class="hobby-cards">
        <!-- 专业兴趣 -->
        <div class="hobby-card animate-fadeInUp delay-3">
          <div class="card-icon">🎯</div>
          <h3>专业兴趣</h3>
          <div class="hobby-tags">
            <span class="hobby-tag">数学建模</span>
            <span class="hobby-tag">人工智能</span>
            <span class="hobby-tag">算法研究</span>
          </div>
          <p class="hobby-desc">
            热衷于数学建模竞赛，擅长将实际问题转化为数学模型，通过算法和AI技术寻找最优解决方案。
          </p>
        </div>

        <!-- 业余爱好 -->
        <div class="hobby-card animate-fadeInUp delay-4">
          <div class="card-icon">🎨</div>
          <h3>业余爱好</h3>
          <div class="hobby-tags">
            <span class="hobby-tag">书画艺术</span>
            <span class="hobby-tag">茶艺文化</span>
            <span class="hobby-tag">篮球运动</span>
          </div>
          <p class="hobby-desc">
            喜欢书法绘画，品味茶道文化，享受篮球运动带来的激情与快乐。艺术与运动让生活更加丰富多彩。
          </p>
        </div>

        <!-- 擅长领域 -->
        <div class="hobby-card animate-fadeInUp delay-5">
          <div class="card-icon">💡</div>
          <h3>擅长领域</h3>
          <div class="hobby-tags">
            <span class="hobby-tag">前端开发</span>
            <span class="hobby-tag">数据分析</span>
            <span class="hobby-tag">Python开发</span>
          </div>
          <p class="hobby-desc">
            精通Vue.js等前端框架，擅长Python数据处理与分析，具备全栈开发能力和实战经验。
          </p>
        </div>
      </div>

      <!-- 未来规划 -->
      <div class="future-card animate-fadeInUp delay-6">
        <div class="card-header">
          <h2>🚀 未来规划</h2>
        </div>
        <div class="card-body">
          <div class="career-path">
            <div class="path-step current">
              <div class="step-dot"></div>
              <div class="step-content">
                <h4>现在</h4>
                <p>深圳职业技术大学在读</p>
                <span class="step-tag">计算机网络技术专业</span>
              </div>
            </div>
            <div class="path-line"></div>
            <div class="path-step">
              <div class="step-dot"></div>
              <div class="step-content">
                <h4>近期目标</h4>
                <p>前端开发工程师</p>
                <span class="step-tag">Vue.js / React / 现代化前端技术栈</span>
              </div>
            </div>
            <div class="path-line"></div>
            <div class="path-step">
              <div class="step-dot"></div>
              <div class="step-content">
                <h4>长期目标</h4>
                <p>网络安全工程师</p>
                <span class="step-tag">Web安全 / 渗透测试 / 安全架构</span>
              </div>
            </div>
          </div>
          <div class="future-note">
            <p>
              💡
              职业规划路径：从前端开发入手，积累Web技术经验，逐步深入学习网络安全知识，最终成长为全栈型网络安全工程师。
            </p>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'
</script>

<style scoped>
.about-page {
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
  font-size: 24px;
  opacity: 0.95;
  letter-spacing: 2px;
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
.delay-6 {
  animation-delay: 1.2s;
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

/* 基本信息卡片 */
.info-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 40px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.card-header h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #667eea;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item .label {
  font-size: 14px;
  color: #909399;
  font-weight: 500;
}

.info-item .value {
  font-size: 18px;
  color: #2c3e50;
  font-weight: 600;
}

.intro-section {
  margin: 30px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.intro-section h3 {
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 15px;
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: #5a6c7d;
}

.tags-section {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* 兴趣爱好卡片组 */
.hobby-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.hobby-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.hobby-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.hobby-card h3 {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.hobby-tags {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.hobby-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.hobby-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #5a6c7d;
  text-align: left;
}

/* 未来规划卡片 */
.future-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  transition: all 0.3s ease;
}

.future-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.career-path {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  position: relative;
}

.path-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.step-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #667eea;
  border: 4px solid white;
  box-shadow: 0 0 0 3px #667eea;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.path-step.current .step-dot {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow:
    0 0 0 4px #667eea,
    0 0 20px rgba(102, 126, 234, 0.5);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.path-line {
  flex: 0.3;
  height: 2px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  margin: 0 -10px;
  margin-bottom: 60px;
}

.step-content h4 {
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
}

.step-content p {
  font-size: 16px;
  color: #5a6c7d;
  margin-bottom: 12px;
}

.step-tag {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
}

.future-note {
  padding: 24px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.future-note p {
  font-size: 15px;
  line-height: 1.8;
  color: #5a6c7d;
  margin: 0;
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 40px;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hobby-cards {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 42px;
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

  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-card,
  .future-card {
    padding: 24px;
  }

  .hobby-card {
    padding: 24px;
  }

  .career-path {
    flex-direction: column;
  }

  .path-line {
    width: 2px;
    height: 60px;
    margin: 0;
  }

  .tags-section {
    justify-content: center;
  }
}
</style>
