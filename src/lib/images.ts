// Curated, theme-appropriate imagery (Unsplash). Swap with PHD's own photos later.
const U = 'https://images.unsplash.com/photo-';
const q = '?auto=format&fit=crop&q=80';

export const IMG = {
  // smiling South-Asian children making peace signs
  childrenPeace: `${U}1488521787991-ed7bbaae773c${q}&w=1600`,
  // South-Asian children, urban community
  childrenCommunity: `${U}1497486751825-1233686d5d80${q}&w=1200`,
  // children in a classroom
  classroom: `${U}1532629345422-7515f3d16bb6${q}&w=1200`,
  // health worker at clinical monitors
  healthWorker: `${U}1599045118108-bf9954418b76${q}&w=1600`,
  // volunteers distributing relief supplies
  relief: `${U}1593113646773-028c64a8f1b8${q}&w=1200`,
  // hands forming a red heart
  heartHands: `${U}1469571486292-0ba58a3f068b${q}&w=1600`,
  // volunteer in the field
  volunteer: `${U}1559027615-cd4628902d4a${q}&w=1200`,
  // coordination / management meeting
  meeting: `${U}1517048676732-d65bc937f952${q}&w=1200`,
  // hands holding coins — "make a change"
  giving: `${U}1542810634-71277d95dcbb${q}&w=1200`,
};

export type ImageKey = keyof typeof IMG;
