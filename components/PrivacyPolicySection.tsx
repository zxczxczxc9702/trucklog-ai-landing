import React from 'react';

const policyItems = [
  {
    title: '1. 수집하는 개인정보 항목',
    body: 'TruckLog AI는 도입 상담 및 서비스 안내를 위해 상사명/성함, 휴대폰 번호, 이메일 주소를 수집합니다.',
  },
  {
    title: '2. 개인정보 수집 및 이용 목적',
    body: '수집한 개인정보는 서비스 도입 상담, 신청 접수 확인, 결제 및 계정 생성 안내, 문의 응대, 고지사항 전달 목적으로만 이용합니다.',
  },
  {
    title: '3. 개인정보 보유 및 이용 기간',
    body: '개인정보는 신청일로부터 12개월간 보관 후 지체 없이 파기합니다. 단, 관련 법령에 따라 보관이 필요한 경우에는 해당 법정 보관기간 동안 보관합니다.',
  },
  {
    title: '4. 동의 거부 권리 및 불이익',
    body: '이용자는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만 동의하지 않을 경우 상담 신청 접수 및 서비스 안내 제공이 제한될 수 있습니다.',
  },
  {
    title: '5. 제3자 제공 및 문의처',
    body: '수집한 개인정보는 별도의 동의 없이 제3자에게 제공하지 않습니다. 개인정보 관련 문의는 dealer@trucklogai.com으로 접수하실 수 있습니다.',
  },
];

export const PrivacyPolicySection: React.FC = () => {
  return (
    <section id="privacy" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-600 uppercase mb-3">
            Privacy Policy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">개인정보처리방침</h2>
          <p className="text-lg text-slate-600">
            TruckLog AI는 상담 신청과 서비스 안내를 위해 필요한 최소한의 개인정보만 수집합니다.
          </p>
        </div>

        <div className="space-y-4">
          {policyItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
