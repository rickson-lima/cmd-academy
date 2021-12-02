import NotificationIcon from "../../assets/notification.svg";
import InstructorIcon from "../../assets/instructor.svg";
import CertificateIcon from "../../assets/certificate.svg";
import CalendarIcon from "../../assets/calendar.svg";
import GroupIcon from "../../assets/connections.svg";
import HomeIcon from "../../assets/home.svg";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: HomeIcon,
  },
  {
    title: "Agenda",
    path: "/calendar",
    icon: CalendarIcon,
  },
  {
    title: "Alunos",
    path: "/students",
    icon: GroupIcon,
  },
  {
    title: "Certificados",
    path: "/certificates",
    icon: CertificateIcon,
  },
  {
    title: "Instrutores",
    path: "/instructors",
    icon: InstructorIcon,
  },
  {
    title: "Notificações",
    path: "/notifications",
    icon: NotificationIcon,
  },
];
