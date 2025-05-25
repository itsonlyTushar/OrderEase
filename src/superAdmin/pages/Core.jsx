import SimpleDrawer from "../components/SimpleDrawer";
import Input from "../../vendor/components/UI/Input";
import { useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";
import Authentication from "../../vendor/components/Settings/Authentication";

function Core() {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="flex">
      <SimpleDrawer />

      <div className="flex-1 p-6">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-6xl font-semibold text-blackBg mb-6">
          Auth + Settings
        </h1>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <section className="p-2 w-full pt-5 mt-10 rounded-[3rem] bg-[#ffff]">
            <Authentication />
          </section>

          <section className="p-2 w-full pt-5 mt-10 rounded-[3rem] bg-[#ffff]">
            <h1 className="text-5xl p-2">Admin Info</h1>
            <div className="flex flex-col m-5 p-5 items-center gap-2">
              <MdAdminPanelSettings className="text-7xl text-blackBg" />
              <Input disabled labelText={"Admin Email"} value={user.email} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Core;
