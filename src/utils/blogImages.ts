import industrialWorkerTablet from '../assets/blog/industrial-worker-tablet.jpg';
import productionLine from '../assets/blog/production-line.jpg';
import industrialLabEngineer from '../assets/blog/industrial-lab-engineer.jpg';
import qualityManager from '../assets/blog/quality-manager.jpg';

export const blogCoverImages = {
  // FR
  'digitalisation-production-industrielle': industrialWorkerTablet,
  'defis-gestion-production-industrie': productionLine,
  'calcul-temps-production-ia': industrialLabEngineer,
  'controle-qualite-vision-industrielle': qualityManager,
  // EN
  'industrial-production-digitalization': industrialWorkerTablet,
  'industrial-production-challenges': productionLine,
  'ai-production-time-calculation': industrialLabEngineer,
  'industrial-vision-quality-control': qualityManager,
} as const;

export function getBlogCoverImage(slug: string) {
  return blogCoverImages[slug as keyof typeof blogCoverImages] ?? industrialWorkerTablet;
}
