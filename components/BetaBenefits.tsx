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
            지금 시작해야 <span className="text-brand-400">가장 저렴</span>합니다
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            3월 1일 정식 출시 이후에는 정상가로 전환됩니다. <br/>
            SaaS(구독형) 서비스의 초기 도입 혜택을 놓치지 마세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">가격 인상 전 기회</h3>
            <p className="text-slate-300 leading-relaxed">
              3월 1일부터는 월 34,900원으로 가격이 인상됩니다. 지금 신청하시면 <strong>특별 할인된 가격</strong>으로 서비스를 먼저 이용하실 수 있습니다.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <RefreshCw className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">로직 무상 업데이트</h3>
            <p className="text-slate-300 leading-relaxed">
              네이버 검색 로직이 바뀌어도 걱정 마세요. AI 엔진이 자동으로 업데이트되며, 얼리버드 고객님은 <strong>추가 비용 없이</strong> 평생 최신 버전을 쓰실 수 있습니다.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <Crown className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">VIP 전담 지원</h3>
            <p className="text-slate-300 leading-relaxed">
              사용 중 어려움이 있거나 필요한 기능이 있다면 개발팀 핫라인으로 연락주세요. 최우선으로 지원해드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};