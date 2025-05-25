import Tables  from  "../../components/Settings/Tables"
import Authentication  from  "../../components/Settings/Authentication"
import Personal from "../../components/PersonalDetails/Personal";
import ExportOrders from "../../components/Settings/ExportOrders";
import VendorNotification from "../../components/Notifications/VendorNotification";

function Settings() {
  return (
    <div className="min-h-screen p-4 sm:p-6 mt-10">
      
      <div className="flex justify-between items-center">
        <h1 className="text-4xl sm:text-6xl font-semibold mb-5 mt-10">Settings</h1>
        <VendorNotification />

      </div>


      <div className="bg-blackBg text-white rounded-2xl p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          Account Information
        </h3>
        <p className="text-sm sm:text-base">
          Manage your vendor account, personal information, and authentication
          preferences. Keep your business profile updated for smooth access and
          communication.
        </p>
      </div>


     {/* personal details holder  */}
  
      <Personal />

      {/* table printing section and auth  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Tables />
        <Authentication />
      </div>

      <section className="bg-whiteBg rounded-[3rem] mt-10 p-5 w-full">
        {/* export order section  */}
        <ExportOrders />
      </section>
    </div>
  );
}

export default Settings;
