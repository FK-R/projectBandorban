"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
const MemberLogin = () => {
  const [memberPassword, setMemberPassword] = useState("");
  const [memberMobile, setMemberMobile] = useState("");

  const router = useRouter();

  function submit() {
    const data = new FormData();
    data.append("mobile", memberMobile);
    data.append("password", memberPassword);
    fetch("https://project.handymanahm.com/login", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // useEffect(() => {
  //   if (localStorage.getItem("token") !== null) {
  //     router.push("/");
  //   }
  // }, []);
  return (
    <>
      <div
        style={{ width: "500px", paddingTop: "150px" }}
        className=" container my-5"
      >
        <div className="mL-width mx-auto border form-data-main rounded-4 py-3 px-4">
          {/*  */}

          <div className="my-3 text-center">
            <p className="fw-bold my-3 fs-18">Login To Continue</p>
          </div>

          <div className="mb-3">
            {" "}
            <label htmlFor="formBKA" className="form-label fw-semibold">
              Mobile
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text shadow-none border-0 border-bottom bg-white rounded-0 "
                id="basic-addon1"
              ></span>
              <input
                onChange={(e) => {
                  setMemberMobile(e.target.value);
                }}
                type="text"
                className="form-control form-control-sm shadow-none border-0 rounded-0 border-bottom "
                placeholder="Mobile"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="mb-3">
            {" "}
            <label htmlFor="formBKA" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text shadow-none border-0 border-bottom bg-white rounded-0 "
                id="basic-addon1"
              ></span>
              <input
                type="password"
                className="form-control form-control-sm shadow-none border-0 rounded-0 border-bottom "
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setMemberPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="w-100  mt-4 btn btn-secondary text-white"
              onClick={submit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberLogin;
