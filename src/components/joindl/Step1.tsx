import Link from 'next/link';

const Step1 = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/idea.jpg')] bg-cover bg-no-repeat" id="step1">
      <div className="flex h-full flex-col items-center justify-center ">
        <div className="text-center font-tt text-[4rem] leading-[1] mb-12 mt-12" id="step1_heading">
        Step 1: Join Our Discord <br />
        </div>
      <div className="lh-spc text-left font-tt mb-12 ml-48 mr-48 text-[2rem]">
        <h2 className="text-[2rem]">The Dean&apos;s List DAO operates and communicates with Discord.</h2>
        <p className="text-med pt-6">
        To join our Discord server, pick from one of the three options below:
        <ul className="list-disc">
        <li>Complete the onboarding missions and quests & work your way up to Level 5 on Crew3:<br/>
        <Link rel="noopener noreferrer" target="_blank" className="lun" href="https://crew3.xyz/c/dldao/questboard">Dean&apos;s List on Crew3</Link>
        </li>
        <li>Purchase at least one $DEAN Token by swapping $GRAPE on Strata:<br/>
        <Link rel="noopener noreferrer" target="_blank" className="lun" href="https://app.strataprotocol.com/swap/6LyW1iUpfTPiMxSLMpKCxeAqXDz7nuWCfCNnEaSmibZ1">Visit Strata Swap</Link>
        </li>
        <li>Become a customer by purchasing one of our packages through the Coinable store:<br/>
        <Link rel="noopener noreferrer" target="_blank" className="lun" href="https://coinablepay.com/store/deans-list">Dean&apos;s List Coinable Store</Link>
        </li>
        </ul>
        </p>
        </div>
      <Link href="#step2">
        <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
          Proceed to Step 2
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        </Link>
        </div>
    </div>
  );
};

export default Step1;
