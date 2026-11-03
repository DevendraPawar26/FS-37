// console.log("Array")

// let arr = [1,2,3,4,5,6,7,8,9,];
// arr.push(10);
// console.log(arr);



// let arr = [1, 2, 3, 4, 5,9,5,2,9,45,56, 6, 7, 8, 9, 10];

// arr2 = [Apple, banana,5,7,3,9,Mango,leechi,beer,papaya];

// arr.sort();

// console.log(arr);

// callback function

// higher order functions - samajhna hai
// closure
// level
// 





// 16-Oct-26


// let employee = {
//   name: "Vansh",
//   company: [
//     {
//       name: "Zoho",
//       designation: "SDE1",
//       team: {
//         name: "Async",
//         members: [
//           {
//             name: "Piyush",
//             age: 67,
//             projects: [
//               {
//                 name: "Web",
//                 techStack: ["Full stack", "Django", "Rust", "Swift"],
//               },
//             ],
//           },
//           {
//             name: "Avinash",
//             age: 56,
//           },
//         ],
//       },
//     },
//     {
//       name: "Odo",
//       designation: "Counsellor",
//     },
//   ],
// };


// console.log(employee.company[0].team.members[0].projects[0].techStack[3]);




// 16-Oct-26



// let company = {
//   name: "TechNova Solutions",
//   founded: 2015,
//   "is-public": false,
//   headquarters: {
//     city: "Bengaluru",
//     address: {
//       street: "42 Outer Ring Road",
//       "pin code": "560103",
//       geo: {
//         lat: 12.9352,
//         lng: 77.6245,
//       },
//     },
//   },
//   departments: [
//     {
//       id: "D01",
//       name: "Engineering",
//       head: {
//         empId: "E001",
//         "full name": "Riya Mehta",
//         contact: {
//           email: "riya@technova.dev",
//           phones: {
//             work: "+91-9000000001",
//             personal: "+91-9000000002",
//           },
//         },
//       },
//       teams: [
//         {
//           teamName: "Frontend",
//           "tech-stack": ["React", "TypeScript", "Vite"],
//           members: [
//             {
//               empId: "E101",
//               "full name": "Aarav Sharma",
//               role: "Senior Frontend Developer",
//               salary: {
//                 base: 1800000,
//                 bonus: 200000,
//                 currency: "INR",
//               },
//               skills: [
//                 { name: "React", level: "expert" },
//                 { name: "CSS", level: "advanced" },
//               ],
//               projects: [
//                 {
//                   title: "Dashboard 2.0",
//                   status: "in-progress",
//                   tasks: [
//                     { taskId: "T1", title: "Setup routing", done: true },
//                     { taskId: "T2", title: "Build charts", done: false },
//                   ],
//                 },
//               ],
//             },
//             {
//               empId: "E102",
//               "full name": "Sneha Patil",
//               role: "Frontend Developer",
//               salary: {
//                 base: 1100000,
//                 bonus: 80000,
//                 currency: "INR",
//               },
//               skills: [
//                 { name: "JavaScript", level: "advanced" },
//                 { name: "Tailwind", level: "intermediate" },
//               ],
//               projects: [
//                 {
//                   title: "Landing Page Revamp",
//                   status: "completed",
//                   tasks: [
//                     { taskId: "T3", title: "Hero section", done: true },
//                     { taskId: "T4", title: "SEO audit", done: true },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           teamName: "Backend",
//           "tech-stack": ["Node.js", "Express", "MongoDB"],
//           members: [
//             {
//               empId: "E201",
//               "full name": "Kabir Khan",
//               role: "Backend Lead",
//               salary: {
//                 base: 2200000,
//                 bonus: 300000,
//                 currency: "INR",
//               },
//               skills: [
//                 { name: "Node.js", level: "expert" },
//                 { name: "System Design", level: "advanced" },
//               ],
//               projects: [
//                 {
//                   title: "Payment Gateway",
//                   status: "in-progress",
//                   tasks: [
//                     {
//                       taskId: "T5",
//                       title: "Razorpay integration",
//                       done: false,
//                     },
//                     { taskId: "T6", title: "Webhook handler", done: true },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "D02",
//       name: "Marketing",
//       head: {
//         empId: "E002",
//         "full name": "Vikram Rao",
//         contact: {
//           email: "vikram@technova.dev",
//           phones: {
//             work: "+91-9000000003",
//             personal: "+91-9000000004",
//           },
//         },
//       },
//       teams: [
//         {
//           teamName: "Social Media",
//           "tech-stack": ["Canva", "Meta Ads"],
//           members: [
//             {
//               empId: "E301",
//               "full name": "Ananya Iyer",
//               role: "Content Strategist",
//               salary: {
//                 base: 900000,
//                 bonus: 50000,
//                 currency: "INR",
//               },
//               skills: [
//                 { name: "Copywriting", level: "expert" },
//                 { name: "Video Editing", level: "intermediate" },
//               ],
//               projects: [
//                 {
//                   title: "Diwali Campaign",
//                   status: "planned",
//                   tasks: [
//                     { taskId: "T7", title: "Reel scripts", done: false },
//                     { taskId: "T8", title: "Ad budget plan", done: false },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   clients: {
//     "C-201": {
//       name: "FinEdge Bank",
//       contract: { value: 5000000, renewal: "2027-03-31" },
//     },
//     "C-202": {
//       name: "ShopKart",
//       contract: { value: 3200000, renewal: "2026-12-15" },
//     },
//   },
//   financials: {
//     2024: { revenue: 42000000, profit: 6000000 },
//     2025: { revenue: 58000000, profit: 9500000 },
//   },
// };


// console.log(company.departments[0].teams[0].members[0].projects[0].tasks[1].title);






// loops




// methods



// forEach  --- 1 only traverse no return
// map      --- 2 traversal and return same length array
// filter   --- 3 traversal and return only truthy conditions
// reduce



let numArr = [45,6,7,87,90,45,34,32,45,67,87,1,45,6];

let sum = 0;

numArr.forEach((val) => {
    sum += val;
});
console.log(sum);


// find
let found = numArr.find((val) => val === 45);
console.log(found);