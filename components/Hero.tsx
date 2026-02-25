import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6 border border-red-200 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
            3월 1일 정식 출시 확정
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            중고트럭 전문 AI 마케터,<br className="hidden md:block" />
            <span className="text-brand-600">런칭 전 특별 할인</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            완성된 AI 엔진을 누구보다 먼저 도입하세요.<br />
            3월 1일 정식 출시 전까지만 제공되는<br className="md:hidden"/>
            <span className="font-bold text-slate-900 underline decoration-brand-400 decoration-2 underline-offset-2">얼리버드 할인가</span>로 시작할 수 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToApply} variant="primary" size="lg" className="w-full sm:w-auto text-lg shadow-lg shadow-brand-500/30 font-bold">
              월 29,900원 얼리버드 신청 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg bg-white" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
              AI 성능 미리보기
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-500 text-sm font-medium bg-white/60 backdrop-blur-md p-4 rounded-xl inline-block border border-slate-200 shadow-sm">
            <div className="flex items-center text-slate-700"><Calendar className="h-4 w-4 mr-2 text-brand-600" /> 3월 1일 정식 서비스 런칭</div>
            <div className="hidden md:block text-slate-300">|</div>
            <div className="flex items-center text-slate-700"><Clock className="h-4 w-4 mr-2 text-red-500" /> 런칭 후 가격 인상 예정</div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};