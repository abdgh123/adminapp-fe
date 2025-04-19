"use client";
// imports
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// constants
const students = [
  {
    id: "00001",
    sex: "male",
    firstName: "Haydar",
    lastName: "Mehdi",
    grade: "Preschool",
    previousSchool: "Previous school",
    phase: "Submitted",
    lastUpdate: "1 hrs",
    note: "note",
  },
  {
    id: "00002",
    sex: "male",
    firstName: "Ahmad",
    lastName: "Yousaf",
    grade: "Pre-k",
    previousSchool: "Previous school",
    phase: "Scheduled",
    lastUpdate: "2 hrs",
    note: "note",
  },
  {
    id: "00003",
    sex: "female",
    firstName: "Rose",
    lastName: "Charara",
    grade: "Kindergarten",
    previousSchool: "Previous school",
    phase: "Approved",
    lastUpdate: "4 hrs",
    note: "note",
  },
];

// search & filter algo
export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [phaseFilter, setPhaseFilter] = useState("");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      `${student.id} ${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesGrade = gradeFilter ? student.grade === gradeFilter : true;
    const matchesPhase = phaseFilter ? student.phase === phaseFilter : true;

    return matchesSearch && matchesGrade && matchesPhase;
  });

  const gradeLevels = [...new Set(students.map((s) => s.grade))];
  const phases = [...new Set(students.map((s) => s.phase))];

  const phaseCounts = filteredStudents.reduce((acc, student) => {
    acc[student.phase] = (acc[student.phase] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(phaseCounts).map(([phase, count]) => ({
    name: phase,
    value: count,
  }));
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];

  return (
    <div className="m-auto">
      <div className="flex flex-row">
        <img
          className="mr-[5px]"
          src="https://unpkg.com/@mynaui/icons/icons/file-plus.svg"
        />
        <p className="text-base text-[22px] font-sans">Admission Flow</p>
      </div>

      <br />
      <Tabs defaultValue="new-applicants" className="w-[1500px]">
        <TabsList className=" border-1 border-blue-200">
          <TabsTrigger className="text-[#4982d8] " value="new-applicants">
            New Applicants
          </TabsTrigger>
          <TabsTrigger className="text-[#4982d8]" value="returning-families">
            Returning Families
          </TabsTrigger>
        </TabsList>
        <br />
        <TabsContent value="new-applicants">
          <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center">
            <input
              type="text"
              placeholder="Search by ID, First Name, or Last Name"
              className="p-2 border rounded w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="p-2 border rounded md:w-[200px]"
            >
              <option value="">All Grades</option>
              {gradeLevels.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>

            <select
              value={phaseFilter}
              onChange={(e) => setPhaseFilter(e.target.value)}
              className="p-2 border rounded md:w-[200px]"
            >
              <option value="">All Phases</option>
              {phases.map((phase) => (
                <option key={phase} value={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>
          <br />

          <Table className="w-[800px]">
            <TableCaption>All Students</TableCaption>
            <TableHeader>
              <TableRow className="bg-[#e6f0f8]">
                <TableHead className="w-[200px]">Student ID</TableHead>
                <TableHead className="w-[200px]">Sex</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Grade level</TableHead>
                <TableHead className="w-[200px]">Previous school</TableHead>
                <TableHead className="w-[200px]">Phase</TableHead>
                <TableHead className="w-[200px]">Last update</TableHead>
                <TableHead className="w-[200px]">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>
                    <img
                      src={`https://unpkg.com/@mynaui/icons/icons/${student.sex}.svg`}
                      alt={student.sex}
                      className="w-5 h-5"
                    />
                  </TableCell>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.previousSchool}</TableCell>
                  <TableCell>{student.phase}</TableCell>
                  <TableCell>{student.lastUpdate}</TableCell>
                  <TableCell>{student.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="returning-families">
          <p className="text-[120px] mt-[50px]">Coming Soon</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
