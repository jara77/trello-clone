import Link from "next/link";

import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 punded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2x1 text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nisi vestibulum,
        rhoncus neque quis, egestas urna. Curabitur ac urna sit amet ante fermentum efficitur.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get Ready
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;