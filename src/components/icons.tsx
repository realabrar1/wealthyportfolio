import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  Circle,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  EyeOff,
  FileText,
  GaugeCircle,
  Group,
  Home,
  HelpCircle,
  Loader,
  Loader2,
  MoreVertical,
  PanelLeftOpen,
  Plus,
  PlusCircle,
  ScrollText,
  Search,
  StretchHorizontal,
  TableProperties,
  Goal,
  Trash,
  Ungroup,
  Upload,
  PieChart,
  BarChart,
  RefreshCcw,
  Users,
  ListCollapse,
  Wallet,
  WalletCards,
  HandCoins,
  X,
  XCircle,
  type LucideIcon,
  LucideProps,
  Pencil,
  Info,
  Globe2,
  CircleGauge,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  AlertCircle: AlertCircle,
  AlertTriangle: AlertTriangle,
  Calendar: CalendarDays,
  Check: Check,
  CheckCircle: CheckCircle2,
  HandCoins: HandCoins,
  Home: Home,
  HelpCircle: HelpCircle,
  ArrowRight: ArrowRight,
  ArrowLeft: ArrowLeft,
  ArrowDown: ArrowDown,
  ArrowUp: ArrowUp,
  Billing: CreditCard,
  Search: Search,
  Group: Group,
  Ungroup: Ungroup,
  Globe: Globe2,
  Close: X,
  Eye: Eye,
  Info: Info,
  EyeOff: EyeOff,
  Refresh: RefreshCcw,
  PanelLeftOpen: PanelLeftOpen,
  Download: Download,
  Activity2: Activity,
  DollarSign: DollarSign,
  Users: Users,
  ChevronUp: ChevronUp,
  ChevronDown: ChevronDown,
  ChevronsUpDown: ChevronsUpDown,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronsLeft: ChevronsLeft,
  ChevronsRight: ChevronsRight,
  Circle: Circle,
  Plus: Plus,
  Pencil: Pencil,
  PlusCircle: PlusCircle,
  PieChart: PieChart,
  BarChart: BarChart,
  Spinner: Loader2,
  Loader: Loader,
  MoreVertical: MoreVertical,
  Goal: Goal,
  Trash: Trash,
  Wallet: Wallet,
  WalletCards: WalletCards,
  StretchHorizontal: StretchHorizontal,
  Menu: TableProperties,
  Import: Upload,
  FileText: FileText,
  XCircle: XCircle,
  ScrollText: ScrollText,
  GaugeCircle,
  ListCollapse: ListCollapse,
  CircleGauge: CircleGauge,

  Dashboard: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,56V208H32V48H216A8,8,0,0,1,224,56Z" opacity="0.2"></path>
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
    </svg>
  ),

  Goals: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"></path>
      <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path>
    </svg>
  ),

  Database: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z"
        opacity="0.2"
      ></path>
      <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
    </svg>
  ),

  FileCsv: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
      <path opacity="0.2" d="M19 7H15V3L19 7Z" fill="black" />
    </svg>
  ),

  FileJson: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
      <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
      <path opacity="0.2" d="M19 7H15V3L19 7Z" fill="black" />
    </svg>
  ),

  Files: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M208,72V184a8,8,0,0,1-8,8H176V104L136,64H80V40a8,8,0,0,1,8-8h80Z"
        opacity="0.2"
      ></path>
      <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path>
    </svg>
  ),

  Holdings: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M224,88V200a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V64A16,16,0,0,0,56,80H216A8,8,0,0,1,224,88Z"
        opacity="0.2"
      ></path>
      <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
    </svg>
  ),

  Activity: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"></path>
      <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
    </svg>
  ),

  Settings: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
        opacity="0.2"
      ></path>
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
    </svg>
  ),

  Income: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M240,132c0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44h0C146.76,156.85,176,142,176,124V96.72h0C212.52,100.06,240,114.58,240,132ZM176,84c0-19.88-35.82-36-80-36S16,64.12,16,84s35.82,36,80,36S176,103.88,176,84Z"
        opacity="0.2"
      ></path>
      <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
    </svg>
  ),

  Logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      fill="none"
      viewBox="0 0 65 65"
      {...props}
    >
      <path
        fill="orange"
        d="M37 5c0 2.21-2.015 4-4.5 4S28 7.21 28 5s2.015-4 4.5-4S37 2.79 37 5zM56 13c0 2.21-2.015 4-4.5 4S47 15.21 47 13s2.015-4 4.5-4 4.5 1.79 4.5 4zM64 32.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM56 51.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM37 59.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18 52a5 5 0 11-10 0 5 5 0 0110 0zM10 32.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM17 13a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
      <path
        fill="#FECC81"
        d="M48 32.5C48 41.06 41.06 48 32.5 48 23.94 48 17 41.06 17 32.5 17 23.94 23.94 17 32.5 17 41.06 17 48 23.94 48 32.5z"
      ></path>
      <path
        fill="#111"
        d="M37.566 5.134C37.566 2.303 35.252 0 32.407 0c-2.844 0-5.158 2.303-5.158 5.134 0 2.83 2.314 5.134 5.158 5.134 2.845 0 5.159-2.303 5.159-5.134zm-8.696 0c0-1.938 1.587-3.514 3.537-3.514 1.951 0 3.538 1.576 3.538 3.514 0 1.937-1.587 3.513-3.538 3.513-1.95 0-3.537-1.576-3.537-3.513zM13.147 7.976h-.015a5.138 5.138 0 00-3.64 1.516 5.138 5.138 0 00-1.516 3.64 5.087 5.087 0 001.499 3.637 5.086 5.086 0 003.623 1.499h.014a5.134 5.134 0 003.64-1.516 5.134 5.134 0 001.516-3.64 5.086 5.086 0 00-1.499-3.637 5.086 5.086 0 00-3.622-1.499zm2.46 7.63a3.525 3.525 0 01-2.5 1.042 3.448 3.448 0 01-2.486-1.024 3.479 3.479 0 01-1.025-2.487 3.529 3.529 0 011.042-2.5 3.529 3.529 0 012.499-1.04h.01c.937 0 1.816.363 2.477 1.024a3.478 3.478 0 011.024 2.487 3.525 3.525 0 01-1.042 2.498zM0 32.407c0 2.845 2.303 5.159 5.134 5.159 2.83 0 5.134-2.314 5.134-5.159 0-2.844-2.303-5.158-5.134-5.158C2.303 27.25 0 29.563 0 32.407zm8.647 0c0 1.951-1.576 3.538-3.513 3.538-1.938 0-3.514-1.587-3.514-3.538 0-1.95 1.576-3.537 3.514-3.537 1.937 0 3.513 1.587 3.513 3.537zM13.132 56.839h.015c1.37 0 2.656-.532 3.622-1.5a5.086 5.086 0 001.499-3.636 5.134 5.134 0 00-1.516-3.64 5.134 5.134 0 00-3.64-1.516c-1.34.013-2.667.528-3.637 1.498a5.087 5.087 0 00-1.499 3.638 5.138 5.138 0 001.516 3.64 5.138 5.138 0 003.64 1.516zM10.62 49.19a3.478 3.478 0 012.476-1.024h.01c.943.003 1.83.372 2.5 1.041a3.525 3.525 0 011.04 2.5c.003.94-.36 1.823-1.023 2.486a3.48 3.48 0 01-2.478 1.024h-.01a3.53 3.53 0 01-2.498-1.04 3.529 3.529 0 01-1.042-2.5 3.478 3.478 0 011.025-2.487zM27.25 59.681c0 2.831 2.313 5.134 5.157 5.134 2.845 0 5.159-2.303 5.159-5.134 0-2.83-2.314-5.134-5.159-5.134-2.844 0-5.158 2.303-5.158 5.134zm8.695 0c0 1.937-1.587 3.513-3.538 3.513-1.95 0-3.537-1.576-3.537-3.513 0-1.938 1.587-3.514 3.537-3.514 1.951 0 3.538 1.576 3.538 3.514zM48.063 48.063a5.134 5.134 0 00-1.516 3.64 5.086 5.086 0 001.498 3.637 5.086 5.086 0 003.623 1.499h.015a5.138 5.138 0 003.64-1.516 5.137 5.137 0 001.516-3.64 5.087 5.087 0 00-1.5-3.638 5.024 5.024 0 00-3.636-1.498 5.134 5.134 0 00-3.64 1.516zm3.654.104c.937 0 1.816.363 2.477 1.024a3.478 3.478 0 011.024 2.487 3.53 3.53 0 01-1.04 2.5 3.53 3.53 0 01-2.5 1.04h-.01a3.479 3.479 0 01-2.477-1.024 3.478 3.478 0 01-1.024-2.487 3.525 3.525 0 011.041-2.498 3.524 3.524 0 012.5-1.042h.01zM59.681 27.25c-2.83 0-5.134 2.313-5.134 5.157 0 2.845 2.303 5.159 5.134 5.159 2.831 0 5.134-2.314 5.134-5.159 0-2.844-2.303-5.158-5.134-5.158zm0 8.695c-1.938 0-3.514-1.587-3.514-3.538 0-1.95 1.576-3.537 3.514-3.537 1.937 0 3.513 1.587 3.513 3.537 0 1.951-1.576 3.538-3.513 3.538zM51.683 7.976h-.015c-1.37 0-2.656.532-3.623 1.499a5.086 5.086 0 00-1.498 3.637 5.134 5.134 0 001.516 3.64 5.134 5.134 0 003.64 1.516h.014c1.37 0 2.656-.532 3.623-1.499a5.087 5.087 0 001.499-3.637 5.138 5.138 0 00-1.516-3.64 5.138 5.138 0 00-3.64-1.516zm2.511 7.648a3.479 3.479 0 01-2.477 1.024h-.01a3.525 3.525 0 01-2.498-1.042 3.525 3.525 0 01-1.042-2.498 3.478 3.478 0 011.024-2.487 3.479 3.479 0 012.477-1.025h.01c.943.003 1.83.373 2.5 1.042a3.53 3.53 0 011.04 2.499 3.478 3.478 0 01-1.024 2.487zM45.28 9.28a.81.81 0 10.79-1.415 27.954 27.954 0 00-5.64-2.378.811.811 0 00-.461 1.553 26.35 26.35 0 015.311 2.24zM19.503 9.19c.13 0 .263-.03.385-.097a26.391 26.391 0 015.34-2.171.81.81 0 10-.442-1.559 27.985 27.985 0 00-5.67 2.305.81.81 0 00.387 1.523zM5.588 24.283a.81.81 0 001.553.462 26.35 26.35 0 012.24-5.312.81.81 0 10-1.414-.79 27.95 27.95 0 00-2.38 5.64zM9.194 44.825a26.391 26.391 0 01-2.17-5.34.81.81 0 10-1.56.443 27.989 27.989 0 002.306 5.669.81.81 0 101.425-.772zM19.535 55.332a.81.81 0 10-.79 1.415 27.954 27.954 0 005.639 2.379.807.807 0 001.008-.546.81.81 0 00-.546-1.007 26.35 26.35 0 01-5.311-2.241zM44.926 55.52a26.395 26.395 0 01-5.34 2.17.81.81 0 10.443 1.56 27.98 27.98 0 005.669-2.306.81.81 0 00-.772-1.425zM55.746 46.281a.81.81 0 001.102-.313 27.95 27.95 0 002.379-5.638.81.81 0 10-1.553-.462 26.348 26.348 0 01-2.24 5.31.81.81 0 00.312 1.103zM55.62 19.787a26.395 26.395 0 012.172 5.34.81.81 0 101.558-.442 27.985 27.985 0 00-2.305-5.67.81.81 0 00-1.425.771zM32.407 48.611c8.935 0 16.204-7.269 16.204-16.204 0-8.934-7.269-16.203-16.204-16.203-8.934 0-16.203 7.269-16.203 16.203 0 8.935 7.269 16.204 16.203 16.204zm0-30.787c8.042 0 14.584 6.542 14.584 14.583 0 8.042-6.542 14.584-14.584 14.584-8.04 0-14.583-6.542-14.583-14.584 0-8.04 6.542-14.583 14.583-14.583z"
      ></path>
    </svg>
  ),
};