import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import * as Switch from "@radix-ui/react-switch";
import * as Accordion from "@radix-ui/react-accordion";
import { FiChevronDown } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/firebase";
import Cart from "../components/Cart";
import secondLogo from '../../assets/imgs/secondaryLog.png'

function UserPage() {
  const { vendorId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openAccordionItems, setOpenAccordionItems] = useState([]); 

  const [isOn, setIsOn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const querySelect = new URLSearchParams(location.search);
  const tableName = querySelect.get("table");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuRef = collection(db, "vendors", vendorId, "menuItems");
        const snapshot = await getDocs(menuRef);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
  
      } catch (err) {
        console.error('erros', err.message)
      }
    };

    if (vendorId) fetchMenu();
  }, [vendorId]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const quantity = prev[itemId];
      if (quantity <= 1) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return {
        ...prev,
        [itemId]: quantity - 1,
      };
    });
  };

  const getTotalCartCount = () =>
    Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className="bg-[#ffff] p-4 text-blackBg">
        <main>
          <header className="flex justify-between items-center text-xl">
            <img className="max-w-sm h-14" src={secondLogo} alt="secondLogo" />
            <h1 className="font-bold">Table {tableName}</h1>
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <LuShoppingCart />
              {getTotalCartCount() > 0 && (
                <span className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getTotalCartCount()}
                </span>
              )}
            </button>
          </header>
        </main>
      </div>

      {/* Search & Jain Filter */}
      <section className="mt-5 flex justify-center items-center">
        <div className="relative w-full m-2">
          <input
            type="search"
            placeholder="Search..."
            className="bg-blackBg text-white rounded-xl p-3 pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-lg" />
        </div>

        {/* Jain mode switch */}
        <div className="m-2">
          <div className="text-[8px] font-extrabold text-blackBg">
            <span>Jain Mode</span>
          </div>
          <Switch.Root
            className="w-11 h-6 bg-green-300 rounded-full relative data-[state=checked]:bg-blackBg transition-colors"
            checked={isOn}
            onCheckedChange={setIsOn}
          >
            <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
          </Switch.Root>
        </div>
      </section>

      {/* Menu with Accordion */}
      <section className="p-4 border-b border-grayText bg-[#ffff] border-dashed mt-5">
        <Accordion.Root 
          type="multiple" 
          className="w-full mt-5"
          value={openAccordionItems}
          onValueChange={setOpenAccordionItems}
        >
          {Object.entries(
            menuItems
              .filter(
                (item) =>
                  (isOn ? item.isJain : true) &&
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .reduce((acc, item) => {
                const cat = item.category;
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(item);
                return acc;
              }, {})
          ).map(([category, items]) => (
            <Accordion.Item value={category} key={category} className="mb-4">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex justify-between items-center text-2xl font-semibold py-3">
                  <h1>{category}</h1>
                  <FiChevronDown 
                    className={`transition-transform duration-300 ${
                      openAccordionItems.includes(category) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="mt-4">
                {items.map((item) => {
                  const quantity = cartItems[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="text-md flex justify-between items-center mb-4"
                    >
                      <div>
                        <h2>{item.name}</h2>
                        <span className="flex items-center text-sm">
                          <LiaRupeeSignSolid />
                          {item.price}
                        </span>
                        <p className="px-1 bg-red-100 rounded-md text-xs font-semibold mt-2">
                          {!item.isAvailable && "Out of Stock"}
                        </p>
                      </div>
                      <div className="ml-5 p-2">
                        {quantity === 0 ? (
                          <button
                            disabled={!item.isAvailable}
                            onClick={() => addToCart(item.id)}
                            className="border px-4 py-1 bg-red-100 rounded-xl border-red-100"
                          >
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 border px-3 py-1 bg-red-100 rounded-xl border-red-100">
                            <button onClick={() => removeFromCart(item.id)}>
                              -
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => addToCart(item.id)}>
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Cart
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          menuItems={menuItems}
          onAdd={addToCart}
          onRemove={removeFromCart}
          vendorId={vendorId}
          tableNo={tableName}
        />
      </section>
    </>
  );
}

export default UserPage;