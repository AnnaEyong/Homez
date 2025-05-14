import Image from "next/image";
import { Button } from "@/components/ui/button"
import CardComponent from "@/components/card/CardComponent";
import { Properties } from './../data/properties';


export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 justify-center h-fit w-full pt-[42vw] md:pt-[20vw] bg-background">
      {Properties ?.map((item, index) => <CardComponent key={item.id} property={item} />)}
    </div>
  );
}
