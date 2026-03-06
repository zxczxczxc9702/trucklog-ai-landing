import React from 'react';
import { TrendingUp, RefreshCw, Crown } from 'lucide-react';

export const BetaBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 신청하면 <span className="text-brand-400">가장 낮은 가격</span>으로 시작합니다
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            얼리버드 종료 후에는 정상가로 전환됩니다. <br/>
            초기 고객에게는 가격과 지원 모두 더 유리하게 제공됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">얼리버드 한정가 적용</h3>
            <p className="text-slate-300 leading-relaxed">
              지금 신청하시면 <strong>월 29,900원</strong>으로 시작할 수 있고, 종료 후에는 정상가 <strong>월 49,000원</strong>으로 전환됩니다.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <RefreshCw className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">네이버 대응 업데이트 포함</h3>
            <p className="text-slate-300 leading-relaxed">
              검색 흐름이 바뀌어도 걱정할 필요 없습니다. 글쓰기 방식과 엔진 업데이트가 반영되어 늘 최신 흐름으로 운영할 수 있습니다.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <Crown className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">초기 고객 우선 지원</h3>
            <p className="text-slate-300 leading-relaxed">
              필요한 기능이나 개선 요청이 있으면 빠르게 반영합니다. 사용 중 막히는 부분도 초기 고객 기준으로 우선 대응합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
