export const profile = {
  id: '4ad3fe1b-d179-417d-9927-4b38bbf23e76',
  name: 'Jana Khanji',
  Avatar: '',
  occupation: 'Web Developer',
  language: 'en_US',
  gender: 'female',
  location: {
    country: 'lb',
    city: 'tripoli',
  },
  birthday: {
    month: 11,
    day: 18,
    year: 1998,
  },
  theme_id: 1,
};

export const events = [
  {
    id: 1,
    title: "Mom's Birthday",
    description: '',
    type_id: 2,
    date: 'Thu Feb 25 2021',
  },
  {
    id: 2,
    title: 'string',
    description: 'string',
    type_id: 0,
    date: 'Sun Feb 28 2021',
  },
  {
    id: 3,
    title: 'string',
    description: 'string',
    type_id: 0,
    date: 'Mon Mar 01 2021',
  },
  {
    id: 4,
    title: 'My Birthday',
    description: 'string',
    type_id: 2,
    date: 'Sat Dec 18 2021',
  },
  {
    id: 5,
    title: 'testing',
    description: 'string',
    type_id: 1,
    date: 'Wed Sep 01 2021',
  },
  {
    id: 6,
    title: 'testing',
    description: 'string',
    type_id: 2,
    date: 'Thu Sep 02 2021',
  },
  {
    id: 6,
    title: 'testing',
    description: 'string',
    type_id: 2,
    date: 'Thu Sep 02 2021',
  },
];

export const trackers = [
  {
    id: 1,
    title: 'brush my teeth',
    duration: 14,
    StartDate: 'Sat Feb 20 2021',
    completed: true,
    track: [
      { id: 1, status: 'checked', date: 'Sat Feb 20 2021' },
      { id: 2, status: 'unchecked', date: 'Sun Feb 21 2021' },
      { id: 3, status: 'checked', date: 'Mon Feb 22 2021' },
      { id: 4, status: 'checked', date: 'Tue Feb 23 2021' },
      { id: 5, status: 'checked', date: 'Wed Feb 24 2021' },
      { id: 6, status: 'checked', date: 'Thu Feb 25 2021' },
      { id: 7, status: 'checked', date: 'Fri Feb 26 2021' },
      { id: 8, status: 'notYet', date: 'Sat Feb 27 2021' },
      { id: 9, status: 'notYet', date: 'Sun Feb 28 2021' },
      { id: 10, status: 'notYet', date: 'Mon Mar 01 2021' },
      { id: 11, status: 'notYet', date: 'Tue Mar 02 2021' },
      { id: 12, status: 'notYet', date: 'Wed Mar 03 2021' },
      { id: 13, status: 'notYet', date: 'Thu Mar 04 2021' },
      { id: 14, status: 'notYet', date: 'Fri Mar 05 2021' },
    ],
  },
  {
    id: 2,
    title: 'sport',
    duration: 7,
    StartDate: 'Sun Feb 28 2021',
    completed: true,
    track: [
      { id: 1, status: 'checked', date: 'Sat Feb 20 2021' },
      { id: 2, status: 'unchecked', date: 'Sun Feb 21 2021' },
      { id: 3, status: 'checked', date: 'Mon Feb 22 2021' },
      { id: 4, status: 'checked', date: 'Tue Feb 23 2021' },
      { id: 5, status: 'checked', date: 'Wed Feb 24 2021' },
      { id: 6, status: 'checked', date: 'Thu Feb 25 2021' },
      { id: 7, status: 'unchecked', date: 'Fri Feb 26 2021' },
    ],
  },
];

export const collection = [
  {
    date: 'Sun Feb 28 2021',
    type: { id: 5 },
    text: 'today was a great day, we had so mush fun, yeaaaa',
    img: '',
    starred: true,
  },
  {
    date: 'Sun Feb 28 2021',
    type: { id: 5 },
    text: 'I just waant to die XD',
    img: '',
    starred: false,
  },
];

export const interest = [
  {
    id: 1,
    title: 'Anime',
    deadline: 'Sun Feb 28 2021',
    goal: 10,
    completedItems: 3,
    completed: false,
    items: [
      { id: 1, title: 'Attack on titan', completed: true },
      { id: 2, title: 'jujutsu kaisen', completed: true },
      { id: 3, title: 'Horimiya', completed: true },
      { id: 4, title: 'beastars', completed: false },
    ],
  },
];
