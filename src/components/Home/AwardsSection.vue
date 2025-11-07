<template>
  <section class="awards-section">
    <div class="awards-container">
      <!-- 标题栏 -->
      <div class="section-header">
        <h2 class="section-title">奖项展示</h2>
        <div class="arrow-wrapper">
          <el-icon class="arrow-icon" :size="32"><TopRight /></el-icon>
        </div>
      </div>

      <!-- 奖项内容区域 -->
      <div class="awards-content">
        <!-- 奖学金 -->
        <div class="award-card">
          <div class="award-icon-wrapper">
            <div class="award-icon scholarship-icon">
              <el-icon :size="50" color="#fff"><Trophy /></el-icon>
            </div>
          </div>
          <div class="award-details">
            <h3 class="award-title">奖学金</h3>
            <ul class="award-list">
              <li>校级新生奖学金二等奖</li>
              <li>校级奖学金二等奖（绩点年级第二）</li>
              <li>校级奖学金二等奖（绩点年级第三）</li>
              <li>校级奖学金三等奖（绩点年级第十二）</li>
              <li>校级奖学金三等奖（绩点年级第十三）</li>
            </ul>
          </div>
        </div>

        <!-- 竞赛成果 -->
        <div class="award-card">
          <div class="award-icon-wrapper">
            <div class="award-icon competition-icon">
              <el-icon :size="50" color="#fff"><Medal /></el-icon>
            </div>
          </div>
          <div class="award-details">
            <h3 class="award-title">竞赛成果</h3>
            <ul class="award-list">
              <li>全国大学生数学建模竞赛国家二等奖</li>
              <li>第三届全国大学生数据分析科普竞赛理论一等奖</li>
              <li>全国大学生数学建模竞赛广东省省三等奖</li>
              <li>深圳职业技术大学英语词汇竞赛特等奖</li>
            </ul>
          </div>
        </div>

        <!-- 工作情况 -->
        <div class="award-card">
          <div class="award-icon-wrapper">
            <div class="award-icon work-icon">
              <el-icon :size="50" color="#fff"><Briefcase /></el-icon>
            </div>
          </div>
          <div class="award-details">
            <h3 class="award-title">工作情况</h3>
            <ul class="award-list">
              <li>深圳职业技术大学书画协会 副会长</li>
              <li>普宁市冬宇文化传播有限公司 课程顾问</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TopRight, Trophy, Medal, Briefcase } from '@element-plus/icons-vue'
</script>

<style scoped>
.awards-section {
  background: #fafafa;
  padding: 5rem 0;
}

.awards-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 标题栏 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  letter-spacing: 0.02em;
}

.arrow-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.arrow-wrapper:hover {
  transform: translate(5px, -5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.arrow-icon {
  color: #333;
}

/* 奖项内容区域 */
.awards-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

/* ✨ 新增：卡片容器 */
.award-card {
  background: #fff;
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.award-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* ✨ 图标外包装 */
.award-icon-wrapper {
  margin-bottom: 2rem;
}

/* 图标样式 */
.award-icon {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* ✨ 悬停时图标放大 */
.award-card:hover .award-icon {
  transform: scale(1.08);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

/* ✨ 添加光晕效果 */
.scholarship-icon {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
}

.scholarship-icon::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
}

.competition-icon {
  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);
}

.competition-icon::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
}

.work-icon {
  background: linear-gradient(135deg, #e56399 0%, #d893ba 100%);
}

.work-icon::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e56399 0%, #d893ba 100%);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
}

/* 奖项详情 */
.award-details {
  width: 100%;
}

.award-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.02em;
}

.award-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.award-list li {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.8;
  padding: 0.6rem 0;
  position: relative;
  padding-left: 1.2rem;
  transition: color 0.2s ease;
}

/* ✨ 改进的列表项目符号 */
.award-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 100%);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(64, 158, 255, 0.3);
}

.award-list li:hover {
  color: #333;
}

/* 响应式布局 */
@media (max-width: 1200px) {
  .awards-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .awards-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .awards-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .award-card {
    padding: 2rem;
  }

  .award-icon {
    width: 90px;
    height: 90px;
  }

  .award-icon :deep(.el-icon) {
    font-size: 40px !important;
  }

  .award-title {
    font-size: 1.4rem;
  }
}
</style>
