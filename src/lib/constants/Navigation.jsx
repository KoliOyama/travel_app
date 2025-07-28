// navLinks.js or wherever your constants are

import HomeIcon from "../../assets/icons/House.svg";
import TripIcon from "../../assets/icons/ListChecks.svg";
import DashboardIcon from "../../assets/icons/ChartPieSlice.svg";
import WalletIcon from "../../assets/icons/Wallet.svg";
import CommissionIcon from "../../assets/icons/HandCoins.svg";
import NotificationIcon from "../../assets/icons/Bell.svg";
import CartIcon from "../../assets/icons/Basket.svg";
import CreateIcon from "../../assets/icons/PlusSquare.svg";
import ActivitiesIcon from "../../assets/icons/RoadHorizon.svg";
import HotelsIcon from "../../assets/icons/Buildings.svg";
import FlightsIcon from "../../assets/icons/AirplaneTilt.svg";
import StudyIcon from "../../assets/icons/Student.svg";
import VisaIcon from "../../assets/icons/NewspaperClipping.svg";
import ImmigrationIcon from "../../assets/icons/SuitcaseRolling.svg";
import MedicalIcon from "../../assets/icons/FirstAidKit.svg";
import VacationPackagesIcon from "../../assets/icons/Package.svg";

export const navLinks1 = [
  { key: "home", path: "/", icon: HomeIcon, label: "Home" },
  {
    key: "dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
    label: "Dashboard",
  },
  { key: "wallet", path: "/wallet", icon: WalletIcon, label: "Wallet" },
  { key: "trip", path: "/trip", icon: TripIcon, label: "Plan a trip" },
  {
    key: "commission",
    path: "/commission",
    icon: CommissionIcon,
    label: "Commission for life",
  },
];

export const navLinks2 = [
  {
    key: "notification",
    path: "/notification",
    icon: NotificationIcon,
    label: "Notifications",
  },
  { key: "carts", path: "/carts", icon: CartIcon, label: "Carts" },
  { key: "create", path: "/create", icon: CreateIcon, label: "Create" },
];

export const sidebarLinks = [
  {
    key: "activities",
    path: "/activities",
    icon: ActivitiesIcon,
    label: "Activities",
  },
  { key: "hotels", path: "/hotels", icon: HotelsIcon, label: "Hotels" },
  { key: "flights", path: "/flights", icon: FlightsIcon, label: "Flights" },
  { key: "study", path: "/study", icon: StudyIcon, label: "Study" },
  { key: "visa", path: "/visa", icon: VisaIcon, label: "Visa" },
  {
    key: "immigration",
    path: "/immigration",
    icon: ImmigrationIcon,
    label: "Immigration",
  },
  { key: "medical", path: "/medical", icon: MedicalIcon, label: "Medical" },
  {
    key: "vacation-packages",
    path: "/vacation-packages",
    icon: VacationPackagesIcon,
    label: "Vacation Packages",
  },
];

export const personalAccountLink = {
  key: "personal-account",
  path: "/personal-account",
  label: "Go Personal Account",
};
