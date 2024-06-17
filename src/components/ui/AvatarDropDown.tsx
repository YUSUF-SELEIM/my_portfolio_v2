'use client';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


interface userData {
    picture: string;
    given_name: string;
    email: string;
}
function AvatarDropDown({ userData }: { userData: userData }) {
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform hover:scale-110"
                    color="secondary"
                    size="sm"
                    src={userData?.picture}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={['disable']}>
                <DropdownItem key="profile" className="gap-2 h-14">
                    <span className="font-semibold">Signed in as {userData?.given_name}</span>
                    <p className="font-semibold"></p>
                </DropdownItem>
                {userData?.email === "yusufabdelfattah207@gmail.com" ? (
                    <DropdownItem key="blog" color="success">
                        <Link href="/Blog/Editor" >Create a Blog</Link>
                    </DropdownItem>
                ) : (
                    <DropdownItem key="disable">
                        Create a Blog (Yusuf Only)
                    </DropdownItem>

                )}
                <DropdownItem key="logout" color="danger" >
                    <LogoutLink>Log out</LogoutLink>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default AvatarDropDown