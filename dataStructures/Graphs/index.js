/**
 *
 * Edge List
 * 0 -> 2, 2 -> 3 ....
 * [[0,2], [2,3],[2,1],[1,3]]
 *
 * adjacent List
 * the index of the array is the value of the actual Graph node
 * [[2],[2,3],[0,1,3],[1,2]]
 *
 * Adjacent Matrix
 *
 * [
 *  [0,0,1,0],1 -> 2 index of the parent array is conected to child arrays positive index of array
 *  [0,0,1,1],2 -> 2,3
 *  [1,1,0,1],
 *  [0,1,1,0],
 * ]
 *
 */

import { Graph } from "./Graph";

const people = [
  {
    id: 10021,
    name: "Anna",
    email: "anna@greatcompany.com",
  },
  {
    id: 10023,
    name: "Nathan",
    email: "nathan@greatcompany.com",
  },
  {
    id: 10021,
    name: "Alice",
    email: "alice@greatcompany.com",
  },
  {
    id: 10022,
    name: "Riley",
    email: "riley@greatcompany.com",
  },
  {
    id: 10023,
    name: "Jessica",
    email: "jessica@greatcompany.com",
  },
];

const jobs = [
  {
    id: 10021,
    title: "Engineer",
  },
  {
    id: 10022,
    title: "Quality Assurance",
  },
  {
    id: 10023,
    title: "Product Owner",
  },
];

export function GraphFunc() {
  console.log("Graphs is running!");
  //   const mergedWorkers = [];
  //   people.forEach((person) => {
  //     jobs.forEach((job) => {
  //       if (person?.id === job?.id) {
  //         mergedWorkers.push({ ...person, job });
  //       }
  //     });
  //   });

  let mergedWorkers = [];
  people.forEach((person) => {
    jobs.forEach((job) => {
      if (person.id === job.id) {
        mergedWorkers.push({
          ...person,
          job,
        });
      }
    });
  });
  console.log({ mergedWorkers });
  const graph = new Graph();
}
