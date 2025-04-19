"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Inputform() {
  return (
    <div>
      <form className="m-auto ml-[300px] mt-[100px]">
        <p className="text-[30px]">Input information</p>
        <br />
        <div className="flex flex-row gap-[10px]">
          <Input
            className=" w-[120px]"
            id="firstname"
            type="text"
            placeholder="First Name"
            autoComplete="none"
            required
            name="firstname"
          />
          <Input
            className=" w-[120px]"
            id="lastname"
            type="text"
            placeholder="Last Name"
            autoComplete="none"
            required
            name="lastname"
          />
        </div>
        <br />

        <Input
          id="sex"
          className="w-[250px]"
          autoComplete="none"
          required
          name="sex"
          placeholder="Sex"
        />
        <br />
        <Input
          id="grade"
          className="w-[250px]"
          autoComplete="none"
          required
          name="grade"
          placeholder="Grade"
        />
        <br />
        <Input
          id="previous-school"
          className="w-[250px]"
          autoComplete="none"
          required
          name="previous-school"
          placeholder="Previous school"
        />
        <br />
        <Button
          type="submit"
          className=" w-[250px] bg-[#134679] hover:bg-[#36618c] hover:text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Inputform;
