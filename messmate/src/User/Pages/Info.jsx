import React from "react";
import rules from "../../Svg/book.png";
import goal from "../../Svg/goal.png";
function Info() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div> */}
            <div className="md:flex-grow">
              <h2 className="text-3xl font-bold text-gray-900 title-font mb-3 ">
                <img
                  src={goal}
                  alt=""
                  className="h-[50px] w-[50px] inline mr-2"
                />
                Aim
              </h2>
              <p className="text-lg border-1 border-black rounded-xl p-5 bg-gray-200 shadow-xl mb-3">
                The sole aim of the Mess Management is to provide all the
                facilities to the inmates, the mess and creation of an
                environment conducive for study and peaceful stay. The
                Management reserves the right to add, alter or delete, any rules
                from time to time.
              </p>
              {/* <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap ">
            <div className="md:flex-grow">
              <h1 className="text-3xl font-bold text-gray-900 title-font mb-3 ">
                <img
                  src={rules}
                  alt=""
                  className="h-[50px] w-[50px] inline mr-2"
                />
                Rules
              </h1>
              <div className="border-1 border-black rounded-xl p-5  bg-gray-200 shadow-xl">
                <ol>
                  <li className="list-disc text-lg mb-3">
                  Each hosteller will be provided with an account for MessMate and users can login 
                    into MessMate using their personal unique credentials.

                  </li>
                  <li className="list-disc text-lg mb-3">
                  The mess seceretaries are appointed by the warden.
                  </li>
                  <li className="list-disc text-lg mb-3">
                       The menu of the mess will be prepared by the mess secretaries in
                      consultation of the Warden. The menu so specified by the
                      mess seceretaries will be duly approved by the Warden, to
                      have an effective control over the cost.

                  </li>
                  <li className="list-disc text-lg mb-3">
                  3 types of mess subscriptions are available : daily,weekly,monthly and each student can 
                      choose a subscription of their convenience.
                  </li>
                  <li className="list-disc text-lg mb-3">
                  The selected subscription will be activated from the next day itself.
                  </li>
                  <li className="list-disc text-lg mb-3">
                  Each student will be provided with a QR code once they have access to a mess subscription and students have to provide their unique QR code at the mess to have 
                    access to mess food.

                  </li>
                  <li className="list-disc text-lg mb-3">
                  Students cannot avail a new subscription until they have paid for their previously availed
                    subscription.

                  </li>
                  <li className="list-disc text-lg mb-3">
                   
The kitchen expenses for every month shall be displayed on the mess notice board inorder to ensure
                    a transperancy between the students and the management.
                  </li>
                </ol>
                <div>
                  {/* <a className="text-indigo-500 inline-flex items-center mt-4 ">
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
