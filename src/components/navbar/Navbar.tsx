import React from "react";
import Wrapper from "../common/Wrapper";
import StyledButton from "../common/StyledButton";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
// import { SidebarTrigger } from "../ui/sidebar";
import InviteDoctorsModal from "../modals/InviteDoctorsModal";

const Navbar: React.FC = () => {
  return (
    <nav className="h-20 w-full flex items-center">
      <Wrapper className="flex items-center justify-between">
        <section className="flex items-center">
          {/* <SidebarTrigger/> */}
          <div className="flex items-center">
            <StyledButton className="-right-2">Doctors</StyledButton>
            <div className="h-5 w-4 bg-zinc-50"></div>
            <StyledButton className={`-left-2`} active={true}>
              Patients
            </StyledButton>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <div className="border-[3px] rounded-full bg-background border-zinc-50 w-[18rem] relative flex items-center justify-between">
            <input className="bg-transparent pl-5 pr-2 w-full outline-none flex-1" />
            <Button
              className="rounded-full m-[2px] w-[2.2rem] h-[2.2rem] bg-zinc-50"
              size="icon"
            >
              <Search className="h-4 w-4 text-black" />
            </Button>
          </div>
          <ul>
            <li></li>
          </ul>
          <InviteDoctorsModal />
        </section>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
