import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Check, Loader2, Timer, CreditCard, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

// =================================================================================
// [설정 가이드] 이메일 발송을 위한 설정값
// EmailJS(https://www.emailjs.com/)에 가입(무료) 후 .env(.env.local)에 설정하세요.
// =================================================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
// =================================================================================

export const Pricing: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !name) return;
    
    setLoading(true);
    setError(null);

    // [개발자 확인용 로그]
    console.group("🚀 신규 얼리버드 구독 신청 시도");
    console.log(`👤 성함/상사: ${name}`);
    console.log(`📱 연락처: ${phone}`);
    console.log(`📧 이메일: ${email}`);
    console.groupEnd();

    try {
      // EmailJS 전송 로직
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        setLoading(false);
        setError("폼 연동 설정이 누락되었습니다. 관리자에게 문의해주세요.");
        console.error("EmailJS 환경변수 누락", {
          hasServiceId: Boolean(EMAILJS_SERVICE_ID),
          hasTemplateId: Boolean(EMAILJS_TEMPLATE_ID),
          hasPublicKey: Boolean(EMAILJS_PUBLIC_KEY),
        });
        return;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: "관리자",      // 템플릿 변수 (받는 사람)
          from_name: name,       // 템플릿 변수 (신청자 이름)
          phone: phone,          // 템플릿 변수 (연락처)
          email: email,          // 템플릿 변수 (이메일)
          message: `얼리버드 구독 신청\n이름: ${name}\n연락처: ${phone}\n이메일: ${email}`
        },
        EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS 전송 실패:", err);
      setLoading(false);
      setError("신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <section id="apply" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            얼리버드 특가 신청하기
          </h2>
          <p className="text-lg text-slate-600">
            3월 1일 정식 출시 전까지만 제공되는 <span className="text-brand-600 font-bold">런칭 전 특별 할인</span>을 놓치지 마세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Pricing Card */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse">
                곧 마감됩니다
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">얼리버드 월 구독</h3>
                <p className="text-sm text-slate-500">모든 프리미엄 기능을 제한 없이 이용</p>
              </div>

              <div className="space-y-2 mb-8 pb-8 border-b border-slate-100">
                <div className="flex justify-between items-center text-slate-500">
                  <span>정식 출시가 (3/1 이후)</span>
                  <span className="text-lg line-through decoration-slate-500 decoration-1">월 34,900원</span>
                </div>
                <div className="flex justify-between items-center text-brand-600 font-bold bg-brand-50 p-3 rounded-lg mt-2">
                  <span className="flex items-center"><Timer className="h-4 w-4 mr-2" />지금 신청 시 5,000원 할인</span>
                  <span className="text-3xl">월 29,900원</span>
                </div>
                <p className="text-right text-xs text-red-500 font-medium">* 부가세 별도, 정기 결제(구독형)</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <div className="bg-brand-100 p-1 rounded-full mr-3"><Check className="h-4 w-4 text-brand-600" /></div>
                  <span className="font-semibold">무제한 블로그 원고 생성</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="bg-brand-100 p-1 rounded-full mr-3"><Check className="h-4 w-4 text-brand-600" /></div>
                  <span className="font-semibold">매일 황금 키워드 제안</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="bg-brand-100 p-1 rounded-full mr-3"><Check className="h-4 w-4 text-brand-600" /></div>
                  <span className="font-semibold">네이버 로직 실시간 반영</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="bg-brand-100 p-1 rounded-full mr-3"><Check className="h-4 w-4 text-brand-600" /></div>
                  <span className="font-semibold">예약 발행 및 임시저장</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-slate-400 text-sm">
               <span className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1"/> 언제든 해지 가능</span>
               <span>|</span>
               <span>별도 설치 없는 클라우드 방식</span>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">신청이 접수되었습니다!</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  이용을 원하시는 경우 아래 계좌로 입금해 주시면 됩니다.<br/>
                  <br/>
                  기업은행 49503179301019<br/>
                  예금주 : 강현욱<br/>
                  <br/>
                  입금이 확인되면 3월 24일 서비스 오픈 시 등록된 연락처로 안내 문자를 보내드릴 예정입니다.<br/>
                  <br/>
                  감사합니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-6">
                   <div className="bg-brand-600 text-white p-2 rounded-lg mr-3">
                     <CreditCard className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-900">구독 신청서 작성</h3>
                     <p className="text-sm text-slate-500">결제 정보는 문자로 안내드립니다.</p>
                   </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">상사명 / 성함</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="예: 대박트럭 김철수"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">휴대폰 번호</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">이메일 주소</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="truck@example.com"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                    />
                  </div>
                  <div className="flex items-start bg-yellow-50 p-3 rounded-lg">
                    <input type="checkbox" id="agree" required className="mt-1 mr-2" />
                    <label htmlFor="agree" className="text-xs text-slate-600 font-medium">
                      지금 신청하면 월 29,900원에 이용 가능합니다. 이에 동의하며, 서비스 이용 안내 수신을 허락합니다.
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                    {error}
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full h-12 text-lg font-bold" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" /> : '얼리버드 특가로 시작하기'}
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  * 결제 전에는 요금이 부과되지 않습니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
