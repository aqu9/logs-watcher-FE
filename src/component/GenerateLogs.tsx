"use client";
import axios from "axios";
import React, { useState } from "react";

const GenerateLogs = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleGenerateLogs = async () => {
    if (!input.trim()) return setError(true);
    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/generateLog" || "",
        {
          text: input,
        }
      );
      if (data) {
        setInput("");
      }
    } catch (error: any) {
      console.log(error?.messsage);
    }
  };
  return (
    <>
      {/* <div className=""> */}
      <div className="flex flex-col gap-5 justify-center p-8">
        <input
          className="bg-transparent border border-white text-white p-3 rounded-md"
          // style={{ border: error ? "1px solid red" : "" }}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          value={input}
          placeholder="enter log message..."
        />
        <button
          className="border border-white p-3 rounded-md"
          onClick={() => handleGenerateLogs()}>
          Generate Log
        </button>
      </div>
      {/* </div>/ */}
    </>
  );
};

export default GenerateLogs;
