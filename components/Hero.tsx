import React from 'react';
import { ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6 border border-red-200 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse" />
            얼리버드 모집 중
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            중고트럭 매물 올리면
            <br className="hidden md:block" />
            <span className="text-brand-600">AI가 블로그 글 + 포스팅까지 자동으로 해드립니다</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            트럭 스펙만 입력하세요.
            <br />
            AI가 판매되는 블로그 글을 작성하고 자동 포스팅합니다.
            <br />
            딜러는 매물 등록만 하면 됩니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('apply')}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-lg shadow-lg shadow-brand-500/30 font-bold"
            >
              지금 얼리버드 신청하기 (월 29,900원)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg bg-white"
              onClick={() => scrollToSection('demo')}
            >
              AI 성능 미리보기
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-500 text-sm font-medium bg-white/60 backdrop-blur-md p-4 rounded-xl inline-block border border-slate-200 shadow-sm">
            <div className="flex items-center text-slate-700">
              <Calendar className="h-4 w-4 mr-2 text-brand-600" />
              출시 후 가격 : 34,900원
            </div>
            <div className="hidden md:block text-slate-300">|</div>
            <div className="flex items-center text-slate-700">
              <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
              얼리버드 월 29,900원
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};
