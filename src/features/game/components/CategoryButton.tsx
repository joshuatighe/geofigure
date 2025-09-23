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
      className="justify-start w-full"
      onClick={() => onClick(id)}
    >
      <div className="flex items-center gap-x-2">
        <span className="text-xl">{emoji}</span>
        {label}
      </div>
    </Button>
  );
};

export { CategoryButton };
