import Image from "next/image";

type SectionProps = {
  children: React.ReactNode;
  headerImage?: string;
  headerImageAlt?: string;
  title: string;
  cssTerms: string[];
};

export default function Section({
  headerImage,
  headerImageAlt,
  children,
  title,
  cssTerms,
}: SectionProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[1px] bg-zinc-900" />

      <div className="flex flex-col gap-y-8 px-8 py-16">
        <div className="flex flex-col sm:flex-row item-start sm:items-center gap-4">
          {headerImage && (
            <Image
              src={headerImage}
              alt={headerImageAlt ?? ""}
              height={400}
              width={400}
              className="size-12 rounded-full drop-shadow-amber-500/20 object-cover"
            />
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <h3 className="text-3xl font-semibold text-zinc-200">{title}</h3>

            <h4 className="text-zinc-400 text-xl italic font-medium">
              {cssTerms.join(", ")}
            </h4>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
