interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Cards({ title, children }: Props) {
  return (
    <div className="flex px-xl flex-col gap-sm">
      <div className="text-subtitle1 text-white">{title}</div>
      <div className="flex flex-col gap-md">{children}</div>
    </div>
  );
}
