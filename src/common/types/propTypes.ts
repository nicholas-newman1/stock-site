export interface NavItem {
  text: string;
  link: string;
  onClick: () => void;
}

export interface TableProps {
  data: any[][];
  horizontal?: boolean;
}
