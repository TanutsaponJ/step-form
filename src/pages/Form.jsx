import SignUpPart from "../components/SignUpPart";
import PersonalInfoPart from "../components/PersonalInfoPart";
import MoreInfoPart from "../components/MoreInfoPart";
import Logo from "../assets/logo2.png";
import { useState } from "react";

function Form() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    expert: "",
    specialization: "",
    radio: {
      radio1: "radio1",
      radio2: "radio2",
    },
  });

  const titles = ["Sign UP", "Personal Info", "More Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpPart data={data} setData={setData} />;
    } else if (page === 1) {
      return <PersonalInfoPart data={data} setData={setData} />;
    } else {
      return <MoreInfoPart data={data} setData={setData} />;
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-sky-200 to-blue-500 w-full 
    h-full min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 md:h-screen"
    >
      <div>
        <div>Progress Bar</div>
      </div>
      <form className="sm:mx-auto sm:w-full sm:max-wmd">
        <img className="mx-auto h-24 w-auto" src={Logo} alt="/" />
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {titles[page]}
        </h1>
      </form>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow md:rounded-lg sm:px-10">
          <div>{PageDisplay()}</div>
          <div className="flex flex-row gap-3 pt-8">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((curPage) => curPage - 1);
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent 
              bg-[#1e90ff] py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
            >
              Prev
            </button>
            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  alert("Form Submitted");
                  console.log(data);
                } else {
                  setPage((curPage) => curPage + 1);
                }
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent 
              bg-[#1e90ff] py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
