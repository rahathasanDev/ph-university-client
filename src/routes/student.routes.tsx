import StudentDashboard from '../pages/student/StudentDashboard';
import RollNumber from '../pages/student/RollNumber';

export const studetnPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard/>
  },
  {
    name: "Roll Number",
    path: "roll-number",
    element: <RollNumber/>,
  },
  
];