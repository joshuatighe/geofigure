import { Button } from "@/components/ui/button";

type CategoryButtonProps = {
  emoji: string;
  label: string;
};

const CategoryButton = ({ emoji, label }: CategoryButtonProps) => {
  return (
    <Button variant="outline" className="justify-start w-full">
      <div className="flex items-center gap-x-2">
        <span className="text-xl">{emoji}</span>
        {label}
      </div>
    </Button>
  );
};

export { CategoryButton };
