import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1024px] mx-auto">
      <Header title="SKYCON" />
      <div className="pt-[78px]">{children}</div>
    </div>
  );
}
