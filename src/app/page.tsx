import Header from '@/components/CybersecurityLanding/Header';
import RiskAssessmentTabs from '@/components/CybersecurityLanding/RiskAssessmentTabs';
import SecurityInfo from '@/components/CybersecurityLanding/SecurityInfo';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen max-w-[1268px] px-6 container mx-auto'>
      <Header />
      <section className='flex flex-col mt-16 w-full'>
        <RiskAssessmentTabs />
        <SecurityInfo />
      </section>
    </main>
  );
}
