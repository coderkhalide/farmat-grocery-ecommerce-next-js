import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const SectionHeading = ({
  title,
  moreText,
  moreUrl = "/",
  categories,
  icon = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      {/* Section title */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          {icon && (
            <Image
              src="/images/bolt-logo.svg"
              alt="logo"
              width="15"
              height="10"
            />
          )}
          <h1 className="section-title">{title}</h1>
        </div>
        {/* Categories */}
        {categories ? (
          <div className="hidden md:flex items-center gap-5">
            {categories?.map((category, index) => (
              <a key={index} href={moreUrl} className="text-color text-lg">
                {category}
              </a>
            ))}
          </div>
        ) : (
          <a
            href={moreUrl}
            className="hidden md:flex text-color text-lg items-center gap-2"
          >
            {moreText} <AiOutlineRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
