import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <strong>John Doe</strong>
        <p>johndow@email.com</p>
      </div>
    </div>
  );
}
