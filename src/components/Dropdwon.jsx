import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export function Dropdwon() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt={user?.name}
              src={user?.image}
            />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 text-gray-700 font-semibold">{user?.name}</p>
                <p className="text-xs leading-none text-muted">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item id="dashboard" textValue="Dashboard">
              <Link href="/deshboard" className="w-full text-gray-800">
                Dashboard
              </Link>
            </Dropdown.Item>

            <Dropdown.Item id="logout" textValue="Logout" variant="danger">
              <div className="flex w-full items-center justify-between gap-2">
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
}

export default Dropdwon;
