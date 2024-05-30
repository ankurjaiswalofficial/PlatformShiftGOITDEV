import Image from "next/image";
import BrandImage from "@/app/favicon.ico";

export default function Home() {
  return (
   <main>
    <header>
      <div class="branding">
        <Image width={1200} height={1200} src={BrandImage} alt="brandLogo" />
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
   </main>
  );
}
