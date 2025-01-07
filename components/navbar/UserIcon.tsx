import { LucideUser2 } from "lucide-react";
import { currentUser, auth } from "@clerk/nextjs/server";

async function UserIcon() {
  const user = await currentUser();
  console.log(user);

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }
  return <LucideUser2 className="w-6 h-6 bg-primary rounded-full" />;
}
export default UserIcon;
