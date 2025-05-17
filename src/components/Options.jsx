import { 
  UserRound, 
  UserPlus, 
  Users, 
  Wallet, 
  CreditCard, 
  Diamond, 
  PlaneTakeoff
} from 'lucide-react';

export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole Traveler in exploration',
        icon: UserRound,
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two Travelers in tandem',
        icon: UserPlus,
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: Users,
        people: '3 to 5 people',
    },
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: Wallet,
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: CreditCard,
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Don\'t worry about the cost',
        icon: Diamond,
    },
];

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}';
