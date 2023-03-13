import { Employee } from './CompanyPanel';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import {
  IconButton,
} from '@mui/material';
export const data: Employee[] = [
  {
    firstName: 'Dusty',
    lastName: 'Kuvalis',
    email: <Chip label="Active" size="small" color="primary" />,
    jobTitle: 'Chief Creative Technician',
    salary: <IconButton color="primary" >
    <AddIcon />
  </IconButton>,
    startDate: <IconButton color="error" >
    <ClearIcon />
  </IconButton>,
    signatureCatchPhrase: 'Cross-platform disintermediate workforce',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg',
  },
  {
    firstName: "D'angelo",
    lastName: 'Moen',
    email: 'Andrew88@hotmail.com',
    jobTitle: 'Forward Response Engineer',
    salary: 71964,
    startDate: '3/9/2018',
    signatureCatchPhrase: 'Virtual local support',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg',
  },
  {
    firstName: 'Devan',
    lastName: 'Reinger',
    email: 'Melissa_Lockman@hotmail.com',
    jobTitle: 'Customer Intranet Consultant',
    salary: 72551,
    startDate: '8/12/2020',
    signatureCatchPhrase: 'Pre-emptive composite hierarchy',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg',
  },
  {
    firstName: 'Leonardo',
    lastName: 'Langworth',
    email: 'Chadrick.Goldner87@gmail.com',
    jobTitle: 'Senior Security Manager',
    salary: 57801,
    startDate: '7/25/2017',
    signatureCatchPhrase: 'Progressive real-time core',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg',
  },
  {
    firstName: 'Douglas',
    lastName: 'Denesik',
    email: 'Dante.Deckow@hotmail.com',
    jobTitle: 'Legacy Security Assistant',
    salary: 23792,
    startDate: '4/12/2020',
    signatureCatchPhrase: 'Operative well-modulated info-mediaries',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg',
  },
  {
    firstName: 'Jameson',
    lastName: 'Mayer',
    email: 'Rosamond_Schuster@yahoo.com',
    jobTitle: 'Regional Division Planner',
    salary: 80916,
    startDate: '10/30/2017',
    signatureCatchPhrase: 'Front-line intermediate firmware',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg',
  },
  
  {
    firstName: 'Laurie',
    lastName: 'Torp',
    email: 'Daisha98@hotmail.com',
    jobTitle: 'District Research Planner',
    salary: 27126,
    startDate: '6/13/2016',
    signatureCatchPhrase: 'Reactive bi-directional paradigm',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/392.jpg',
  },
  {
    firstName: 'Oscar',
    lastName: 'Swaniawski',
    email: 'Eli64@yahoo.com',
    jobTitle: 'Human Implementation Manager',
    salary: 95518,
    startDate: '4/5/2014',
    signatureCatchPhrase: 'Versatile neutral leverage',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg',
  },
  {
    firstName: 'Paul',
    lastName: "O'Keefe",
    email: 'Dell20@hotmail.com',
    jobTitle: 'International Security Manager',
    salary: 100812,
    startDate: '2/20/2019',
    signatureCatchPhrase: 'Future-proofed multi-tasking secured line',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
  },
  {
    firstName: 'Jerod',
    lastName: 'Deckow',
    email: 'Guy51@hotmail.com',
    jobTitle: 'Direct Solutions Engineer',
    salary: 102099,
    startDate: '7/26/2021',
    signatureCatchPhrase: 'Phased 3rd generation functionalities',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1204.jpg',
  },
  {
    firstName: 'Deion',
    lastName: 'Medhurst',
    email: 'Juwan0@gmail.com',
    jobTitle: 'District Tactics Consultant',
    salary: 22577,
    startDate: '9/20/2020',
    signatureCatchPhrase: 'Synchronised executive solution',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/907.jpg',
  },
  {
    firstName: 'Vida',
    lastName: 'Considine',
    email: 'Pearline_Legros@yahoo.com',
    jobTitle: 'District Markets Manager',
    salary: 108348,
    startDate: '3/3/2020',
    signatureCatchPhrase: 'Optional optimizing matrix',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/460.jpg',
  },
  {
    firstName: 'Rosina',
    lastName: 'Kshlerin',
    email: 'Aryanna85@gmail.com',
    jobTitle: 'Principal Response Technician',
    salary: 117529,
    startDate: '7/20/2016',
    signatureCatchPhrase: 'Profound static project',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg',
  },
  {
    firstName: 'Troy',
    lastName: 'Prohaska',
    email: 'Tania_McLaughlin70@hotmail.com',
    jobTitle: 'Principal Directives Analyst',
    salary: 95202,
    startDate: '7/25/2014',
    signatureCatchPhrase: 'Virtual zero tolerance moratorium',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg',
  },
  {
    firstName: 'Jadyn',
    lastName: 'Tromp',
    email: 'Margarette.Abshire24@yahoo.com',
    jobTitle: 'Product Assurance Manager',
    salary: 21766,
    startDate: '7/1/2019',
    signatureCatchPhrase: 'Re-contextualized mission-critical challenge',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1136.jpg',
  },
  {
    firstName: 'Jerald',
    lastName: 'Heller',
    email: 'Maximo28@yahoo.com',
    jobTitle: 'Regional Identity Orchestrator',
    salary: 116164,
    startDate: '7/10/2017',
    signatureCatchPhrase: 'Customizable even-keeled time-frame',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/654.jpg',
  },
];
