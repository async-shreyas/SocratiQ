import { Badge } from "@/components/ui/badge";

export function ProblemStatusBadge({ status }) {
  const statusConfig = {
    "not-started": {
      label: "Not Started",
      variant: "outline",
      className: "bg-gray-50 border-gray-200 text-gray-500",
    },
    "in-progress": {
      label: "In Progress",
      variant: "outline",
      className: "bg-blue-50 border-blue-200 text-blue-700",
    },
    "completed": {
      label: "Completed",
      variant: "outline",
      className: "bg-green-50 border-green-200 text-green-700",
    },
  };

  const config = statusConfig[status] || statusConfig["not-started"];

  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  );
}