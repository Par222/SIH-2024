"use client";

import scholarship_info from "@/components/data/scholarship_info.json";

function Page({ params }) {
  const scholarshipTitle = params?.scholarship
    ?.replaceAll("%20", " ")
    ?.replaceAll("%2C", "");

  const index = scholarship_info?.findIndex((sch) => {
    return sch?.title?.indexOf(scholarshipTitle) != -1;
  });

  const scholarship = scholarship_info[index];

  const eligibilityCriteria = scholarship?.eligibility?.split("\n");

  const benefits = scholarship?.benefits?.split("\n");
  console.log(benefits);

  const benefitsList = [];

  for (let i = 1; i <= benefits?.length; i++) {
    if (benefits[i] == "") {
      continue;
    }
    const index1 = benefits?.indexOf("", i);
    const heading = benefits?.slice(i, index1);

    const index2 = benefits?.indexOf("", index1 + 1);

    const body = benefits?.slice(index1 + 1, index2)?.map((benefit) => {
      return benefit;
    });

    if (index1 == -1 || index2 == -1) {
      continue;
    }

    const tag = (
      <div>
        <h4 className="font-medium">{heading}</h4>
        <ul className="list-disc px-4">
          {body?.map((item) => {
            return (
              <li key={item} className="break-words">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
    benefitsList?.push(tag);

    i = index2;
  }

  const documents = scholarship?.documents?.split("\n");

  const applicationSteps = scholarship["how can you apply?"]?.split("\n");

  const importantDates = scholarship?.important_dates?.split("\n");

  return (
    <div className="p-8">
      <h1 className="text-[30px] font-semibold">{scholarship?.title}</h1>
      <div className="h-[300px] w-full mt-8">
        <img
          src="https://i0.wp.com/www.indiayojana.in/wp-content/uploads/2021/03/mahadbt-login.jpg?fit=1920%2C1080&ssl=1"
          className="h-full w-full object-cover object-center rounded-md"
        />
      </div>
      <div className="my-8">
        <h2 className="text-lg font-medium">About this scholarship</h2>
        <p>{scholarship?.description}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <button className="text-sm font-medium px-4 py-2 bg-orange-400 rounded-md text-white">
          Apply Now
        </button>
        <div className="text-sm font-medium space-y-2">
          {importantDates?.map((date) => {
            const index = date?.indexOf("-");
            return (
              <div key={date}>
                <p>{date?.slice(0, index)}</p>
                <p>{date?.slice(index + 1)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] max-[420px]:w-full mx-auto">
        <div className="bg-yellow-400 p-4 text-lg font-medium">
          Application Criteria
        </div>
        <div className="bg-yellow-100 px-6 py-4 space-y-4">
          <div className="">
            <h3 className="text-lg font-medium">Eligibility</h3>
            <p>{eligibilityCriteria[0]}</p>
            <ul className="list-disc px-12 max-[420px]:px-6">
              {eligibilityCriteria
                ?.slice(1, eligibilityCriteria?.length - 1)
                ?.map((criteria, index) => {
                  if (!criteria?.trim()) {
                    return <></>;
                  }
                  return (
                    <li className="" key={index}>
                      {criteria}
                    </li>
                  );
                })}
            </ul>
            <p>{eligibilityCriteria[eligibilityCriteria?.length - 1]}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Benefits</h3>
            <ul className="list-disc px-12 max-[420px]:px-6">
              {benefitsList?.map((benefit, index) => {
                return (
                  <li className="" key={benefit}>
                    {benefit}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Documents</h3>
            <ul className="list-disc px-12 max-[420px]:px-6">
              {documents?.map((document, index) => {
                if (!document?.trim()) {
                  return <></>;
                }
                return (
                  <li className="" key={index}>
                    {document}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-medium">How to apply?</h2>
        <ul className="list-disc px-12 max-[420px]:px-6">
          {applicationSteps?.slice(1)?.map((step) => {
            const index = step?.indexOf(":");
            return (
              <li key={step} className="space-x-[2px]">
                <span className="font-medium">{step?.slice(0, index + 1)}</span>
                <span>{step?.slice(index + 2)}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium">Important dates</h2>
        <ul className="list-disc px-12 max-[420px]:px-6">
          {importantDates?.map((date) => {
            return (
              <li key={date} className="font-medium">
                {date}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="text-sm font-medium px-4 py-2 bg-orange-400 rounded-md text-white">
        Apply Now
      </button>
    </div>
  );
}

export default Page;
