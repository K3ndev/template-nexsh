import { Layout, GenericPanel } from "@/shared/components/custom/index";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <GenericPanel className={"mt-20 md:mt-36"}>
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <Image
            className="w-44 h-44 md:w-52 md:h-52  relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={190}
            height={47}
            priority
          />
        </div>
      </GenericPanel>
    </Layout>
  );
}
