import Image from "next/image";

const logos = [
  { file: "20347fd47cfe27c4-1.png", alt: "Xendit" },
  { file: "ae77e6edc30eef6f-1.png", alt: "OpenSea" },
  { file: "f8e860af786ebadc-1.png", alt: "Y Combinator" },
  { file: "12ee9cf518aa0077-2.png", alt: "SeatGeek" },
  { file: "6b7d244da066990a-2.png", alt: "Awesomic" },
  { file: "2cb9e7fae585b6f4-3.png", alt: "Safety Wing" },
  { file: "fcb449e6d15cd4ba-3.png", alt: "OpenAI" },
  { file: "5535da67a131ddf5-4.png", alt: "New Relic" },
  { file: "2b1aaad5f611745c-5.png", alt: "Lugg" },
  { file: "bd56025d42571907-6.png", alt: "Instrumentl" },
  { file: "43b60af4f695176d-7.png", alt: "Kustom" },
  { file: "69dfb3fc42dd5217-8.png", alt: "OneChronos" },
  { file: "69fdf0c18e823afd-9.png", alt: "Gaiia" },
  { file: "91eb0830b8a33c4f-10.png", alt: "Permutive" },
  { file: "5c9ba04dd5067576-11.png", alt: "Teleport" },
  { file: "051d28bcba75a5aa-12.png", alt: "Anymersion" },
  { file: "c69e57be25eb1b75-13.png", alt: "Spin" },
  { file: "aad718341801a329-14.png", alt: "Guilded" },
  { file: "e7b471750f35d979-15.png", alt: "Duffel" },
  { file: "1dd3a0ee70d0c227-16.png", alt: "Atlas" },
  { file: "03455259defe6ec6-17.png", alt: "Forage" },
  { file: "d65d279534c05e48-18.png", alt: "Beyond" },
  { file: "786bf1db2bc3d531-19.png", alt: "Owner" },
  { file: "ab75615dd185e518-20.png", alt: "Onebref" },
  { file: "eb631a8e5f902e2b-21.png", alt: "Oxio" },
  { file: "7d5efb17b1865777-22.png", alt: "Quit Genius" },
  { file: "51f2ea887f03e189-23.png", alt: "Mayhem" },
  { file: "7e6648e2d877befa-24.png", alt: "Workramp" },
  { file: "4c91640111c8bb2c-25.png", alt: "Tall Poppy" },
  { file: "a069fbe1b6107e4f-27.png", alt: "Gorgias" },
  { file: "7b8fe4448868e6fd-28.png", alt: "80000 Hours" },
  { file: "9dc3adcbaba19825-29.png", alt: "Living Carbon" },
  { file: "a50a872156a3542a-30.png", alt: "Atomwise" },
  { file: "49587870a88126b5-31.png", alt: "Scope" },
  { file: "d724808a8606f468-32.png", alt: "Berbix" },
  { file: "d0ddff442975d49a-33.png", alt: "TRM" },
  { file: "2c830ac44a7997f4-34.png", alt: "Makerwatch" },
  { file: "f3842bda831cc2c5-35.png", alt: "Amazon" },
  { file: "0f966d2d05bda46d-36.png", alt: "Flockjay" },
  { file: "93d4c7896b3fbf5b-37.png", alt: "Tremendous" },
];

export default function TrustLogos() {
  return (
    <section className="py-20 px-[6vw] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-center text-lg mb-14 font-light">
          Trusted by the <strong className="font-semibold">world&apos;s best founders</strong>
        </p>
        <div className="logo-grid gap-x-10 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.file}
              className="flex items-center justify-center px-2"
              style={{ width: "calc(100% / 8)", minWidth: "100px" }}
            >
              <Image
                src={`/images/${logo.file}`}
                alt={logo.alt}
                width={120}
                height={40}
                className="max-h-[28px] w-auto object-contain opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
