import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <>
      <Navbar fluid rounded className=" shadow-lg">
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="https://flowbite-react.com/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            React CRUD
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                img="https://flowbite-react.com/images/people/profile-picture-5.jpg"
                rounded
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div>mElshimi</div>
                </div>
              </Avatar>
            }
          >
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>

          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
          <NavbarToggle />
        </div>
        <Navbar.Collapse className="ms-auto pe-5">
          <Navbar.Link as={Link} to={"/"}>
            Home
          </Navbar.Link>

          <Navbar.Link as={Link} to={"/post/add"}>
            Add Post
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
