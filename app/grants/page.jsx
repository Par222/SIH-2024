"use client";

import ScholarShipItem from "@/components/ScholarshipItem";
import scholarship_info from "@/components/data/scholarship_info.json";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-[30px] font-semibold">
        Scholarships for Maharashtra
      </h1>
      <div className="grid grid-cols-3 gap-5 max-[420px]:grid-cols-1 mt-6 px-4">
        {scholarship_info?.map((scholarship, index) => {
          return (
            <Fragment key={index}>
              <ScholarShipItem
                scholarship={scholarship}
                onViewScholarship={(scholarship) => {
                  router.push(`/grants/${scholarship}`);
                }}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
