import { useDispatch, useSelector } from "react-redux";
import MyDialog from "../../components/UI/Dialog";
import { useState, useEffect } from "react";
import {
  addMenuItems,
  deleteMenuID,
  setMenuItems,
  updateMenuItem,
} from "../../../store/slices/menuSlice";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../auth/firebase";
import { categories } from "../../../constants/categories";
import VendorTable from "../../components/Table/VendorTable";
import Loader from "../../components/UI/Loader";
import NotFound from "../../components/UI/NotFound";

function Menu() {
  const [menuItem, setMenuItem] = useState("");
  const [category, setCategory] = useState("");
  const [jain, setJain] = useState(false);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(true);
  const [spicy, setSpicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [open, setOpen] = useState(false);

  const menuList = useSelector((state) => state.menu.items);


  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const generateID = () => {
    const numericIds = menuList
      .map((item) => parseInt(item.menuId?.replace("#", "")))
      .filter((num) => !isNaN(num));

    const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0;

    return `#${maxId + 1}`;
  };

  useEffect(() => {
    if (user?.uid) {
      fetchMenuItems();
    }
  }, [user]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const menuRef = collection(db, "vendors", user.uid, "menuItems");
      const snapshot = await getDocs(menuRef);


      const fetchedMenuItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(setMenuItems(fetchedMenuItems));

      setLoading(false);
    } catch (err) {
      console.error("Error fetching menu items:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleEditMenu = (item) => {
    setEditItem(item);
    setMenuItem(item.name);
    setCategory(item.category);
    setJain(item.isJain);
    setStock(item.isAvailable);
    setSpicy(item.isSpicy);
    setPrice(item.price);
  };

  const handleAddNewItem = async (e) => {
    e.preventDefault();


    const form = e.target.closest("form");
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!menuItem.trim()) {
      setError("Menu item name is required");
      return;
    }

    if (!category) {
      setError("Category is required");
      return;
    }

    if (!price || price <= 0) {
      setError("Valid price is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const isEditing = !!editItem;
      const newId = generateID();

      const itemData = {
        menuId: isEditing ? editItem.menuId : newId,
        category,
        isJain: jain,
        isAvailable: stock,
        name: menuItem,
        price: Number(price),
        isSpicy: spicy,
        updatedAt: new Date().toISOString(),
      };

      const menuItemsCollectionRef = collection(
        db,
        "vendors",
        user.uid,
        "menuItems"
      );

      if (isEditing) {
        const itemDocRef = doc(menuItemsCollectionRef, editItem.id);
        await setDoc(itemDocRef, itemData, { merge: true });
        dispatch(updateMenuItem({ ...itemData, id: editItem.id }));
      } else {
        const itemDocRef = doc(menuItemsCollectionRef);
        await setDoc(itemDocRef, {
          ...itemData,
          id: itemDocRef.id,
          createdAt: new Date().toISOString(),
        });

        dispatch(addMenuItems({ ...itemData, id: itemDocRef.id }));
      }

      resetForm();
      setOpen(false);
    } catch (err) {
      console.error("Error saving menu item:", err);
      setError(`Error saving menu item: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMenuItem("");
    setCategory("");
    setJain(false);
    setStock(true);
    setSpicy(true);
    setPrice(0);
    setEditItem(null);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);

      // Delete from Firestore
      const menuItemRef = doc(db, "vendors", user.uid, "menuItems", id);
      await deleteDoc(menuItemRef);

      // Delete from Redux store
      dispatch(deleteMenuID(id));
    } catch (err) {
      console.error("Error deleting menu item:", err);
      setError(`Error deleting menu item: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    {
      label: "Menu ID",
      id: "menuId",
      type: "text",
      disabled: true,
      placeholder: generateID(),
      required: false,
    },
    {
      label: "Category",
      id: "categories",
      type: "select",
      options: categories.map((c) => ({ value: c.name, label: c.name })),
      onChange: (e) => setCategory(e.target.value),
      value: category,
      required: true,
    },
    {
      label: "Item Name",
      id: "itemName",
      type: "text",
      value: menuItem,
      onChange: (e) => setMenuItem(e.target.value),
      required: true,
    },
    {
      label: "Jain ?",
      id: "jain",
      type: "select",
      value: jain,
      onChange: (e) => setJain(JSON.parse(e.target.value)),
      options: [
        { value: true, label: "Jain" },
        { value: false, label: "Normal" },
      ],
      required: false,
    },
    {
      label: "Price",
      id: "price",
      type: "number",
      value: price,
      onChange: (e) => setPrice(e.target.value),
      required: true,
    },
    {
      label: "Availability",
      id: "availability",
      type: "select",
      value: stock,
      onChange: (e) => setStock(JSON.parse(e.target.value)),
      options: [
        { value: true, label: "In Stock" },
        { value: false, label: "Out of Stock" },
      ],
      required: false,
    },
    {
      label: "Spicy",
      id: "isSpicy",
      type: "select",
      value: spicy,
      onChange: (e) => setSpicy(JSON.parse(e.target.value)),
      options: [
        { value: false, label: "No" },
        { value: true, label: "Yes" },
      ],
      required: false,
    },
  ];

  return (
    <div className="h-screen flex text-gray-800">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 mt-10">
          <h2 className="text-4xl sm:text-6xl font-semibold">Menu</h2>
          <MyDialog
            isOpen={open}
            setIsOpen={setOpen}
            dialogFunction={handleAddNewItem}
            dialogTitle={"Add New"}
            dialogContent={
              <>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formFields.map((field) => (
                    <div key={field.id} className="flex items-center gap-4">
                      <label htmlFor={field.id} className="w-24">
                        {field.label}
                      </label>

                      {field.type === "select" ? (
                        <select
                          required
                          id={field.id}
                          name={field.id}
                          className="bg-mainBg rounded-lg p-2 outline-none w-full"
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((opt, i) => (
                            <option key={i} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          className="bg-mainBg p-2 rounded-lg outline-none w-full"
                          value={field.value}
                          onChange={field.onChange}
                          placeholder={field.placeholder}
                          disabled={field.disabled}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
              </>
            }
          />
        </header>
        <div className="bg-whiteBg p-6 rounded-[3rem]">
          {loading && <Loader />}

          {menuList.length > 0 ? (
            <VendorTable
              mapFunction={menuList}
              deleteFunc={handleDelete}
              editFunc={(item) => {
                handleEditMenu(item);
                setOpen(true);
              }}
            />
          ) : (
            <NotFound text={"No Menu Items Added"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
