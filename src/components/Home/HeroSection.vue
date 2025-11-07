<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- 左侧文本内容区 -->
      <div class="hero-content">
        <h1 class="hero-title">言年君子<br />温其如玉！</h1>

        <div class="hero-intro">
          <h2 class="name">罗子翔</h2>
          <p class="description">深圳职业技术大学计算机网络技术专业在读，专业排名年级前三。</p>
          <p class="description">
            曾获全国大学生数学建模竞赛二等奖、数据分析科普竞赛一等奖等荣誉。
          </p>
          <p class="description">熟练掌握Python、Web开发及网络运维技术，具备丰富的项目实战经验。</p>
        </div>

        <el-button class="submit-btn" size="large">
          <el-icon><Right /></el-icon>
          Submit Article
        </el-button>
      </div>

      <!-- 右侧图片展示区 -->
      <div class="hero-images">
        <div class="image-card image-1">
          <img src="@/assets/images/hero/1.png" alt="PIC1" />
        </div>
        <div class="image-card image-2">
          <img src="@/assets/images/hero/2.png" alt="PIC2" />
        </div>
        <div class="image-card image-3">
          <img src="@/assets/images/hero/3-2.png" alt="PIC3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Right } from '@element-plus/icons-vue'
</script>

<style scoped>
.hero-section {
  background: linear-gradient(180deg, #f5f5ff 0%, #e8e4f3 100%);
  padding: 4rem 0;
  min-height: 600px;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* 左侧内容区 */
.hero-content {
  flex: 1;
  max-width: 500px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 400;
  color: #333;
  line-height: 1.3;
  margin: 0 0 2rem 0;
  letter-spacing: 0.05em;
}

.hero-intro {
  margin-bottom: 2rem;
}

.name {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 1rem 0;
}

.description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.8;
  margin: 0.5rem 0;
}

.submit-btn {
  background: #ffd4d4;
  border: none;
  color: #333;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-btn:hover {
  background: #ffc4c4;
}

/* 右侧图片区 */
.hero-images {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 600px;
  height: 500px;
}

.image-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-1 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.image-2 {
  grid-column: 2;
  grid-row: 1;
}

.image-3 {
  grid-column: 2;
  grid-row: 2;
}

.image-credit {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-images {
    width: 100%;
    max-width: 500px;
    height: 400px;
  }
}
</style>
