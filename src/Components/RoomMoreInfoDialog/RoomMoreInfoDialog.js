import React from "react";

const render = (rule) => {
  let list = rule.map((data) => {
    const splitString = data.content.split("\n");
    return (
      <div key={data.lstID} className="subList">
        <div className="flex">
          <div style={{ width: "16px", height: "16px" }}>
            <i className={data.icon}></i>
          </div>
          <div className="ms-3">
            {splitString.length !== 2 ? (
              <p>{data.content}</p>
            ) : (
              <p>
                {splitString[0]}
                <br />
                <span className="text-gray-400">{splitString[1]}</span>
              </p>
            )}
          </div>
        </div>
        <hr className="my-2.5" />
      </div>
    );
  });
  return list;
};

const renderRuleList = (ruleList) => {
  let lstRule = ruleList.map((data) => {
    return (
      <div key={data.subID} className="my-5">
        <h4 className="font-semibold text-lg mb-1.5">{data.subTitle}</h4>
        {render(data.subList)}
      </div>
    );
  });
  return lstRule;
};

const renderList = (ruleData) => {
  return (
    <div key={ruleData.id}>
      <h3 className="text-3xl font-semibold my-2.5">{ruleData.title}</h3>
      <p>{ruleData.description}</p>
      {renderRuleList(ruleData.rules)}
    </div>
  );
};

const RoomMoreInfoDialog = ({ toggle, data, index }) => {
  return (
    <div
      className="relative z-10 roomDialog"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <button
                    type="button"
                    className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      toggle(false, index);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="mt-2">{renderList(data)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMoreInfoDialog;
