import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CategoryButtonProps = {
  emoji: string;
  label: string;
  id: number;
  isSelected: boolean;
  onClick: (id: number) => void;
};

const CategoryButton = ({
  emoji,
  label,
  id,
  isSelected,
  onClick,
}: CategoryButtonProps) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className="flex justify-between w-full"
      onClick={() => onClick(id)}
    >
      <div className="flex items-center gap-x-2">
        <span className="text-xl">{emoji}</span>
        {label}
      </div>
      <Badge className="rounded-sm text-white" variant="default">
        1
      </Badge>
    </Button>
  );
};

export { CategoryButton };
