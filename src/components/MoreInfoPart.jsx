import { useState } from "react";

function MoreInfoPart({ data, setData }) {
  const onChangeChecked = (e) => {
    console.log(e);
    setData(() => ({
      ...data,
      radio: e.target.value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Expert  Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          สาขาความเชี่ยวชาญ
        </label>
        <textarea
          cols="19"
          rows="5"
          onChange={(e) => setData({ ...data, expert: e.target.value })}
          value={data.expert}
          id="expert"
          placeholder="กรอกข้อมูลในช่องนี้..."
          className="block h-15 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/*  specialization Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          ความเชี่ยวชาญเฉพาะ
        </label>
        <textarea
          cols="19"
          rows="5"
          placeholder="กรอกข้อมูลในช่องนี้..."
          onChange={(e) => setData({ ...data, specialization: e.target.value })}
          value={data.specialization}
          id="username"
          className="block h-15 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="border border-b-stone-300"></div>

      {/*  Agree Section */}

      <div className="mt-1">
        <label className="flex justify-center text-sm font-medium text-gray-700 pb-2 ">
          ยินยอมเปิดเผยข้อมูลผ่านเว็ปไซต์คณะบริหารฯ
        </label>
      </div>
      <div className="flex h-15  w-full justify-between items-center ">
        <div className="flex items-center gap-2">
          <input
            onChange={onChangeChecked}
            name="radio"
            value={data.radio.radio1}
            type="radio"
            id="radio1"
            className="w-4 h-4 rounded-lg "
          />
          ยินยอม
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={onChangeChecked}
            name="radio"
            value={data.radio.radio2}
            type="radio"
            id="radio2"
            className="w-4 h-4 rounded-lg"
          />
          ไม่ยินยอม
        </div>
      </div>
    </div>
  );
}
export default MoreInfoPart;
